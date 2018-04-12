"use strict";
exports.__esModule = true;
var XmlJs = require("xml-js");
/**
 * A Parser utility that converts XML<=>JSON built by Nashwaan
 * XML-Js Library - https://github.com/nashwaan/xml-js
 */
var Parser = (function () {
    function Parser() {
    }
    Parser.prototype.xmlToJson = function (xmlNode) {
        return JSON.parse(XmlJs.xml2json(xmlNode, {
            compact: true,
            ignoreComment: true,
            spaces: 4
        }));
    };
    return Parser;
}());
exports["default"] = new Parser();
