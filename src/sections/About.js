import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Lightbulb, Users, Coffee, Music } from 'lucide-react';
const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const timeline = [
        {
            year: '2022',
            title: 'Started Coding Journey',
            description: 'Discovered my passion for web development during high school',
            color: 'from-primary-500 to-mint-400',
        },
        {
            year: '2023',
            title: 'Joined Passerelles Numériques Cambodia',
            description: 'Began formal education in computer science and web development',
            color: 'from-mint-500 to-neon-400',
        },
        {
            year: '2024',
            title: 'First Project',
            description: 'Gained experience in front-end development',
            color: 'from-neon-500 to-primary-400',
        },
        {
            year: '2025',
            title: 'Actively Seeking Internship Opportunities',
            description: 'Ready to apply skills and grow through experience.',
            color: 'from-primary-500 to-purple-400',
        },
    ];
    const hobbies = [
        { icon: _jsx(Lightbulb, { size: 24 }), name: 'UI/UX Design', description: 'Creating beautiful interfaces' },
        { icon: _jsx(Users, { size: 24 }), name: 'Team Collaboration', description: 'Working with diverse teams' },
        { icon: _jsx(Coffee, { size: 24 }), name: 'Focus & Code', description: 'Maintaining concentration for effective coding' },
        { icon: _jsx(Music, { size: 24 }), name: 'Research', description: 'Exploring emerging technologies and innovative ideas.' },
    ];
    return (_jsx("section", { id: "about", className: "py-20 bg-gradient-to-b from-transparent to-purple-50/30 dark:to-purple-900/10", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, className: "text-center mb-20", children: [_jsx("h2", { className: "text-5xl md:text-6xl font-bold font-poppins gradient-text mb-6", children: "About Me" }), _jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Get to know the person behind the code" })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-12 mb-20", children: [_jsx(motion.div, { initial: { x: -50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, viewport: { once: true }, transition: { delay: 0.2 }, children: _jsx("img", { src: "src/assets/image_about.jpg", alt: "Sreynich working", className: "w-full h-96 object-cover rounded-2xl shadow-lg" }) }), _jsxs(motion.div, { initial: { x: 50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, viewport: { once: true }, transition: { delay: 0.4 }, className: "space-y-6", children: [_jsx("h3", { className: "text-3xl font-bold font-poppins text-gray-800 dark:text-white", children: "My Journey in Tech" }), _jsx("p", { className: "text-gray-600 dark:text-gray-300 leading-relaxed", children: "As a young woman in tech, I've always been passionate about breaking barriers and creating innovative solutions. My journey started during high school when I wrote my first line of code and fell in love with the endless possibilities of programming." }), _jsx("p", { className: "text-gray-600 dark:text-gray-300 leading-relaxed", children: "At Passerelles Num\u00E9riques Cambodia, I discovered my true calling in web development. The combination of creativity and logic, the ability to bring ideas to life through code, and the opportunity to solve real-world problems drives my passion every day." }), _jsx("p", { className: "text-gray-600 dark:text-gray-300 leading-relaxed", children: "Today, I specialize in modern web technologies and am committed to creating inclusive, accessible, and beautiful digital experiences that make a difference." })] })] }), _jsxs(motion.div, { ref: ref, initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, className: "glassmorphism rounded-3xl p-8 mb-20", children: [_jsx("h3", { className: "text-3xl font-bold font-poppins text-center mb-12 gradient-text", children: "Values & Vision" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-primary-500 to-mint-400 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Heart, { className: "text-white", size: 28 }) }), _jsx("h4", { className: "text-xl font-semibold mb-3", children: "Passion-Driven" }), _jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Every project is an opportunity to create something meaningful and impactful." })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-mint-500 to-neon-400 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Target, { className: "text-white", size: 28 }) }), _jsx("h4", { className: "text-xl font-semibold mb-3", children: "Goal-Oriented" }), _jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Focused on delivering high-quality solutions that exceed expectations." })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-neon-500 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Users, { className: "text-white", size: 28 }) }), _jsx("h4", { className: "text-xl font-semibold mb-3", children: "Collaborative" }), _jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Believing in the power of teamwork and diverse perspectives." })] })] })] }), _jsxs(motion.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, transition: { delay: 0.2 }, className: "mb-20", children: [_jsx("h3", { className: "text-3xl font-bold font-poppins text-center mb-12 gradient-text", children: "My Journey" }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-mint-400 to-neon-500 transform -translate-x-1/2" }), _jsx("div", { className: "space-y-12", children: timeline.map((item, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { delay: 0.3 + index * 0.1 }, className: `flex items-center ${index === 0 || index === 2 ? 'md:justify-start' : 'md:justify-end'}`, children: [_jsx("div", { className: `flex-1 w-1/2 p-6 ${index === 0 || index === 2 ? 'md:pr-8 md:text-left' : 'md:pl-8 md:text-right'}`, children: _jsxs("div", { className: "glassmorphism rounded-xl p-6", children: [_jsx("div", { className: `inline-block px-3 py-1 bg-gradient-to-r ${item.color} text-white text-sm font-semibold rounded-full mb-3`, children: item.year }), _jsx("h4", { className: "text-xl font-bold mb-2", children: item.title }), _jsx("p", { className: "text-gray-600 dark:text-gray-300", children: item.description })] }) }), _jsx("div", { className: `absolute left-1/2 w-4 h-4 bg-gradient-to-r ${item.color} rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-800` })] }, index))) })] })] }), _jsxs(motion.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, transition: { delay: 0.4 }, children: [_jsx("h3", { className: "text-3xl font-bold font-poppins text-center mb-12 gradient-text", children: "When I'm Not Coding" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: hobbies.map((hobby, index) => (_jsxs(motion.div, { whileHover: { scale: 1.05, y: -5 }, className: "glassmorphism rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300", children: [_jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-primary-500 to-mint-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white", children: hobby.icon }), _jsx("h4", { className: "font-semibold mb-2", children: hobby.name }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: hobby.description })] }, index))) })] })] }) }));
};
export default About;
//# sourceMappingURL=About.js.map