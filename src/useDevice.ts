import * as React from 'react';
import {
    BrowserName, getBrowserName, getOperatingSystem, getPlatform, OperatingSystem, Platform
} from './device';

const { useState } = React



interface IUseDevice {
    browserName: BrowserName

    operatingSystem: OperatingSystem
    platform: Platform

}








const useDevice = (userAgent: string = navigator.userAgent): IUseDevice => {

    const [browserName] = useState<BrowserName>(getBrowserName(userAgent));
    const [operatingSystem,] = useState<OperatingSystem>(getOperatingSystem(userAgent));
    const [platform,] = useState<Platform>(getPlatform(userAgent));



    return {
        browserName,
        operatingSystem,
        platform,
    };
};

export {
    useDevice
};