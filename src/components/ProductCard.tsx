"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Watch } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  watch: Watch;
}

export default function ProductCard({ watch }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-chrono-dark-gray border border-chrono-gold/0 hover:border-chrono-gold/30 transition-all duration-500 cursor-pointer"
    >
      <Link href={`/collections/${watch.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-chrono-mid-gray">
          <Image
            src={watch.images[0]}
            alt={watch.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-chrono-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {watch.new && (
              <span className="bg-chrono-gold text-chrono-black text-xs uppercase tracking-widest px-3 py-1 font-semibold">
                New
              </span>
            )}
            {watch.featured && (
              <span className="border border-chrono-gold text-chrono-gold text-xs uppercase tracking-widest px-3 py-1">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-chrono-gold mb-2">
            {watch.collection}
          </p>
          <h3 className="font-serif text-xl text-chrono-cream mb-2 leading-snug">
            {watch.name}
          </h3>
          <p className="text-chrono-gray text-sm leading-relaxed mb-4 line-clamp-2">
            {watch.shortDescription}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-chrono-gold font-semibold tracking-wide">
              {formatPrice(watch.price)}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-chrono-gray group-hover:text-chrono-gold transition-colors duration-300 border-b border-transparent group-hover:border-chrono-gold">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
