"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const values = [
  {
    number: "01",
    title: "Precision",
    description:
      "Every gear, spring, and jewel is hand-finished to tolerances measured in microns. We do not compromise where it cannot be seen, because we believe excellence is felt before it is observed.",
  },
  {
    number: "02",
    title: "Heritage",
    description:
      "Rooted in a centuries-old Swiss tradition, CHRONO was founded by watchmakers who studied under the great ateliers of Geneva. We inherit the past to transcend it.",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "We pair ancestral techniques with proprietary in-house movements, pushing the limits of what a manually-crafted timepiece can achieve in the twenty-first century.",
  },
];

const craft = [
  {
    title: "The Movement",
    body: "Each CHRONO calibre originates as a blueprint refined over 18 months. Our master watchmakers assemble every component by hand, requiring over 300 individual operations per movement. The result is a mechanism that will outlast its owner.",
    image:
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
  },
  {
    title: "The Dial",
    body: "Our dials are produced in a separate atelier dedicated entirely to their craft. Grand Feu enamel dials pass through eight firings; guilloché dials are engraved on nineteenth-century rose engines. No two surfaces are truly identical.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-chrono-black relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, #1a1a1a 0%, #0a0a0a 80%)",
          }}
        />
        <motion.p
          {...inView(0.1)}
          className="text-xs uppercase tracking-[0.4em] text-chrono-gold mb-6 relative z-10"
        >
          Our Story
        </motion.p>
        <motion.h1
          {...inView(0.25)}
          className="font-serif text-5xl md:text-7xl text-chrono-cream leading-tight relative z-10 max-w-4xl"
        >
          The Art of
          <br />
          Timekeeping
        </motion.h1>
        <motion.div
          {...inView(0.4)}
          className="flex items-center gap-6 mt-8 relative z-10"
        >
          <div className="h-px w-16 bg-chrono-gold/40" />
          <span className="text-xs tracking-[0.4em] text-chrono-gold">
            FOUNDED MMXXIV
          </span>
          <div className="h-px w-16 bg-chrono-gold/40" />
        </motion.div>
      </section>

      {/* Brand story */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div {...inView(0)}>
          <p className="text-xs uppercase tracking-[0.3em] text-chrono-gold mb-6">
            The Beginning
          </p>
          <h2 className="font-serif text-4xl text-chrono-cream mb-6 leading-snug">
            Built on a Single Obsession
          </h2>
          <div className="space-y-4 text-chrono-gray leading-relaxed text-sm">
            <p>
              CHRONO was born in 2024 from a simple, stubborn belief: that a
              wristwatch should be the most precisely made object a person ever
              owns. Our founders — trained at the great ateliers of Le Sentier —
              departed the established houses to build something entirely their
              own.
            </p>
            <p>
              We occupy a single building in the Vallée de Joux, where
              watchmakers, dial artists, and case polishers work in proximity.
              Proximity is intentional. Every person who touches a CHRONO
              timepiece can look across the room and see every other person who
              will touch it.
            </p>
            <p>
              Accountability is our quality control. Pride is our guarantee.
            </p>
          </div>
        </motion.div>
        <motion.div
          {...inView(0.2)}
          className="relative aspect-[4/5] bg-chrono-dark-gray overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80"
            alt="Watchmaker at work"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chrono-black/40 to-transparent" />
        </motion.div>
      </section>

      {/* Values */}
      <section className="bg-chrono-dark-gray py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div {...inView()} className="text-center mb-16">
            <p className="section-subheading mb-3">What Drives Us</p>
            <h2 className="section-heading">Our Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map(({ number, title, description }, i) => (
              <motion.div key={title} {...inView(i * 0.1)} className="group">
                <p className="font-serif text-5xl text-chrono-gold/20 group-hover:text-chrono-gold/40 transition-colors duration-500 mb-4">
                  {number}
                </p>
                <h3 className="font-serif text-2xl text-chrono-cream mb-4">
                  {title}
                </h3>
                <p className="text-chrono-gray text-sm leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Craft */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div {...inView()} className="text-center mb-16">
          <p className="section-subheading mb-3">How It&apos;s Made</p>
          <h2 className="section-heading">The Craft</h2>
        </motion.div>
        <div className="space-y-24">
          {craft.map(({ title, body, image }, i) => (
            <motion.div
              key={title}
              {...inView(0)}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <h3 className="font-serif text-3xl text-chrono-cream mb-6">
                  {title}
                </h3>
                <p className="text-chrono-gray text-sm leading-relaxed">{body}</p>
              </div>
              <div
                className={`relative aspect-video bg-chrono-dark-gray overflow-hidden ${
                  i % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6 bg-chrono-dark-gray/40">
        <motion.p
          {...inView(0)}
          className="text-xs uppercase tracking-[0.4em] text-chrono-gold mb-6"
        >
          Ready to Begin
        </motion.p>
        <motion.h2
          {...inView(0.1)}
          className="font-serif text-4xl md:text-5xl text-chrono-cream mb-8"
        >
          Discover the Collection
        </motion.h2>
        <motion.div {...inView(0.2)}>
          <Link href="/collections" className="btn-primary">
            Explore All Timepieces
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
