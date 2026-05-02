import { motion } from "framer-motion";
import { HomeIcon, CurrencyDollarIcon, InformationCircleIcon, PhoneIcon, PhotoIcon, SparklesIcon    } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react"


const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    {id: 'home', icon: HomeIcon, label: 'Home'},
    {id: 'services', icon: SparklesIcon, label: 'Services'},
    {id: 'gallery', icon: PhotoIcon, label: 'Gallery'},
    {id: 'pricing', icon: CurrencyDollarIcon, label: 'Pricing'},
    {id: 'about', icon: InformationCircleIcon, label: 'About'},
    {id: 'contact', icon: PhoneIcon, label: 'Contact'},
  ];

  
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      const sections = navItems.map(
        item => document.getElementById(item.id));

        sections.forEach(section => {
          if (section &&
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ){
            setActiveSection(section.id);
          }
        });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
    }
  };

  return (
    <>
    <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed left-4 lg:left-28 top-1/2 transform -translate-y-1/2
        z-50 hidden lg:block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* ISI NAVBAR KAMU (JANGAN DIUBAH) */}
      </motion.nav>
    <motion.nav
    initial= {{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="fixed left-4 lg:left-28 top-1/2 transform -translate-y-1/2
    z-50 hidden lg:block"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <motion.div
      animate = {{ 
        backdropFilter: isHovered ? 'blur(10px)' : 'blur(5px)',
       }}
       transition={{ duration: 0.3 }}
       className="bg-white/5 backdrop-blur-lg rounded-2xl p-3
       border border-pink-400/55 relative">
        <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mb-4">
          <div
          onClick={() => scrollToSection('home')}
          className="cursor-pointer group">
            <div className="h-12 w-12 flex items-center justify-center
            transition-all duration-300">
              <SparklesIcon className="w-8 h-8 text-rose-100
              group-hover:scale-110 transition-transform duration-300"/>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial= {{ scaleX: 0 }}
        animate= {{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="h-px bg-white/30 mx-2 mb-4"/>
          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                key={item.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative group p-3 rounded-xl
                transition-all duration-300 ${
                  activeSection === item.id
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2}
                 }}
                 whileTap={{ scale: 0.95 }}>
                  <IconComponent className="w-5 h-5 relative
                  z-10"/>
                  {activeSection === item.id && (
                    <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl
                    bg-white/10 border border-white/30"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 
                    }}/>
                  )}
                  <div className="absolute left-full ml-3 px-3 py-2
                  bg-pink-200 backdrop-blur-sm text-gray-800 text-sm
                  rounded-lg opacity-0 group-hover:opacity-100 transition-all
                  duration-300 whitespace-nowrap border border-white/20 shadow-xl">
                    {item.label}
                    <div className="absolute -left-1 top-1/2 transform
                    -translate-y-1/2 w-2 h-2 bg-pink-200 rotate-45
                    border-l border-t border-white/20">
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
      </motion.div>
    </motion.nav>

    {/* Mobile Bottom Nav */}
    <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate= {{ y:0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="fixed bottom-4 left-1/2 transform -translate-x-1/2
    z-50 lg:hidden w-max">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl
      p-3 border border-white/20 shadow-2xl">
        <div className="flex space-x-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative group p-3 rounded-xl
              transition-all duration-300 ${
                  activeSection === item.id
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileTap={{ scale: 0.9 }}>
                  <IconComponent className="w-5 h-5"/>

                  {activeSection === item.id && (
                    <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute inset-0 rounded-xl bg-white/10
                    border border-white/30"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}/>
                  )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Navbar