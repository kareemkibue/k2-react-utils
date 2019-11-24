
type BrowserName = null | "chrome" | "chromium" | "safari" | "firefox" | "ie" | "ie mobile" | "edge" | "opera" | "opera mini"
type OperatingSytem = null | "windows" | "mac os" | "android" | "ios";
type Platform = "desktop" | "mobile"






const getOperatingSystem = (userAgent: string = navigator.userAgent): OperatingSytem => {
    if (userAgent.match(/Windows|Win64|Win32/i)) {
        return 'windows'
    }
    if (userAgent.match(/iPhone|iPad|iPod/i)) {
        return 'ios'
    }
    if (userAgent.match(/Mac OS X|Mac_PowerPC/i)) {
        return 'mac os'
    }
    if (userAgent.match(/Android/i)) {
        return 'android'
    }

    return null
}

const getBrowserName = (userAgent: string = navigator.userAgent): BrowserName => {
    if (userAgent.match(/edge/i)) {
        return 'edge'
    }
    if (userAgent.match(/chromium/i)) {
        return 'chromium'
    }
    if (userAgent.match(/chrome/i)) {
        return 'chrome'
    }
    if (userAgent.match(/firefox/i)) {
        return 'firefox'
    }
    if (userAgent.match(/msie|trident/i)) {
        return 'ie'
    }
    if (userAgent.match(/IEMobile/i)) {
        return 'ie mobile'
    }
    if (userAgent.match(/safari/i)) {
        return 'safari'
    }
    if (userAgent.match(/Opera Mini/i)) {
        return 'opera mini'
    }
    if (userAgent.match(/opera|opr/i)) {
        return 'opera'
    }

    return null;
};


const getPlatform = (userAgent: string = navigator.userAgent): Platform => {
    if (userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini/i)) {
        return 'mobile'
    }

    return "desktop"
}






export {
    getBrowserName,

    getOperatingSystem,
    getPlatform, BrowserName, OperatingSytem, Platform
}