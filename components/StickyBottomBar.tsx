'use client';

import { Phone } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import ViberIcon from './icons/ViberIcon';

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white border-t-4 border-[#8ed356] shadow-2xl">
        <div className="grid grid-cols-3 gap-2 p-3">
          <a
            href="tel:+381665917670"
            className="flex flex-col items-center justify-center gap-2 bg-[#8ed356] hover:bg-[#7bc244] text-black py-4 rounded-xl shadow-lg active:scale-95 transition-all duration-150"
          >
            <Phone className="w-6 h-6" />
            <span className="text-xs font-bold">Pozovi</span>
          </a>

          <a
            href="https://wa.me/381665917670"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl shadow-lg active:scale-95 transition-all duration-150"
          >
            <WhatsAppIcon className="w-6 h-6" />
            <span className="text-xs font-bold">WhatsApp</span>
          </a>

          <a
            href="viber://chat?number=381665917670"
            className="flex flex-col items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl shadow-lg active:scale-95 transition-all duration-150"
          >
            <ViberIcon className="w-6 h-6" />
            <span className="text-xs font-bold">Viber</span>
          </a>
        </div>
      </div>
    </div>
  );
}
