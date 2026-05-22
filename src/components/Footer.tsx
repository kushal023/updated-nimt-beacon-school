import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#111827] text-gray-400 py-16 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Footers Grid - 4 Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-gray-800">
          
          {/* Column 1 - Brand - Lg take 4 cols */}
          <div className="lg:col-span-4 flex flex-col text-left">
            <span className="font-display font-extrabold text-2xl tracking-wider text-white">NIMT Beacon</span>
            <p className="mt-4 text-sm font-semibold text-gray-400 leading-relaxed max-w-sm">
              Building a Safe, Disciplined & Future-Ready Boarding Environment Where Students Learn, Grow & Succeed With Confidence.
            </p>
          </div>

          {/* Column 2 - Quick Links - Lg take 2 cols */}
          <div className="lg:col-span-2 flex flex-col text-left">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              {["Why Boarding", "Why NIMT", "Facilities", "Results"].map((label) => {
                const id = `#${label.toLowerCase().replace(" ", "-")}`;
                return (
                  <li key={label}>
                    <button 
                      onClick={() => handleScroll(id)}
                      className="hover:text-[#3b82f6] transition-colors cursor-pointer text-left focus:outline-none"
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3 - Contact - Lg take 3 cols */}
          <div className="lg:col-span-3 flex flex-col text-left">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm font-semibold">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span>Delhi NCR, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <span>+91-XXXXX-XXXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#3b82f6] shrink-0 mt-0.5" />
                <a href="mailto:admissions@nimt.edu.in" className="hover:text-white transition-colors">
                  admissions@nimt.edu.in
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Links - Lg take 3 cols */}
          <div className="lg:col-span-3 flex flex-col text-left">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { icon: <Facebook className="h-4.5 w-4.5" />, link: "#" },
                { icon: <Instagram className="h-4.5 w-4.5" />, link: "#" },
                { icon: <Youtube className="h-4.5 w-4.5" />, link: "#" },
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.link}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-[#1344e6] hover:text-white transition-colors shadow-sm"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright stripe */}
        <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs font-semibold text-gray-500">
          <span>© 2024 NIMT Beacon School. All rights reserved.</span>
          
          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <span className="text-gray-400 font-display">Building Excellence in Education</span>
        </div>

      </div>
    </footer>
  );
}
