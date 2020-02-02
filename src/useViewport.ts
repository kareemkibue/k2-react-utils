
import * as React from 'react';

const { useEffect, useState } = React


interface IUseViewport {
    viewportWidth: number;
    viewportHeight: number;
    documentHeight: number;
}

const getViewportWidth = (): number => {
    const docClientWidth = document.documentElement
        ? document.documentElement.clientWidth
        : 0;
    const documentBodyWidth = document.body ? document.body.clientWidth : 0;

    return window.innerWidth || docClientWidth || documentBodyWidth;
};

const getViewportHeight = (): number => {
    const documentElement = document.documentElement;
    const documentHeight = documentElement.clientHeight;

    return window.innerHeight || documentHeight;
};

const getDocumentHeight = (): number => {
    const documentElement = document.documentElement;
    const documentHeight: number = documentElement.scrollHeight;
    return documentHeight;
};

const useViewport = (): IUseViewport => {
    const [viewportWidth, setViewportWidth] = useState<number>(getViewportWidth());
    const [viewportHeight, setViewportHeight] = useState<number>(getViewportHeight());
    const [documentHeight, setDocumentHeight] = useState<number>(getDocumentHeight());

    useEffect(() => {
        window.addEventListener('resize', getWindowDimensions);

        return () => {
            window.removeEventListener('resize', getWindowDimensions);
        }
    }, []);

    const getWindowDimensions = (): void => {
        setViewportWidth(getViewportWidth());
        setViewportHeight(getViewportHeight());
        setDocumentHeight(getDocumentHeight());
    };



    return {
        viewportWidth,
        viewportHeight,
        documentHeight,
    };
};

export { useViewport };