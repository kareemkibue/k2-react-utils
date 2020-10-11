import * as React from 'react';
import {
    BrowserName, getBrowserName, getOperatingSystem, getPlatform, OperatingSystem, Platform
} from './device';

const { useState } = React










const useDevice = (userAgent: string = navigator.userAgent) => {

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