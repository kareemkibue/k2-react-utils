import { renderHook } from '@testing-library/react-hooks';
import { useDevice } from '../src/useDevice';

test('application running on Windows should be the Chrome browser', () => {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
    const { result } = renderHook(() => useDevice(userAgent))
    const { browserName, operatingSytem, platform } = result.current

    expect(operatingSytem).toBe('windows')
    expect(platform).toBe('desktop')
    expect(browserName).toBe('chrome')
});

test('application running on a Mac should be the Safari browser', () => {
    const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/603.2.5 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.5'
    const { result } = renderHook(() => useDevice(userAgent))
    const { browserName, operatingSytem, platform } = result.current

    expect(operatingSytem).toBe('mac os')
    expect(platform).toBe('desktop')
    expect(browserName).toBe('safari')
});

test('application running on Android should be the Chrome browser', () => {
    const userAgent = 'Mozilla/5.0 (Linux; Android 7.0; Redmi Note 4 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36'
    const { result } = renderHook(() => useDevice(userAgent))
    const { browserName, operatingSytem, platform } = result.current

    expect(operatingSytem).toBe('android')
    expect(platform).toBe('mobile')
    expect(browserName).toBe('chrome')
});

test('application running on iOs should be the Safari browser', () => {
    const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1'
    const { result } = renderHook(() => useDevice(userAgent))
    const { browserName, operatingSytem, platform } = result.current

    expect(operatingSytem).toBe('ios')
    expect(platform).toBe('mobile')
    expect(browserName).toBe('safari')
});
