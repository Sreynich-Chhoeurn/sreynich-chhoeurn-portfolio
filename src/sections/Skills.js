import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Palette, Users, Clock, MessageSquare, Target, } from 'lucide-react';
const Skills = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const hardSkills = [
        { name: 'HTML / CSS', level: 69, color: 'from-orange-500 to-red-500' },
        { name: 'Bootstrap 5', level: 65, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 55, color: 'from-blue-400 to-cyan-400' },
        { name: 'JavaScript', level: 54, color: 'from-yellow-500 to-orange-500' },
        { name: 'Vue.js', level: 66, color: 'from-green-500 to-teal-500' },
        { name: 'TypeScript (OOP)', level: 70, color: 'from-blue-400 to-cyan-400' },
        { name: 'Node.js', level: 73, color: 'from-green-600 to-lime-500' },
        { name: 'PHP', level: 60, color: 'from-purple-600 to-indigo-500' },
        { name: 'Laravel', level: 70, color: 'from-red-500 to-pink-500' },
        { name: 'MySQL (Database)', level: 67, color: 'from-blue-600 to-purple-500' },
        { name: 'Git / GitHub', level: 75, color: 'from-gray-700 to-gray-900' },
        { name: 'Microsoft Office', level: 70, color: 'from-gray-700 to-gray-900' },
        { name: 'UI Design', level: 72, color: 'from-gray-700 to-gray-900' },
        { name: 'Data Analytics (Power BI)', level: 58, color: 'from-blue-400 to-cyan-400' },
        { name: 'Algorithms', level: 58, color: 'from-orange-500 to-red-500' },
        { name: 'Flutter', level: 60, color: 'from-orange-500 to-red-500' },
    ];
    const skillCategories = [
        {
            title: 'Front-End',
            icon: _jsx(Globe, { size: 20 }),
            skills: ['Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
            color: 'from-blue-500 to-purple-500',
        },
        {
            title: 'Back-End',
            icon: _jsx(Database, { size: 20 }),
            skills: ['Node.js', 'OOP', 'Laravel', 'PHP', 'MySQL'],
            color: 'from-green-500 to-teal-500',
        },
        {
            title: 'Tools & Platforms',
            icon: _jsx(Code, { size: 20 }),
            skills: ['Git/GitHub', 'VS Code', 'Figma', 'Jira', 'AI Tools', 'Vercel'],
            color: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Design',
            icon: _jsx(Palette, { size: 20 }),
            skills: ['UI/UX Design', 'Responsive Design', 'Prototyping'],
            color: 'from-pink-500 to-rose-500',
        },
    ];
    const softSkills = [
        { icon: _jsx(MessageSquare, { size: 20 }), name: 'Communication', description: 'Clear technical communication with team members and clients' },
        { icon: _jsx(Users, { size: 20 }), name: 'Teamwork', description: 'Collaborative approach to problem-solving and project development' },
        { icon: _jsx(Target, { size: 20 }), name: 'Adaptability', description: 'Quickly learning new technologies and adapting to changing requirements' },
        { icon: _jsx(Target, { size: 20 }), name: 'Problem Solving', description: 'Analytical thinking and creative solutions to complex challenges' },
        { icon: _jsx(Users, { size: 20 }), name: 'Leadership', description: 'Leads by example, supports others, and takes initiative when needed.' },
        { icon: _jsx(Clock, { size: 20 }), name: 'Time Management', description: 'Efficient project planning and meeting deadlines consistently' },
        { icon: _jsx(Target, { size: 20 }), name: 'Creativity', description: 'Generates fresh ideas and improves user experience through design thinking.' },
        { icon: _jsx(Clock, { size: 20 }), name: 'Work Ethic', description: 'Shows commitment, reliability, and consistent dedication to quality work.' },
    ];
    return (_jsx("section", { id: "skills", className: "py-20 bg-white dark:bg-black", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold font-poppins mb-4 text-gray-900 dark:text-white", children: "Skills & Expertise" }), _jsx("p", { className: "text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto", children: "A snapshot of my technical toolkit and professional abilities." })] }), _jsxs(motion.div, { ref: ref, initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, className: "mb-16", children: [_jsx("h3", { className: "text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100", children: "Technical Proficiency" }), _jsx("div", { className: "grid md:grid-cols-2 gap-6", children: hardSkills.map((skill, index) => (_jsxs("div", { className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("h4", { className: "text-md font-medium text-gray-700 dark:text-gray-200", children: skill.name }), _jsxs("span", { className: "text-sm text-gray-500", children: [skill.level, "%"] })] }), _jsx("div", { className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2", children: _jsx(motion.div, { className: `h-2 bg-gradient-to-r ${skill.color} rounded-full`, initial: { width: 0 }, whileInView: { width: `${skill.level}%` }, viewport: { once: true }, transition: { duration: 1 } }) })] }, skill.name))) })] }), _jsxs(motion.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, className: "mb-20 px-4 sm:px-6 lg:px-8", children: [_jsx("h3", { className: "text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100", children: "Skill Categories" }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8", children: skillCategories.map((category) => (_jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 ease-in-out", children: [_jsx("div", { className: `w-14 h-14 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl shadow-inner`, children: category.icon }), _jsx("h4", { className: "text-lg font-semibold text-gray-900 dark:text-white text-center mb-3", children: category.title }), _jsx("div", { className: "flex flex-wrap justify-center gap-2", children: category.skills.map((skill) => (_jsx("span", { className: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-700", children: skill }, skill))) })] }, category.title))) })] }), _jsxs(motion.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, children: [_jsx("h3", { className: "text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100", children: "Soft Skills" }), _jsx("div", { className: "grid md:grid-cols-2 gap-6", children: softSkills.map((skill) => (_jsxs("div", { className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-5 flex gap-4 items-start shadow-sm", children: [_jsx("div", { className: "w-10 h-10 bg-gradient-to-r from-primary-500 to-mint-400 rounded-full flex items-center justify-center text-white", children: skill.icon }), _jsxs("div", { children: [_jsx("h4", { className: "text-md font-semibold text-gray-800 dark:text-gray-100 mb-1", children: skill.name }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 leading-snug", children: skill.description })] })] }, skill.name))) })] })] }) }));
};
export default Skills;
//# sourceMappingURL=Skills.js.map