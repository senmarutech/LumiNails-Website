import { useEffect, useState } from "react"
import hero from '/public/hero.png'
import { Heart, HeartIcon, Scissors, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion"

 const stats = [
        {target:1000, label: "Happy Clients" },
        {target:98, label: "Satisfaction" },
        {target:50, label: "Nail Artist" },
        {target:5, label: "Years Experience" },
    ];

const Hero = () => {

    
    const [statValues, setStatValues] = useState([0,0,0,0]);
    const [hasAnimated, setHasAnimated] = useState(false);

        const animateCounter = (index, target) => {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const updateCounter = () => {
            start += increment;
            if (start < target) {
                setStatValues( prev => {
                    const newValues = [...prev];
                    newValues[index] = Math.floor(start);
                    return newValues;
                });
                requestAnimationFrame(updateCounter);
            } else {
                setStatValues( prev => {
                    const newValues = [...prev];
                    newValues[index] = target;
                    return newValues;
                });
            }
        };
        requestAnimationFrame(updateCounter);
    };
   
    useEffect(()=> {
        const observer = new IntersectionObserver (
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated){
                    setHasAnimated(true);
                    stats.forEach((stat, index) => {
                        animateCounter(index, stat.target);
                    })
                }
            },
            {threshold: 0.5}
        );

        const heroSection = document.getElementById('home');
        if (heroSection) observer.observe(heroSection);

        return () => {
            if (heroSection) observer.unobserve(heroSection);
        };
    }, [hasAnimated]);



    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
  return (
    <section id="home" className="relative min-h-screen flex items-center
    justify-center overflow-hidden py-6 px-4">
        <div className="absolute inset-0">
            <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
                backgroundImage: `url(${hero})`,
             }}/>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-pink-500/10"></div>
            </div>
            <div className="absolute inset-0 overflow-hidden
            pointer-events-none">
                {[...Array(6)].map((_, i ) => {
                    const icons = [Scissors, Heart, Star, Sparkles];
                    const Icon = icons[i % icons.length];

                    return (
                        <motion.div
                        key={i}
                        className="absolute text-pink-300/20"
                        style={{ 
                            left: `${20 + (i * 15)}%`,
                            top: `${20 + (i * 10)}%`
                        }}
                        animate={{ 
                            y: [0, -20, 0],
                            rotate: [0, 180, 360],
                        }} 
                        transition={{ 
                            duration: 4 + 1,
                            repeat: Infinity,
                            ease: 'linear'
                           }}>
                            <Icon size={32}/>
                        </motion.div>
                    );
                })}
            </div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                initial = {{ opacity: 0, y: 20 }}
                animate = {{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="m-8">
                    <div className="inline-flex items-center gap-2
                    px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm
                    border border-pink-400/30">
                        <Sparkles className="w-4 h-4 text-pink-300"/>
                        <span className="text-pink-200 text-sm
                        font-medium">
                            Premium Nail Salon & Spa
                        </span>
                    </div>
                </motion.div>
                <motion.h1
                initial = {{opacity: 0, y: 30}}
                animate = {{opacity: 1, y: 0}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold
                text-white mb-6">
                    <span className="block">Beautiful Nails, </span>
                    <span className="block mt-2">
                        <span className="text-transparent bg-clip-text
                        bg-linear-to-r from-pink-300 to-rose-400">
                            Confident You
                        </span>
                    </span>
                </motion.h1>
                <motion.p
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-200 md:text-xl max-w-2xl text-base
                mx-auto mb-10 leading-relaxed">
                    We believe every detail matters. Each design reflects your style and brings out your confidence.
                </motion.p>
                {/* Buttons */}
                <motion.div
                initial = {{ opacity: 0, y: 20 }}
                animate = {{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center
                mb-16">
                    <button
                    onClick={() => scrollToSection('contact')}
                    className="lg:px-8 py-3 rounded-full bg-linear-to-r
                    from-pink-400 to-rose-500 text-white font-semibold
                    hover:from-pink-500 hover:to-rose-600 transition-all text-lg
                    duration-300 flex items-center justify-center gap-2 group">
                        Book Appointment
                        <HeartIcon className="w-5 h-5 group-hover:scale-110
                        transition-transform"/>
                    </button>
                    <button
                    onClick={() => scrollToSection('gallery')}
                    className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-lg
                    border border-white/20 hover:bg-white/20 text-white font-semibold transition-all
                    duration-300">
                        View Gallery
                    </button>
                </motion.div>
                <motion.div
                initial = {{ opacity:0 }}
                animate = {{ opacity:1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6
                max-w-2xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">
                                {statValues[index]}+
                                {index === 1 && '%'}
                            </div>
                            <div className="text-gray-300 text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
    </section>
  )
}

export default Hero