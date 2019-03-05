import { getEnvFromHost } from '../src/hostEnv';

describe('HostEnv', () => {
	test('reports host environment', () => {
		// Arrange
		// const host='http://localhost:3600'
		const envHost = getEnvFromHost();
		console.log(envHost);

		// Assert
		expect(envHost).toBeObject();
		expect(envHost.host).toBeString();
		expect(null).toBeNil();
	});
});
