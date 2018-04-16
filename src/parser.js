import * as XmlJs from 'xml-js';
/**
 * A Parser utility that converts XML<=>JSON built by Nashwaan
 * XML-Js Library - https://github.com/nashwaan/xml-js
 */
var ParserBase = (function () {
    function ParserBase() {
    }
    ParserBase.prototype.xmlToJson = function (xmlNode) {
        return JSON.parse(XmlJs.xml2json(xmlNode, {
            compact: true,
            ignoreComment: true,
            spaces: 4,
        }));
    };
    return ParserBase;
}());
export var Parser = new ParserBase();
//# sourceMappingURL=parser.js.map