"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import { Watch } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface ProductDetailProps {
  watch: Watch;
}

const specLabels: Record<string, string> = {
  movement: "Movement",
  caseDiameter: "Case Diameter",
  caseThickness: "Thickness",
  caseMaterial: "Case Material",
  dialColor: "Dial",
  crystal: "Crystal",
  waterResistance: "Water Resistance",
  powerReserve: "Power Reserve",
  bracelet: "Bracelet / Strap",
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProductDetail({ watch }: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
    >
      {/* Left — Images */}
      <motion.div variants={fadeUp}>
        {/* Main image */}
        <div className="relative aspect-square bg-chrono-dark-gray overflow-hidden mb-4">
          <Image
            src={watch.images[activeImage]}
            alt={`${watch.name} — view ${activeImage + 1}`}
            fill
            className="object-cover transition-all duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3">
          {watch.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`relative w-20 h-20 overflow-hidden border-2 transition-all duration-300 ${
                activeImage === i
                  ? "border-chrono-gold"
                  : "border-transparent hover:border-chrono-gold/40"
              }`}
            >
              <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      </motion.div>

      {/* Right — Details */}
      <div className="flex flex-col">
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.3em] text-chrono-gold mb-3"
        >
          {watch.collection} Collection
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-serif text-4xl md:text-5xl text-chrono-cream leading-tight mb-4"
        >
          {watch.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-3xl text-chrono-gold font-semibold mb-6"
        >
          {formatPrice(watch.price)}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-chrono-gray leading-relaxed mb-8"
        >
          {watch.description}
        </motion.p>

        {/* Divider */}
        <motion.div variants={fadeUp} className="h-px bg-chrono-gold/20 mb-8" />

        {/* Specs */}
        <motion.div variants={fadeUp} className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-chrono-cream mb-4">
            Specifications
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {Object.entries(specLabels).map(([key, label]) => {
              const value = watch.specs[key as keyof typeof watch.specs];
              if (!value) return null;
              return (
                <div key={key}>
                  <p className="text-xs text-chrono-gray uppercase tracking-wide mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm text-chrono-cream">{value as string}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Functions */}
        <motion.div variants={fadeUp} className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-chrono-cream mb-3">
            Functions
          </p>
          <div className="flex flex-wrap gap-2">
            {watch.specs.functions.map((fn) => (
              <span
                key={fn}
                className="border border-chrono-gold/30 text-chrono-gray text-xs px-3 py-1 uppercase tracking-wide"
              >
                {fn}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="flex gap-3 mb-6">
          <button className="flex-1 btn-primary flex items-center justify-center gap-2">
            <ShoppingBag size={16} />
            Add to Collection
          </button>
          <button className="border border-chrono-gold/30 p-3 text-chrono-gray hover:text-chrono-gold hover:border-chrono-gold transition-colors duration-300">
            <Heart size={18} />
          </button>
        </motion.div>

        {/* Tags */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
          {watch.tags.map((tag) => (
            <span
              key={tag}
              className="bg-chrono-dark-gray text-chrono-gray text-xs px-3 py-1 uppercase tracking-wide"
            >
              #{tag}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
