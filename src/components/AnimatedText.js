import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const AnimatedText = ({ text, className = '', delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex < text.length) {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }
        }, 100 + delay);
        return () => clearTimeout(timer);
    }, [currentIndex, text, delay]);
    return (_jsxs(motion.span, { className: className, children: [displayText, _jsx(motion.span, { animate: { opacity: [1, 0] }, transition: { duration: 0.8, repeat: Infinity }, className: "text-primary-600", children: "|" })] }));
};
export default AnimatedText;
//# sourceMappingURL=AnimatedText.js.map