import { Instagram, MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 bg-white text-gray-600 text-center border-t">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-sm">
          Jl. Raya Pacul No.18B, Sibata, West Mejasem, Tegal Regency, Central
          Java
          <span className="px-2">|</span>
          Mon-Sun 8:00AM - 11:00PM
        </p>
        <p className="text-xs">Copyright © 2025 AyoNgopi</p>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="text-sky-400 w-6 h-6 hover:text-sky-500 transition-all" />
        </a>
        <a
          href="https://wa.me/628123456789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageSquare className="text-sky-400 w-6 h-6 hover:text-sky-500 transition-all" />
        </a>
      </div>
    </footer>
  );
};
