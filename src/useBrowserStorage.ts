import * as React from 'react';

const { useState, useEffect } = React

const useBrowserStorage = <TValue>(
    storageType: 'SESSION' | 'LOCAL',
    key: string,
): [TValue, (value: TValue) => void, () => void] => {
    const [storedValue, setStoredValue] = useState<any>('');

    useEffect(() => {
        getValueFromStorage();
    }, []);

    const getValueFromStorage = (): void => {
        if (storageType === "LOCAL") {
            const cachedValue = localStorage.getItem(key) || '';
            setStoredValue(JSON.parse(cachedValue));
        }
        if (storageType === "LOCAL") {
            const cachedValue = sessionStorage.getItem(key);
            setStoredValue(cachedValue);
        }
    };

    const setValueToStorage = (valueToSet: TValue | any): void => {
        if (storageType === "LOCAL") {
            localStorage.setItem(key, getObjectValue(valueToSet))
        } if (storageType === "SESSION") {
            sessionStorage.setItem(key, getObjectValue(valueToSet))
        }

        setStoredValue(valueToSet);
    };

    const clearValueFromStorage = (): void => {
        if (storageType === "LOCAL") {
            localStorage.removeItem(key)
        }
        if (storageType === "SESSION") {
            sessionStorage.removeItem(key)
        }

        setStoredValue(null);
    };

    const getObjectValue = (value: any): string => {
        try {
            return JSON.stringify(value)
        } catch (error) {
            return String(value)
        }
    }

    return [storedValue, setValueToStorage, clearValueFromStorage];
};

export { useBrowserStorage };
