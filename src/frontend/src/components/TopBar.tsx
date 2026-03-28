import { MapPin, Phone, User } from "lucide-react";

export default function TopBar() {
  return (
    <div
      className="w-full text-white text-xs py-2"
      style={{ background: "oklch(0.58 0.09 197)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
        <span className="font-medium tracking-wide hidden sm:block">
          🖥️ One Stop Computer Superstores
        </span>
        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            Civil Lines, Roorkee
          </span>
          <a
            href="tel:+918979081555"
            className="flex items-center gap-1 hover:text-white/80 transition-colors"
          >
            <Phone className="w-3 h-3" />
            +91 8979081555
          </a>
          <button
            type="button"
            data-ocid="topbar.login.button"
            className="flex items-center gap-1 hover:text-white/80 transition-colors"
          >
            <User className="w-3 h-3" />
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
