import * as React from 'react';

const { useState } = React

interface IBrowser {
    name: string;
    version: string | null;
}

interface IUseDevice {
    isMobile: boolean;
    isIos: boolean;
    isAndroid: boolean;
    isBlackberry: boolean;
    isIEMobile: boolean;
    isDesktop: boolean;
    isOperaMini: boolean;
    isIPod: boolean;
    isIPad: boolean;
    isFirefox: boolean;
    isOpera: boolean;
    isChrome: boolean;
    isChromium: boolean;
    isEdge: boolean;
    isIPhone: boolean;
    isIE: boolean;
    browser: IBrowser | null;
}

const userAgent = navigator.userAgent;
//   https://developers.whatismybrowser.com/useragents/explore/operating_system_name/ios/
// const userAgent = 'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)';
// const userAgent = 'Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
// const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1'

const checkIfDeviceIsMobile = (): boolean => {
    const match =
        userAgent.match(/Android/i) ||
        userAgent.match(/BlackBerry/i) ||
        userAgent.match(/iPhone|iPad|iPod/i) ||
        userAgent.match(/Opera Mini/i) ||
        userAgent.match(/IEMobile/i);
    return Boolean(match);
};

const checkIfDeviceIsIos = (): boolean => {
    const match = userAgent.match(/iPhone|iPad|iPod/i);
    return Boolean(match);
};

const checkIfDeviceIsIPhone = (): boolean => {
    const match = userAgent.match(/Chrome/i);
    return Boolean(match);
};

const checkIfDeviceIsIPad = (): boolean => {
    const match = userAgent.match(/Chrome/i);
    return Boolean(match);
};

const checkIfDeviceIsIPod = (): boolean => {
    const match = userAgent.match(/Chrome/i);
    return Boolean(match);
};

const checkIfDeviceIsAndroid = (): boolean => {
    const match = userAgent.match(/Android/i);
    return Boolean(match);
};

const checkIfDeviceIsBlackberry = (): boolean => {
    const match = userAgent.match(/BlackBerry/i);
    return Boolean(match);
};

const checkIfDeviceIsIEMobile = (): boolean => {
    const match = userAgent.match(/IEMobile/i);
    return Boolean(match);
};

const checkIfDeviceIsOperaMini = (): boolean => {
    const match = userAgent.match(/Opera Mini/i);
    return Boolean(match);
};

const checkIfDeviceIsOpera = (): boolean => {
    const match = userAgent.match(/Opr|Opera/i);
    return Boolean(match);
};

const checkIfDeviceIsChrome = (): boolean => {
    const match = userAgent.match(/Chrome/i);
    return Boolean(match);
};

const checkIfDeviceIsChromium = (): boolean => {
    const match = userAgent.match(/chromium/i);
    return Boolean(match);
};

const checkIfDeviceIsFirefox = (): boolean => {
    const match = userAgent.match(/firefox/i);
    return Boolean(match);
};

const checkIfDeviceIsEdge = (): boolean => {
    const match = userAgent.match(/edge/i);
    return Boolean(match);
};

const checkIfDeviceIsIE = (): boolean => {
    const match = userAgent.match(/msie|trident/i);
    return Boolean(match);
};

// TODO Refactor code - @kareemkibue
const getBrowser = (): IBrowser | null => {
    let tem;
    let M =
        userAgent.match(
            /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
        ) || [];

    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];

        return {
            name: 'IE',
            version: tem[1],
        };
    }

    if (/msie/i.test(M[1])) {
        return {
            name: 'IE',
            version: M[2],
        };
    }

    // if (M[1] === 'Chrome') {
    // tem = userAgent.match(/\bOPR|Edge\/(\d+)/);
    // if (tem != null)
    // tem[1];
    // }

    // TODO Calculate app userAgent
    // M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    // if ((tem = userAgent.match(/version\/(\d+)/i)) != null) {
    //     M.splice(1, 1, tem[1]);
    // }
    // return M[1];

    if (!M) {
        return null;
    }

    return {
        name: M[1],
        version: M[2],
    };
};

const useDevice = (): IUseDevice => {
    const [browser] = useState<IBrowser | null>(getBrowser());
    const [isAndroid] = useState<boolean>(checkIfDeviceIsAndroid());
    const [isBlackberry] = useState<boolean>(checkIfDeviceIsBlackberry());
    const [isChrome] = useState<boolean>(checkIfDeviceIsChrome());
    const [isChromium] = useState<boolean>(checkIfDeviceIsChromium());
    const [isDesktop] = useState<boolean>(!checkIfDeviceIsMobile());
    const [isEdge] = useState<boolean>(checkIfDeviceIsEdge());
    const [isFirefox] = useState<boolean>(checkIfDeviceIsFirefox());
    const [isIE] = useState<boolean>(checkIfDeviceIsIE());
    const [isIEMobile] = useState<boolean>(checkIfDeviceIsIEMobile());
    const [isIPad] = useState<boolean>(checkIfDeviceIsIPad());
    const [isIPhone] = useState<boolean>(checkIfDeviceIsIPhone());
    const [isIPod] = useState<boolean>(checkIfDeviceIsIPod());
    const [isIos] = useState<boolean>(checkIfDeviceIsIos());
    const [isMobile] = useState<boolean>(checkIfDeviceIsMobile());
    const [isOpera] = useState<boolean>(checkIfDeviceIsOpera());
    const [isOperaMini] = useState<boolean>(checkIfDeviceIsOperaMini());

    return {
        isMobile,
        isIos,
        isAndroid,
        isDesktop,
        isIEMobile,
        isBlackberry,
        isOperaMini,
        isIE,
        isIPod,
        isIPad,
        isFirefox,
        isOpera,
        isChrome,
        isChromium,
        isEdge,
        isIPhone,
        browser,
    };
};

export { useDevice };