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
            const storedValue = localStorage.getItem(key) || '';
            setStoredValue(getObjectValue(storedValue));
        }
        if (storageType === "LOCAL") {
            const storedValue = sessionStorage.getItem(key);
            setStoredValue(getObjectValue(storedValue));
        }
    };

    const setValueToStorage = (valueToSet: TValue | any): void => {
        if (storageType === "LOCAL") {
            localStorage.setItem(key, JSON.stringify(valueToSet))
        } if (storageType === "SESSION") {
            sessionStorage.setItem(key, JSON.stringify(valueToSet))
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
            return JSON.parse(value)
        } catch (error) {
            return String(value)
        }
    }

    return [storedValue, setValueToStorage, clearValueFromStorage];
};

export { useBrowserStorage };
