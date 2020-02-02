/**
 * Classify - Returns a list of classes after an Evalution
 */
const classify = (classObject: any): string => {
	let classList: string = '';

	for (const i in classObject) {
		if (classObject[i] === true) {
			classList += i + ' ';
		}
	}

	return classList.trim();
};

export { classify };
