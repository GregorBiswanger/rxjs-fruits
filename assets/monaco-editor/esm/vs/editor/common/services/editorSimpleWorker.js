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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { mergeSort } from '../../../base/common/arrays.js';
import { stringDiff } from '../../../base/common/diff/diff.js';
import { FIN } from '../../../base/common/iterator.js';
import { globals } from '../../../base/common/platform.js';
import { URI } from '../../../base/common/uri.js';
import { Position } from '../core/position.js';
import { Range } from '../core/range.js';
import { DiffComputer } from '../diff/diffComputer.js';
import { MirrorTextModel as BaseMirrorModel } from '../model/mirrorTextModel.js';
import { ensureValidWordDefinition, getWordAtText } from '../model/wordHelper.js';
import { computeLinks } from '../modes/linkComputer.js';
import { BasicInplaceReplace } from '../modes/supports/inplaceReplaceSupport.js';
import { createMonacoBaseAPI } from '../standalone/standaloneBase.js';
import * as types from '../../../base/common/types.js';
/**
 * @internal
 */
var MirrorModel = /** @class */ (function (_super) {
    __extends(MirrorModel, _super);
    function MirrorModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MirrorModel.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MirrorModel.prototype, "version", {
        get: function () {
            return this._versionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MirrorModel.prototype, "eol", {
        get: function () {
            return this._eol;
        },
        enumerable: true,
        configurable: true
    });
    MirrorModel.prototype.getValue = function () {
        return this.getText();
    };
    MirrorModel.prototype.getLinesContent = function () {
        return this._lines.slice(0);
    };
    MirrorModel.prototype.getLineCount = function () {
        return this._lines.length;
    };
    MirrorModel.prototype.getLineContent = function (lineNumber) {
        return this._lines[lineNumber - 1];
    };
    MirrorModel.prototype.getWordAtPosition = function (position, wordDefinition) {
        var wordAtText = getWordAtText(position.column, ensureValidWordDefinition(wordDefinition), this._lines[position.lineNumber - 1], 0);
        if (wordAtText) {
            return new Range(position.lineNumber, wordAtText.startColumn, position.lineNumber, wordAtText.endColumn);
        }
        return null;
    };
    MirrorModel.prototype.createWordIterator = function (wordDefinition) {
        var _this = this;
        var obj;
        var lineNumber = 0;
        var lineText;
        var wordRangesIdx = 0;
        var wordRanges = [];
        var next = function () {
            if (wordRangesIdx < wordRanges.length) {
                var value = lineText.substring(wordRanges[wordRangesIdx].start, wordRanges[wordRangesIdx].end);
                wordRangesIdx += 1;
                if (!obj) {
                    obj = { done: false, value: value };
                }
                else {
                    obj.value = value;
                }
                return obj;
            }
            else if (lineNumber >= _this._lines.length) {
                return FIN;
            }
            else {
                lineText = _this._lines[lineNumber];
                wordRanges = _this._wordenize(lineText, wordDefinition);
                wordRangesIdx = 0;
                lineNumber += 1;
                return next();
            }
        };
        return { next: next };
    };
    MirrorModel.prototype.getLineWords = function (lineNumber, wordDefinition) {
        var content = this._lines[lineNumber - 1];
        var ranges = this._wordenize(content, wordDefinition);
        var words = [];
        for (var _i = 0, ranges_1 = ranges; _i < ranges_1.length; _i++) {
            var range = ranges_1[_i];
            words.push({
                word: content.substring(range.start, range.end),
                startColumn: range.start + 1,
                endColumn: range.end + 1
            });
        }
        return words;
    };
    MirrorModel.prototype._wordenize = function (content, wordDefinition) {
        var result = [];
        var match;
        wordDefinition.lastIndex = 0; // reset lastIndex just to be sure
        while (match = wordDefinition.exec(content)) {
            if (match[0].length === 0) {
                // it did match the empty string
                break;
            }
            result.push({ start: match.index, end: match.index + match[0].length });
        }
        return result;
    };
    MirrorModel.prototype.getValueInRange = function (range) {
        range = this._validateRange(range);
        if (range.startLineNumber === range.endLineNumber) {
            return this._lines[range.startLineNumber - 1].substring(range.startColumn - 1, range.endColumn - 1);
        }
        var lineEnding = this._eol;
        var startLineIndex = range.startLineNumber - 1;
        var endLineIndex = range.endLineNumber - 1;
        var resultLines = [];
        resultLines.push(this._lines[startLineIndex].substring(range.startColumn - 1));
        for (var i = startLineIndex + 1; i < endLineIndex; i++) {
            resultLines.push(this._lines[i]);
        }
        resultLines.push(this._lines[endLineIndex].substring(0, range.endColumn - 1));
        return resultLines.join(lineEnding);
    };
    MirrorModel.prototype.offsetAt = function (position) {
        position = this._validatePosition(position);
        this._ensureLineStarts();
        return this._lineStarts.getAccumulatedValue(position.lineNumber - 2) + (position.column - 1);
    };
    MirrorModel.prototype.positionAt = function (offset) {
        offset = Math.floor(offset);
        offset = Math.max(0, offset);
        this._ensureLineStarts();
        var out = this._lineStarts.getIndexOf(offset);
        var lineLength = this._lines[out.index].length;
        // Ensure we return a valid position
        return {
            lineNumber: 1 + out.index,
            column: 1 + Math.min(out.remainder, lineLength)
        };
    };
    MirrorModel.prototype._validateRange = function (range) {
        var start = this._validatePosition({ lineNumber: range.startLineNumber, column: range.startColumn });
        var end = this._validatePosition({ lineNumber: range.endLineNumber, column: range.endColumn });
        if (start.lineNumber !== range.startLineNumber
            || start.column !== range.startColumn
            || end.lineNumber !== range.endLineNumber
            || end.column !== range.endColumn) {
            return {
                startLineNumber: start.lineNumber,
                startColumn: start.column,
                endLineNumber: end.lineNumber,
                endColumn: end.column
            };
        }
        return range;
    };
    MirrorModel.prototype._validatePosition = function (position) {
        if (!Position.isIPosition(position)) {
            throw new Error('bad position');
        }
        var lineNumber = position.lineNumber, column = position.column;
        var hasChanged = false;
        if (lineNumber < 1) {
            lineNumber = 1;
            column = 1;
            hasChanged = true;
        }
        else if (lineNumber > this._lines.length) {
            lineNumber = this._lines.length;
            column = this._lines[lineNumber - 1].length + 1;
            hasChanged = true;
        }
        else {
            var maxCharacter = this._lines[lineNumber - 1].length + 1;
            if (column < 1) {
                column = 1;
                hasChanged = true;
            }
            else if (column > maxCharacter) {
                column = maxCharacter;
                hasChanged = true;
            }
        }
        if (!hasChanged) {
            return position;
        }
        else {
            return { lineNumber: lineNumber, column: column };
        }
    };
    return MirrorModel;
}(BaseMirrorModel));
/**
 * @internal
 */
var EditorSimpleWorker = /** @class */ (function () {
    function EditorSimpleWorker(host, foreignModuleFactory) {
        this._host = host;
        this._models = Object.create(null);
        this._foreignModuleFactory = foreignModuleFactory;
        this._foreignModule = null;
    }
    EditorSimpleWorker.prototype.dispose = function () {
        this._models = Object.create(null);
    };
    EditorSimpleWorker.prototype._getModel = function (uri) {
        return this._models[uri];
    };
    EditorSimpleWorker.prototype._getModels = function () {
        var _this = this;
        var all = [];
        Object.keys(this._models).forEach(function (key) { return all.push(_this._models[key]); });
        return all;
    };
    EditorSimpleWorker.prototype.acceptNewModel = function (data) {
        this._models[data.url] = new MirrorModel(URI.parse(data.url), data.lines, data.EOL, data.versionId);
    };
    EditorSimpleWorker.prototype.acceptModelChanged = function (strURL, e) {
        if (!this._models[strURL]) {
            return;
        }
        var model = this._models[strURL];
        model.onEvents(e);
    };
    EditorSimpleWorker.prototype.acceptRemovedModel = function (strURL) {
        if (!this._models[strURL]) {
            return;
        }
        delete this._models[strURL];
    };
    // ---- BEGIN diff --------------------------------------------------------------------------
    EditorSimpleWorker.prototype.computeDiff = function (originalUrl, modifiedUrl, ignoreTrimWhitespace, maxComputationTime) {
        return __awaiter(this, void 0, void 0, function () {
            var original, modified, originalLines, modifiedLines, diffComputer, diffResult, identical;
            return __generator(this, function (_a) {
                original = this._getModel(originalUrl);
                modified = this._getModel(modifiedUrl);
                if (!original || !modified) {
                    return [2 /*return*/, null];
                }
                originalLines = original.getLinesContent();
                modifiedLines = modified.getLinesContent();
                diffComputer = new DiffComputer(originalLines, modifiedLines, {
                    shouldComputeCharChanges: true,
                    shouldPostProcessCharChanges: true,
                    shouldIgnoreTrimWhitespace: ignoreTrimWhitespace,
                    shouldMakePrettyDiff: true,
                    maxComputationTime: maxComputationTime
                });
                diffResult = diffComputer.computeDiff();
                identical = (diffResult.changes.length > 0 ? false : this._modelsAreIdentical(original, modified));
                return [2 /*return*/, {
                        quitEarly: diffResult.quitEarly,
                        identical: identical,
                        changes: diffResult.changes
                    }];
            });
        });
    };
    EditorSimpleWorker.prototype._modelsAreIdentical = function (original, modified) {
        var originalLineCount = original.getLineCount();
        var modifiedLineCount = modified.getLineCount();
        if (originalLineCount !== modifiedLineCount) {
            return false;
        }
        for (var line = 1; line <= originalLineCount; line++) {
            var originalLine = original.getLineContent(line);
            var modifiedLine = modified.getLineContent(line);
            if (originalLine !== modifiedLine) {
                return false;
            }
        }
        return true;
    };
    EditorSimpleWorker.prototype.computeMoreMinimalEdits = function (modelUrl, edits) {
        return __awaiter(this, void 0, void 0, function () {
            var model, result, lastEol, _i, edits_1, _a, range, text, eol, original, changes, editOffset, _b, changes_1, change, start, end, newEdit;
            return __generator(this, function (_c) {
                model = this._getModel(modelUrl);
                if (!model) {
                    return [2 /*return*/, edits];
                }
                result = [];
                lastEol = undefined;
                edits = mergeSort(edits, function (a, b) {
                    if (a.range && b.range) {
                        return Range.compareRangesUsingStarts(a.range, b.range);
                    }
                    // eol only changes should go to the end
                    var aRng = a.range ? 0 : 1;
                    var bRng = b.range ? 0 : 1;
                    return aRng - bRng;
                });
                for (_i = 0, edits_1 = edits; _i < edits_1.length; _i++) {
                    _a = edits_1[_i], range = _a.range, text = _a.text, eol = _a.eol;
                    if (typeof eol === 'number') {
                        lastEol = eol;
                    }
                    if (Range.isEmpty(range) && !text) {
                        // empty change
                        continue;
                    }
                    original = model.getValueInRange(range);
                    text = text.replace(/\r\n|\n|\r/g, model.eol);
                    if (original === text) {
                        // noop
                        continue;
                    }
                    // make sure diff won't take too long
                    if (Math.max(text.length, original.length) > EditorSimpleWorker._diffLimit) {
                        result.push({ range: range, text: text });
                        continue;
                    }
                    changes = stringDiff(original, text, false);
                    editOffset = model.offsetAt(Range.lift(range).getStartPosition());
                    for (_b = 0, changes_1 = changes; _b < changes_1.length; _b++) {
                        change = changes_1[_b];
                        start = model.positionAt(editOffset + change.originalStart);
                        end = model.positionAt(editOffset + change.originalStart + change.originalLength);
                        newEdit = {
                            text: text.substr(change.modifiedStart, change.modifiedLength),
                            range: { startLineNumber: start.lineNumber, startColumn: start.column, endLineNumber: end.lineNumber, endColumn: end.column }
                        };
                        if (model.getValueInRange(newEdit.range) !== newEdit.text) {
                            result.push(newEdit);
                        }
                    }
                }
                if (typeof lastEol === 'number') {
                    result.push({ eol: lastEol, text: '', range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } });
                }
                return [2 /*return*/, result];
            });
        });
    };
    // ---- END minimal edits ---------------------------------------------------------------
    EditorSimpleWorker.prototype.computeLinks = function (modelUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                model = this._getModel(modelUrl);
                if (!model) {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/, computeLinks(model)];
            });
        });
    };
    EditorSimpleWorker.prototype.textualSuggest = function (modelUrl, position, wordDef, wordDefFlags) {
        return __awaiter(this, void 0, void 0, function () {
            var model, words, seen, wordDefRegExp, wordAt, iter, e, word;
            return __generator(this, function (_a) {
                model = this._getModel(modelUrl);
                if (!model) {
                    return [2 /*return*/, null];
                }
                words = [];
                seen = new Set();
                wordDefRegExp = new RegExp(wordDef, wordDefFlags);
                wordAt = model.getWordAtPosition(position, wordDefRegExp);
                if (wordAt) {
                    seen.add(model.getValueInRange(wordAt));
                }
                for (iter = model.createWordIterator(wordDefRegExp), e = iter.next(); !e.done && seen.size <= EditorSimpleWorker._suggestionsLimit; e = iter.next()) {
                    word = e.value;
                    if (seen.has(word)) {
                        continue;
                    }
                    seen.add(word);
                    if (!isNaN(Number(word))) {
                        continue;
                    }
                    words.push(word);
                }
                return [2 /*return*/, words];
            });
        });
    };
    // ---- END suggest --------------------------------------------------------------------------
    //#region -- word ranges --
    EditorSimpleWorker.prototype.computeWordRanges = function (modelUrl, range, wordDef, wordDefFlags) {
        return __awaiter(this, void 0, void 0, function () {
            var model, wordDefRegExp, result, line, words, _i, words_1, word, array;
            return __generator(this, function (_a) {
                model = this._getModel(modelUrl);
                if (!model) {
                    return [2 /*return*/, Object.create(null)];
                }
                wordDefRegExp = new RegExp(wordDef, wordDefFlags);
                result = Object.create(null);
                for (line = range.startLineNumber; line < range.endLineNumber; line++) {
                    words = model.getLineWords(line, wordDefRegExp);
                    for (_i = 0, words_1 = words; _i < words_1.length; _i++) {
                        word = words_1[_i];
                        if (!isNaN(Number(word.word))) {
                            continue;
                        }
                        array = result[word.word];
                        if (!array) {
                            array = [];
                            result[word.word] = array;
                        }
                        array.push({
                            startLineNumber: line,
                            startColumn: word.startColumn,
                            endLineNumber: line,
                            endColumn: word.endColumn
                        });
                    }
                }
                return [2 /*return*/, result];
            });
        });
    };
    //#endregion
    EditorSimpleWorker.prototype.navigateValueSet = function (modelUrl, range, up, wordDef, wordDefFlags) {
        return __awaiter(this, void 0, void 0, function () {
            var model, wordDefRegExp, selectionText, wordRange, word, result;
            return __generator(this, function (_a) {
                model = this._getModel(modelUrl);
                if (!model) {
                    return [2 /*return*/, null];
                }
                wordDefRegExp = new RegExp(wordDef, wordDefFlags);
                if (range.startColumn === range.endColumn) {
                    range = {
                        startLineNumber: range.startLineNumber,
                        startColumn: range.startColumn,
                        endLineNumber: range.endLineNumber,
                        endColumn: range.endColumn + 1
                    };
                }
                selectionText = model.getValueInRange(range);
                wordRange = model.getWordAtPosition({ lineNumber: range.startLineNumber, column: range.startColumn }, wordDefRegExp);
                if (!wordRange) {
                    return [2 /*return*/, null];
                }
                word = model.getValueInRange(wordRange);
                result = BasicInplaceReplace.INSTANCE.navigateValueSet(range, selectionText, wordRange, word, up);
                return [2 /*return*/, result];
            });
        });
    };
    // ---- BEGIN foreign module support --------------------------------------------------------------------------
    EditorSimpleWorker.prototype.loadForeignModule = function (moduleId, createData, foreignHostMethods) {
        var _this = this;
        var proxyMethodRequest = function (method, args) {
            return _this._host.fhr(method, args);
        };
        var foreignHost = types.createProxyObject(foreignHostMethods, proxyMethodRequest);
        var ctx = {
            host: foreignHost,
            getMirrorModels: function () {
                return _this._getModels();
            }
        };
        if (this._foreignModuleFactory) {
            this._foreignModule = this._foreignModuleFactory(ctx, createData);
            // static foreing module
            return Promise.resolve(types.getAllMethodNames(this._foreignModule));
        }
        // ESM-comment-begin
        // 		return new Promise<any>((resolve, reject) => {
        // 			require([moduleId], (foreignModule: { create: IForeignModuleFactory }) => {
        // 				this._foreignModule = foreignModule.create(ctx, createData);
        // 
        // 				resolve(types.getAllMethodNames(this._foreignModule));
        // 
        // 			}, reject);
        // 		});
        // ESM-comment-end
        // ESM-uncomment-begin
        return Promise.reject(new Error("Unexpected usage"));
        // ESM-uncomment-end
    };
    // foreign method request
    EditorSimpleWorker.prototype.fmr = function (method, args) {
        if (!this._foreignModule || typeof this._foreignModule[method] !== 'function') {
            return Promise.reject(new Error('Missing requestHandler or method: ' + method));
        }
        try {
            return Promise.resolve(this._foreignModule[method].apply(this._foreignModule, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    // ---- END diff --------------------------------------------------------------------------
    // ---- BEGIN minimal edits ---------------------------------------------------------------
    EditorSimpleWorker._diffLimit = 100000;
    // ---- BEGIN suggest --------------------------------------------------------------------------
    EditorSimpleWorker._suggestionsLimit = 10000;
    return EditorSimpleWorker;
}());
export { EditorSimpleWorker };
/**
 * Called on the worker side
 * @internal
 */
export function create(host) {
    return new EditorSimpleWorker(host, null);
}
if (typeof importScripts === 'function') {
    // Running in a web worker
    globals.monaco = createMonacoBaseAPI();
}
