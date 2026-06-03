import ProductDetail from "@/components/ProductDetail";
import watchesData from "@/data/watches.json";
import { Watch } from "@/lib/types";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const watches = watchesData as Watch[];

export function generateStaticParams() {
  return watches.map((w) => ({ slug: w.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const watch = watches.find((w) => w.slug === params.slug);

  if (!watch) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
        <p className="font-serif text-4xl text-chrono-cream">Watch not found</p>
        <Link href="/collections" className="btn-outline">
          Back to Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-chrono-gray mb-12 uppercase tracking-widest">
        <Link href="/" className="hover:text-chrono-gold transition-colors">
          Home
        </Link>
        <ChevronRight size={12} />
        <Link href="/collections" className="hover:text-chrono-gold transition-colors">
          Collections
        </Link>
        <ChevronRight size={12} />
        <span className="text-chrono-cream">{watch.name}</span>
      </nav>

      <ProductDetail watch={watch} />
    </div>
  );
}
