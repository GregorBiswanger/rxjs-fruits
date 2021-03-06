/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { toDisposable } from '../../../base/common/lifecycle.js';
import { validateConstraints } from '../../../base/common/types.js';
import { createDecorator } from '../../instantiation/common/instantiation.js';
import { Emitter } from '../../../base/common/event.js';
import { LinkedList } from '../../../base/common/linkedList.js';
import { keys } from '../../../base/common/map.js';
export var ICommandService = createDecorator('commandService');
export var CommandsRegistry = new /** @class */ (function () {
    function class_1() {
        this._commands = new Map();
        this._onDidRegisterCommand = new Emitter();
        this.onDidRegisterCommand = this._onDidRegisterCommand.event;
    }
    class_1.prototype.registerCommand = function (idOrCommand, handler) {
        var _this = this;
        if (!idOrCommand) {
            throw new Error("invalid command");
        }
        if (typeof idOrCommand === 'string') {
            if (!handler) {
                throw new Error("invalid command");
            }
            return this.registerCommand({ id: idOrCommand, handler: handler });
        }
        // add argument validation if rich command metadata is provided
        if (idOrCommand.description) {
            var constraints_1 = [];
            for (var _i = 0, _a = idOrCommand.description.args; _i < _a.length; _i++) {
                var arg = _a[_i];
                constraints_1.push(arg.constraint);
            }
            var actualHandler_1 = idOrCommand.handler;
            idOrCommand.handler = function (accessor) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                validateConstraints(args, constraints_1);
                return actualHandler_1.apply(void 0, __spreadArrays([accessor], args));
            };
        }
        // find a place to store the command
        var id = idOrCommand.id;
        var commands = this._commands.get(id);
        if (!commands) {
            commands = new LinkedList();
            this._commands.set(id, commands);
        }
        var removeFn = commands.unshift(idOrCommand);
        var ret = toDisposable(function () {
            removeFn();
            var command = _this._commands.get(id);
            if (command === null || command === void 0 ? void 0 : command.isEmpty()) {
                _this._commands.delete(id);
            }
        });
        // tell the world about this command
        this._onDidRegisterCommand.fire(id);
        return ret;
    };
    class_1.prototype.registerCommandAlias = function (oldId, newId) {
        return CommandsRegistry.registerCommand(oldId, function (accessor) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return (_a = accessor.get(ICommandService)).executeCommand.apply(_a, __spreadArrays([newId], args));
        });
    };
    class_1.prototype.getCommand = function (id) {
        var list = this._commands.get(id);
        if (!list || list.isEmpty()) {
            return undefined;
        }
        return list.iterator().next().value;
    };
    class_1.prototype.getCommands = function () {
        var result = new Map();
        for (var _i = 0, _a = keys(this._commands); _i < _a.length; _i++) {
            var key = _a[_i];
            var command = this.getCommand(key);
            if (command) {
                result.set(key, command);
            }
        }
        return result;
    };
    return class_1;
}());
