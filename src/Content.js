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
 * Content Component with HTML sanitization
 */
var Content = (function (_super) {
    __extends(Content, _super);
    function Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Content.prototype.parseMarkup = function (rawHtml) {
        return { __html: rawHtml };
    };
    Content.prototype.render = function () {
        return (React.createElement("span", { dangerouslySetInnerHTML: this.parseMarkup(this.props.text) }));
    };
    return Content;
}(React.Component));
export { Content };
//# sourceMappingURL=Context.js.map