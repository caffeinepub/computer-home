import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetFeaturedProducts } from "@/hooks/useQueries";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import type { Category } from "../backend.d";

const categoryImageMap: Record<string, string> = {
  laptop: "/assets/generated/asus-laptop.dim_400x300.jpg",
  desktop: "/assets/generated/asus-desktop.dim_400x300.jpg",
  allInOne: "/assets/generated/asus-aio.dim_400x300.jpg",
  peripherals: "/assets/generated/peripherals.dim_400x300.jpg",
  printers: "/assets/generated/epson-printer.dim_400x300.jpg",
};

const categoryLabelMap: Record<string, string> = {
  laptop: "Laptop",
  desktop: "Desktop",
  allInOne: "All-in-One",
  peripherals: "Peripherals",
  printers: "Printer",
};

const STAR_INDICES = [0, 1, 2, 3, 4];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {STAR_INDICES.map((i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          fill={i < count ? "oklch(0.76 0.17 75)" : "transparent"}
          stroke={i < count ? "oklch(0.76 0.17 75)" : "#CBD5E1"}
        />
      ))}
      <span className="text-xs text-muted-foreground ml-1">({count}.0)</span>
    </div>
  );
}

const SKELETON_KEYS = ["sk-1", "sk-2", "sk-3", "sk-4"];

function ProductCardSkeleton() {
  return (
    <div
      className="rounded-xl bg-card shadow-card overflow-hidden"
      style={{ border: "1px solid #E6ECF2" }}
      data-ocid="featured.loading_state"
    >
      <Skeleton className="h-48 w-full" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-9 w-full" />
      </div>
    </div>
  );
}

const fallbackProducts = [
  {
    id: BigInt(1),
    featured: true,
    name: "ASUS VivoBook 15 Laptop",
    description: "Thin & light with vibrant display",
    specs: 'Intel Core i5, 16GB RAM, 512GB SSD, 15.6" FHD',
    category: "laptop" as Category,
    brand: "asus" as const,
    price: BigInt(89999),
  },
  {
    id: BigInt(2),
    featured: true,
    name: "ASUS ROG Strix G15 Gaming",
    description: "Ultimate gaming performance",
    specs: "AMD Ryzen 9, 32GB RAM, RTX 4070, 1TB NVMe",
    category: "laptop" as Category,
    brand: "asus" as const,
    price: BigInt(179999),
  },
  {
    id: BigInt(3),
    featured: true,
    name: "ASUS Zen AiO 27 PRO",
    description: "All-in-one powerhouse for creators",
    specs: 'Intel Core i7, 16GB RAM, 1TB SSD, 27" 4K OLED',
    category: "allInOne" as Category,
    brand: "asus" as const,
    price: BigInt(149999),
  },
  {
    id: BigInt(4),
    featured: true,
    name: "Epson EcoTank L3250",
    description: "High-yield wireless photo printer",
    specs: "Print/Scan/Copy, Wi-Fi, 5760x1440 dpi, USB",
    category: "printers" as Category,
    brand: "epson" as const,
    price: BigInt(24999),
  },
];

export default function FeaturedProducts() {
  const { data: products, isLoading } = useGetFeaturedProducts();
  const displayProducts =
    products && products.length > 0 ? products.slice(0, 4) : fallbackProducts;

  return (
    <section className="py-14 bg-white" id="featured">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2
          className="text-center font-bold text-2xl mb-2"
          style={{ color: "#111111" }}
        >
          Featured Products
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-8">
          Handpicked top performers just for you
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? SKELETON_KEYS.map((k) => <ProductCardSkeleton key={k} />)
            : displayProducts.map((product, i) => {
                const stars = (Number(product.id) % 5) + 1;
                const img =
                  categoryImageMap[product.category as string] ??
                  "/assets/generated/asus-laptop.dim_400x300.jpg";
                const catLabel =
                  categoryLabelMap[product.category as string] ??
                  String(product.category);
                const price = `₹${Number(product.price).toLocaleString("en-IN")}`;

                return (
                  <motion.div
                    key={String(product.id)}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    data-ocid={`featured.item.${i + 1}`}
                    className="rounded-xl bg-card shadow-card overflow-hidden flex flex-col group hover:shadow-lg transition-shadow"
                    style={{ border: "1px solid #E6ECF2" }}
                  >
                    <div
                      className="h-48 flex items-center justify-center p-4 group-hover:scale-105 transition-transform"
                      style={{ background: "#F0F5F9" }}
                    >
                      <img
                        src={img}
                        alt={product.name}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <Badge
                        variant="secondary"
                        className="w-fit text-xs mb-2"
                        style={{
                          background: "oklch(0.95 0.015 220)",
                          color: "oklch(0.32 0.072 222)",
                        }}
                      >
                        {catLabel}
                      </Badge>
                      <h3
                        className="font-bold text-sm leading-tight mb-1 line-clamp-2"
                        style={{ color: "#111111" }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                        {product.specs}
                      </p>
                      <StarRating count={stars} />
                      <div className="mt-auto pt-3 flex items-center justify-between">
                        <span
                          className="text-lg font-extrabold"
                          style={{ color: "oklch(0.32 0.072 222)" }}
                        >
                          {price}
                        </span>
                        <Button
                          size="sm"
                          data-ocid={`featured.add_to_cart.button.${i + 1}`}
                          className="text-white text-xs font-bold rounded-full px-4"
                          style={{
                            background: "oklch(0.40 0.08 218)",
                            border: "none",
                          }}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
        </div>
      </div>
    </section>
  );
}
