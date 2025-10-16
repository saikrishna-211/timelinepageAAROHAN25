"use client";

import { motion } from "framer-motion"; // ✅ Correct import for Next.js
import { Clock, MapPin } from "lucide-react";

// --- CHANGE 1: Accept the 'isAnimated' prop ---
export function EventCard({ event, index, icon, isAnimated }) {
  const isLeft = index % 2 === 0;

  return (
    // --- CHANGE 2: Conditionally apply animation props ---
    <motion.div
      className={`relative flex items-center mb-16 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
      initial={isAnimated ? { opacity: 0, x: isLeft ? -100 : 100 } : {}}
      whileInView={isAnimated ? { opacity: 1, x: 0 } : {}}
      viewport={{ once: true, margin: "-100px" }}
      transition={isAnimated ? { duration: 0.6, delay: 0.1 } : {}}
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-[#ff00ff] to-[#00ffff] shadow-[0_0_30px_rgba(255,0,255,0.9)] z-20 border-4 border-[#1a0033]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        whileHover={{ scale: 1.3 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff00ff] to-[#00ffff]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Card */}
      <motion.div
        className={`w-full md:w-[45%] ${
          isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
        }`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-[#00ffff]/30 shadow-[0_8px_32px_0_rgba(0,255,255,0.2)] hover:shadow-[0_8px_32px_0_rgba(255,0,255,0.4)] transition-all duration-300 group">
          {/* Glowing Effect on Hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff00ff]/0 to-[#00ffff]/0 group-hover:from-[#ff00ff]/10 group-hover:to-[#00ffff]/10 transition-all duration-500"></div>

          {/* Category Icon */}
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#ff00ff] to-[#00ffff] flex items-center justify-center shadow-[0_0_20px_rgba(255,0,255,0.8)] text-white">
            {icon}
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3
              className="text-2xl mb-2 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              {event.name}
            </h3>
            <p
              className="text-[#00ffff] mb-4 italic"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              ({event.club})
            </p>

            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-2 text-[#ff00ff]" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-[#00ffff]" />
                <span>{event.venue}</span>
              </div>
            </div>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ff00ff] rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00ffff] rounded-br-2xl"></div>
        </div>
      </motion.div>
    </motion.div>
  );
}
