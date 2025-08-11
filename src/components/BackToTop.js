import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (_jsx(AnimatePresence, { children: isVisible && (_jsx(motion.button, { initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0 }, onClick: scrollToTop, className: "fixed bottom-8 right-8 p-3 bg-gradient-to-r from-primary-600 to-mint-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50", whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, children: _jsx(ArrowUp, { size: 24 }) })) }));
};
export default BackToTop;
//# sourceMappingURL=BackToTop.js.map