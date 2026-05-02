import { EnvelopeIcon, HeartIcon, PhoneIcon, ScissorsIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion'
import contact from '/public/contact.png'


    const FloatingIcon = ({Icon, index}) => {
        const left = `${10 + (index % 4) * 25}%`;
        const top = `${15 + Math.floor(index / 4) * 35}%`;

        return (
            <motion.div
            className='absolute text-pink-300/10'
            style={{ left,top }}
            animate={{ y: [0, -20, 0], rotate: [0, 180, 360], scale: [1, 1.1, 1]
             }}
             transition={{ duration: 4 + (index % 3), repeat: Infinity, ease: 'linear', delay: index * 0.2
             }}>
                <Icon className="w-8 h-8"/>
            </motion.div>
        );
    };

    const InputField = ({ type, placeholder }) => (
        <input 
        type={type}
        placeholder={placeholder}
        className='w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm
        border border-white/10 text-white placeholder-gray-400 focus:border-pink-400
        focus:ring-1 focus:ring-pink-400 outline-none transition-all'/>
    ); 
    
    const AnimatedCircle = ({ Icon, className, animation }) => (
        <motion.div
        className={`absolute w-12 h-12 rounded-full flex items-center
        justify-center ${className}`}
        {...animation}>
            <Icon className="w-5 h-5"/>
        </motion.div>
    );

    const Contact = () => {
        const backgroundIcons = [
            ScissorsIcon, HeartIcon, StarIcon, SparklesIcon
        ];

    return (
    <section id='contact' className='relative min-h-screen py-6 px-4 overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-b from-rose-950 via-pink-900
        to-rose-900'/>
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            {[...Array(8)].map((_, i) => (
                <FloatingIcon 
                key={i}
                Icon={backgroundIcons[i % backgroundIcons.length]}
                index={i}/>
            ))}
        </div>
        <div className='relative z-10 max-w-6xl mx-auto'>
            <motion.div
            initial = {{ opacity: 0, y:30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'>
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-white/5 backdrop-blur-sm border border-pink-400/30 mb-4'>
                    <SparklesIcon className='w-4 h-4 text-pink-300'/>
                    <span className='text-pink-200 text-sm font-medium'>
                        Get In Touch
                    </span>
                </div>
                <h2 className='text-4xl md:text-5xl font-bold text-white
                mb-4'>
                    Contact <span className='text-transparent
                    bg-clip-text bg-linear-to-r from-pink-300
                    to-rose-400'>Us</span>
                </h2>
                <p className='text-gray-200 text-lg max-w-xl mx-auto'>
                    Contact us for bookings, questions, or more information.
                </p>
            </motion.div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12
            items-center lg:ml-24 mb-16'>
                <motion.div
                initial = {{ opacity:0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once:true }}
                transition={{ duration: 0.6 }}
                className='space-y-6'>
                    <h3 className='text-2xl lg:text-3xl font-bold text-white'>
                        Book Your <span className='text-pink-300'>Appointment</span>
                    </h3>
                    <form className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <InputField 
                            type='text'
                            placeholder='Full Name'/>
                            <InputField 
                            type='email'
                            placeholder='Email Address'/>
                        </div>
                        <InputField 
                            type='tel'
                            placeholder='Phone Number'/>
                        <textarea
                        rows="4"
                        placeholder='Your Message'
                        className='w-full px-4 py-3 rounded-lg bg-white/5
                        backdrop-blur-sm border border-white/10 text-white
                        placeholder-gray-400 focus:border-pink-400 focus:ring-1
                        focus:ring-pink-400 outline-none transition-all
                        rezize-none'>
                        </textarea>
                        <button className='w-full py-4 bg-linear-to-r
                        from-pink-500 to-rose-500 text-white rounded-lg
                        font-bold text-lg hover:from-pink-600 hover:to-rose-600 transition-all
                        duration-300 shadow-lg hover:shadow-xl'>
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* Image */}
                <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x:0 }}
                viewport={{ once:true }}
                transition={{ duration: 0.8 }}
                className='flex justify-center lg:justify-start'>
                    <div className='relative'>
                        <div className='w-80 h-80 md:h-96 md:w-96
                        rounded-[60%_40%_30%_60%/60%_30%_70%_30%]
                        overflow-hidden border-4 border-pink-300/20 shadow-2xl'>
                            <img 
                            src={contact} 
                            alt="Image" 
                            className='w-full h-full object-cover'/>
                        </div>
                        <AnimatedCircle 
                        Icon={PhoneIcon}
                        className="-top-4 -right-4 w-16 h-16 bg-pink-500/10
                        border border-pink-300/20 text-pink-300"
                        animation={{ animate: {rotate: [0, 360]},
                        transition: {duration: 20, repeat: Infinity, ease: "linear"
                        }}}/>
                        <AnimatedCircle 
                        Icon={EnvelopeIcon}
                        className="-bottom-4 -left-4 w-16 h-16 bg-rose-500/10
                        border border-rose-300/20 text-rose-300"
                        animation={{ animate: {rotate: [360, 0]},
                        transition: {duration: 25, repeat: Infinity, ease: "linear"
                        }}}/>
                        <AnimatedCircle 
                        Icon={StarIcon}
                        className="-top-4 left-1/4 w-16 h-16 bg-pink-500/10
                        border border-pink-300/20 text-pink-200"
                        animation={{ animate: {y: [0, -10, 0]},
                        transition: {duration: 3, repeat: Infinity, ease: "easeInOut"
                        }}}/>
                        <AnimatedCircle 
                        Icon={HeartIcon}
                        className="-bottom-4 right-1/4 w-16 h-16 bg-rose-500/10
                        border border-rose-300/20 text-rose-200"
                        animation={{ animate: {y: [0, 10, 0]},
                        transition: {duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5
                        }}}/>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Contact