import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send, MessageSquare } from 'lucide-react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            // Reset success message after 3 seconds
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 2000);
    };
    const contactInfo = [
        {
            icon: _jsx(Mail, { size: 24 }),
            title: 'Email',
            value: 'sreynich.chhoeurn@student.passerellesnumeriques.org',
            link: 'mailto:sreynich@email.com',
            color: 'from-red-500 to-pink-500'
        },
        {
            icon: _jsx(Phone, { size: 24 }),
            title: 'Phone',
            value: '+855 97 698 2459',
            link: 'tel:+855976982459',
            color: 'from-green-500 to-teal-500'
        },
        {
            icon: _jsx(MapPin, { size: 24 }),
            title: 'Location',
            value: ' Phnom Penh, Cambodia',
            link: 'https://www.google.com/search?gs_ssp=eJzj4tZP1zcsSUkqMctIM2C0UjWoMDY0sDQ1TExJMU01Sk6xMLQyqDA0N0w1SDKzTDZPNkszT0r04inIS1ZITsxNyk_JTAQAdmoTqQ&q=pnc+cambodia&rlz=1C1GCEU_enKH1173KH1173&oq=pnc&gs_lcrp=EgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyCQgAEEUYORiABDINCAEQLhivARjHARiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg9MgYIBhBFGEEyBggHEEUYQdIBCDIzOTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
            color: 'from-blue-500 to-purple-500'
        }
    ];
    const socialLinks = [
        {
            icon: _jsx(Github, { size: 24 }),
            name: 'GitHub',
            url: 'https://github.com/Sreynich-Chhoeurn',
            color: 'hover:bg-gray-800'
        },
        {
            icon: _jsx(Linkedin, { size: 24 }),
            name: 'LinkedIn',
            url: 'linkedin.com/in/sreynich-chhoeurn-776b68344',
            color: 'hover:bg-blue-600'
        },
        {
            icon: _jsx(Facebook, { size: 24 }),
            name: 'Facebook',
            url: 'https://www.facebook.com/share/1EkLV5hjSb/?mibextid=wwXIfr',
            color: 'hover:bg-blue-500'
        }
    ];
    return (_jsx("section", { id: "contact", className: "py-20 bg-gradient-to-b from-purple-50/30 to-transparent dark:from-purple-900/10 dark:to-transparent", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, className: "text-center mb-20", children: [_jsx("h2", { className: "text-5xl md:text-6xl font-bold font-poppins gradient-text mb-6", children: "Let's Work Together!" }), _jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Have a project in mind or want to collaborate? I'd love to hear from you!" })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-16", children: [_jsxs(motion.div, { initial: { x: -50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, viewport: { once: true }, transition: { delay: 0.2 }, children: [_jsx("h3", { className: "text-3xl font-bold font-poppins mb-8 gradient-text", children: "Get in Touch" }), _jsx("div", { className: "space-y-6 mb-12", children: contactInfo.map((info, index) => (_jsxs(motion.a, { href: info.link, initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { delay: 0.3 + index * 0.1 }, whileHover: { scale: 1.02 }, className: "flex items-center p-4 glassmorphism rounded-xl hover:shadow-lg transition-all duration-300 block", children: [_jsx("div", { className: `w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center text-white mr-4`, children: info.icon }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-lg", children: info.title }), _jsx("p", { className: "text-gray-600 dark:text-gray-300", children: info.value })] })] }, index))) }), _jsxs("div", { className: "mb-12", children: [_jsx("h4", { className: "text-xl font-bold mb-6", children: "Follow Me" }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((social, index) => (_jsx(motion.a, { href: social.url, target: "_blank", rel: "noopener noreferrer", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.6 + index * 0.1 }, whileHover: { scale: 1.1, y: -5 }, className: `p-3 glassmorphism rounded-full text-gray-700 dark:text-gray-300 transition-all duration-300 ${social.color}`, children: social.icon }, index))) })] }), _jsx(motion.div, { initial: { scale: 0 }, whileInView: { scale: 1 }, viewport: { once: true }, transition: { delay: 0.8, type: "spring" }, className: "relative", children: _jsxs("div", { className: "glassmorphism rounded-xl p-6 text-center", children: [_jsx(MessageSquare, { size: 32, className: "mx-auto mb-3 text-primary-600" }), _jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Prefer to chat? Send me a message and I'll get back to you within 24 hours!" })] }) })] }), _jsx(motion.div, { ref: ref, initial: { x: 50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, viewport: { once: true }, transition: { delay: 0.4 }, children: _jsxs("div", { className: "glassmorphism rounded-xl p-8", children: [_jsx("h3", { className: "text-2xl font-bold font-poppins mb-6", children: "Send Message" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.5 }, children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium mb-2", children: "Name *" }), _jsx("input", { type: "text", name: "name", id: "name", required: true, value: formData.name, onChange: handleInputChange, className: "w-full px-4 py-3 glassmorphism rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300", placeholder: "Your name" })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.6 }, children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-2", children: "Email *" }), _jsx("input", { type: "email", name: "email", id: "email", required: true, value: formData.email, onChange: handleInputChange, className: "w-full px-4 py-3 glassmorphism rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300", placeholder: "your.email@example.com" })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.7 }, children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium mb-2", children: "Message *" }), _jsx("textarea", { name: "message", id: "message", required: true, rows: 6, value: formData.message, onChange: handleInputChange, className: "w-full px-4 py-3 glassmorphism rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none", placeholder: "Tell me about your project or just say hello!" })] }), _jsx(motion.button, { type: "submit", disabled: isSubmitting, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.8 }, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-mint-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center", children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" }, className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" }), "Sending..."] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { size: 20, className: "mr-2" }), "Send Message"] })) })] }), isSubmitted && (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "mt-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg text-green-800 dark:text-green-300 text-center", children: [_jsx("p", { className: "font-semibold", children: "Message sent successfully! \uD83C\uDF89" }), _jsx("p", { className: "text-sm mt-1", children: "I'll get back to you within 24 hours." })] }))] }) })] })] }) }));
};
export default Contact;
//# sourceMappingURL=Contact.js.map