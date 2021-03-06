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
import { createFastDomNode } from '../../../../base/browser/fastDomNode.js';
import { onUnexpectedError } from '../../../../base/common/errors.js';
import { ViewPart } from '../../view/viewPart.js';
import { Position } from '../../../common/core/position.js';
var invalidFunc = function () { throw new Error("Invalid change accessor"); };
var ViewZones = /** @class */ (function (_super) {
    __extends(ViewZones, _super);
    function ViewZones(context) {
        var _this = _super.call(this, context) || this;
        var options = _this._context.configuration.options;
        var layoutInfo = options.get(107 /* layoutInfo */);
        _this._lineHeight = options.get(49 /* lineHeight */);
        _this._contentWidth = layoutInfo.contentWidth;
        _this._contentLeft = layoutInfo.contentLeft;
        _this.domNode = createFastDomNode(document.createElement('div'));
        _this.domNode.setClassName('view-zones');
        _this.domNode.setPosition('absolute');
        _this.domNode.setAttribute('role', 'presentation');
        _this.domNode.setAttribute('aria-hidden', 'true');
        _this.marginDomNode = createFastDomNode(document.createElement('div'));
        _this.marginDomNode.setClassName('margin-view-zones');
        _this.marginDomNode.setPosition('absolute');
        _this.marginDomNode.setAttribute('role', 'presentation');
        _this.marginDomNode.setAttribute('aria-hidden', 'true');
        _this._zones = {};
        return _this;
    }
    ViewZones.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._zones = {};
    };
    // ---- begin view event handlers
    ViewZones.prototype._recomputeWhitespacesProps = function () {
        var _this = this;
        var whitespaces = this._context.viewLayout.getWhitespaces();
        var oldWhitespaces = new Map();
        for (var _i = 0, whitespaces_1 = whitespaces; _i < whitespaces_1.length; _i++) {
            var whitespace = whitespaces_1[_i];
            oldWhitespaces.set(whitespace.id, whitespace);
        }
        return this._context.viewLayout.changeWhitespace(function (whitespaceAccessor) {
            var hadAChange = false;
            var keys = Object.keys(_this._zones);
            for (var i = 0, len = keys.length; i < len; i++) {
                var id = keys[i];
                var zone = _this._zones[id];
                var props = _this._computeWhitespaceProps(zone.delegate);
                var oldWhitespace = oldWhitespaces.get(id);
                if (oldWhitespace && (oldWhitespace.afterLineNumber !== props.afterViewLineNumber || oldWhitespace.height !== props.heightInPx)) {
                    whitespaceAccessor.changeOneWhitespace(id, props.afterViewLineNumber, props.heightInPx);
                    _this._safeCallOnComputedHeight(zone.delegate, props.heightInPx);
                    hadAChange = true;
                }
            }
            return hadAChange;
        });
    };
    ViewZones.prototype.onConfigurationChanged = function (e) {
        var options = this._context.configuration.options;
        var layoutInfo = options.get(107 /* layoutInfo */);
        this._lineHeight = options.get(49 /* lineHeight */);
        this._contentWidth = layoutInfo.contentWidth;
        this._contentLeft = layoutInfo.contentLeft;
        if (e.hasChanged(49 /* lineHeight */)) {
            this._recomputeWhitespacesProps();
        }
        return true;
    };
    ViewZones.prototype.onLineMappingChanged = function (e) {
        var hadAChange = this._recomputeWhitespacesProps();
        if (hadAChange) {
            this._context.viewLayout.onHeightMaybeChanged();
        }
        return hadAChange;
    };
    ViewZones.prototype.onLinesDeleted = function (e) {
        return true;
    };
    ViewZones.prototype.onScrollChanged = function (e) {
        return e.scrollTopChanged || e.scrollWidthChanged;
    };
    ViewZones.prototype.onZonesChanged = function (e) {
        return true;
    };
    ViewZones.prototype.onLinesInserted = function (e) {
        return true;
    };
    // ---- end view event handlers
    ViewZones.prototype._getZoneOrdinal = function (zone) {
        if (typeof zone.afterColumn !== 'undefined') {
            return zone.afterColumn;
        }
        return 10000;
    };
    ViewZones.prototype._computeWhitespaceProps = function (zone) {
        if (zone.afterLineNumber === 0) {
            return {
                afterViewLineNumber: 0,
                heightInPx: this._heightInPixels(zone),
                minWidthInPx: this._minWidthInPixels(zone)
            };
        }
        var zoneAfterModelPosition;
        if (typeof zone.afterColumn !== 'undefined') {
            zoneAfterModelPosition = this._context.model.validateModelPosition({
                lineNumber: zone.afterLineNumber,
                column: zone.afterColumn
            });
        }
        else {
            var validAfterLineNumber = this._context.model.validateModelPosition({
                lineNumber: zone.afterLineNumber,
                column: 1
            }).lineNumber;
            zoneAfterModelPosition = new Position(validAfterLineNumber, this._context.model.getModelLineMaxColumn(validAfterLineNumber));
        }
        var zoneBeforeModelPosition;
        if (zoneAfterModelPosition.column === this._context.model.getModelLineMaxColumn(zoneAfterModelPosition.lineNumber)) {
            zoneBeforeModelPosition = this._context.model.validateModelPosition({
                lineNumber: zoneAfterModelPosition.lineNumber + 1,
                column: 1
            });
        }
        else {
            zoneBeforeModelPosition = this._context.model.validateModelPosition({
                lineNumber: zoneAfterModelPosition.lineNumber,
                column: zoneAfterModelPosition.column + 1
            });
        }
        var viewPosition = this._context.model.coordinatesConverter.convertModelPositionToViewPosition(zoneAfterModelPosition);
        var isVisible = this._context.model.coordinatesConverter.modelPositionIsVisible(zoneBeforeModelPosition);
        return {
            afterViewLineNumber: viewPosition.lineNumber,
            heightInPx: (isVisible ? this._heightInPixels(zone) : 0),
            minWidthInPx: this._minWidthInPixels(zone)
        };
    };
    ViewZones.prototype.changeViewZones = function (callback) {
        var _this = this;
        return this._context.viewLayout.changeWhitespace(function (whitespaceAccessor) {
            var zonesHaveChanged = false;
            var changeAccessor = {
                addZone: function (zone) {
                    zonesHaveChanged = true;
                    return _this._addZone(whitespaceAccessor, zone);
                },
                removeZone: function (id) {
                    if (!id) {
                        return;
                    }
                    zonesHaveChanged = _this._removeZone(whitespaceAccessor, id) || zonesHaveChanged;
                },
                layoutZone: function (id) {
                    if (!id) {
                        return;
                    }
                    zonesHaveChanged = _this._layoutZone(whitespaceAccessor, id) || zonesHaveChanged;
                }
            };
            safeInvoke1Arg(callback, changeAccessor);
            // Invalidate changeAccessor
            changeAccessor.addZone = invalidFunc;
            changeAccessor.removeZone = invalidFunc;
            changeAccessor.layoutZone = invalidFunc;
            return zonesHaveChanged;
        });
    };
    ViewZones.prototype._addZone = function (whitespaceAccessor, zone) {
        var props = this._computeWhitespaceProps(zone);
        var whitespaceId = whitespaceAccessor.insertWhitespace(props.afterViewLineNumber, this._getZoneOrdinal(zone), props.heightInPx, props.minWidthInPx);
        var myZone = {
            whitespaceId: whitespaceId,
            delegate: zone,
            isVisible: false,
            domNode: createFastDomNode(zone.domNode),
            marginDomNode: zone.marginDomNode ? createFastDomNode(zone.marginDomNode) : null
        };
        this._safeCallOnComputedHeight(myZone.delegate, props.heightInPx);
        myZone.domNode.setPosition('absolute');
        myZone.domNode.domNode.style.width = '100%';
        myZone.domNode.setDisplay('none');
        myZone.domNode.setAttribute('monaco-view-zone', myZone.whitespaceId);
        this.domNode.appendChild(myZone.domNode);
        if (myZone.marginDomNode) {
            myZone.marginDomNode.setPosition('absolute');
            myZone.marginDomNode.domNode.style.width = '100%';
            myZone.marginDomNode.setDisplay('none');
            myZone.marginDomNode.setAttribute('monaco-view-zone', myZone.whitespaceId);
            this.marginDomNode.appendChild(myZone.marginDomNode);
        }
        this._zones[myZone.whitespaceId] = myZone;
        this.setShouldRender();
        return myZone.whitespaceId;
    };
    ViewZones.prototype._removeZone = function (whitespaceAccessor, id) {
        if (this._zones.hasOwnProperty(id)) {
            var zone = this._zones[id];
            delete this._zones[id];
            whitespaceAccessor.removeWhitespace(zone.whitespaceId);
            zone.domNode.removeAttribute('monaco-visible-view-zone');
            zone.domNode.removeAttribute('monaco-view-zone');
            zone.domNode.domNode.parentNode.removeChild(zone.domNode.domNode);
            if (zone.marginDomNode) {
                zone.marginDomNode.removeAttribute('monaco-visible-view-zone');
                zone.marginDomNode.removeAttribute('monaco-view-zone');
                zone.marginDomNode.domNode.parentNode.removeChild(zone.marginDomNode.domNode);
            }
            this.setShouldRender();
            return true;
        }
        return false;
    };
    ViewZones.prototype._layoutZone = function (whitespaceAccessor, id) {
        if (this._zones.hasOwnProperty(id)) {
            var zone = this._zones[id];
            var props = this._computeWhitespaceProps(zone.delegate);
            // const newOrdinal = this._getZoneOrdinal(zone.delegate);
            whitespaceAccessor.changeOneWhitespace(zone.whitespaceId, props.afterViewLineNumber, props.heightInPx);
            // TODO@Alex: change `newOrdinal` too
            this._safeCallOnComputedHeight(zone.delegate, props.heightInPx);
            this.setShouldRender();
            return true;
        }
        return false;
    };
    ViewZones.prototype.shouldSuppressMouseDownOnViewZone = function (id) {
        if (this._zones.hasOwnProperty(id)) {
            var zone = this._zones[id];
            return Boolean(zone.delegate.suppressMouseDown);
        }
        return false;
    };
    ViewZones.prototype._heightInPixels = function (zone) {
        if (typeof zone.heightInPx === 'number') {
            return zone.heightInPx;
        }
        if (typeof zone.heightInLines === 'number') {
            return this._lineHeight * zone.heightInLines;
        }
        return this._lineHeight;
    };
    ViewZones.prototype._minWidthInPixels = function (zone) {
        if (typeof zone.minWidthInPx === 'number') {
            return zone.minWidthInPx;
        }
        return 0;
    };
    ViewZones.prototype._safeCallOnComputedHeight = function (zone, height) {
        if (typeof zone.onComputedHeight === 'function') {
            try {
                zone.onComputedHeight(height);
            }
            catch (e) {
                onUnexpectedError(e);
            }
        }
    };
    ViewZones.prototype._safeCallOnDomNodeTop = function (zone, top) {
        if (typeof zone.onDomNodeTop === 'function') {
            try {
                zone.onDomNodeTop(top);
            }
            catch (e) {
                onUnexpectedError(e);
            }
        }
    };
    ViewZones.prototype.prepareRender = function (ctx) {
        // Nothing to read
    };
    ViewZones.prototype.render = function (ctx) {
        var visibleWhitespaces = ctx.viewportData.whitespaceViewportData;
        var visibleZones = {};
        var hasVisibleZone = false;
        for (var i = 0, len = visibleWhitespaces.length; i < len; i++) {
            visibleZones[visibleWhitespaces[i].id] = visibleWhitespaces[i];
            hasVisibleZone = true;
        }
        var keys = Object.keys(this._zones);
        for (var i = 0, len = keys.length; i < len; i++) {
            var id = keys[i];
            var zone = this._zones[id];
            var newTop = 0;
            var newHeight = 0;
            var newDisplay = 'none';
            if (visibleZones.hasOwnProperty(id)) {
                newTop = visibleZones[id].verticalOffset - ctx.bigNumbersDelta;
                newHeight = visibleZones[id].height;
                newDisplay = 'block';
                // zone is visible
                if (!zone.isVisible) {
                    zone.domNode.setAttribute('monaco-visible-view-zone', 'true');
                    zone.isVisible = true;
                }
                this._safeCallOnDomNodeTop(zone.delegate, ctx.getScrolledTopFromAbsoluteTop(visibleZones[id].verticalOffset));
            }
            else {
                if (zone.isVisible) {
                    zone.domNode.removeAttribute('monaco-visible-view-zone');
                    zone.isVisible = false;
                }
                this._safeCallOnDomNodeTop(zone.delegate, ctx.getScrolledTopFromAbsoluteTop(-1000000));
            }
            zone.domNode.setTop(newTop);
            zone.domNode.setHeight(newHeight);
            zone.domNode.setDisplay(newDisplay);
            if (zone.marginDomNode) {
                zone.marginDomNode.setTop(newTop);
                zone.marginDomNode.setHeight(newHeight);
                zone.marginDomNode.setDisplay(newDisplay);
            }
        }
        if (hasVisibleZone) {
            this.domNode.setWidth(Math.max(ctx.scrollWidth, this._contentWidth));
            this.marginDomNode.setWidth(this._contentLeft);
        }
    };
    return ViewZones;
}(ViewPart));
export { ViewZones };
function safeInvoke1Arg(func, arg1) {
    try {
        return func(arg1);
    }
    catch (e) {
        onUnexpectedError(e);
    }
}
