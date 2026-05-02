import { HeartIcon, ScissorsIcon, ShieldCheckIcon, SparklesIcon, StarIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion";
import aboutImage from '/public/about.png';


const About = () => {
    const values = [
        {icon: ShieldCheckIcon, title: 'Hygiene First', desc: 'Clean tools and safe processes in every service.'},
        {icon: SparklesIcon, title: 'Quality Excellene', desc: 'Premium products and consistent results you can trust.'},
        {icon: HeartIcon, title: 'Client Care', desc: 'A friendly and personalized experience for every client.'},
        {icon: StarIcon, title: 'Artistic Mastery', desc: 'Creative designs tailored to your unique style.'},
    ];
  return (
    <section id="about" className="relative min-h-screen overflow-hidden py-6  px-4">

        <div className="absolute inset-0 bg-linear-to-b from-rose-900 via-pink-900 to-rose-950"/>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => {
                    const icons = [ScissorsIcon, HeartIcon, StarIcon, SparklesIcon];
                    const Icon = icons[i % icons.length];
                    const left = `${10 + (i % 4) * 25}%`;
                    const top = `${15 + Math.floor(i / 4) * 35}%`;

                    return (
                        <motion.div
                        key={i}
                        className="absolute text-pink-300/10"
                        style={{ left , top }}
                        animate={{ y: [0, -20, 0],
                            rotate: [0, 180, 360], scale: [1, 1.1, 1]
                         }}
                         transition={{ duration: 4 + (i % 3),
                            repeat: Infinity, ease: 'linear',
                            delay: i * 0.2
                          }}>
                            <Icon className="w-8 h-8"/>
                        </motion.div>
                    );
                })}
            </div>
            <div className="relative z-10 max-w-6xl mx-auto lg:ml-24">
                <motion.div
                initial = {{ opacity:0, y: 30 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12">
                    <div className="inline-flex items-center gap-2
                    px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm
                    border border-pink-400/30 mb-4">
                        <SparklesIcon className="w-4 h-4 text-pink-200"/>
                        <span className="text-pink-200 text-sm font-medium">
                            Our Story
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white
                    mb-4">
                        About <span className="text-transparent
                        bg-clip-text bg-linear-to-r from-pink-300
                        to-rose-400">Us</span>
                    </h2>
                    <p className="text-gray-200 text-lg
                    max-w-xl mx-auto">
                        Creating beauty through detail and passion.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2
                gap-12 items-center mb-16">
                    <motion.div
                    initial = {{ opacity: 0, x: -30 }}
                    whileInView={{ opacity:1, x: 0 }}
                    viewport={{ once:true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-80 h-80 md:h-96 md:w-96 rounded-full
                            overflow-hidden border-4 border-pink-300/20 shadow-2xl">
                                <img 
                                src={aboutImage} 
                                alt="About Image"
                                className="w-full h-full object-contain"/>
                            </div>
                            <motion.div
                            className="absolute -top-4 -right-4 w-16
                            h-16 bg-pink-500/10 border border-pink-300/20
                            flex items-center justify-center rounded-full"
                            animate={{ rotate:[0, 360]}}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
                                <SparklesIcon className="w-6 h-6 text-pink-300"/>
                            </motion.div>
                            <motion.div
                            className="absolute -bottom-4 -left-4 w-16 h-16
                            rounded-full bg-rose-500/10 border border-rose-300/20
                            flex items-center justify-center"
                            animate={{ rotate:[360 , 0]}}
                            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}>
                                <HeartIcon className="w-6 h-6 text-rose-300"/>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                    initial= {{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once:true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-2">
                        <h3 className="text-3xl font-bold text-white">
                            Crafting Beauty Since <span className="text-pink-300">2020</span>
                        </h3>
                        <div className="space-y-4 text-gray-200">
                            <p>
                                Since 2020, I have been dedicated to creating nail designs that feel personal and timeless. 
                                Every detail is carefully crafted to match your style and bring out your confidence.
                            </p>
                            <p>
                                I believe beauty is not just about appearance, but about how you feel. 
                                That is why every service is designed to give you a comfortable and enjoyable experience.
                            </p>
                            <p>
                                With a focus on quality and creativity, each design is made to leave a lasting impression.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {values.map((value, index) => (
                                <div
                                key={index}
                                className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full aspect-square
                                    bg-pink-500/20 flex items-center justify-center">
                                        <value.icon className="w-5 h-5 text-pink-300"/>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-base font-medium mb-1">
                                            {value.title}
                                        </h4>
                                        <p className="text-gray-300 text-sm">
                                            {value.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
            </div>
        </div>
    </section>
  );
};

export default About