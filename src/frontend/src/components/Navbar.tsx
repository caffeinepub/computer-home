import { Input } from "@/components/ui/input";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Laptops", id: "laptops" },
  { label: "Desktops", id: "desktops" },
  { label: "All-in-One PCs", id: "allinone" },
  { label: "Peripherals", id: "peripherals" },
  { label: "Printers", id: "printers" },
  { label: "Deals", id: "deals" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <nav
      className="w-full sticky top-0 z-50 shadow-lg"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.32 0.072 222), oklch(0.27 0.065 225))",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            data-ocid="navbar.logo.link"
            className="flex items-center gap-2 text-white font-extrabold text-xl tracking-widest uppercase shrink-0"
          >
            <img
              src="/assets/ch_newlogo-019d34bb-e6aa-7078-a0b0-f6eebf814deb.jpg"
              alt="Computer Home Logo"
              className="h-10 w-auto object-contain rounded"
            />
            <span style={{ color: "oklch(0.58 0.09 197)" }}>COMPUTER</span>{" "}
            <span className="text-white">HOME</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  data-ocid={`navbar.${link.id}.link`}
                  className="text-white/85 hover:text-white text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Search + Cart */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                data-ocid="navbar.search_input"
                placeholder="Search products..."
                className="pl-9 h-8 w-48 bg-white/90 border-0 rounded-full text-sm focus-visible:ring-2"
              />
            </div>
            <button
              type="button"
              data-ocid="navbar.cart.button"
              className="relative text-white hover:text-white/80 transition-colors p-1"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            data-ocid="navbar.menu.toggle"
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "oklch(0.27 0.065 225)" }}
          >
            <div className="max-w-[1200px] mx-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  data-ocid={`navbar.mobile.${link.id}.link`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white/85 hover:text-white text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 pb-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search products..."
                    className="pl-9 h-9 bg-white/90 border-0 rounded-full text-sm"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
