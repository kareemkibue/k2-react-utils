"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
/**
 * React-Redux Connect implementation for Typescript
 */
function connect(mapStateToProps, mapDispatchToProps, mergeProps, options) {
    return function (target) { return react_redux_1.connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(target); };
}
exports.connect = connect;
