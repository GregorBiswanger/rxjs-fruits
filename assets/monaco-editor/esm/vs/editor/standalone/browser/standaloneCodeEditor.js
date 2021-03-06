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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import * as browser from '../../../base/browser/browser.js';
import * as aria from '../../../base/browser/ui/aria/aria.js';
import { Disposable, toDisposable, DisposableStore } from '../../../base/common/lifecycle.js';
import { ICodeEditorService } from '../../browser/services/codeEditorService.js';
import { CodeEditorWidget } from '../../browser/widget/codeEditorWidget.js';
import { DiffEditorWidget } from '../../browser/widget/diffEditorWidget.js';
import { InternalEditorAction } from '../../common/editorAction.js';
import { IEditorWorkerService } from '../../common/services/editorWorkerService.js';
import { StandaloneKeybindingService, applyConfigurationValues } from './simpleServices.js';
import { IStandaloneThemeService } from '../common/standaloneThemeService.js';
import { MenuRegistry } from '../../../platform/actions/common/actions.js';
import { CommandsRegistry, ICommandService } from '../../../platform/commands/common/commands.js';
import { IConfigurationService } from '../../../platform/configuration/common/configuration.js';
import { ContextKeyExpr, IContextKeyService } from '../../../platform/contextkey/common/contextkey.js';
import { IContextViewService, IContextMenuService } from '../../../platform/contextview/browser/contextView.js';
import { IInstantiationService, optional } from '../../../platform/instantiation/common/instantiation.js';
import { IKeybindingService } from '../../../platform/keybinding/common/keybinding.js';
import { INotificationService } from '../../../platform/notification/common/notification.js';
import { IThemeService } from '../../../platform/theme/common/themeService.js';
import { IAccessibilityService } from '../../../platform/accessibility/common/accessibility.js';
import { StandaloneCodeEditorNLS } from '../../common/standaloneStrings.js';
import { IClipboardService } from '../../../platform/clipboard/common/clipboardService.js';
import { IEditorProgressService } from '../../../platform/progress/common/progress.js';
var LAST_GENERATED_COMMAND_ID = 0;
var ariaDomNodeCreated = false;
function createAriaDomNode() {
    if (ariaDomNodeCreated) {
        return;
    }
    ariaDomNodeCreated = true;
    aria.setARIAContainer(document.body);
}
/**
 * A code editor to be used both by the standalone editor and the standalone diff editor.
 */
