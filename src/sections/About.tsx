import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Lightbulb, Users, Coffee, Music } from 'lucide-react';

const timelineData = [
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
    title: 'Seeking Internship Opportunities',
    description: 'Eager to apply skills and grow professionally through real-world experience',
    color: 'from-primary-500 to-purple-400',
  },
];

const hobbiesData = [
  { icon: Lightbulb, name: 'UI/UX Design', description: 'Crafting intuitive and visually appealing interfaces' },
  { icon: Users, name: 'Team Collaboration', description: 'Thriving in diverse, cooperative environments' },
  { icon: Coffee, name: 'Focused Development', description: 'Maintaining productivity through disciplined coding' },
  { icon: Music, name: 'Tech Research', description: 'Exploring innovative technologies and solutions' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TimelineItem = ({ item, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: 0.3 + index * 0.1 }}
      className={`flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
    >
      <div className={`flex-1 w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-8 md:text-left' : 'md:pl-8 md:text-right'}`}>
        <div className="glassmorphism rounded-xl p-6">
          <span className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} text-white text-sm font-semibold rounded-full mb-3`}>
            {item.year}
          </span>
          <h4 className="text-xl font-bold mb-2">{item.title}</h4>
          <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
        </div>
      </div>
      <div className={`absolute left-1/2 w-4 h-4 bg-gradient-to-r ${item.color} rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-800`}></div>
    </motion.div>
  );
};

const ValueCard = ({ icon: Icon, title, description, color }) => (
  <motion.div
    variants={containerVariants}
    className="text-center"
    whileHover={{ scale: 1.05 }}
  >
    <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
      <Icon className="text-white" size={28} />
    </div>
    <h4 className="text-xl font-semibold mb-3">{title}</h4>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

const HobbyCard = ({ icon: Icon, name, description }) => (
  <motion.div
    variants={containerVariants}
    whileHover={{ scale: 1.05, y: -5 }}
    className="glassmorphism rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
  >
    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-mint-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
      <Icon size={24} />
    </div>
    <h4 className="font-semibold mb-2">{name}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-purple-50/30 dark:to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-poppins gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the story behind my passion for technology
          </p>
        </motion.div>

        {/* Personal Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            <img
              src="/assets/image_about.jpg"
              alt="Sreynich working"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold font-poppins text-gray-800 dark:text-white">
              My Tech Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              As an aspiring developer, my passion for technology was ignited in high school when I wrote my first line of code, sparking a love for solving complex problems through programming.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At Passerelles Numériques Cambodia, I honed my skills in web development, blending creativity with technical expertise to build meaningful digital solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Today, I specialize in crafting accessible, user-centric web applications, driven by a commitment to innovation and excellence in every project.
            </p>
          </motion.div>
        </div>

        {/* Values & Vision */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="glassmorphism rounded-3xl p-8 mb-20"
        >
          <h3 className="text-3xl font-bold font-poppins text-center mb-12 gradient-text">
            Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={Heart}
              title="Passion-Driven"
              description="Every project is fueled by a commitment to creating impactful solutions."
              color="from-primary-500 to-mint-400"
            />
            <ValueCard
              icon={Target}
              title="Goal-Oriented"
              description="Focused on delivering high-quality, user-focused results."
              color="from-mint-500 to-neon-400"
            />
            <ValueCard
              icon={Users}
              title="Collaborative"
              description="Empowered by teamwork and diverse perspectives."
              color="from-neon-500 to-primary-400"
            />
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mb-20">
          <h3 className="text-3xl font-bold font-poppins text-center mb-12 gradient-text">
            Professional Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-mint-400 to-neon-500 transform -translate-x-1/2"></div>
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <TimelineItem key={item.year} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hobbies & Interests */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
          <h3 className="text-3xl font-bold font-poppins text-center mb-12 gradient-text">
            Beyond Coding
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbiesData.map((hobby) => (
              <HobbyCard key={hobby.name} icon={hobby.icon} name={hobby.name} description={hobby.description} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;