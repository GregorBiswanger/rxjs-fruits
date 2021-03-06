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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import * as nls from '../../../nls.js';
import * as dom from '../../../base/browser/dom.js';
import { ActionViewItem, Separator } from '../../../base/browser/ui/actionbar/actionbar.js';
import { DisposableStore } from '../../../base/common/lifecycle.js';
import { EditorAction, registerEditorAction, registerEditorContribution } from '../../browser/editorExtensions.js';
import { EditorContextKeys } from '../../common/editorContextKeys.js';
import { IMenuService, SubmenuItemAction } from '../../../platform/actions/common/actions.js';
import { IContextKeyService } from '../../../platform/contextkey/common/contextkey.js';
import { IContextMenuService, IContextViewService } from '../../../platform/contextview/browser/contextView.js';
import { IKeybindingService } from '../../../platform/keybinding/common/keybinding.js';
import { ContextSubMenu } from '../../../base/browser/contextmenu.js';
var ContextMenuController = /** @class */ (function () {
    function ContextMenuController(editor, _contextMenuService, _contextViewService, _contextKeyService, _keybindingService, _menuService) {
        var _this = this;
        this._contextMenuService = _contextMenuService;
        this._contextViewService = _contextViewService;
        this._contextKeyService = _contextKeyService;
        this._keybindingService = _keybindingService;
        this._menuService = _menuService;
        this._toDispose = new DisposableStore();
        this._contextMenuIsBeingShownCount = 0;
        this._editor = editor;
        this._toDispose.add(this._editor.onContextMenu(function (e) { return _this._onContextMenu(e); }));
        this._toDispose.add(this._editor.onMouseWheel(function (e) {
            if (_this._contextMenuIsBeingShownCount > 0) {
                _this._contextViewService.hideContextView();
            }
        }));
        this._toDispose.add(this._editor.onKeyDown(function (e) {
            if (e.keyCode === 58 /* ContextMenu */) {
                // Chrome is funny like that
                e.preventDefault();
                e.stopPropagation();
                _this.showContextMenu();
            }
        }));
    }
    ContextMenuController.get = function (editor) {
        return editor.getContribution(ContextMenuController.ID);
    };
    ContextMenuController.prototype._onContextMenu = function (e) {
        if (!this._editor.hasModel()) {
            return;
        }
        if (!this._editor.getOption(14 /* contextmenu */)) {
            this._editor.focus();
            // Ensure the cursor is at the position of the mouse click
            if (e.target.position && !this._editor.getSelection().containsPosition(e.target.position)) {
                this._editor.setPosition(e.target.position);
            }
            return; // Context menu is turned off through configuration
        }
        if (e.target.type === 12 /* OVERLAY_WIDGET */) {
            return; // allow native menu on widgets to support right click on input field for example in find
        }
        e.event.preventDefault();
        if (e.target.type !== 6 /* CONTENT_TEXT */ && e.target.type !== 7 /* CONTENT_EMPTY */ && e.target.type !== 1 /* TEXTAREA */) {
            return; // only support mouse click into text or native context menu key for now
        }
        // Ensure the editor gets focus if it hasn't, so the right events are being sent to other contributions
        this._editor.focus();
        // Ensure the cursor is at the position of the mouse click
        if (e.target.position) {
            var hasSelectionAtPosition = false;
            for (var _i = 0, _a = this._editor.getSelections(); _i < _a.length; _i++) {
                var selection = _a[_i];
                if (selection.containsPosition(e.target.position)) {
                    hasSelectionAtPosition = true;
                    break;
                }
            }
            if (!hasSelectionAtPosition) {
                this._editor.setPosition(e.target.position);
            }
        }
        // Unless the user triggerd the context menu through Shift+F10, use the mouse position as menu position
        var anchor = null;
        if (e.target.type !== 1 /* TEXTAREA */) {
            anchor = { x: e.event.posx - 1, width: 2, y: e.event.posy - 1, height: 2 };
        }
        // Show the context menu
        this.showContextMenu(anchor);
    };
    ContextMenuController.prototype.showContextMenu = function (anchor) {
        if (!this._editor.getOption(14 /* contextmenu */)) {
            return; // Context menu is turned off through configuration
        }
        if (!this._editor.hasModel()) {
            return;
        }
        if (!this._contextMenuService) {
            this._editor.focus();
            return; // We need the context menu service to function
        }
        // Find actions available for menu
        var menuActions = this._getMenuActions(this._editor.getModel(), 7 /* EditorContext */);
        // Show menu if we have actions to show
        if (menuActions.length > 0) {
            this._doShowContextMenu(menuActions, anchor);
        }
    };
    ContextMenuController.prototype._getMenuActions = function (model, menuId) {
        var result = [];
        // get menu groups
        var menu = this._menuService.createMenu(menuId, this._contextKeyService);
        var groups = menu.getActions({ arg: model.uri });
        menu.dispose();
        // translate them into other actions
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var group = groups_1[_i];
            var actions = group[1];
            var addedItems = 0;
            for (var _a = 0, actions_1 = actions; _a < actions_1.length; _a++) {
                var action = actions_1[_a];
                if (action instanceof SubmenuItemAction) {
                    var subActions = this._getMenuActions(model, action.item.submenu);
                    if (subActions.length > 0) {
                        result.push(new ContextSubMenu(action.label, subActions));
                        addedItems++;
                    }
                }
                else {
                    result.push(action);
                    addedItems++;
                }
            }
            if (addedItems) {
                result.push(new Separator());
            }
        }
        if (result.length) {
            result.pop(); // remove last separator
        }
        return result;
    };
    ContextMenuController.prototype._doShowContextMenu = function (actions, anchor) {
        var _this = this;
        if (anchor === void 0) { anchor = null; }
        if (!this._editor.hasModel()) {
            return;
        }
        // Disable hover
        var oldHoverSetting = this._editor.getOption(44 /* hover */);
        this._editor.updateOptions({
            hover: {
                enabled: false
            }
        });
        if (!anchor) {
            // Ensure selection is visible
            this._editor.revealPosition(this._editor.getPosition(), 1 /* Immediate */);
            this._editor.render();
            var cursorCoords = this._editor.getScrolledVisiblePosition(this._editor.getPosition());
            // Translate to absolute editor position
            var editorCoords = dom.getDomNodePagePosition(this._editor.getDomNode());
            var posx = editorCoords.left + cursorCoords.left;
            var posy = editorCoords.top + cursorCoords.top + cursorCoords.height;
            anchor = { x: posx, y: posy };
        }
        // Show menu
        this._contextMenuIsBeingShownCount++;
        this._contextMenuService.showContextMenu({
            getAnchor: function () { return anchor; },
            getActions: function () { return actions; },
            getActionViewItem: function (action) {
                var keybinding = _this._keybindingFor(action);
                if (keybinding) {
                    return new ActionViewItem(action, action, { label: true, keybinding: keybinding.getLabel(), isMenu: true });
                }
                var customActionViewItem = action;
                if (typeof customActionViewItem.getActionViewItem === 'function') {
                    return customActionViewItem.getActionViewItem();
                }
                return new ActionViewItem(action, action, { icon: true, label: true, isMenu: true });
            },
            getKeyBinding: function (action) {
                return _this._keybindingFor(action);
            },
            onHide: function (wasCancelled) {
                _this._contextMenuIsBeingShownCount--;
                _this._editor.focus();
                _this._editor.updateOptions({
                    hover: oldHoverSetting
                });
            }
        });
    };
    ContextMenuController.prototype._keybindingFor = function (action) {
        return this._keybindingService.lookupKeybinding(action.id);
    };
    ContextMenuController.prototype.dispose = function () {
        if (this._contextMenuIsBeingShownCount > 0) {
            this._contextViewService.hideContextView();
        }
        this._toDispose.dispose();
    };
    ContextMenuController.ID = 'editor.contrib.contextmenu';
    ContextMenuController = __decorate([
        __param(1, IContextMenuService),
        __param(2, IContextViewService),
        __param(3, IContextKeyService),
        __param(4, IKeybindingService),
        __param(5, IMenuService)
    ], ContextMenuController);
    return ContextMenuController;
}());
export { ContextMenuController };
var ShowContextMenu = /** @class */ (function (_super) {
    __extends(ShowContextMenu, _super);
    function ShowContextMenu() {
        return _super.call(this, {
            id: 'editor.action.showContextMenu',
            label: nls.localize('action.showContextMenu.label', "Show Editor Context Menu"),
            alias: 'Show Editor Context Menu',
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 1024 /* Shift */ | 68 /* F10 */,
                weight: 100 /* EditorContrib */
            }
        }) || this;
    }
    ShowContextMenu.prototype.run = function (accessor, editor) {
        var contribution = ContextMenuController.get(editor);
        contribution.showContextMenu();
    };
    return ShowContextMenu;
}(EditorAction));
registerEditorContribution(ContextMenuController.ID, ContextMenuController);
registerEditorAction(ShowContextMenu);
