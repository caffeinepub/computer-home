import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    headline: "EXPERIENCE INNOVATION AT COMPUTER HOME",
    subtext:
      "Discover the latest ASUS Laptops, All-in-One PCs & Desktops — performance engineered for every need.",
    leftImage: "/assets/generated/asus-laptop.dim_400x300.jpg",
    rightImage: "/assets/generated/asus-desktop.dim_400x300.jpg",
    badge: "New Arrivals",
  },
  {
    id: 2,
    headline: "PRINT SMARTER WITH EPSON PRINTERS",
    subtext:
      "Professional-grade EPSON printers for home and office — crisp prints, reliable performance.",
    leftImage: "/assets/generated/epson-printer.dim_400x300.jpg",
    rightImage: "/assets/generated/peripherals.dim_400x300.jpg",
    badge: "Best Sellers",
  },
  {
    id: 3,
    headline: "COMPLETE YOUR WORKSPACE WITH ASUS AIO",
    subtext:
      "Sleek ASUS All-in-One PCs and premium peripherals to create your perfect workstation.",
    leftImage: "/assets/generated/asus-aio.dim_400x300.jpg",
    rightImage: "/assets/generated/peripherals.dim_400x300.jpg",
    badge: "Featured",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const slide = slides[current];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #EEF3F7 0%, #E6EEF4 100%)",
        minHeight: "340px",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between gap-4"
          >
            {/* Left image */}
            <div className="hidden md:flex w-1/4 justify-center">
              <img
                src={slide.leftImage}
                alt="Product"
                className="h-52 w-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Center text */}
            <div className="flex-1 text-center px-4">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 text-white"
                style={{ background: "oklch(0.52 0.08 200)" }}
              >
                {slide.badge}
              </span>
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight leading-tight mb-4"
                style={{ color: "#111111" }}
              >
                {slide.headline}
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-lg mx-auto leading-relaxed">
                {slide.subtext}
              </p>
              <Button
                data-ocid="hero.shop_now.button"
                size="lg"
                className="text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                style={{ background: "oklch(0.40 0.08 218)", border: "none" }}
              >
                Shop Now
              </Button>
            </div>

            {/* Right image */}
            <div className="hidden md:flex w-1/4 justify-center">
              <img
                src={slide.rightImage}
                alt="Product"
                className="h-52 w-auto object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev/Next */}
      <button
        type="button"
        onClick={prev}
        data-ocid="hero.prev.button"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 text-gray-700" />
      </button>
      <button
        type="button"
        onClick={next}
        data-ocid="hero.next.button"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 text-gray-700" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((s, i) => (
          <button
            type="button"
            key={s.id}
            onClick={() => setCurrent(i)}
            data-ocid={`hero.dot.${i + 1}`}
            className="rounded-full transition-all"
            style={{
              background: i === current ? "oklch(0.40 0.08 218)" : "#CBD5E1",
              width: i === current ? "24px" : "8px",
              height: "8px",
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
