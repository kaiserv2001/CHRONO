"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-chrono-black">
      {/* Radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, #1a1a1a 0%, #0a0a0a 70%)",
        }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-32 left-12 w-16 h-px bg-chrono-gold/30" />
      <div className="absolute top-32 left-12 w-px h-16 bg-chrono-gold/30" />
      <div className="absolute top-32 right-12 w-16 h-px bg-chrono-gold/30" />
      <div className="absolute top-32 right-12 w-px h-16 bg-chrono-gold/30 ml-auto" style={{ right: "3rem" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-xs uppercase tracking-[0.4em] text-chrono-gold mb-8"
        >
          Swiss Luxury Timepieces
        </motion.p>

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.3)}
          className="font-serif leading-none mb-4"
        >
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-chrono-cream/80">
            MASTER THE
          </span>
          <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-chrono-cream">
            MOMENT
          </span>
        </motion.h1>

        {/* Divider with text */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex items-center gap-6 justify-center my-8"
        >
          <div className="h-px w-16 bg-chrono-gold/40" />
          <span className="text-xs tracking-[0.4em] text-chrono-gold uppercase">
            Est. MMXXIV
          </span>
          <div className="h-px w-16 bg-chrono-gold/40" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.6)}
          className="text-chrono-gray text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12"
        >
          Swiss-inspired luxury timepieces crafted for those who demand
          perfection in every second.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.75)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/collections" className="btn-primary min-w-[200px] text-center">
            Explore Collection
          </Link>
          <Link href="/about" className="btn-outline min-w-[200px] text-center">
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-chrono-gray/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-chrono-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
