/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { onUnexpectedError } from '../../../base/common/errors.js';
import * as strings from '../../../base/common/strings.js';
import { Position } from '../core/position.js';
import { Range } from '../core/range.js';
import { Selection } from '../core/selection.js';
import { TextModel } from '../model/textModel.js';
import { LanguageConfigurationRegistry } from '../modes/languageConfigurationRegistry.js';
var autoCloseAlways = function () { return true; };
var autoCloseNever = function () { return false; };
var autoCloseBeforeWhitespace = function (chr) { return (chr === ' ' || chr === '\t'); };
function appendEntry(target, key, value) {
    if (target.has(key)) {
        target.get(key).push(value);
    }
    else {
        target.set(key, [value]);
    }
}
var CursorConfiguration = /** @class */ (function () {
    function CursorConfiguration(languageIdentifier, modelOptions, configuration) {
        this._languageIdentifier = languageIdentifier;
        var options = configuration.options;
        var layoutInfo = options.get(107 /* layoutInfo */);
        this.readOnly = options.get(68 /* readOnly */);
        this.tabSize = modelOptions.tabSize;
        this.indentSize = modelOptions.indentSize;
        this.insertSpaces = modelOptions.insertSpaces;
        this.lineHeight = options.get(49 /* lineHeight */);
        this.pageSize = Math.max(1, Math.floor(layoutInfo.height / this.lineHeight) - 2);
        this.useTabStops = options.get(95 /* useTabStops */);
        this.wordSeparators = options.get(96 /* wordSeparators */);
        this.emptySelectionClipboard = options.get(25 /* emptySelectionClipboard */);
        this.copyWithSyntaxHighlighting = options.get(15 /* copyWithSyntaxHighlighting */);
        this.multiCursorMergeOverlapping = options.get(58 /* multiCursorMergeOverlapping */);
        this.multiCursorPaste = options.get(60 /* multiCursorPaste */);
        this.autoClosingBrackets = options.get(5 /* autoClosingBrackets */);
        this.autoClosingQuotes = options.get(7 /* autoClosingQuotes */);
        this.autoClosingOvertype = options.get(6 /* autoClosingOvertype */);
        this.autoSurround = options.get(10 /* autoSurround */);
        this.autoIndent = options.get(8 /* autoIndent */);
        this.autoClosingPairsOpen2 = new Map();
        this.autoClosingPairsClose2 = new Map();
        this.surroundingPairs = {};
        this._electricChars = null;
        this.shouldAutoCloseBefore = {
            quote: CursorConfiguration._getShouldAutoClose(languageIdentifier, this.autoClosingQuotes),
            bracket: CursorConfiguration._getShouldAutoClose(languageIdentifier, this.autoClosingBrackets)
        };
        var autoClosingPairs = CursorConfiguration._getAutoClosingPairs(languageIdentifier);
        if (autoClosingPairs) {
            for (var _i = 0, autoClosingPairs_1 = autoClosingPairs; _i < autoClosingPairs_1.length; _i++) {
                var pair = autoClosingPairs_1[_i];
                appendEntry(this.autoClosingPairsOpen2, pair.open.charAt(pair.open.length - 1), pair);
                if (pair.close.length === 1) {
                    appendEntry(this.autoClosingPairsClose2, pair.close, pair);
                }
            }
        }
        var surroundingPairs = CursorConfiguration._getSurroundingPairs(languageIdentifier);
        if (surroundingPairs) {
            for (var _a = 0, surroundingPairs_1 = surroundingPairs; _a < surroundingPairs_1.length; _a++) {
                var pair = surroundingPairs_1[_a];
                this.surroundingPairs[pair.open] = pair.close;
            }
        }
    }
    CursorConfiguration.shouldRecreate = function (e) {
        return (e.hasChanged(107 /* layoutInfo */)
            || e.hasChanged(96 /* wordSeparators */)
            || e.hasChanged(25 /* emptySelectionClipboard */)
            || e.hasChanged(58 /* multiCursorMergeOverlapping */)
            || e.hasChanged(60 /* multiCursorPaste */)
            || e.hasChanged(5 /* autoClosingBrackets */)
            || e.hasChanged(7 /* autoClosingQuotes */)
            || e.hasChanged(6 /* autoClosingOvertype */)
            || e.hasChanged(10 /* autoSurround */)
            || e.hasChanged(95 /* useTabStops */)
            || e.hasChanged(49 /* lineHeight */)
            || e.hasChanged(68 /* readOnly */));
    };
    Object.defineProperty(CursorConfiguration.prototype, "electricChars", {
        get: function () {
            if (!this._electricChars) {
                this._electricChars = {};
                var electricChars = CursorConfiguration._getElectricCharacters(this._languageIdentifier);
                if (electricChars) {
                    for (var _i = 0, electricChars_1 = electricChars; _i < electricChars_1.length; _i++) {
                        var char = electricChars_1[_i];
                        this._electricChars[char] = true;
                    }
                }
            }
            return this._electricChars;
        },
        enumerable: true,
        configurable: true
    });
    CursorConfiguration.prototype.normalizeIndentation = function (str) {
        return TextModel.normalizeIndentation(str, this.indentSize, this.insertSpaces);
    };
    CursorConfiguration._getElectricCharacters = function (languageIdentifier) {
        try {
            return LanguageConfigurationRegistry.getElectricCharacters(languageIdentifier.id);
        }
        catch (e) {
            onUnexpectedError(e);
            return null;
        }
    };
    CursorConfiguration._getAutoClosingPairs = function (languageIdentifier) {
        try {
            return LanguageConfigurationRegistry.getAutoClosingPairs(languageIdentifier.id);
        }
        catch (e) {
            onUnexpectedError(e);
            return null;
        }
    };
    CursorConfiguration._getShouldAutoClose = function (languageIdentifier, autoCloseConfig) {
        switch (autoCloseConfig) {
            case 'beforeWhitespace':
                return autoCloseBeforeWhitespace;
            case 'languageDefined':
                return CursorConfiguration._getLanguageDefinedShouldAutoClose(languageIdentifier);
            case 'always':
                return autoCloseAlways;
            case 'never':
                return autoCloseNever;
        }
    };
    CursorConfiguration._getLanguageDefinedShouldAutoClose = function (languageIdentifier) {
        try {
            var autoCloseBeforeSet_1 = LanguageConfigurationRegistry.getAutoCloseBeforeSet(languageIdentifier.id);
            return function (c) { return autoCloseBeforeSet_1.indexOf(c) !== -1; };
        }
        catch (e) {
            onUnexpectedError(e);
            return autoCloseNever;
        }
    };
    CursorConfiguration._getSurroundingPairs = function (languageIdentifier) {
        try {
            return LanguageConfigurationRegistry.getSurroundingPairs(languageIdentifier.id);
        }
        catch (e) {
            onUnexpectedError(e);
            return null;
        }
    };
    return CursorConfiguration;
}());
export { CursorConfiguration };
/**
 * Represents the cursor state on either the model or on the view model.
 */
