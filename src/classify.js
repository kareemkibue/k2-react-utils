"use strict";
exports.__esModule = true;
/**
 * Classify Function - Returns a list of classes after an Evalution
 */
function classify(classObject) {
    var classList = '';
    for (var i in classObject) {
        if (classObject[i] === true)
            classList += i + ' ';
    }
    return classList.trim();
}
exports.classify = classify;
