import { HeartIcon, ScissorsIcon, ShieldCheckIcon, SparklesIcon, StarIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import serviceImage from '/public/services.png'

const Services = () => {
  return (
    <section id="services" className="relative min-h-screen flex
    items-center justify-center py-6 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b
        from-rose-950 via-pink-900 to-rose-900"/>
        <div className="absolute inset-0 overflow-hidden
        pointer-events-none">
            {[...Array(12)].map((_, i) => {
                const icons = [ScissorsIcon, HeartIcon,
                    StarIcon, SparklesIcon];
                const Icon = icons[i % icons.length];

                const left = `${10 + (i % 6) * 16}%`;
                const top = `${15 + Math.floor(i / 6) * 30}%`;
                return (
                    <motion.div
                    key={i}
                    className="absolute text-pink-300/20"
                    style={{ 
                        left: left,
                        top: top,
                     }}
                     animate={{ 
                        y : [0, -20, 0],
                        rotate: [0, 180, 360],
                        scale: [1, 1.1, 1] 
                      }}
                      transition={{ 
                        duration: 4 + (i % 4),
                        repeat: Infinity,
                        ease: 'linear',
                        delay: i * 0.5
                       }}>
                        <Icon className="w-10 h-10"/>
                    </motion.div>
                );
            })}
        </div>
        <div className="relative mt-4 z-10 w-full max-w-4xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{  once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8">
                <div className="inline-flex items-center gap-2
                    px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm
                    border border-pink-400/30 mb-4">
                        <SparklesIcon className="w-4 h-4 text-pink-200"/>
                        <span className="text-pink-200 text-sm font-medium">
                            Premium Services
                        </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-transparent
                bg-clip-text bg-linear-to-r from-pink-300 to-rose-400">
                    <span className="text-white">Our </span>Services
                </h2>
                <p className="text-white/80 text-lg">
                    Experience luxury nail care with our expert artists
                </p>
            </motion.div>
            <div className="flex justify-center">
                <motion.div
                initial = {{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once:true }}
                className="relative rounded-3xl overflow-hidden
                bg-white shadow-2xl w-full max-w-3xl mb-16">
                    <img src={serviceImage} 
                    alt="Image"
                    className="w-full h-97.5 object-cover"/>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute -top-2 left-24 lg:top-6 lg:left-1/2
                    transform -translate-x-1/2 text-center">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-xl">
                            <h3 className="text-2xl font-bold text-pink-600 mb-1">
                                Expert Nail Care
                            </h3>
                            <p className="text-gray-700">
                               Precision & Beauty in Every Service
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute bottom-1 left-6 lg:bottom-6">
                        <div className="bg-linear-to-r from-pink-500 to-rose-400
                        backdrop-blur-sm rounded-xl px-5 py-3 shadow-xl max-w-xs">
                            <div className="flex items-center gap-2 mb-1">
                                <ShieldCheckIcon className="w-5 h-5 text-white"/>
                            <h4 className="text-white/95 font-bold text-lg">
                                Hygiene First
                            </h4>
                        </div>
                            <p className="text-white/95 text-sm">
                               100% Sterilizied Equipment
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute bottom-48 -right-2 lg:bottom-6 lg:right-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-xl max-w-xs">
                            <div className="flex items-center gap-2 mb-1">
                                <ShieldCheckIcon className="w-5 h-5 text-pink-500"/>
                            <h4 className="text-gray-900 font-bold text-lg">
                                Premium Quality
                            </h4>
                        </div>
                            <p className="text-gray-700 text-sm">
                               Top Brands & Products
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Services