"use strict";
exports.__esModule = true;
var classify_1 = require("./utils/classify");
var connect_1 = require("./utils/connect");
var Context_1 = require("./utils/Context");
var Svg_1 = require("./utils/Svg");
var parser_1 = require("./utils/parser");
var Utils = {
    Content: Context_1.Content,
    SVG: Svg_1.SVG,
    classify: classify_1.classify,
    connect: connect_1.connect,
    Parser: parser_1["default"]
};
exports.Utils = Utils;
exports["default"] = Utils;
