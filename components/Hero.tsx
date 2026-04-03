import { Phone } from 'lucide-react';
import Header from './Header';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/55"></div>
      </div>

      <Header />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Odvoz šuta i ostalog otpada u Novom Sadu – <span className="text-[#8ed356]">isti dan</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
            Brzo, pouzdano i bez čekanja. Pošaljite sliku šuta i dobijte cenu odmah.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="tel:+381665917670"
              className="inline-flex items-center justify-center gap-3 bg-[#8ed356] hover:bg-[#7bc244] text-black font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl hover:shadow-[#8ed356]/50 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Pozovi odmah
            </a>

            <a
              href="https://wa.me/381665917670"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold text-lg px-10 py-5 rounded-2xl border-2 border-white/30 hover:border-white/50 shadow-xl transition-all duration-300 hover:scale-105"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Pošalji sliku šuta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
