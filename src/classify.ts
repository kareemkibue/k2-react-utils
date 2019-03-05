/**
 * Classify - Returns a list of classes after an Evalution
 */
export function classify(classObject: { [field: string]: boolean }): string {
	let classList: string = '';

	for (const i in classObject) {
		if (classObject[i] === true) {
			classList += i + ' ';
		}
	}

	return classList.trim();
}
