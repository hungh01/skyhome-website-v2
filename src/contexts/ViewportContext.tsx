'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ViewportContextType {
    isMobile: boolean;
    width: number;
    scrollY: number;
}

const ViewportContext = createContext<ViewportContextType | undefined>(undefined);

export const ViewportProvider = ({ children }: { children: ReactNode }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [width, setWidth] = useState(2000);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1022); // breakpoint tùy chỉnh
            setWidth(window.innerWidth);
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        // Clean up scroll event
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <ViewportContext.Provider value={{ isMobile, width, scrollY }}>
            {children}
        </ViewportContext.Provider>
    );
};

export const useViewport = (): ViewportContextType => {
    const context = useContext(ViewportContext);
    if (!context) {
        throw new Error('useViewport must be used within a ViewportProvider');
    }
    return context;
};
