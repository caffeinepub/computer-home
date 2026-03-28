import { motion } from "motion/react";

const categories = [
  {
    label: "Laptops",
    image: "/assets/generated/asus-laptop.dim_400x300.jpg",
    id: "laptops",
  },
  {
    label: "Desktops",
    image: "/assets/generated/asus-desktop.dim_400x300.jpg",
    id: "desktops",
  },
  {
    label: "All-in-One PCs",
    image: "/assets/generated/asus-aio.dim_400x300.jpg",
    id: "allinone",
  },
  {
    label: "Peripherals",
    image: "/assets/generated/peripherals.dim_400x300.jpg",
    id: "peripherals",
  },
  {
    label: "Printers",
    image: "/assets/generated/epson-printer.dim_400x300.jpg",
    id: "printers",
  },
];

export default function CategorySection() {
  return (
    <section
      id="categories"
      className="py-12"
      style={{ background: "#F7FAFC" }}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <h2
          className="text-center font-bold text-2xl mb-8"
          style={{ color: "#111111" }}
        >
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href={`#${cat.id}`}
              data-ocid={`category.${cat.id}.card`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.04 }}
              className="rounded-xl overflow-hidden shadow-card cursor-pointer block"
              style={{ border: "1px solid #E6ECF2" }}
            >
              {/* Image area */}
              <div
                className="h-36 flex items-center justify-center p-3"
                style={{ background: "#E9F0F5" }}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="h-full w-full object-contain"
                />
              </div>
              {/* Label */}
              <div
                className="py-3 px-2 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.32 0.072 222), oklch(0.27 0.065 225))",
                }}
              >
                <span className="text-white text-sm font-bold tracking-wide">
                  {cat.label}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