var StandaloneCodeEditor = /** @class */ (function (_super) {
    __extends(StandaloneCodeEditor, _super);
    function StandaloneCodeEditor(domElement, options, instantiationService, codeEditorService, commandService, contextKeyService, keybindingService, themeService, notificationService, accessibilityService) {
        var _this = this;
        options = options || {};
        options.ariaLabel = options.ariaLabel || StandaloneCodeEditorNLS.editorViewAccessibleLabel;
        options.ariaLabel = options.ariaLabel + ';' + (browser.isIE
            ? StandaloneCodeEditorNLS.accessibilityHelpMessageIE
            : StandaloneCodeEditorNLS.accessibilityHelpMessage);
        _this = _super.call(this, domElement, options, {}, instantiationService, codeEditorService, commandService, contextKeyService, themeService, notificationService, accessibilityService) || this;
        if (keybindingService instanceof StandaloneKeybindingService) {
            _this._standaloneKeybindingService = keybindingService;
        }
        else {
            _this._standaloneKeybindingService = null;
        }
        // Create the ARIA dom node as soon as the first editor is instantiated
        createAriaDomNode();
        return _this;
    }
    StandaloneCodeEditor.prototype.addCommand = function (keybinding, handler, context) {
        if (!this._standaloneKeybindingService) {
            console.warn('Cannot add command because the editor is configured with an unrecognized KeybindingService');
            return null;
        }
        var commandId = 'DYNAMIC_' + (++LAST_GENERATED_COMMAND_ID);
        var whenExpression = ContextKeyExpr.deserialize(context);
        this._standaloneKeybindingService.addDynamicKeybinding(commandId, keybinding, handler, whenExpression);
        return commandId;
    };
    StandaloneCodeEditor.prototype.createContextKey = function (key, defaultValue) {
        return this._contextKeyService.createKey(key, defaultValue);
    };
    StandaloneCodeEditor.prototype.addAction = function (_descriptor) {
        var _this = this;
        if ((typeof _descriptor.id !== 'string') || (typeof _descriptor.label !== 'string') || (typeof _descriptor.run !== 'function')) {
            throw new Error('Invalid action descriptor, `id`, `label` and `run` are required properties!');
        }
        if (!this._standaloneKeybindingService) {
            console.warn('Cannot add keybinding because the editor is configured with an unrecognized KeybindingService');
            return Disposable.None;
        }
        // Read descriptor options
        var id = _descriptor.id;
        var label = _descriptor.label;
        var precondition = ContextKeyExpr.and(ContextKeyExpr.equals('editorId', this.getId()), ContextKeyExpr.deserialize(_descriptor.precondition));
        var keybindings = _descriptor.keybindings;
        var keybindingsWhen = ContextKeyExpr.and(precondition, ContextKeyExpr.deserialize(_descriptor.keybindingContext));
        var contextMenuGroupId = _descriptor.contextMenuGroupId || null;
        var contextMenuOrder = _descriptor.contextMenuOrder || 0;
        var run = function (accessor) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return Promise.resolve(_descriptor.run.apply(_descriptor, __spreadArrays([_this], args)));
        };
        var toDispose = new DisposableStore();
        // Generate a unique id to allow the same descriptor.id across multiple editor instances
        var uniqueId = this.getId() + ':' + id;
        // Register the command
        toDispose.add(CommandsRegistry.registerCommand(uniqueId, run));
        // Register the context menu item
        if (contextMenuGroupId) {
            var menuItem = {
                command: {
                    id: uniqueId,
                    title: label
                },
                when: precondition,
                group: contextMenuGroupId,
                order: contextMenuOrder
            };
            toDispose.add(MenuRegistry.appendMenuItem(7 /* EditorContext */, menuItem));
        }
        // Register the keybindings
        if (Array.isArray(keybindings)) {
            for (var _i = 0, keybindings_1 = keybindings; _i < keybindings_1.length; _i++) {
                var kb = keybindings_1[_i];
                toDispose.add(this._standaloneKeybindingService.addDynamicKeybinding(uniqueId, kb, run, keybindingsWhen));
            }
        }
        // Finally, register an internal editor action
        var internalAction = new InternalEditorAction(uniqueId, label, label, precondition, run, this._contextKeyService);
        // Store it under the original id, such that trigger with the original id will work
        this._actions[id] = internalAction;
        toDispose.add(toDisposable(function () {
            delete _this._actions[id];
        }));
        return toDispose;
    };
    StandaloneCodeEditor = __decorate([
        __param(2, IInstantiationService),
        __param(3, ICodeEditorService),
        __param(4, ICommandService),
        __param(5, IContextKeyService),
        __param(6, IKeybindingService),
        __param(7, IThemeService),
        __param(8, INotificationService),
        __param(9, IAccessibilityService)
    ], StandaloneCodeEditor);
    return StandaloneCodeEditor;
}(CodeEditorWidget));
export { StandaloneCodeEditor };
var StandaloneEditor = /** @class */ (function (_super) {
    __extends(StandaloneEditor, _super);
    function StandaloneEditor(domElement, options, toDispose, instantiationService, codeEditorService, commandService, contextKeyService, keybindingService, contextViewService, themeService, notificationService, configurationService, accessibilityService) {
        var _this = this;
        applyConfigurationValues(configurationService, options, false);
        var themeDomRegistration = themeService.registerEditorContainer(domElement);
        options = options || {};
        if (typeof options.theme === 'string') {
            themeService.setTheme(options.theme);
        }
        var _model = options.model;
        delete options.model;
        _this = _super.call(this, domElement, options, instantiationService, codeEditorService, commandService, contextKeyService, keybindingService, themeService, notificationService, accessibilityService) || this;
        _this._contextViewService = contextViewService;
        _this._configurationService = configurationService;
        _this._register(toDispose);
        _this._register(themeDomRegistration);
        var model;
        if (typeof _model === 'undefined') {
            model = self.monaco.editor.createModel(options.value || '', options.language || 'text/plain');
            _this._ownsModel = true;
        }
        else {
            model = _model;
            _this._ownsModel = false;
        }
        _this._attachModel(model);
        if (model) {
            var e = {
                oldModelUrl: null,
                newModelUrl: model.uri
            };
            _this._onDidChangeModel.fire(e);
        }
        return _this;
    }
    StandaloneEditor.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    StandaloneEditor.prototype.updateOptions = function (newOptions) {
        applyConfigurationValues(this._configurationService, newOptions, false);
        _super.prototype.updateOptions.call(this, newOptions);
    };
    StandaloneEditor.prototype._attachModel = function (model) {
        _super.prototype._attachModel.call(this, model);
        if (this._modelData) {
            this._contextViewService.setContainer(this._modelData.view.domNode.domNode);
        }
    };
    StandaloneEditor.prototype._postDetachModelCleanup = function (detachedModel) {
        _super.prototype._postDetachModelCleanup.call(this, detachedModel);
        if (detachedModel && this._ownsModel) {
            detachedModel.dispose();
            this._ownsModel = false;
        }
    };
    StandaloneEditor = __decorate([
        __param(3, IInstantiationService),
        __param(4, ICodeEditorService),
        __param(5, ICommandService),
        __param(6, IContextKeyService),
        __param(7, IKeybindingService),
        __param(8, IContextViewService),
        __param(9, IStandaloneThemeService),
        __param(10, INotificationService),
        __param(11, IConfigurationService),
        __param(12, IAccessibilityService)
    ], StandaloneEditor);
    return StandaloneEditor;
}(StandaloneCodeEditor));
export { StandaloneEditor };
var StandaloneDiffEditor = /** @class */ (function (_super) {
    __extends(StandaloneDiffEditor, _super);
    function StandaloneDiffEditor(domElement, options, toDispose, instantiationService, contextKeyService, keybindingService, contextViewService, editorWorkerService, codeEditorService, themeService, notificationService, configurationService, contextMenuService, editorProgressService, clipboardService) {
        var _this = this;
        applyConfigurationValues(configurationService, options, true);
        var themeDomRegistration = themeService.registerEditorContainer(domElement);
        options = options || {};
        if (typeof options.theme === 'string') {
            options.theme = themeService.setTheme(options.theme);
        }
        _this = _super.call(this, domElement, options, clipboardService, editorWorkerService, contextKeyService, instantiationService, codeEditorService, themeService, notificationService, contextMenuService, editorProgressService) || this;
        _this._contextViewService = contextViewService;
        _this._configurationService = configurationService;
        _this._register(toDispose);
        _this._register(themeDomRegistration);
        _this._contextViewService.setContainer(_this._containerDomElement);
        return _this;
    }
    StandaloneDiffEditor.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    StandaloneDiffEditor.prototype.updateOptions = function (newOptions) {
        applyConfigurationValues(this._configurationService, newOptions, true);
        _super.prototype.updateOptions.call(this, newOptions);
    };
    StandaloneDiffEditor.prototype._createInnerEditor = function (instantiationService, container, options) {
        return instantiationService.createInstance(StandaloneCodeEditor, container, options);
    };
    StandaloneDiffEditor.prototype.getOriginalEditor = function () {
        return _super.prototype.getOriginalEditor.call(this);
    };
    StandaloneDiffEditor.prototype.getModifiedEditor = function () {
        return _super.prototype.getModifiedEditor.call(this);
    };
    StandaloneDiffEditor.prototype.addCommand = function (keybinding, handler, context) {
        return this.getModifiedEditor().addCommand(keybinding, handler, context);
    };
    StandaloneDiffEditor.prototype.createContextKey = function (key, defaultValue) {
        return this.getModifiedEditor().createContextKey(key, defaultValue);
    };
    StandaloneDiffEditor.prototype.addAction = function (descriptor) {
        return this.getModifiedEditor().addAction(descriptor);
    };
    StandaloneDiffEditor = __decorate([
        __param(3, IInstantiationService),
        __param(4, IContextKeyService),
        __param(5, IKeybindingService),
        __param(6, IContextViewService),
        __param(7, IEditorWorkerService),
        __param(8, ICodeEditorService),
        __param(9, IStandaloneThemeService),
        __param(10, INotificationService),
        __param(11, IConfigurationService),
        __param(12, IContextMenuService),
        __param(13, IEditorProgressService),
        __param(14, optional(IClipboardService))
    ], StandaloneDiffEditor);
    return StandaloneDiffEditor;
}(DiffEditorWidget));
export { StandaloneDiffEditor };
