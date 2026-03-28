import {
  CreditCard,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Deals", href: "/deals" },
  { label: "Contact Us", href: "/contact" },
  { label: "Support", href: "/support" },
];
const categoryLinks = [
  { label: "Laptops", href: "#laptops" },
  { label: "Desktops", href: "#desktops" },
  { label: "All-in-One PCs", href: "#allinone" },
  { label: "Peripherals", href: "#peripherals" },
  { label: "Printers", href: "#printers" },
  { label: "Accessories", href: "#accessories" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer
      style={{
        background:
          "linear-gradient(135deg, oklch(0.32 0.072 222), oklch(0.27 0.065 225))",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-ocid={`footer.${link.label.toLowerCase().replace(/ /g, "_")}.link`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase">
              Categories
            </h3>
            <ul className="space-y-2">
              {categoryLinks.map((cat) => (
                <li key={cat.label}>
                  <a
                    href={cat.href}
                    data-ocid={`footer.cat_${cat.label.toLowerCase().replace(/[- ]/g, "_")}.link`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase">
              Follow Us
            </h3>
            <div className="flex gap-3 flex-wrap">
              {[
                {
                  icon: Facebook,
                  label: "Facebook",
                  id: "facebook",
                  href: "https://facebook.com",
                },
                {
                  icon: Twitter,
                  label: "Twitter",
                  id: "twitter",
                  href: "https://twitter.com",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  id: "instagram",
                  href: "https://instagram.com",
                },
                {
                  icon: Youtube,
                  label: "YouTube",
                  id: "youtube",
                  href: "https://youtube.com",
                },
              ].map(({ icon: Icon, label, id, href }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-ocid={`footer.${id}.link`}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:text-white transition-all"
                  style={{ background: "oklch(0.52 0.08 200)" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-white/60 text-xs mt-4 leading-relaxed">
              Stay connected for the latest deals, tech updates, and exclusive
              offers.
            </p>
          </div>

          {/* Store Info */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase">
              Visit Our Showroom
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "oklch(0.58 0.09 197)" }}
                />
                <span>
                  Computer Home, Shop no.2, Satshila Complex, New Haridwar Road,
                  Civil Lines, ROORKEE &ndash; 247 667 (Uttarakhand)
                </span>
              </div>
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <Phone
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "oklch(0.58 0.09 197)" }}
                />
                <div className="flex flex-col gap-0.5">
                  <a
                    href="tel:+918979081555"
                    className="hover:text-white transition-colors"
                  >
                    +91 8979081555
                  </a>
                  <a
                    href="tel:+919897081555"
                    className="hover:text-white transition-colors"
                  >
                    +91 9897081555
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <Mail
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "oklch(0.58 0.09 197)" }}
                />
                <div className="flex flex-col gap-0.5">
                  <a
                    href="mailto:computerhomeindia@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    computerhomeindia@gmail.com
                  </a>
                  <a
                    href="mailto:computerhome@hotmail.com"
                    className="hover:text-white transition-colors"
                  >
                    computerhome@hotmail.com
                  </a>
                </div>
              </div>
              <div className="mt-3 text-white/60 text-xs">
                <p className="font-semibold text-white/80 mb-1">Store Hours</p>
                <p>Mon&ndash;Sat: 9:00 AM &ndash; 7:00 PM</p>
                <p>Sunday: 10:00 AM &ndash; 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            &copy; {year} Computer Home. All rights reserved. Built with ❤️ using{" "}
            <a
              href={utmLink}
              className="text-white/70 hover:text-white underline"
              target="_blank"
              rel="noreferrer"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-2 text-white/40">
            <CreditCard className="w-5 h-5" />
            <span className="text-xs">
              Visa &middot; Mastercard &middot; PayPal &middot; Stripe
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
