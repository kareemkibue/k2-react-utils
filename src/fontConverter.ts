const defaultBrowserFontSize: string = '16px';

const getPixelUnit = (pixelValue: string): number => {
	const pxIndex: number = pixelValue.indexOf('px');
	const pixelUnit: number = Number(pixelValue.slice(0, pxIndex));
	return pixelUnit;
};

/** Font utility that converts pixels to rem units */
const convertPixelsToRem = (
	pixelValue: string,
	baseFontSize: string = defaultBrowserFontSize
): string => {
	const pixelUnit: number = getPixelUnit(pixelValue);
	const baseFontUnit: number = getPixelUnit(baseFontSize);
	const calculatedRemUnit: number = pixelUnit / baseFontUnit;

	return String(calculatedRemUnit) + 'rem';
};

/** Font utility that converts pixels to em units */
const convertPixelsToEm = (
	pixelValue: string,
	baseFontSize: string = defaultBrowserFontSize
): string => {
	const pixelUnit: number = getPixelUnit(pixelValue);
	const baseFontUnit: number = getPixelUnit(baseFontSize);
	const calculatedEmUnit: number = pixelUnit / baseFontUnit;

	return String(calculatedEmUnit) + 'em';
};

export { convertPixelsToRem, convertPixelsToEm };