var SingleCursorState = /** @class */ (function () {
    function SingleCursorState(selectionStart, selectionStartLeftoverVisibleColumns, position, leftoverVisibleColumns) {
        this.selectionStart = selectionStart;
        this.selectionStartLeftoverVisibleColumns = selectionStartLeftoverVisibleColumns;
        this.position = position;
        this.leftoverVisibleColumns = leftoverVisibleColumns;
        this.selection = SingleCursorState._computeSelection(this.selectionStart, this.position);
    }
    SingleCursorState.prototype.equals = function (other) {
        return (this.selectionStartLeftoverVisibleColumns === other.selectionStartLeftoverVisibleColumns
            && this.leftoverVisibleColumns === other.leftoverVisibleColumns
            && this.position.equals(other.position)
            && this.selectionStart.equalsRange(other.selectionStart));
    };
    SingleCursorState.prototype.hasSelection = function () {
        return (!this.selection.isEmpty() || !this.selectionStart.isEmpty());
    };
    SingleCursorState.prototype.move = function (inSelectionMode, lineNumber, column, leftoverVisibleColumns) {
        if (inSelectionMode) {
            // move just position
            return new SingleCursorState(this.selectionStart, this.selectionStartLeftoverVisibleColumns, new Position(lineNumber, column), leftoverVisibleColumns);
        }
        else {
            // move everything
            return new SingleCursorState(new Range(lineNumber, column, lineNumber, column), leftoverVisibleColumns, new Position(lineNumber, column), leftoverVisibleColumns);
        }
    };
    SingleCursorState._computeSelection = function (selectionStart, position) {
        var startLineNumber, startColumn, endLineNumber, endColumn;
        if (selectionStart.isEmpty()) {
            startLineNumber = selectionStart.startLineNumber;
            startColumn = selectionStart.startColumn;
            endLineNumber = position.lineNumber;
            endColumn = position.column;
        }
        else {
            if (position.isBeforeOrEqual(selectionStart.getStartPosition())) {
                startLineNumber = selectionStart.endLineNumber;
                startColumn = selectionStart.endColumn;
                endLineNumber = position.lineNumber;
                endColumn = position.column;
            }
            else {
                startLineNumber = selectionStart.startLineNumber;
                startColumn = selectionStart.startColumn;
                endLineNumber = position.lineNumber;
                endColumn = position.column;
            }
        }
        return new Selection(startLineNumber, startColumn, endLineNumber, endColumn);
    };
    return SingleCursorState;
}());
export { SingleCursorState };
var CursorContext = /** @class */ (function () {
    function CursorContext(configuration, model, viewModel) {
        this.model = model;
        this.viewModel = viewModel;
        this.config = new CursorConfiguration(this.model.getLanguageIdentifier(), this.model.getOptions(), configuration);
    }
    CursorContext.prototype.validateViewPosition = function (viewPosition, modelPosition) {
        return this.viewModel.coordinatesConverter.validateViewPosition(viewPosition, modelPosition);
    };
    CursorContext.prototype.validateViewRange = function (viewRange, expectedModelRange) {
        return this.viewModel.coordinatesConverter.validateViewRange(viewRange, expectedModelRange);
    };
    CursorContext.prototype.convertViewRangeToModelRange = function (viewRange) {
        return this.viewModel.coordinatesConverter.convertViewRangeToModelRange(viewRange);
    };
    CursorContext.prototype.convertViewPositionToModelPosition = function (lineNumber, column) {
        return this.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new Position(lineNumber, column));
    };
    CursorContext.prototype.convertModelPositionToViewPosition = function (modelPosition) {
        return this.viewModel.coordinatesConverter.convertModelPositionToViewPosition(modelPosition);
    };
    CursorContext.prototype.convertModelRangeToViewRange = function (modelRange) {
        return this.viewModel.coordinatesConverter.convertModelRangeToViewRange(modelRange);
    };
    CursorContext.prototype.getCurrentScrollTop = function () {
        return this.viewModel.viewLayout.getCurrentScrollTop();
    };
    CursorContext.prototype.getCompletelyVisibleViewRange = function () {
        return this.viewModel.getCompletelyVisibleViewRange();
    };
    CursorContext.prototype.getCompletelyVisibleModelRange = function () {
        var viewRange = this.viewModel.getCompletelyVisibleViewRange();
        return this.viewModel.coordinatesConverter.convertViewRangeToModelRange(viewRange);
    };
    CursorContext.prototype.getCompletelyVisibleViewRangeAtScrollTop = function (scrollTop) {
        return this.viewModel.getCompletelyVisibleViewRangeAtScrollTop(scrollTop);
    };
    CursorContext.prototype.getVerticalOffsetForViewLine = function (viewLineNumber) {
        return this.viewModel.viewLayout.getVerticalOffsetForLineNumber(viewLineNumber);
    };
    return CursorContext;
}());
export { CursorContext };
var PartialModelCursorState = /** @class */ (function () {
    function PartialModelCursorState(modelState) {
        this.modelState = modelState;
        this.viewState = null;
    }
    return PartialModelCursorState;
}());
export { PartialModelCursorState };
var PartialViewCursorState = /** @class */ (function () {
    function PartialViewCursorState(viewState) {
        this.modelState = null;
        this.viewState = viewState;
    }
    return PartialViewCursorState;
}());
export { PartialViewCursorState };
var CursorState = /** @class */ (function () {
    function CursorState(modelState, viewState) {
        this.modelState = modelState;
        this.viewState = viewState;
    }
    CursorState.fromModelState = function (modelState) {
        return new PartialModelCursorState(modelState);
    };
    CursorState.fromViewState = function (viewState) {
        return new PartialViewCursorState(viewState);
    };
    CursorState.fromModelSelection = function (modelSelection) {
        var selectionStartLineNumber = modelSelection.selectionStartLineNumber;
        var selectionStartColumn = modelSelection.selectionStartColumn;
        var positionLineNumber = modelSelection.positionLineNumber;
        var positionColumn = modelSelection.positionColumn;
        var modelState = new SingleCursorState(new Range(selectionStartLineNumber, selectionStartColumn, selectionStartLineNumber, selectionStartColumn), 0, new Position(positionLineNumber, positionColumn), 0);
        return CursorState.fromModelState(modelState);
    };
    CursorState.fromModelSelections = function (modelSelections) {
        var states = [];
        for (var i = 0, len = modelSelections.length; i < len; i++) {
            states[i] = this.fromModelSelection(modelSelections[i]);
        }
        return states;
    };
    CursorState.prototype.equals = function (other) {
        return (this.viewState.equals(other.viewState) && this.modelState.equals(other.modelState));
    };
    return CursorState;
}());
export { CursorState };
var EditOperationResult = /** @class */ (function () {
    function EditOperationResult(type, commands, opts) {
        this.type = type;
        this.commands = commands;
        this.shouldPushStackElementBefore = opts.shouldPushStackElementBefore;
        this.shouldPushStackElementAfter = opts.shouldPushStackElementAfter;
    }
    return EditOperationResult;
}());
export { EditOperationResult };
/**
 * Common operations that work and make sense both on the model and on the view model.
 */
