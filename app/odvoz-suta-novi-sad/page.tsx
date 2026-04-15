import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, HardHat, Layers, MessageCircle, Package, Phone, Truck, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import CoverageArea from '@/components/CoverageArea';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import Faq from '@/components/Faq';

export const metadata: Metadata = {
  title: 'Odvoz šuta Novi Sad | Brz odvoz otpada | Šut Express',
  description:
    'Brz i pouzdan odvoz građevinskog šuta i ostalog otpada u Novom Sadu. Dolazak isti dan, povoljne cene. Pozovite nas i zakažite prvi slobodan termin.',
};

const relatedServices = [
  {
    href: '/',
    label: 'Sve usluge',
    description: 'Pregled svih usluga odvoza i čišćenja koje pružamo u Novom Sadu.',
  },
  {
    href: '/prevoz-gradjevinskog-materijala-novi-sad',
    label: 'Prevoz građevinskog materijala',
    description: 'Pouzdan prevoz materijala na gradilišta i privatne objekte.',
  },
  {
    href: '/#services',
    label: 'Odvoz starog nameštaja',
    description: 'Brzo iznošenje i odvoz kabastog otpada iz stanova i kuća.',
  },
  {
    href: '/#services',
    label: 'Čišćenje podruma i garaža',
    description: 'Kompletno pražnjenje prostora sa organizovanim odvozom otpada.',
  },
];

const highlights = [
  {
    icon: Truck,
    title: 'Dolazak na adresu',
    description: 'Ekipa dolazi na vašu lokaciju, organizuje utovar i odmah kreće sa odvozom šuta.',
  },
  {
    icon: Package,
    title: 'Odvoz građevinskog šuta i otpada',
    description: 'Preuzimamo ciglu, beton, keramiku, zemlju i drugi građevinski otpad bez zadržavanja.',
  },
  {
    icon: Clock,
    title: 'Brz dolazak i fleksibilni termini',
    description: 'Termine prilagođavamo vašim radovima kako bi uklanjanje šuta bilo brzo i organizovano.',
  },
];

const odvozServiceSections = [
  {
    icon: HardHat,
    heading: 'Kada je potreban odvoz šuta',
    body: (
      <>
        Najčešće nas zovu nakon renoviranja, rušenja ili čišćenja, kada višak šuta blokira prostor i
        usporava posao. Organizujemo brz odvoz šuta kako biste nastavili radove bez zastoja.
      </>
    ),
  },
  {
    icon: Layers,
    heading: 'Šta odvozimo',
    body: (
      <>
        Odvozimo šut, ciglu, beton, keramiku, zemlju i drugi građevinski otpad sa svih tipova objekata.
        Odvoz građevinskog šuta organizujemo za stanove, kuće, gradilišta i poslovne objekte.
      </>
    ),
  },
  {
    icon: Phone,
    heading: 'Kako funkcioniše usluga',
    body: (
      <>
        Javite se telefonom ili porukom, pošaljite lokaciju i kratak opis, a mi predlažemo termin i cenu.
        Dolazimo, utovaramo i završavamo odvoz šuta bez komplikacija.
      </>
    ),
  },
  {
    icon: Zap,
    heading: 'Brzina i organizacija',
    body: (
      <>
        Radimo svakodnevno i prilagođavamo dolazak dinamici vaših radova. Za Liman, Telep, Detelinaru,
        Novo Naselje i druge delove grada organizujemo efikasno uklanjanje šuta po dogovoru.
      </>
    ),
  },
];

export default function OdvozSutaNoviSadPage() {
  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <section id="hero" className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center shared-hero-bg z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/55"></div>
        </div>

        <Header />

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Odvoz šuta u Novom Sadu- <span className="text-[#8ed356]">brz i pouzdan odvoz istog dana</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl">
            Organizujemo brz i pouzdan odvoz građevinskog šuta i otpada bez čekanja i komplikacija. Dolazimo na lokaciju, vršimo utovar i uklanjanje otpada u dogovorenom terminu. Pozovite nas ili pošaljite poruku i dobijate brzu procenu i prvi slobodan termin.
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
                <MessageCircle className="w-6 h-6" />
                Pošalji poruku na WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Šta podrazumeva odvoz šuta u Novom Sadu?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tokom renoviranja ili gradnje, građevinski šut brzo zauzme prostor i oteža dalje radove.
              Organizujemo preuzimanje, utovar i odvoz šuta direktno sa lokacije, bez dodatne
              organizacije sa vaše strane. Vi se fokusirate na posao, a mi rešavamo uklanjanje otpada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {highlights.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-[#8ed356]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8ed356] transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#8ed356] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Kako izgleda proces odvoza šuta?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Proces je jednostavan: kontaktirate nas, dogovaramo termin, ekipa dolazi na lokaciju i
              završava utovar i odvoz. Tako organizovan odvoz šuta u Novom Sadu štedi vreme i olakšava
              nastavak radova bez zadržavanja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {odvozServiceSections.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-[#8ed356]/15 p-3 rounded-xl">
                      <Icon className="w-6 h-6 text-[#8ed356]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.heading}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />

      <CoverageArea />

      <Faq />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Povezane usluge</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pogledajte i ostale usluge koje pružamo u Novom Sadu i okolini.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {relatedServices.map((service) => (
              <Link
                key={service.label}
                href={service.href}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#7bc244] transition-colors duration-300">
                  {service.label}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyBottomBar />
    </main>
  );
}
