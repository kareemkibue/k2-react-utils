const browserDefaultFontSize = '16px';

/**
 * Utility to convert pixels to rem units
 */
export const convertPixelsToRem = (pixelValue: string, baseFontSize = browserDefaultFontSize):string=> {
	const pixelUnit:number = getPixelUnit(pixelValue);
	const baseFontUnit:number = getPixelUnit(baseFontSize);
	const calculatedRemUnit:number = pixelUnit / baseFontUnit;

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

const getPixelUnit = (pixelValue:string):number => {
	const pxIndex:number = pixelValue.indexOf('px');
	const pixelUnit:number = Number(pixelValue.slice(0, pxIndex));
	return pixelUnit;
};
