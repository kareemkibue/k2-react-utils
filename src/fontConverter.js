var browserDefaultFontSize = '16px';
/**
 * Utility to convert pixels to rem units
 */
export var convertPixelsToRem = function (pixelValue, baseFontSize) {
    if (baseFontSize === void 0) { baseFontSize = browserDefaultFontSize; }
    var pixelUnit = getPixelUnit(pixelValue);
    var baseFontUnit = getPixelUnit(baseFontSize);
    var calculatedRemUnit = pixelUnit / baseFontUnit;
    /* console.log('typeof calculatedRemUnit=', typeof calculatedRemUnit);
    console.log('calculatedRemUnit=', calculatedRemUnit);
    console.log('\n==='); */
    // if (typeof calculatedRemUnit !== 'number') {
    /* if (calculatedRemUnit != 'undefined') {
        return String(calculatedRemUnit) + 'rem';
    } else {
        // throw new Error('Invalid pixel unit.');
        return false;
    } */
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
    return String(calculatedRemUnit) + 'rem';
};
var getPixelUnit = function (pixelValue) {
    var pxIndex = pixelValue.indexOf('px');
    var pixelUnit = Number(pixelValue.slice(0, pxIndex));
    return pixelUnit;
};
//# sourceMappingURL=fontConverter.js.map