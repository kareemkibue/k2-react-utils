module.exports = {
	roots: ['<rootDir>/app'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	// snapshotSerializers: ['enzyme-to-json/serializer'],
	// setupFilesAfterEnv: ['<rootDir>/setupeEnzyme.ts'],
};
