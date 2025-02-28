'use client'
import React from "react";

export function useHeightAnimation(isOpen = false, duration = 350) {
    const contentRef = React.useRef<any>(null);
    const [height, setHeight] = React.useState(isOpen ? 'auto' : 0);
    const handleClick = () => {
        const contentRect = contentRef.current?.getBoundingClientRect();
        setHeight(`${contentRect.height}px`);
        setTimeout(() => setHeight(height === 0 ? `${contentRect.height}px` : 0));
        setTimeout(() => {
            if (height === 0) setHeight('auto');
        },
            duration,
            height,
        );
    };
    return { height, handleClick, contentRef };
}