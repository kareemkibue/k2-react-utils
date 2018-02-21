var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
/**
 * SVG Icon Reusable Component
 */
var SVG = (function (_super) {
    __extends(SVG, _super);
    function SVG() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVG.prototype.render = function () {
        return (React.createElement("svg", { className: "ico" },
            React.createElement("use", { xlinkHref: "assets.svg" + this.props.icon }, " ")));
    };
    return SVG;
}(React.Component));
export { SVG };
//# sourceMappingURL=Svg.js.map