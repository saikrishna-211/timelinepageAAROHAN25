"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Info,
  Code,
  Lightbulb,
  Gamepad2,
  Music,
  Trophy,
  Zap,
  ArrowUp,
} from "lucide-react";

import { Button } from "./components/ui/button";
import { EventCard } from "./components/EventCard";
import { events } from "../data";


export default function HomePage() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  // ✅ Reliable scroll detection (works even in Next.js SSR)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setShowScrollTopButton(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll to top
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  
  const getCategoryIcon = (category) => {
    switch (category) {
      case "tech":
        return <Code className="w-5 h-5" />;
      case "workshop":
        return <Lightbulb className="w-5 h-5" />;
      case "fun":
        return <Gamepad2 className="w-5 h-5" />;
      case "performance":
        return <Music className="w-5 h-5" />;
      case "competition":
        return <Trophy className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const filteredEvents = selectedDay
    ? events.filter((event) => event.day === selectedDay)
    : events;

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(/background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#1a0033]/80 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="pt-12 pb-8 px-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            AAROHAṆ 2025–26
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl mb-2 text-[#00ffff]"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            EVENT TIMELINE
          </motion.h2>

          <motion.p className="text-lg text-gray-300 mb-8">
            National Institute of Technology, Durgapur
          </motion.p>

          {/* Day Buttons */}
          <motion.div className="flex flex-wrap justify-center gap-4 mb-12">
            {[1, 2, 3].map((day) => (
              <Button
                key={day}
                onClick={() => setSelectedDay(selectedDay === day ? null : day)}
                className={`px-6 py-6 rounded-lg border-2 transition-all duration-300 ${
                  selectedDay === day
                    ? "bg-[#ff00ff] border-[#ff00ff] text-white shadow-[0_0_30px_rgba(255,0,255,0.8)]"
                    : "bg-transparent border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
                }`}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Day {day} – Oct {16 + day}, 2025
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ff00ff] via-[#00ffff] to-[#ff00ff] shadow-[0_0_20px_rgba(255,0,255,0.8)]"></div>

            {/* Events */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDay || "all"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredEvents.map((event, index) => (
                  <EventCard
                    key={`${event.name}-${index}`}
                    event={event}
                    index={index}
                    icon={getCategoryIcon(event.category)}
                    isAnimated={index >= 2}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ✅ Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTopButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-[#ff00ff] to-[#00ffff] text-white flex items-center justify-center shadow-[0_0_25px_rgba(0,255,255,0.8)] z-50 border border-white/40 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
