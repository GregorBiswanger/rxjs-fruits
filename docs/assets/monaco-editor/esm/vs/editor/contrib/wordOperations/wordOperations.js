/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { EditorCommand, registerEditorCommand } from '../../browser/editorExtensions.js';
import { ReplaceCommand } from '../../common/commands/replaceCommand.js';
import { CursorState } from '../../common/controller/cursorCommon.js';
import { WordOperations } from '../../common/controller/cursorWordOperations.js';
import { getMapForWordSeparators } from '../../common/controller/wordCharacterClassifier.js';
import { Position } from '../../common/core/position.js';
import { Range } from '../../common/core/range.js';
import { Selection } from '../../common/core/selection.js';
import { EditorContextKeys } from '../../common/editorContextKeys.js';
import { CONTEXT_ACCESSIBILITY_MODE_ENABLED } from '../../../platform/accessibility/common/accessibility.js';
import { ContextKeyExpr } from '../../../platform/contextkey/common/contextkey.js';
import { EditorOptions } from '../../common/config/editorOptions.js';
var MoveWordCommand = /** @class */ (function (_super) {
    __extends(MoveWordCommand, _super);
    function MoveWordCommand(opts) {
        var _this = _super.call(this, opts) || this;
        _this._inSelectionMode = opts.inSelectionMode;
        _this._wordNavigationType = opts.wordNavigationType;
        return _this;
    }
    MoveWordCommand.prototype.runEditorCommand = function (accessor, editor, args) {
        var _this = this;
        if (!editor.hasModel()) {
            return;
        }
        var wordSeparators = getMapForWordSeparators(editor.getOption(96 /* wordSeparators */));
        var model = editor.getModel();
        var selections = editor.getSelections();
        var result = selections.map(function (sel) {
            var inPosition = new Position(sel.positionLineNumber, sel.positionColumn);
            var outPosition = _this._move(wordSeparators, model, inPosition, _this._wordNavigationType);
            return _this._moveTo(sel, outPosition, _this._inSelectionMode);
        });
        editor._getCursors().setStates('moveWordCommand', 0 /* NotSet */, result.map(function (r) { return CursorState.fromModelSelection(r); }));
        if (result.length === 1) {
            var pos = new Position(result[0].positionLineNumber, result[0].positionColumn);
            editor.revealPosition(pos, 0 /* Smooth */);
        }
    };
    MoveWordCommand.prototype._moveTo = function (from, to, inSelectionMode) {
        if (inSelectionMode) {
            // move just position
            return new Selection(from.selectionStartLineNumber, from.selectionStartColumn, to.lineNumber, to.column);
        }
        else {
            // move everything
            return new Selection(to.lineNumber, to.column, to.lineNumber, to.column);
        }
    };
    return MoveWordCommand;
}(EditorCommand));
export { MoveWordCommand };
var WordLeftCommand = /** @class */ (function (_super) {
    __extends(WordLeftCommand, _super);
    function WordLeftCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WordLeftCommand.prototype._move = function (wordSeparators, model, position, wordNavigationType) {
        return WordOperations.moveWordLeft(wordSeparators, model, position, wordNavigationType);
    };
    return WordLeftCommand;
}(MoveWordCommand));
export { WordLeftCommand };
var WordRightCommand = /** @class */ (function (_super) {
    __extends(WordRightCommand, _super);
    function WordRightCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WordRightCommand.prototype._move = function (wordSeparators, model, position, wordNavigationType) {
        return WordOperations.moveWordRight(wordSeparators, model, position, wordNavigationType);
    };
    return WordRightCommand;
}(MoveWordCommand));
export { WordRightCommand };
var CursorWordStartLeft = /** @class */ (function (_super) {
    __extends(CursorWordStartLeft, _super);
    function CursorWordStartLeft() {
        return _super.call(this, {
            inSelectionMode: false,
            wordNavigationType: 0 /* WordStart */,
            id: 'cursorWordStartLeft',
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 2048 /* CtrlCmd */ | 15 /* LeftArrow */,
                mac: { primary: 512 /* Alt */ | 15 /* LeftArrow */ },
                weight: 100 /* EditorContrib */
            }
        }) || this;
    }
    return CursorWordStartLeft;
}(WordLeftCommand));
export { CursorWordStartLeft };
var CursorWordEndLeft = /** @class */ (function (_super) {
    __extends(CursorWordEndLeft, _super);
    function CursorWordEndLeft() {
        return _super.call(this, {
            inSelectionMode: false,
            wordNavigationType: 2 /* WordEnd */,
            id: 'cursorWordEndLeft',
            precondition: undefined
        }) || this;
    }
    return CursorWordEndLeft;
}(WordLeftCommand));
export { CursorWordEndLeft };
var CursorWordLeft = /** @class */ (function (_super) {
    __extends(CursorWordLeft, _super);
    function CursorWordLeft() {
        return _super.call(this, {
            inSelectionMode: false,
            wordNavigationType: 1 /* WordStartFast */,
            id: 'cursorWordLeft',
            precondition: undefined
        }) || this;
    }
    return CursorWordLeft;
}(WordLeftCommand));
export { CursorWordLeft };
var CursorWordStartLeftSelect = /** @class */ (function (_super) {
    __extends(CursorWordStartLeftSelect, _super);
    function CursorWordStartLeftSelect() {
        return _super.call(this, {
            inSelectionMode: true,
            wordNavigationType: 0 /* WordStart */,
            id: 'cursorWordStartLeftSelect',
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 2048 /* CtrlCmd */ | 1024 /* Shift */ | 15 /* LeftArrow */,
                mac: { primary: 512 /* Alt */ | 1024 /* Shift */ | 15 /* LeftArrow */ },
                weight: 100 /* EditorContrib */
            }
        }) || this;
    }
    return CursorWordStartLeftSelect;
}(WordLeftCommand));
export { CursorWordStartLeftSelect };
var CursorWordEndLeftSelect = /** @class */ (function (_super) {
    __extends(CursorWordEndLeftSelect, _super);
    function CursorWordEndLeftSelect() {
        return _super.call(this, {
            inSelectionMode: true,
            wordNavigationType: 2 /* WordEnd */,
            id: 'cursorWordEndLeftSelect',
            precondition: undefined
        }) || this;
    }
    return CursorWordEndLeftSelect;
}(WordLeftCommand));
export { CursorWordEndLeftSelect };
var CursorWordLeftSelect = /** @class */ (function (_super) {
    __extends(CursorWordLeftSelect, _super);
    function CursorWordLeftSelect() {
        return _super.call(this, {
            inSelectionMode: true,
            wordNavigationType: 1 /* WordStartFast */,
            id: 'cursorWordLeftSelect',
            precondition: undefined
        }) || this;
    }
    return CursorWordLeftSelect;
}(WordLeftCommand));
export { CursorWordLeftSelect };
// Accessibility navigation commands should only be enabled on windows since they are tuned to what NVDA expects
var CursorWordAccessibilityLeft = /** @class */ (function (_super) {
    __extends(CursorWordAccessibilityLeft, _super);
    function CursorWordAccessibilityLeft() {
        return _super.call(this, {
            inSelectionMode: false,
            wordNavigationType: 3 /* WordAccessibility */,
            id: 'cursorWordAccessibilityLeft',
            precondition: undefined,
            kbOpts: {
                kbExpr: ContextKeyExpr.and(EditorContextKeys.textInputFocus, CONTEXT_ACCESSIBILITY_MODE_ENABLED),
                win: { primary: 2048 /* CtrlCmd */ | 15 /* LeftArrow */ },
                weight: 100 /* EditorContrib */ + 1
            }
        }) || this;
    }
    CursorWordAccessibilityLeft.prototype._move = function (_, model, position, wordNavigationType) {
        return _super.prototype._move.call(this, getMapForWordSeparators(EditorOptions.wordSeparators.defaultValue), model, position, wordNavigationType);
    };
    return CursorWordAccessibilityLeft;
}(WordLeftCommand));
export { CursorWordAccessibilityLeft };
var CursorWordAccessibilityLeftSelect = /** @class */ (function (_super) {
    __extends(CursorWordAccessibilityLeftSelect, _super);
    function CursorWordAccessibilityLeftSelect() {
        return _super.call(this, {
            inSelectionMode: true,
            wordNavigationType: 3 /* WordAccessibility */,
            id: 'cursorWordAccessibilityLeftSelect',
            precondition: undefined,
            kbOpts: {
                kbExpr: ContextKeyExpr.and(EditorContextKeys.textInputFocus, CONTEXT_ACCESSIBILITY_MODE_ENABLED),
                win: { primary: 2048 /* CtrlCmd */ | 1024 /* Shift */ | 15 /* LeftArrow */ },
                weight: 100 /* EditorContrib */ + 1
            }
        }) || this;
    }
    CursorWordAccessibilityLeftSelect.prototype._move = function (_, model, position, wordNavigationType) {
        return _super.prototype._move.call(this, getMapForWordSeparators(EditorOptions.wordSeparators.defaultValue), model, position, wordNavigationType);
    };
    return CursorWordAccessibilityLeftSelect;
}(WordLeftCommand));
export { CursorWordAccessibilityLeftSelect };
var CursorWordStartRight = /** @class */ (function (_super) {
    __extends(CursorWordStartRight, _super);
    function CursorWordStartRight() {
        return _super.call(this, {
            inSelectionMode: false,
            wordNavigationType: 0 /* WordStart */,
            id: 'cursorWordStartRight',
            precondition: undefined
        }) || this;
    }
    return CursorWordStartRight;
}(WordRightCommand));
export { CursorWordStartRight };
var CursorWordEndRight = /** @class */ (function (_super) {
    __extends(CursorWordEndRight, _super);
    function CursorWordEndRight() {
        return _super.call(this, {
            inSelectionMode: false,
            wordNavigationType: 2 /* WordEnd */,
            id: 'cursorWordEndRight',
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 2048 /* CtrlCmd */ | 17 /* RightArrow */,
                mac: { primary: 512 /* Alt */ | 17 /* RightArrow */ },
                weight: 100 /* EditorContrib */
            }
        }) || this;
    }
    return CursorWordEndRight;
}(WordRightCommand));
export { CursorWordEndRight };
var CursorWordRight = /** @class */ (function (_super) {
    __extends(CursorWordRight, _super);
    function CursorWordRight() {
        return _super.call(this, {
            inSelectionMode: false,
            wordNavigationType: 2 /* WordEnd */,
            id: 'cursorWordRight',
            precondition: undefined
        }) || this;
    }
    return CursorWordRight;
}(WordRightCommand));
export { CursorWordRight };
var CursorWordStartRightSelect = /** @class */ (function (_super) {
    __extends(CursorWordStartRightSelect, _super);
    function CursorWordStartRightSelect() {
        return _super.call(this, {
            inSelectionMode: true,
            wordNavigationType: 0 /* WordStart */,
            id: 'cursorWordStartRightSelect',
            precondition: undefined
        }) || this;
    }
    return CursorWordStartRightSelect;
}(WordRightCommand));
export { CursorWordStartRightSelect };
var CursorWordEndRightSelect = /** @class */ (function (_super) {
    __extends(CursorWordEndRightSelect, _super);
    function CursorWordEndRightSelect() {
        return _super.call(this, {
            inSelectionMode: true,
            wordNavigationType: 2 /* WordEnd */,
            id: 'cursorWordEndRightSelect',
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 2048 /* CtrlCmd */ | 1024 /* Shift */ | 17 /* RightArrow */,
                mac: { primary: 512 /* Alt */ | 1024 /* Shift */ | 17 /* RightArrow */ },
                weight: 100 /* EditorContrib */
            }
        }) || this;
    }
    return CursorWordEndRightSelect;
}(WordRightCommand));
export { CursorWordEndRightSelect };
var CursorWordRightSelect = /** @class */ (function (_super) {
    __extends(CursorWordRightSelect, _super);
    function CursorWordRightSelect() {
        return _super.call(this, {
            inSelectionMode: true,
            wordNavigationType: 2 /* WordEnd */,
            id: 'cursorWordRightSelect',
            precondition: undefined
        }) || this;
    }
    return CursorWordRightSelect;
}(WordRightCommand));
export { CursorWordRightSelect };
var CursorWordAccessibilityRight = /** @class */ (function (_super) {
    __extends(CursorWordAccessibilityRight, _super);
    function CursorWordAccessibilityRight() {
        return _super.call(this, {
            inSelectionMode: false,
            wordNavigationType: 3 /* WordAccessibility */,
            id: 'cursorWordAccessibilityRight',
            precondition: undefined,
            kbOpts: {
                kbExpr: ContextKeyExpr.and(EditorContextKeys.textInputFocus, CONTEXT_ACCESSIBILITY_MODE_ENABLED),
                win: { primary: 2048 /* CtrlCmd */ | 17 /* RightArrow */ },
                weight: 100 /* EditorContrib */ + 1
            }
        }) || this;
    }
    CursorWordAccessibilityRight.prototype._move = function (_, model, position, wordNavigationType) {
        return _super.prototype._move.call(this, getMapForWordSeparators(EditorOptions.wordSeparators.defaultValue), model, position, wordNavigationType);
    };
    return CursorWordAccessibilityRight;
}(WordRightCommand));
export { CursorWordAccessibilityRight };
var CursorWordAccessibilityRightSelect = /** @class */ (function (_super) {
    __extends(CursorWordAccessibilityRightSelect, _super);
    function CursorWordAccessibilityRightSelect() {
        return _super.call(this, {
            inSelectionMode: true,
            wordNavigationType: 3 /* WordAccessibility */,
            id: 'cursorWordAccessibilityRightSelect',
            precondition: undefined,
            kbOpts: {
                kbExpr: ContextKeyExpr.and(EditorContextKeys.textInputFocus, CONTEXT_ACCESSIBILITY_MODE_ENABLED),
                win: { primary: 2048 /* CtrlCmd */ | 1024 /* Shift */ | 17 /* RightArrow */ },
                weight: 100 /* EditorContrib */ + 1
            }
        }) || this;
    }
    CursorWordAccessibilityRightSelect.prototype._move = function (_, model, position, wordNavigationType) {
        return _super.prototype._move.call(this, getMapForWordSeparators(EditorOptions.wordSeparators.defaultValue), model, position, wordNavigationType);
    };
    return CursorWordAccessibilityRightSelect;
}(WordRightCommand));
export { CursorWordAccessibilityRightSelect };
var DeleteWordCommand = /** @class */ (function (_super) {
    __extends(DeleteWordCommand, _super);
    function DeleteWordCommand(opts) {
        var _this = _super.call(this, opts) || this;
        _this._whitespaceHeuristics = opts.whitespaceHeuristics;
        _this._wordNavigationType = opts.wordNavigationType;
        return _this;
    }
    DeleteWordCommand.prototype.runEditorCommand = function (accessor, editor, args) {
        var _this = this;
        if (!editor.hasModel()) {
            return;
        }
        var wordSeparators = getMapForWordSeparators(editor.getOption(96 /* wordSeparators */));
        var model = editor.getModel();
        var selections = editor.getSelections();
        var commands = selections.map(function (sel) {
            var deleteRange = _this._delete(wordSeparators, model, sel, _this._whitespaceHeuristics, _this._wordNavigationType);
            return new ReplaceCommand(deleteRange, '');
        });
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    };
    return DeleteWordCommand;
}(EditorCommand));
export { DeleteWordCommand };
var DeleteWordLeftCommand = /** @class */ (function (_super) {
    __extends(DeleteWordLeftCommand, _super);
    function DeleteWordLeftCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeleteWordLeftCommand.prototype._delete = function (wordSeparators, model, selection, whitespaceHeuristics, wordNavigationType) {
        var r = WordOperations.deleteWordLeft(wordSeparators, model, selection, whitespaceHeuristics, wordNavigationType);
        if (r) {
            return r;
        }
        return new Range(1, 1, 1, 1);
    };
    return DeleteWordLeftCommand;
}(DeleteWordCommand));
export { DeleteWordLeftCommand };
var DeleteWordRightCommand = /** @class */ (function (_super) {
    __extends(DeleteWordRightCommand, _super);
    function DeleteWordRightCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeleteWordRightCommand.prototype._delete = function (wordSeparators, model, selection, whitespaceHeuristics, wordNavigationType) {
        var r = WordOperations.deleteWordRight(wordSeparators, model, selection, whitespaceHeuristics, wordNavigationType);
        if (r) {
            return r;
        }
        var lineCount = model.getLineCount();
        var maxColumn = model.getLineMaxColumn(lineCount);
        return new Range(lineCount, maxColumn, lineCount, maxColumn);
    };
    return DeleteWordRightCommand;
}(DeleteWordCommand));
export { DeleteWordRightCommand };
var DeleteWordStartLeft = /** @class */ (function (_super) {
    __extends(DeleteWordStartLeft, _super);
    function DeleteWordStartLeft() {
        return _super.call(this, {
            whitespaceHeuristics: false,
            wordNavigationType: 0 /* WordStart */,
            id: 'deleteWordStartLeft',
            precondition: EditorContextKeys.writable
        }) || this;
    }
    return DeleteWordStartLeft;
}(DeleteWordLeftCommand));
export { DeleteWordStartLeft };
var DeleteWordEndLeft = /** @class */ (function (_super) {
    __extends(DeleteWordEndLeft, _super);
    function DeleteWordEndLeft() {
        return _super.call(this, {
            whitespaceHeuristics: false,
            wordNavigationType: 2 /* WordEnd */,
            id: 'deleteWordEndLeft',
            precondition: EditorContextKeys.writable
        }) || this;
    }
    return DeleteWordEndLeft;
}(DeleteWordLeftCommand));
export { DeleteWordEndLeft };
var DeleteWordLeft = /** @class */ (function (_super) {
    __extends(DeleteWordLeft, _super);
    function DeleteWordLeft() {
        return _super.call(this, {
            whitespaceHeuristics: true,
            wordNavigationType: 0 /* WordStart */,
            id: 'deleteWordLeft',
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 2048 /* CtrlCmd */ | 1 /* Backspace */,
                mac: { primary: 512 /* Alt */ | 1 /* Backspace */ },
                weight: 100 /* EditorContrib */
            }
        }) || this;
    }
    return DeleteWordLeft;
}(DeleteWordLeftCommand));
export { DeleteWordLeft };
var DeleteWordStartRight = /** @class */ (function (_super) {
    __extends(DeleteWordStartRight, _super);
    function DeleteWordStartRight() {
        return _super.call(this, {
            whitespaceHeuristics: false,
            wordNavigationType: 0 /* WordStart */,
            id: 'deleteWordStartRight',
            precondition: EditorContextKeys.writable
        }) || this;
    }
    return DeleteWordStartRight;
}(DeleteWordRightCommand));
export { DeleteWordStartRight };
var DeleteWordEndRight = /** @class */ (function (_super) {
    __extends(DeleteWordEndRight, _super);
    function DeleteWordEndRight() {
        return _super.call(this, {
            whitespaceHeuristics: false,
            wordNavigationType: 2 /* WordEnd */,
            id: 'deleteWordEndRight',
            precondition: EditorContextKeys.writable
        }) || this;
    }
    return DeleteWordEndRight;
}(DeleteWordRightCommand));
export { DeleteWordEndRight };
var DeleteWordRight = /** @class */ (function (_super) {
    __extends(DeleteWordRight, _super);
    function DeleteWordRight() {
        return _super.call(this, {
            whitespaceHeuristics: true,
            wordNavigationType: 2 /* WordEnd */,
            id: 'deleteWordRight',
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 2048 /* CtrlCmd */ | 20 /* Delete */,
                mac: { primary: 512 /* Alt */ | 20 /* Delete */ },
                weight: 100 /* EditorContrib */
            }
        }) || this;
    }
    return DeleteWordRight;
}(DeleteWordRightCommand));
export { DeleteWordRight };
registerEditorCommand(new CursorWordStartLeft());
registerEditorCommand(new CursorWordEndLeft());
registerEditorCommand(new CursorWordLeft());
registerEditorCommand(new CursorWordStartLeftSelect());
registerEditorCommand(new CursorWordEndLeftSelect());
registerEditorCommand(new CursorWordLeftSelect());
registerEditorCommand(new CursorWordStartRight());
registerEditorCommand(new CursorWordEndRight());
registerEditorCommand(new CursorWordRight());
registerEditorCommand(new CursorWordStartRightSelect());
registerEditorCommand(new CursorWordEndRightSelect());
registerEditorCommand(new CursorWordRightSelect());
registerEditorCommand(new CursorWordAccessibilityLeft());
registerEditorCommand(new CursorWordAccessibilityLeftSelect());
registerEditorCommand(new CursorWordAccessibilityRight());
registerEditorCommand(new CursorWordAccessibilityRightSelect());
registerEditorCommand(new DeleteWordStartLeft());
registerEditorCommand(new DeleteWordEndLeft());
registerEditorCommand(new DeleteWordLeft());
registerEditorCommand(new DeleteWordStartRight());
registerEditorCommand(new DeleteWordEndRight());
registerEditorCommand(new DeleteWordRight());
