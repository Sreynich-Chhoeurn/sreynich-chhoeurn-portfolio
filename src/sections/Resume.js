import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, MapPin, Mail, Phone, Calendar, Award, Briefcase, GraduationCap, } from 'lucide-react';
const Resume = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const certificates = [];
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = 'https://www.canva.com/design/DAGutfpvCOI/L3f3regeQmlYp2qN0wRdYQ/edit?utm_content=DAGutfpvCOI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton';
        link.download = 'Sreynich_Chhoeurn_CV.pdf';
        link.click();
    };
    const education = [
        {
            degree: 'Associate degree',
            school: 'Passerelles Numériques Cambodia',
            period: '2024 - Present',
            description: 'Focused on Web Development, with additional studies in Software Engineering',
            gpa: '',
        },
        {
            degree: '12th Grade Certificate',
            school: 'Hun Sen Phnom Kravanh High School',
            period: '2022 - 2023',
            description: 'Mathematics, Khmer, History, Civics, English, Earth Science',
            gpa: '',
        },
    ];
    const experience = [
        {
            title: 'Virtual Company 2 (VC2) - QR Code Menu App',
            role: 'Flutter Mobile Developer',
            technology: 'Flutter & Laravel',
            period: '21 Jun 2025 - 01 Sep 2025',
            location: 'Passerelles Numériques Cambodia',
            achievements: [
                'Built a clean and easy-to-use app screen for customers to view the menu on Android phones, tablets, and other devices',
                'Connected the app to the backend to show the latest menu and support different languages',
                'Made sure the app runs smoothly and loads quickly on Android devices',
                'Worked with the backend team to fix problems and add new features based on user feedback',
            ],
        },
        {
            title: 'Virtual Company 1 (VC1) - POS System',
            role: 'Full Stack Developer',
            technology: 'PHP (MVC), MySQL, HTML, CSS, JavaScript, AWS (Free Tier Instance)',
            period: '25 Feb 2025 - 02 May 2025',
            location: 'Passerelles Numériques Cambodia',
            achievements: [
                'Built a Point-of-Sale (POS) system with real-time inventory and sales tracking.',
                'Worked with a team to make sure the database ran smoothly and the back end was reliable.',
                'Set up AWS cloud services to deploy and monitor the application.',
                'Improved DevOps processes to make the app secure and able to grow easily.',
            ],
        },
        {
            title: 'Weather App',
            role: 'Front-End Developer',
            technology: 'JavaScript, HTML/CSS, Weather API',
            location: 'Passerelles Numériques Cambodia',
            achievements: [
                'Designed and built a responsive user interface to show live weather data using an API.',
                'Used JavaScript and custom styles to make the app interactive and user-friendly.',
                'Helped with app deployment and tested it on different screen sizes to ensure usability.',
            ],
        },
        {
            title: 'Web Design Project',
            role: 'UX/UI Designer & Web Developer | Personal Project',
            technology: 'HTML, CSS, Figma, GitHub, Vercel',
            period: '12 Jan 2025 - 26 Jan 2025',
            location: 'Passerelles Numériques Cambodia',
            achievements: [
                'UI planning and responsive web design using Figma',
                'Built and deployed the site on Netlify for public access',
                'Used GitHub for version control and smooth team collaboration',
            ],
        },
        {
            title: 'Portfolio Website',
            role: 'Vibe Coder | Personal Project',
            technology: 'ChatGPT, Bolt',
            location: 'Passerelles Numériques Cambodia',
            achievements: [
                'Enhanced content clarity and engagement with ChatGPT.',
                'Developed and managed content using Bolt',
            ],
        },
    ];
    const achievements = [
        'Associate Degree in Web Development at Passerelles Numériques Cambodia',
    ];
    return (_jsx("section", { id: "resume", className: "py-20 bg-gradient-to-b from-neon-50/30 to-purple-50/30 dark:from-neon-900/10 dark:to-purple-900/10", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-5xl md:text-6xl font-bold font-poppins gradient-text mb-6", children: "Resume" }), _jsxs(motion.button, { onClick: handleDownloadCV, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-mint-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300", children: [_jsx(Download, { className: "mr-2", size: 20 }), "Download PDF"] })] }), _jsxs("div", { className: "grid lg:grid-cols-3 gap-12", children: [_jsxs(motion.div, { initial: { x: -50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, viewport: { once: true }, transition: { delay: 0.2 }, className: "lg:col-span-1", children: [_jsxs("div", { className: "glassmorphism rounded-xl p-6 mb-8", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("img", { src: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400", alt: "Sreynich Chhoeurn", className: "w-32 h-32 rounded-full mx-auto mb-4 object-cover" }), _jsx("h3", { className: "text-2xl font-bold font-poppins gradient-text", children: "Sreynich Chhoeurn" }), _jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Web Developer" })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center text-gray-600 dark:text-gray-300", children: [_jsx(Mail, { size: 16, className: "mr-3 text-primary-600" }), _jsxs("span", { className: "text-sm", children: ["sreynich.chhoeurn@student.", _jsx("br", {}), "passerellesnumeriques.org"] })] }), _jsxs("div", { className: "flex items-center text-gray-600 dark:text-gray-300", children: [_jsx(Phone, { size: 16, className: "mr-3 text-primary-600" }), _jsx("span", { className: "text-sm", children: "+855 97 698 2459" })] }), _jsxs("div", { className: "flex items-center text-gray-600 dark:text-gray-300", children: [_jsx(MapPin, { size: 16, className: "mr-3 text-primary-600" }), _jsx("span", { className: "text-sm", children: "Phnom Penh, Cambodia" })] })] })] }), _jsxs("div", { className: "glassmorphism rounded-xl p-6 mb-8", children: [_jsxs("h4", { className: "text-xl font-bold mb-4 flex items-center", children: [_jsx(Award, { className: "mr-2 text-primary-600", size: 20 }), "Key Skills"] }), _jsx("div", { className: "space-y-2", children: [
                                                'JavaScript/Vue.js',
                                                'Node.js/Laravel',
                                                'MySQL/Database',
                                                'Git/GitHub',
                                                'Responsive Design/Prototyping',
                                            ].map((skill) => (_jsx("div", { className: "bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg text-sm", children: skill }, skill))) })] }), _jsxs("div", { className: "glassmorphism rounded-xl p-6", children: [_jsxs("h4", { className: "text-xl font-bold mb-4 flex items-center", children: [_jsx(Award, { className: "mr-2 text-primary-600", size: 20 }), "Certificates"] }), _jsx("div", { className: "space-y-3", children: certificates.length > 0 ? (certificates.map((cert, index) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { delay: 0.5 + index * 0.1 }, className: "text-sm text-gray-600 dark:text-gray-300 border-l-2 border-primary-600 pl-3", children: cert }, index)))) : (_jsx("p", { className: "text-sm text-gray-500", children: "No certificates added yet." })) })] })] }), _jsxs(motion.div, { ref: ref, initial: { x: 50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, viewport: { once: true }, transition: { delay: 0.4 }, className: "lg:col-span-2", children: [_jsxs("div", { className: "glassmorphism rounded-xl p-6 mb-8", children: [_jsxs("h4", { className: "text-2xl font-bold mb-6 flex items-center gradient-text", children: [_jsx(Briefcase, { className: "mr-3", size: 24 }), "Project Experience"] }), _jsx("div", { className: "space-y-8", children: experience.map((job, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.6 + index * 0.2 }, className: "border-l-2 border-primary-600 pl-6 relative", children: [_jsx("div", { className: "absolute w-4 h-4 bg-primary-600 rounded-full -left-2 top-0" }), _jsxs("div", { className: "mb-2", children: [_jsx("h5", { className: "text-xl font-bold", children: job.title }), _jsx("p", { className: "text-primary-600 font-semibold", children: job.role }), _jsxs("div", { className: "flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-300 mb-2", children: [job.period && (_jsxs(_Fragment, { children: [_jsxs("span", { className: "flex items-center", children: [_jsx(Calendar, { size: 14, className: "mr-1" }), job.period] }), _jsx("span", { children: "\u2022" })] })), _jsxs("span", { className: "flex items-center", children: [_jsx(MapPin, { size: 14, className: "mr-1" }), job.location] })] })] }), _jsx("ul", { className: "space-y-2", children: job.achievements.map((achievement, achieveIndex) => (_jsxs("li", { className: "text-gray-600 dark:text-gray-300 flex items-start", children: [_jsx("span", { className: "w-2 h-2 bg-mint-500 rounded-full mt-2 mr-3 flex-shrink-0" }), achievement] }, achieveIndex))) })] }, index))) })] }), _jsxs("div", { className: "glassmorphism rounded-xl p-6 mb-8", children: [_jsxs("h4", { className: "text-2xl font-bold mb-6 flex items-center gradient-text", children: [_jsx(GraduationCap, { className: "mr-3", size: 24 }), "Education"] }), _jsx("div", { className: "space-y-6", children: education.map((edu, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.8 + index * 0.2 }, className: "border-l-2 border-mint-500 pl-6 relative", children: [_jsx("div", { className: "absolute w-4 h-4 bg-mint-500 rounded-full -left-2 top-0" }), _jsx("h5", { className: "text-xl font-bold", children: edu.degree }), _jsxs("div", { className: "flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-300 mb-2", children: [_jsx("span", { className: "font-medium", children: edu.school }), _jsx("span", { children: "\u2022" }), _jsxs("span", { className: "flex items-center", children: [_jsx(Calendar, { size: 14, className: "mr-1" }), edu.period] }), edu.gpa && (_jsxs(_Fragment, { children: [_jsx("span", { children: "\u2022" }), _jsxs("span", { children: ["GPA: ", edu.gpa] })] }))] }), _jsx("p", { className: "text-gray-600 dark:text-gray-300", children: edu.description })] }, index))) })] }), _jsxs("div", { className: "glassmorphism rounded-xl p-6", children: [_jsxs("h4", { className: "text-2xl font-bold mb-6 flex items-center gradient-text", children: [_jsx(Award, { className: "mr-3", size: 24 }), "Achievements"] }), _jsx("div", { className: "grid md:grid-cols-2 gap-4", children: achievements.map((achievement, index) => (_jsx(motion.div, { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { delay: 1 + index * 0.1 }, className: "bg-gradient-to-r from-primary-50 to-mint-50 dark:from-primary-900/20 dark:to-mint-900/20 p-4 rounded-lg border border-primary-200 dark:border-primary-800", children: _jsxs("div", { className: "flex items-start", children: [_jsx(Award, { size: 16, className: "text-primary-600 mt-1 mr-2 flex-shrink-0" }), _jsx("span", { className: "text-sm font-medium", children: achievement })] }) }, index))) })] })] })] })] }) }));
};
export default Resume;
//# sourceMappingURL=Resume.js.map