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

  const events = [
    // DAY 1: 17.10.2025
    { name: "TT (MNTC)", club: "MNTC", time: "9:00 AM – 12:00 PM", venue: "MAB LG 33; LH 32,34", day: 1, category: "competition" },
    { name: "PROTOQUEST (ISTE)", club: "ISTE", time: "9:00 AM – 12:00 PM", venue: "MAB LH14", day: 1, category: "tech" },
    { name: "CAR AUCTION", club: "SAE", time: "9:00 AM – 5:00 PM", venue: "NAB 106", day: 1, category: "fun" },
    { name: "WORKSHOP (SAE)", club: "SAE", time: "9:00 AM – 6:00 PM", venue: "NAB 211", day: 1, category: "workshop" },
    { name: "CLASH OF CODERS (RECURSION)", club: "RECURSION", time: "9:30 AM – 12:45 PM", venue: "NAB 401", day: 1, category: "tech" },
    { name: "WORKSHOP (GLUG)", club: "GLUG", time: "10:00 AM – 5:00 PM", venue: "NAB 203", day: 1, category: "workshop" },
    { name: "E-CELL EVENT (CCA)", club: "CCA", time: "10:00 AM – 5:00 PM", venue: "NAB 206", day: 1, category: "competition" },
    { name: "GAME (CCA-WDCT)", club: "CCA-WDCT", time: "10:00 AM – 5:00 PM", venue: "NAB 403", day: 1, category: "fun" },
    { name: "DEATH NOTE (SAE)", club: "SAE", time: "10:00 AM – 5:00 PM", venue: "NAB 402", day: 1, category: "fun" },
    { name: "CROSS VARSE (SAE)", club: "SAE", time: "10:00 AM – 5:00 PM", venue: "ONLINE", day: 1, category: "tech" },
    { name: "SELLDOM (CCA-E-CELL)", club: "CCA-E-CELL", time: "1:00 PM – 6:00 PM", venue: "ARENA", day: 1, category: "competition" },
    { name: "TC (MNTC)", club: "MNTC", time: "2:00 PM – 5:00 PM", venue: "MAB LG11", day: 1, category: "tech" },
    { name: "MINDSWEEPERS (RECURSION)", club: "RECURSION", time: "2:00 PM – 5:00 PM", venue: "NAB 401", day: 1, category: "tech" },
    { name: "ROBOLIGA (SAE)", club: "SAE", time: "2:00 PM – 6:00 PM", venue: "ARENA", day: 1, category: "competition" },
    { name: "ROBOSUMO (SAE)", club: "SAE", time: "2:00 PM – 6:00 PM", venue: "ARENA", day: 1, category: "competition" },
    { name: "AQUA RACE (SAE)", club: "SAE", time: "2:00 PM – 6:00 PM", venue: "ARENA", day: 1, category: "competition" },
    { name: "YALI (IEEE)", club: "IEEE", time: "2:00 PM – 6:00 PM", venue: "NAB 205", day: 1, category: "tech" },
    { name: "INVICTUS (CCA)", club: "CCA", time: "3:00 PM – 5:00 PM", venue: "NAB 10,11", day: 1, category: "competition" },
    { name: "RIPPLE EFFECT (CCA)", club: "CCA", time: "4:00 PM – 6:00 PM", venue: "ARENA", day: 1, category: "fun" },
    { name: "TECH MELA", club: "AAROHAN", time: "5:00 PM ONWARDS", venue: "ARENA", day: 1, category: "fun" },
    { name: "OPENING CEREMONY", club: "AAROHAN", time: "6:00 PM – 7:00 PM", venue: "MAIN STAGE", day: 1, category: "performance" },
    { name: "BMEP PERFORMANCE", club: "BMEP", time: "7:00 PM – 7:30 PM", venue: "MAIN STAGE", day: 1, category: "performance" },
    { name: "MUSIC CLUB", club: "Music Club", time: "7:40 PM – 8:10 PM", venue: "MAIN STAGE", day: 1, category: "performance" },
    { name: "SPIC MACAY", club: "SPIC MACAY", time: "8:20 PM – 8:50 PM", venue: "MAIN STAGE", day: 1, category: "performance" },
    { name: "INAUGURAL DINNER", club: "AAROHAN", time: "9:00 PM – 10:30 PM", venue: "FOOD COURT", day: 1, category: "fun" },
    
    // DAY 2: 18.10.2025
    { name: "COS (MNTC)", club: "MNTC", time: "9:00 AM – 12:00 PM", venue: "MAB LG32,33", day: 2, category: "tech" },
    { name: "SAE WORKSHOP", club: "SAE", time: "9:00 AM – 6:00 PM", venue: "NAB 211", day: 2, category: "workshop" },
    { name: "CAR AUCTION (SAE)", club: "SAE", time: "9:00 AM – 12:00 PM", venue: "NAB 106", day: 2, category: "fun" },
    { name: "ON SPOT HACKATHON (CCA)", club: "CCA", time: "10:00 AM – 5:00 PM", venue: "NAB 306", day: 2, category: "tech" },
    { name: "GAME (CCA-WDCT)", club: "CCA-WDCT", time: "10:00 AM – 5:00 PM", venue: "NAB 403", day: 2, category: "fun" },
    { name: "WORKSHOP (CCA)", club: "CCA", time: "10:00 AM – 5:00 PM", venue: "NAB 220", day: 2, category: "workshop" },
    { name: "CROSS VARSE (SAE)", club: "SAE", time: "10:00 AM – 5:00 PM", venue: "ONLINE", day: 2, category: "tech" },
    { name: "SELLDOM (CCA-E-CELL)", club: "CCA-E-CELL", time: "1:00 PM – 6:00 PM", venue: "ARENA", day: 2, category: "competition" },
    { name: "BAB (CCA)", club: "CCA", time: "2:00 PM – 3:30 PM", venue: "NAB 010", day: 2, category: "competition" },
    { name: "MATRIX (MNTC)", club: "MNTC", time: "2:00 PM – 5:00 PM", venue: "NAB 205", day: 2, category: "tech" },
    { name: "TEMP TRICK (CCA)", club: "CCA", time: "2:00 PM – 5:00 PM", venue: "NAB 303", day: 2, category: "fun" },
    { name: "THE NETWORKING PITCH (SAI CELL)", club: "SAI CELL", time: "2:00 PM – 5:00 PM", venue: "MAB(TR15,16; LH14)", day: 2, category: "competition" },
    { name: "CONTRAPTIONS (CCA)", club: "CCA", time: "2:00 PM – 6:00 PM", venue: "NAB 11", day: 2, category: "tech" },
    { name: "ROBOLIGA (SAE)", club: "SAE", time: "2:00 PM – 6:00 PM", venue: "ARENA", day: 2, category: "competition" },
    { name: "ROBOSUMO (SAE)", club: "SAE", time: "2:00 PM – 6:00 PM", venue: "ARENA", day: 2, category: "competition" },
    { name: "AQUA RACE (SAE)", club: "SAE", time: "2:00 PM – 6:00 PM", venue: "ARENA", day: 2, category: "competition" },
    { name: "RECHASE (RECURSION)", club: "RECURSION", time: "2:00 PM – 6:00 PM", venue: "ARENA", day: 2, category: "tech" },
    { name: "GAMING EVENT", club: "Gaming Club", time: "2:30 PM – 5:00 PM", venue: "NAB 402", day: 2, category: "fun" },
    { name: "SQUID GAME (CCA)", club: "CCA", time: "3:00 PM – 5:00 PM", venue: "ARENA", day: 2, category: "fun" },
    { name: "RIPPLE EFFECT", club: "CCA", time: "4:00 PM – 6:00 PM", venue: "ARENA", day: 2, category: "fun" },
    { name: "TECH MELA", club: "AAROHAN", time: "5:00 PM ONWARDS", venue: "ARENA", day: 2, category: "fun" },
    { name: "DANCE CLUB", club: "Dance Club", time: "6:00 PM – 6:30 PM", venue: "MAIN STAGE", day: 2, category: "performance" },
    { name: "IGNITIA (VISHNU VIJAYAN)", club: "IGNITIA", time: "6:30 PM – 7:10 PM", venue: "MAIN STAGE", day: 2, category: "performance" },
    { name: "IGNITIA (TADIT KUMAR DASH)", club: "IGNITIA", time: "7:10 PM – 7:50 PM", venue: "MAIN STAGE", day: 2, category: "performance" },
    { name: "INSPIRATI (MONA AGARWAL)", club: "INSPIRATI", time: "7:50 PM – 8:30 PM", venue: "MAIN STAGE", day: 2, category: "performance" },
    { name: "BAND PERFORMANCE", club: "Music Club", time: "8:30 PM – 10:30 PM", venue: "MAIN STAGE", day: 2, category: "performance" },
    
    // DAY 3: 19.10.2025
    { name: "ON SPOT HACKATHON (GLUG)", club: "GLUG", time: "9:00 AM – 11:00 AM", venue: "NAB 203", day: 3, category: "tech" },
    { name: "BB (MNTC)", club: "MNTC", time: "9:00 AM – 12:00 PM", venue: "MAB LH-32,33,34", day: 3, category: "tech" },
    { name: "BIDWIT (SAE)", club: "SAE", time: "9:00 AM – 12:00 PM", venue: "NAB 11", day: 3, category: "competition" },
    { name: "SPACE TECH QUIZ (QUIZINC)", club: "QUIZINC", time: "9:00 AM – 12:00 PM", venue: "NAB 303", day: 3, category: "tech" },
    { name: "AI GAMES WORKSHOP (CCA)", club: "CCA", time: "9:00 AM – 12:00 PM", venue: "NAB 403", day: 3, category: "workshop" },
    { name: "CONJECTURE (CCA)", club: "CCA", time: "10:00 AM – 1:00 PM", venue: "NAB 103", day: 3, category: "tech" },
    { name: "CCA (E-CELL)", club: "E-CELL", time: "10:00 AM – 5:00 PM", venue: "NAB 206", day: 3, category: "competition" },
    { name: "ON SPOT (CCA)", club: "CCA", time: "10:00 AM – 5:00 PM", venue: "NAB 306", day: 3, category: "competition" },
    { name: "CROSS VARSE (SAE)", club: "SAE", time: "10:00 AM – 5:00 PM", venue: "ONLINE", day: 3, category: "tech" },
    { name: "SELLDOM (CCA-E-CELL)", club: "CCA-E-CELL", time: "1:00 PM – 6:00 PM", venue: "ARENA", day: 3, category: "competition" },
    { name: "CYBER SECURITY WORKSHOP (CCA)", club: "CCA", time: "2:00 PM – 5:00 PM", venue: "NAB 403", day: 3, category: "workshop" },
    { name: "COT (MNTC)", club: "MNTC", time: "2:00 PM – 5:00 PM", venue: "ARENA", day: 3, category: "tech" },
    { name: "FANTASY FOOTBALL (GLUG)", club: "GLUG", time: "2:00 PM – 5:00 PM", venue: "NAB 301", day: 3, category: "fun" },
    { name: "ROBOLIGA (SAE)", club: "SAE", time: "2:00 PM – 6:00 PM", venue: "ARENA", day: 3, category: "competition" },
    { name: "ROBOSUMO (SAE)", club: "SAE", time: "2:00 PM – 6:00 PM", venue: "ARENA", day: 3, category: "competition" },
    { name: "AQUA RACE (SAE)", club: "SAE", time: "2:00 PM – 6:00 PM", venue: "ARENA", day: 3, category: "competition" },
    { name: "ESCAPE ROOM (CCA)", club: "CCA", time: "4:00 PM – 6:00 PM", venue: "ARENA", day: 3, category: "fun" },
    { name: "ENTERACT", club: "AAROHAN", time: "6:00 PM – 6:30 PM", venue: "MAIN STAGE", day: 3, category: "performance" },
    { name: "INSPIRATI (GAURAV GHAI)", club: "INSPIRATI", time: "6:40 PM – 7:20 PM", venue: "MAIN STAGE", day: 3, category: "performance" },
    { name: "INSPIRATI (TANVI BHATT)", club: "INSPIRATI", time: "7:20 PM – 8:00 PM", venue: "MAIN STAGE", day: 3, category: "performance" },
    { name: "SOLO SINGER", club: "Music Club", time: "8:00 PM – 10:30 PM", venue: "MAIN STAGE", day: 3, category: "performance" },
  ];


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
