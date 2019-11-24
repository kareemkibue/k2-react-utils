import * as React from 'react';
import {
    BrowserName, getBrowserName, getOperatingSystem, getPlatform, OperatingSytem, Platform
} from './deviceService';

const { useState } = React



interface IUseDevice {
    browserName: BrowserName

    operatingSytem: OperatingSytem
    platform: Platform

}








const useDevice = (userAgent: string = navigator.userAgent): IUseDevice => {

    const [browserName] = useState<BrowserName>(getBrowserName(userAgent));
    const [operatingSytem,] = useState<OperatingSytem>(getOperatingSystem(userAgent));
    const [platform,] = useState<Platform>(getPlatform(userAgent));



    return {
        browserName,
        operatingSytem,
        platform,
    };
};

export {
    useDevice
};