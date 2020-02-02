import * as React from 'react';
import { browserStorage, BrowserStorageType } from './browserStorage';

const { useState } = React


const useBrowserStorage = <TValue>(storageType: BrowserStorageType, key: string, ): [TValue, (value: TValue) => void, () => void] => {
    const [storedValue, setStoredValue] = useState<any>(browserStorage.getStoredValue(storageType, key));

    const setValueToStorage = (valueToSet: TValue | any): void => {
        browserStorage.setValue(storageType, key, valueToSet);
        setStoredValue(valueToSet);
    };

    const clearValueFromStorage = (): void => {
        browserStorage.clearValue(storageType, key)
        setStoredValue(null);
    };

    return [storedValue, setValueToStorage, clearValueFromStorage];
};

export { useBrowserStorage };
