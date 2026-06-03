"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import watchesData from "@/data/watches.json";
import { Watch } from "@/lib/types";

const watches = watchesData as Watch[];
const FILTERS = ["All", "Heritage", "Sport", "Dress", "Limited"] as const;
type Filter = (typeof FILTERS)[number];

export default function CollectionsPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? watches
      : watches.filter(
          (w) => w.collection.toLowerCase() === active.toLowerCase()
        );

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-chrono-gold mb-4">
          CHRONO Atelier
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-chrono-cream">
          Our Collection
        </h1>
        <p className="text-chrono-gray mt-6 max-w-md mx-auto text-sm leading-relaxed">
          Every piece is designed to outlast generations. Choose the timepiece
          that speaks to your character.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-xs uppercase tracking-[0.2em] px-6 py-2.5 border transition-all duration-300 ${
              active === f
                ? "bg-chrono-gold border-chrono-gold text-chrono-black font-semibold"
                : "border-chrono-gold/30 text-chrono-gray hover:border-chrono-gold hover:text-chrono-cream"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-center text-xs text-chrono-gray/60 uppercase tracking-widest mb-12">
        Showing {filtered.length} timepiece{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((watch) => (
            <motion.div
              key={watch.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard watch={watch} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
