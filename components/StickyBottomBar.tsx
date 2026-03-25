'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import ViberIcon from './icons/ViberIcon';

export default function StickyBottomBar() {
  const [hideOnHero, setHideOnHero] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) {
      setHideOnHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideOnHero(entry.isIntersecting && entry.intersectionRatio > 0.75);
      },
      { threshold: [0, 0.75, 1] }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${hideOnHero ? 'translate-y-full pointer-events-none' : 'translate-y-0'}`}
    >
      <div className="bg-white border-t-4 border-[#8ed356] shadow-2xl">
        <div className="grid grid-cols-3 gap-2 p-2">
          <a
            href="tel:+381665917670"
            className="flex flex-col items-center justify-center gap-1 bg-[#8ed356] hover:bg-[#7bc244] text-black py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-150"
          >
            <Phone className="w-5 h-5" />
            <span className="text-xs font-bold">Pozovi</span>
          </a>

          <a
            href="https://wa.me/381665917670"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-150"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span className="text-xs font-bold">WhatsApp</span>
          </a>

          <a
            href="viber://chat?number=381665917670"
            className="flex flex-col items-center justify-center gap-1 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl shadow-lg active:scale-95 transition-all duration-150"
          >
            <ViberIcon className="w-5 h-5" />
            <span className="text-xs font-bold">Viber</span>
          </a>
        </div>
      </div>
    </div>
  );
}
