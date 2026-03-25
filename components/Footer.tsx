import Image from 'next/image';
import { Clock3, Facebook, Instagram, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  {
    icon: Instagram,
    name: 'Instagram',
    link: '#',
  },
  {
    icon: Facebook,
    name: 'Facebook',
    link: '#',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image
              src="/sut-express-logo.png"
              alt="SUT EXPRESS logo"
              width={220}
              height={76}
              className="h-14 w-auto mb-5"
            />
            <p className="text-white/70 leading-relaxed max-w-sm">
              Profesionalne usluge odvoza šuta i čišćenja prostora u Novom Sadu i okolini.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8ed356]" />
                <a href="tel:+381665917670" className="hover:text-white transition-colors">
                  +381 66 591 7670
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8ed356]" />
                <span>Novi Sad i okolina</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-white/70 mb-3">Pratite nas</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#8ed356] hover:text-gray-900 transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Radno vrijeme</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Clock3 className="w-4 h-4 text-[#8ed356]" />
                <span>Ponedjeljak - Petak: 07:00 - 19:00</span>
              </li>
              <li className="pl-6">Subota: 08:00 - 16:00</li>
              <li className="pl-6">Hitne intervencije: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/60">
          © {new Date().getFullYear()} Šut Express. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
