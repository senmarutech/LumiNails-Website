import {
  SparklesIcon,
  ScissorsIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Care",
      price: "$25",
      features: ["Classic Manicure", "Nail Trimming", "Cuticle Care", "Hand Massage", "Basic Polish"],
      cta: "Select Plan",
      popular: false,
    },
    {
      name: "Premium Glam",
      price: "$45",
      badge: "Popular",
      features: ["Everything in Basic", "Gel Polish", "Nail Art Design", "Extended Massage", "Nail Repair"],
      cta: "Choose Plan",
      popular: true,
    },
    {
      name: "Luxury Spa",
      price: "$75",
      features: [ "Everything in Premium", "Acrylic Nails", "Nail Extensions", "Arm Massage", "VIP Booking"],
      cta: "Select Plan",
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="relative min-h-screen overflow-hidden py-6 px-4">
      <div className="absolute inset-0 bg-linear-to-b from-rose-950 via-pink-900 to-rose-900" />
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
              style={{ left, top }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
            >
              <Icon className="w-8 h-8" />
            </motion.div>
          );
        })}
      </div>
      <div className="relative z-10 max-w-6xl mx-auto lg:ml-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/5 backdrop-blur-sm border border-pink-400/30 mb-4">
            <SparklesIcon className="w-4 h-4 text-pink-200" />
            <span className="text-pink-200 text-sm font-medium">
              Perfect Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Affordable <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-300 to-rose-400">
              Luxury</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-xl mx-auto">
            Premium nail care at prices that pamper your nails and wallet
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-14 mb-16">
          {plans.map((plan, i) => (
            <div
            key={i}
            tabIndex="0"
            className="rounded-2xl p-6 border border-white/10 
            bg-white/5 backdrop-blur-lg transition-all outline-none
            focus:border-pink-400 focus:ring-1 focus:ring-pink-400 
            focus:bg-white/10">
              {plan.badge && (
                <div className={`absolute -top-3 -right-3 text-white text-base px-3 py-1 rounded-full font-semibold
                  ${plan.popular ? "bg-pink-500" : "bg-gray-500"}`}>
                  {plan.badge}
                </div>
              )}
              <h3 className="text-2xl font-semibold text-white text-center mb-2">
                {plan.name}
              </h3>
              <p className="text-lg font-bold text-white mb-6 text-center">
                {plan.price}
                <span className="text-sm text-pink-200"> / session</span>
              </p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                <p className="text-base text-pink-200 font-semibold">
                  Included Services
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((item, index) => (
                  <li 
                  key={index} 
                  className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    ✔ {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl font-semibold 
              bg-linear-to-r from-pink-500 to-rose-500 
              hover:from-pink-600 hover:to-rose-600 
              transition-all duration-300 text-white">
                {plan.cta}
              </button>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;