var CursorColumns = /** @class */ (function () {
    function CursorColumns() {
    }
    CursorColumns.visibleColumnFromColumn = function (lineContent, column, tabSize) {
        var lineContentLength = lineContent.length;
        var endOffset = column - 1 < lineContentLength ? column - 1 : lineContentLength;
        var result = 0;
        var i = 0;
        while (i < endOffset) {
            var codePoint = strings.getNextCodePoint(lineContent, endOffset, i);
            i += (codePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1);
            if (codePoint === 9 /* Tab */) {
                result = CursorColumns.nextRenderTabStop(result, tabSize);
            }
            else {
                var graphemeBreakType = strings.getGraphemeBreakType(codePoint);
                while (i < endOffset) {
                    var nextCodePoint = strings.getNextCodePoint(lineContent, endOffset, i);
                    var nextGraphemeBreakType = strings.getGraphemeBreakType(nextCodePoint);
                    if (strings.breakBetweenGraphemeBreakType(graphemeBreakType, nextGraphemeBreakType)) {
                        break;
                    }
                    i += (nextCodePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1);
                    graphemeBreakType = nextGraphemeBreakType;
                }
                if (strings.isFullWidthCharacter(codePoint) || strings.isEmojiImprecise(codePoint)) {
                    result = result + 2;
                }
                else {
                    result = result + 1;
                }
            }
        }
        return result;
    };
    CursorColumns.visibleColumnFromColumn2 = function (config, model, position) {
        return this.visibleColumnFromColumn(model.getLineContent(position.lineNumber), position.column, config.tabSize);
    };
    CursorColumns.columnFromVisibleColumn = function (lineContent, visibleColumn, tabSize) {
        if (visibleColumn <= 0) {
            return 1;
        }
        var lineLength = lineContent.length;
        var beforeVisibleColumn = 0;
        var beforeColumn = 1;
        var i = 0;
        while (i < lineLength) {
            var codePoint = strings.getNextCodePoint(lineContent, lineLength, i);
            i += (codePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1);
            var afterVisibleColumn = void 0;
            if (codePoint === 9 /* Tab */) {
                afterVisibleColumn = CursorColumns.nextRenderTabStop(beforeVisibleColumn, tabSize);
            }
            else {
                var graphemeBreakType = strings.getGraphemeBreakType(codePoint);
                while (i < lineLength) {
                    var nextCodePoint = strings.getNextCodePoint(lineContent, lineLength, i);
                    var nextGraphemeBreakType = strings.getGraphemeBreakType(nextCodePoint);
                    if (strings.breakBetweenGraphemeBreakType(graphemeBreakType, nextGraphemeBreakType)) {
                        break;
                    }
                    i += (nextCodePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1);
                    graphemeBreakType = nextGraphemeBreakType;
                }
                if (strings.isFullWidthCharacter(codePoint) || strings.isEmojiImprecise(codePoint)) {
                    afterVisibleColumn = beforeVisibleColumn + 2;
                }
                else {
                    afterVisibleColumn = beforeVisibleColumn + 1;
                }
            }
            var afterColumn = i + 1;
            if (afterVisibleColumn >= visibleColumn) {
                var beforeDelta = visibleColumn - beforeVisibleColumn;
                var afterDelta = afterVisibleColumn - visibleColumn;
                if (afterDelta < beforeDelta) {
                    return afterColumn;
                }
                else {
                    return beforeColumn;
                }
            }
            beforeVisibleColumn = afterVisibleColumn;
            beforeColumn = afterColumn;
        }
        // walked the entire string
        return lineLength + 1;
    };
    CursorColumns.columnFromVisibleColumn2 = function (config, model, lineNumber, visibleColumn) {
        var result = this.columnFromVisibleColumn(model.getLineContent(lineNumber), visibleColumn, config.tabSize);
        var minColumn = model.getLineMinColumn(lineNumber);
        if (result < minColumn) {
            return minColumn;
        }
        var maxColumn = model.getLineMaxColumn(lineNumber);
        if (result > maxColumn) {
            return maxColumn;
        }
        return result;
    };
    /**
     * ATTENTION: This works with 0-based columns (as oposed to the regular 1-based columns)
     */
    CursorColumns.nextRenderTabStop = function (visibleColumn, tabSize) {
        return visibleColumn + tabSize - visibleColumn % tabSize;
    };
    /**
     * ATTENTION: This works with 0-based columns (as oposed to the regular 1-based columns)
     */
    CursorColumns.nextIndentTabStop = function (visibleColumn, indentSize) {
        return visibleColumn + indentSize - visibleColumn % indentSize;
    };
    /**
     * ATTENTION: This works with 0-based columns (as oposed to the regular 1-based columns)
     */
    CursorColumns.prevRenderTabStop = function (column, tabSize) {
        return column - 1 - (column - 1) % tabSize;
    };
    /**
     * ATTENTION: This works with 0-based columns (as oposed to the regular 1-based columns)
     */
    CursorColumns.prevIndentTabStop = function (column, indentSize) {
        return column - 1 - (column - 1) % indentSize;
    };
    return CursorColumns;
}());
export { CursorColumns };
export function isQuote(ch) {
    return (ch === '\'' || ch === '"' || ch === '`');
}
