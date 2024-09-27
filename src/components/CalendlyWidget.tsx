"use client"
// components/CalendlyWidget.tsx
import React, { useEffect } from 'react';

const CalendlyWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/adilpatel-fit/30min' });
        return false;
    };

    return (
        <div>
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            <a href="#" onClick={handleClick}>
                Schedule time with me
            </a>
        </div>
    );
};

export default CalendlyWidget;
