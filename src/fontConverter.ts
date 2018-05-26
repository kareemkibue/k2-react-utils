const defaultBrowserFontSize: string = '16px';

const getPixelUnit = (pixelValue: string): number => {
	const pxIndex: number = pixelValue.indexOf('px');
	const pixelUnit: number = Number(pixelValue.slice(0, pxIndex));
	return pixelUnit;
};

/** Font utility that converts pixels to rem units */
const convertPixelsToRem = (pixelValue: string, baseFontSize: string = defaultBrowserFontSize): string => {
	const pixelUnit: number = getPixelUnit(pixelValue);
	const baseFontUnit: number = getPixelUnit(baseFontSize);
	const calculatedRemUnit: number = pixelUnit / baseFontUnit;

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

/** Font utility that converts pixels to em units */
const convertPixelsToEm = (pixelValue: string, baseFontSize: string = defaultBrowserFontSize): string => {
	const pixelUnit: number = getPixelUnit(pixelValue);
	const baseFontUnit: number = getPixelUnit(baseFontSize);
	const calculatedEmUnit: number = pixelUnit / baseFontUnit;

	return String(calculatedEmUnit) + 'em';
};

export { convertPixelsToRem, convertPixelsToEm };
