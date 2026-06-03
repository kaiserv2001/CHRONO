import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-chrono-black border-t border-chrono-gold/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-[0.3em] text-chrono-gold mb-4">
              CHRONO
            </p>
            <p className="text-chrono-gray text-sm leading-relaxed tracking-wide">
              Precision. Elegance. Time.
            </p>
            <p className="text-chrono-gray/60 text-xs mt-4 leading-relaxed max-w-xs">
              Swiss-inspired luxury timepieces, designed for those who demand
              that every second count.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-chrono-cream mb-6">
              Navigate
            </p>
            <ul className="flex flex-col gap-4">
              {[
                { label: "Collections", href: "/collections" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "#" },
                { label: "Press", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-chrono-gray text-sm hover:text-chrono-gold transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-chrono-cream mb-2">
              Follow the Craft
            </p>
            <p className="text-chrono-gray/60 text-xs mb-6 leading-relaxed">
              Join the circle. Updates on new releases, events, and stories
              from the atelier.
            </p>
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-chrono-dark-gray border border-chrono-gold/20 text-chrono-cream text-xs px-4 py-3 outline-none focus:border-chrono-gold/50 transition-colors placeholder:text-chrono-gray/40"
              />
              <button className="bg-chrono-gold text-chrono-black text-xs uppercase tracking-widest px-5 py-3 hover:bg-chrono-gold-light transition-colors duration-300 font-semibold">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-chrono-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-chrono-gray/50 text-xs tracking-wide">
            © 2024 CHRONO. All rights reserved.
          </p>
          <p className="text-chrono-gray/30 text-xs tracking-widest uppercase">
            Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
