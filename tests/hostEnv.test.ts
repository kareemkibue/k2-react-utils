import { getEnvFromHost } from '../src/hostEnv';

test('Check remote environment', () => {
    // Arrange
    const hostEnv = getEnvFromHost('http://www.example.com');

    // Assert
    expect(hostEnv).toBeObject();
    expect(hostEnv.host).toBeString();
    expect(hostEnv.isLocal).toBeBoolean();
    expect(hostEnv.isLocal).toBeFalse();

});

test('Check local host environment', () => {
    // Arrange
    const hostEnv = getEnvFromHost();

    // Assert
    expect(hostEnv).toBeObject();
    expect(hostEnv.host).toBeString();
    expect(hostEnv.isLocal).toBeBoolean();
    expect(hostEnv.isLocal).toBeTrue();

});
