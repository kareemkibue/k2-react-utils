/**
 * Classify Function - Returns a list of classes after an Evalution
 */
export function classify(classObject) {
    var classList = '';
    for (var i in classObject) {
        if (classObject[i] === true)
            classList += i + ' ';
    }
    return classList.trim();
}
//# sourceMappingURL=classify.js.map