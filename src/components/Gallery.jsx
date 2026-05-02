import { useState } from "react"
import image1 from '/public/image1.png'
import image2 from '/public/image2.png'
import image3 from '/public/image3.png'
import image4 from '/public/image4.png'
import image5 from '/public/image5.png'
import image6 from '/public/image6.png'
import image7 from '/public/image7.png'
import image8 from '/public/image8.png'
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon, ScissorsIcon, SparklesIcon, StarIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { motion } from 'framer-motion'

const Gallery = () => {
    const [selectedImage, setSellectedImage] = useState(null);

    const galleryImages = [
        {id:1, src: image1, title: 'Midnight Love Glam'},
        {id:2, src: image2, title: 'Autumn Leaf Glow'},
        {id:3, src: image3, title: 'Sunshine Pop Nails'},
        {id:4, src: image4, title: 'Blush Aura Dream'},
        {id:5, src: image5, title: 'Rosy Nude Elegance'},
        {id:6, src: image6, title: 'Pastel Blossom Charm'},
        {id:7, src: image7, title: 'Cherry Mocha Touch'},
        {id:8, src: image8, title: 'Amber Flame Ombre'},
    ];

    const openLightbox = (image) => {
        setSellectedImage(image);
        document.body.style.overflow = 'hidden'
    };

    const closeLightbox = () => {
        setSellectedImage(null);
        document.body.style.overflow = 'auto'
    };

    const navigateImage = (direction) => {
        if (!selectedImage) return;

        const currentIndex = galleryImages.findIndex(
            img => img.id === selectedImage.id);
            let nextIndex;
            if (direction === 'next') {
                nextIndex = (currentIndex + 1) % galleryImages.length;
            }else {
                nextIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length; 
            }

            setSellectedImage(galleryImages[nextIndex]);
    };
  return (
    <section id="gallery" className="relative min-h-screen py-6 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-rose-900 via-pink-900
        to-rose-950"/>
        <div className="absolute inset-0 pointer-events-none
        overflow-hidden">
            {[...Array(8)].map((_, i) => {
                const icons = [
                    ScissorsIcon, HeartIcon, StarIcon, SparklesIcon];
                const Icon = icons[i % icons.length];

                const left = `${10 + (i % 4) * 25}%`;
                const top = `${15 + Math.floor(i/4) * 35}%`;
                return (
                    <motion.div
                    key={i}
                    className="absolute text-pink-300/20"
                    style={{ 
                        left: left,
                        top: top,
                     }}
                     animate = {{ 
                        y: [0, -20, 0],
                        rotate: [0, 180, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4 + (i % 3),
                        repeat: Infinity,
                        ease: 'linear',
                        delay: i * 0.2
                       }}>
                            <Icon className="w-8 h-8"/>
                    </motion.div>
                )
            })}
        </div>
        <div className="relative z-10 max-w-6xl mx-auto lg:ml-28">
            <motion.div
            initial = {{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-white/5 backdrop-blur-none border border-pink-400/30 mb-4">
                    <SparklesIcon className="w-4 h-4 text-pink-300"/>
                    <span className="text-pink-200 text-sm font-medium">
                        Creative Showcase
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold
                text-white mb-4">
                    Our <span className="text-transparent bg-clip-text
                    bg-linear-to-r from-pink-300 to-rose-400">
                        Gallery
                    </span>
                </h2>
                <p className="text-gray-200 text-lg max-w-xl mx-auto">
                    A collection of our finest nail designs crafted with care and attention to every detail.
                </p>
            </motion.div>

            {/* Gallery Grid */}
            <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-3 max-w-5xl mx-auto mb-16">
                {galleryImages.map((image) => (
                    <motion.div
                    key={image.id}
                    initial={{  opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-lg
                    cursor-pointer"
                    onClick={() => openLightbox(image)}>
                        <div className="aspect-square">
                            <img 
                            src={image.src} 
                            alt={image.title}
                            className="w-full h-full object-cover
                            group-hover:scale-110 transition-transform
                            duration-500"/>
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t
                        from-black/70 via-transparent to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity
                        duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                                <h3 className="text-xs font-semibold text-white
                                truncate">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                        <div className="absolute inset-0 border border-transparent
                        group-hover:border-pink-400/20 transition-all duration-300 rounded-lg"/>
                    </motion.div>
                ))}
            </motion.div>
        </div>
        {
            selectedImage && (
                <motion.div
                initial ={{ opacity: 0 }}
                animate= {{ opacity: 1 }}
                className="fixed inset-0 z-50 flex items-center
                justify-center bg-black/95 p-4">
                    <div className="relative max-w-3xl w-full"
                    onClick={(e) => e.stopPropagation()}>
                        <button
                        onClick={closeLightbox}
                        className="absolute -top-10 right-0
                        text-white hover:text-pink-300 transition-colors">
                            <XMarkIcon className="w-6 h-6"/>
                        </button>

                        {/* Images */}
                        <div className="rounded-lg overflow-hidden bg-black/50">
                            <img src={selectedImage.src.replace('w=300', 'w=1000')} 
                            alt={selectedImage.title} 
                            className="w-full h-auto max-h-[60vh] object-contain"/>
                        </div>
                        <div className="mt-3 text-center">
                            <h3 className="text-lg font-bold text-white m-1">
                                {selectedImage.title}
                            </h3>
                        </div>
                        <button
                        onClick={() => navigateImage('prev')}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2
                        bg-black/60 hover:bg-black/80 text-white p-2 rounded-full
                        transition-colors">
                            <ChevronLeftIcon className="w-4 h-4"/>
                        </button>
                        <button
                        onClick={() => navigateImage('next')}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2
                        bg-black/60 hover:bg-black/80 text-white p-2 rounded-full
                        transition-colors">
                            <ChevronRightIcon className="w-4 h-4"/>
                        </button>
                    </div>
                </motion.div>
            )
        }
    </section>
  );
};

export default Gallery