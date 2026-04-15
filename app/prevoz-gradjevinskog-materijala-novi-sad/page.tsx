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
  title: 'Prevoz građevinskog materijala Novi Sad | Brza isporuka | Šut Express',
  description:
    'Prevozimo ciglu, pesak, cement i ostali građevinski materijal direktno do vaše lokacije u Novom Sadu. Brz i pouzdan prevoz bez čekanja i komplikacija.',
};

const relatedServices = [
  {
    href: '/',
    label: 'Sve usluge',
    description: 'Pregled svih usluga koje pružamo u Novom Sadu.',
  },
  {
    href: '/odvoz-suta-novi-sad',
    label: 'Građevinski šut',
    description: 'Organizovan odvoz šuta za stanove i gradilišta.',
  },
  {
    href: '/#services',
    label: 'Čišćenje podruma i garaža',
    description: 'Kompletno pražnjenje i organizacija prostora bez zadržavanja.',
  },
  {
    href: '/#services',
    label: 'Stari namještaj',
    description: 'Brza organizacija preuzimanja i terenske realizacije.',
  },
];

const highlights = [
  {
    icon: Truck,
    title: 'Dostava na adresu',
    description: 'Materijal preuzimamo i isporučujemo direktno na vašu lokaciju.',
  },
  {
    icon: Package,
    title: 'Sve vrste materijala',
    description: 'Prevozimo cement, ciglu, blokove, pesak, šljunak i sličan teret.',
  },
  {
    icon: Clock,
    title: 'Fleksibilni termini',
    description: 'Termine preuzimanja i isporuke prilagođavamo vašoj dinamici radova.',
  },
];

const prevozServiceSections = [
  {
    icon: HardHat,
    heading: 'Kada je potreban prevoz materijala',
    body: (
      <>
        Najčešće kada počinju zidanje, livenje ili renoviranje, a nemate organizovan transport.
        Usluga <strong>prevoz građevinskog materijala Novi Sad</strong> pomaže da materijal stigne
        na vreme, bez dodatnog čekanja i zastoja na gradilištu.
      </>
    ),
  },
  {
    icon: Layers,
    heading: 'Šta prevozimo',
    body: (
      <>
        Prevozimo ciglu, blokove, cement, pesak, šljunak, ploče, armaturno gvožđe i drugi građevinski
        materijal. Ako niste sigurni da li vaš teret spada u uslugu, pošaljite upit i dobijate brz
        odgovor.
      </>
    ),
  },
  {
    icon: Phone,
    heading: 'Kako funkcioniše usluga',
    body: (
      <>
        Javite se telefonom ili porukom, pošaljite osnovne informacije i lokaciju, a mi organizujemo
        preuzimanje i isporuku. <strong>Prevoz građevinskog materijala</strong> realizujemo jasno i
        bez komplikovane procedure.
      </>
    ),
  },
  {
    icon: Zap,
    heading: 'Brzina i organizacija',
    body: (
      <>
        Radimo svakodnevno i prilagođavamo termine vašem planu radova. Za lokacije kao što su Liman,
        Grbavica, Telep i drugi delovi grada, <strong>prevoz građevinskog materijala u Novom Sadu</strong>{' '}
        organizujemo brzo i pouzdano.
      </>
    ),
  },
];

export default function PrevozGradjevinskogMaterijalaNoviSadPage() {
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
              Prevoz građevinskog materijala u Novom Sad –{' '}
              <span className="text-[#8ed356]">brza i pouzdana isporuka</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl">
            Organizujemo brz i pouzdan prevoz građevinskog materijala u Novom Sadu i okolini, sa isporukom direktno na vašu lokaciju.
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Šta je ova usluga?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Kada gradite, renovirate ili uređujete, materijal mora biti tu kada treba - ne sutra,
              ne prekosutra. Mi preuzimamo transport od dobavljača ili magacina direktno do vašeg
              gradilišta, kuće ili dvorišta. Vi se bavite gradnjom, mi se bavimo logistikom.
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
              Prevoz građevinskog materijala Novi Sad - kako izgleda usluga
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Organizujemo brz i pouzdan prevoz građevinskog materijala u Novom Sadu, od preuzimanja
              do isporuke na vašu adresu. U nastavku pogledajte kada je usluga najpotrebnija, šta
              prevozimo i kako funkcioniše realizacija na terenu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {prevozServiceSections.map((item, i) => {
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
