
import * as React from 'react';

const { useEffect, useState } = React




const getVerticalScrollPosition = (): number => {
    const documentElement = document.documentElement;
    const documentElementScrollTop = documentElement
        ? documentElement.scrollTop
        : 0;
    return documentElementScrollTop || window.scrollY;
};

const useScroll = () => {
    const [verticalScrollPosition, setVerticalScrollPosition] = useState<number>(
        getVerticalScrollPosition()
    );

    useEffect(() => {
        window.addEventListener('scroll', getScrollPosition);

        return () => {
            window.removeEventListener('scroll', getScrollPosition);
        }
    }, []);

    const getScrollPosition = (): void => {
        setVerticalScrollPosition(getVerticalScrollPosition());
    };

    return {
        verticalScrollPosition,
    };
};

export { useScroll };