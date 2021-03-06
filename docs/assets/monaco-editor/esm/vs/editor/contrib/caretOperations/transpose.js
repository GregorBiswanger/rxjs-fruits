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
import * as nls from '../../../nls.js';
import { EditorAction, registerEditorAction } from '../../browser/editorExtensions.js';
import { ReplaceCommand } from '../../common/commands/replaceCommand.js';
import { Range } from '../../common/core/range.js';
import { EditorContextKeys } from '../../common/editorContextKeys.js';
import { MoveOperations } from '../../common/controller/cursorMoveOperations.js';
var TransposeLettersAction = /** @class */ (function (_super) {
    __extends(TransposeLettersAction, _super);
    function TransposeLettersAction() {
        return _super.call(this, {
            id: 'editor.action.transposeLetters',
            label: nls.localize('transposeLetters.label', "Transpose Letters"),
            alias: 'Transpose Letters',
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 0,
                mac: {
                    primary: 256 /* WinCtrl */ | 50 /* KEY_T */
                },
                weight: 100 /* EditorContrib */
            }
        }) || this;
    }
    TransposeLettersAction.prototype.run = function (accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        var model = editor.getModel();
        var commands = [];
        var selections = editor.getSelections();
        for (var _i = 0, selections_1 = selections; _i < selections_1.length; _i++) {
            var selection = selections_1[_i];
            if (!selection.isEmpty()) {
                continue;
            }
            var lineNumber = selection.startLineNumber;
            var column = selection.startColumn;
            var lastColumn = model.getLineMaxColumn(lineNumber);
            if (lineNumber === 1 && (column === 1 || (column === 2 && lastColumn === 2))) {
                // at beginning of file, nothing to do
                continue;
            }
            // handle special case: when at end of line, transpose left two chars
            // otherwise, transpose left and right chars
            var endPosition = (column === lastColumn) ?
                selection.getPosition() :
                MoveOperations.rightPosition(model, selection.getPosition().lineNumber, selection.getPosition().column);
            var middlePosition = MoveOperations.leftPosition(model, endPosition.lineNumber, endPosition.column);
            var beginPosition = MoveOperations.leftPosition(model, middlePosition.lineNumber, middlePosition.column);
            var leftChar = model.getValueInRange(Range.fromPositions(beginPosition, middlePosition));
            var rightChar = model.getValueInRange(Range.fromPositions(middlePosition, endPosition));
            var replaceRange = Range.fromPositions(beginPosition, endPosition);
            commands.push(new ReplaceCommand(replaceRange, rightChar + leftChar));
        }
        if (commands.length > 0) {
            editor.pushUndoStop();
            editor.executeCommands(this.id, commands);
            editor.pushUndoStop();
        }
    };
    return TransposeLettersAction;
}(EditorAction));
registerEditorAction(TransposeLettersAction);
