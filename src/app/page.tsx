import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import watchesData from "@/data/watches.json";
import { Watch } from "@/lib/types";
import { Shield, Award, Clock } from "lucide-react";
import Link from "next/link";

const watches = watchesData as Watch[];

const promises = [
  {
    icon: Shield,
    title: "Swiss Precision",
    subtitle: "Every movement certified to COSC standards",
  },
  {
    icon: Award,
    title: "Lifetime Warranty",
    subtitle: "Unconditional craftsmanship guarantee",
  },
  {
    icon: Clock,
    title: "Free Delivery",
    subtitle: "White-glove worldwide shipping, insured",
  },
];

export default function Home() {
  const featured = watches.filter((w) => w.featured);
  const newArrivals = watches.filter((w) => w.new);

  return (
    <>
      <HeroSection />

      {/* Featured Collection */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subheading mb-3">Handpicked</p>
          <h2 className="section-heading">Featured Collection</h2>
          <p className="text-chrono-gray mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Explore our most coveted timepieces — each selected for its
            unrivalled craftsmanship and enduring design.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((watch) => (
            <ProductCard key={watch.id} watch={watch} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/collections" className="btn-outline">
            View All Timepieces
          </Link>
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-chrono-dark-gray py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {promises.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 border border-chrono-gold/30 flex items-center justify-center">
                <Icon size={20} className="text-chrono-gold" />
              </div>
              <h3 className="font-serif text-lg text-chrono-cream">{title}</h3>
              <p className="text-chrono-gray text-sm leading-relaxed">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      {newArrivals.length > 0 && (
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-subheading mb-3">Just Arrived</p>
            <h2 className="section-heading">New Arrivals</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newArrivals.map((watch) => (
              <ProductCard key={watch.id} watch={watch} />
            ))}
          </div>
        </section>
      )}

      {/* Brand story teaser */}
      <section className="py-32 px-6 text-center bg-chrono-dark-gray/40">
        <p className="text-xs uppercase tracking-[0.4em] text-chrono-gold mb-8">
          Since MMXXIV
        </p>
        <blockquote className="font-serif text-3xl md:text-5xl text-chrono-cream max-w-3xl mx-auto leading-snug mb-12">
          &ldquo;Time is not measured by clocks,<br />
          but by moments.&rdquo;
        </blockquote>
        <Link href="/about" className="btn-outline">
          Our Story
        </Link>
      </section>
    </>
  );
}
