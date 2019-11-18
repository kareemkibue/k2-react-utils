
type BrowserStorageType = 'SESSION' | 'LOCAL'
// type ObjectValue = null | string | Array<any> | { [field: string]: any } 

const getStoredValue = (storageType: BrowserStorageType, key: string): any => {
    if (storageType === "LOCAL") {
        const storedValue = localStorage.getItem(key) || '';
        return getObjectValue(storedValue);
    }
    if (storageType === "SESSION") {
        const storedValue = sessionStorage.getItem(key);
        return getObjectValue(storedValue);
    }

    return;
}

const setValue = (storageType: BrowserStorageType, key: string, value: any) => {
    if (storageType === "LOCAL") {
        localStorage.setItem(key, JSON.stringify(value))
    } if (storageType === "SESSION") {
        sessionStorage.setItem(key, JSON.stringify(value))
    }
}

const clearValue = (storageType: BrowserStorageType, key: string): void => {
    if (storageType === "LOCAL") {
        localStorage.removeItem(key)
    }
    if (storageType === "SESSION") {
        sessionStorage.removeItem(key)
    }
}

const getObjectValue = (value: string | null): any => {
    if (value === null) {
        return null
    }

    try {
        return JSON.parse(value)
    } catch (error) {
        return String(value)
    }
}

const browserStorage = { getStoredValue, setValue, clearValue }

export { browserStorage, BrowserStorageType }