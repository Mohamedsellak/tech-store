"use client";

import { motion } from "framer-motion";
import { FiTruck, FiShield, FiAward, FiZap } from "react-icons/fi";
import { BsLightning, BsShield, BsCpu } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";

const features = [
  { 
    icon: <FiTruck className="w-7 h-7" />, 
    title: "Livraison Quantique", 
    desc: "Transport ultra-rapide", 
    highlight: "INSTANT",
    color: "from-cyan-400 via-blue-500 to-purple-600",
    glowColor: "shadow-cyan-500/50"
  },
  { 
    icon: <BsShield className="w-7 h-7" />, 
    title: "Bouclier Numérique", 
    desc: "Protection intégrale", 
    highlight: "FOREVER",
    color: "from-emerald-400 via-green-500 to-teal-600",
    glowColor: "shadow-emerald-500/50"
  },
  { 
    icon: <AiOutlineThunderbolt className="w-7 h-7" />, 
    title: "Support Neural", 
    desc: "IA assistance 24/7", 
    highlight: "AI BOOST",
    color: "from-violet-400 via-purple-500 to-indigo-600",
    glowColor: "shadow-violet-500/50"
  },
  { 
    icon: <BsCpu className="w-7 h-7" />, 
    title: "Tech Premium", 
    desc: "Composants du futur", 
    highlight: "ULTRA",
    color: "from-orange-400 via-red-500 to-pink-600",
    glowColor: "shadow-orange-500/50"
  }
];

export default function FeaturesBar() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div>

      {/* Animated floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Futuristic section header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-[length:200%_auto] bg-clip-text text-transparent"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              TECHSTORE NEXUS
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto font-light"
          >
            Technologies avancées • Expérience transcendante • Innovation pure
          </motion.p>
        </motion.div>

        {/* Futuristic features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              {/* Holographic card */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/80 shadow-xl overflow-hidden">
                {/* Animated border glow */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl blur-sm opacity-20`}
                />
                
                {/* Inner glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-3 rounded-3xl`} />
                
                {/* Content container */}
                <div className="relative z-10">
                  {/* Floating icon with pulse animation */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotateY: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className={`inline-flex w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl shadow-2xl ${feature.glowColor} items-center justify-center text-white mb-6`}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  {/* Holographic highlight badge */}
                  <motion.div
                    animate={{
                      opacity: [0.6, 1, 0.6],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-xs font-bold rounded-full shadow-lg ${feature.glowColor}`}
                  >
                    {feature.highlight}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-900 text-xl tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                  
                  {/* Scanning line effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.7
                    }}
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${feature.color} opacity-60`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Futuristic stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-white/90 backdrop-blur-xl rounded-full px-8 py-4 border border-gray-200/80 shadow-lg">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-500/50"
            />
            <span className="text-gray-600 text-sm font-light">
              SYSTÈME ACTIF • 
              <span className="font-bold text-cyan-600 ml-2">127,483</span> 
              <span className="text-gray-500 ml-1">utilisateurs connectés</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
