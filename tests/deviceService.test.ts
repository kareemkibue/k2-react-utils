// Reference: https://developers.whatismybrowser.com/useragents/explore/operating_system_name/




import { getBrowserName, getOperatingSystem, getPlatform } from '../src/deviceService';

describe('application running on a Windows machine', () => {
    const ie9UserAgent = 'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)'
    const ie11UserAgent = 'Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
    const edgeUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134'
    const chromeUserAgent = '"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"'

    it('is running Windows OS', () => {
        expect(getOperatingSystem(ie9UserAgent)).toBe('windows')
        expect(getOperatingSystem(ie11UserAgent)).toBe('windows')
        expect(getOperatingSystem(chromeUserAgent)).toBe('windows')
        expect(getOperatingSystem(edgeUserAgent)).toBe('windows')
    })
    it('is on the desktop platform', () => {
        expect(getPlatform(ie9UserAgent)).toBe('desktop')
        expect(getPlatform(ie11UserAgent)).toBe('desktop')
        expect(getPlatform(chromeUserAgent)).toBe('desktop')
        expect(getPlatform(edgeUserAgent)).toBe('desktop')
    })
    it('is IE', () => {
        expect(getBrowserName(ie9UserAgent)).toBe('ie')
        expect(getBrowserName(ie11UserAgent)).toBe('ie')
    })
    it('is Chrome', () => {
        expect(getBrowserName(chromeUserAgent)).toBe('chrome')
    })
    it('is Edge', () => {
        expect(getBrowserName(edgeUserAgent)).toBe('edge')
    })

})

describe('application running on a Mac', () => {
    const macOSXChromeUserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36'
    const macUserAgent = 'Mozilla/4.0 (compatible; MSIE 5.23; Mac_PowerPC)'
    const macOsXSafariUserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/603.2.5 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.5'

    it('is running on Mac OS', () => {
        expect(getOperatingSystem(macOSXChromeUserAgent)).toBe('mac os')
        expect(getOperatingSystem(macUserAgent)).toBe('mac os')
        expect(getOperatingSystem(macOsXSafariUserAgent)).toBe('mac os')
    })
    it('is on the desktop platform', () => {
        expect(getPlatform(macOSXChromeUserAgent)).toBe('desktop')
        expect(getPlatform(macUserAgent)).toBe('desktop')
        expect(getPlatform(macOsXSafariUserAgent)).toBe('desktop')
    })
    it('is Safari', () => {
        expect(getBrowserName(macOSXChromeUserAgent)).toBe('chrome')
        expect(getBrowserName(macUserAgent)).toBe('ie')
        expect(getBrowserName(macOsXSafariUserAgent)).toBe('safari')
    })
})


describe('application running on an iPhone/iPad/iPod', () => {
    const iphoneUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1'

    it('is running on iOs', () => {
        expect(getOperatingSystem(iphoneUserAgent)).toBe('ios')
    })
    it('is mobile', () => {
        expect(getPlatform(iphoneUserAgent)).toBe('mobile')
    })
    it('is Safari', () => {
        expect(getBrowserName(iphoneUserAgent)).toBe('safari')
    })
})


describe('application running on an Android smartphone', () => {
    const androidUserAgent = 'Mozilla/5.0 (Linux; Android 7.0; Redmi Note 4 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36'

    it('is running on Android OS', () => {
        expect(getOperatingSystem(androidUserAgent)).toBe('android')
    })
    it('is mobile', () => {
        expect(getPlatform(androidUserAgent)).toBe('mobile')
    })
    it('is Chrome', () => {
        expect(getBrowserName(androidUserAgent)).toBe('chrome')
    })
})