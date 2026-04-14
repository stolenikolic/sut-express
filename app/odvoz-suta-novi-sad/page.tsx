import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import Faq from '@/components/Faq';
import { SHARED_HERO_BACKGROUND_IMAGE } from '@/lib/heroImage';

export const metadata: Metadata = {
  title: 'Odvoz šuta Novi Sad | Brz odvoz otpada | Šut Express',
  description:
    'Brz i pouzdan odvoz šuta u Novom Sadu. Dolazak isti dan, povoljne cene. Pozovite nas za odvoz građevinskog otpada i šuta.',
};

const relatedServices = [
  {
    href: '/',
    label: 'Sve usluge',
    description: 'Pregled svih usluga odvoza i čišćenja koje pružamo u Novom Sadu.',
  },
  {
    href: '/#services',
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

export default function OdvozSutaNoviSadPage() {
  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <section id="hero" className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: SHARED_HERO_BACKGROUND_IMAGE,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/55"></div>
        </div>

        <Header />

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Odvoz šuta Novi Sad - <span className="text-[#8ed356]">brz i pouzdan odvoz istog dana</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl">
              Usluga je namenjena klijentima koji žele brzo i organizovano uklanjanje otpada bez
              dodatnog čekanja. Bez obzira da li je u pitanju manje renoviranje stana ili ozbiljniji
              građevinski radovi, naš tim dolazi na lokaciju, vrši utovar i završava posao u
              dogovorenom roku. Dovoljno je da nas kontaktirate i dobijate jasan plan realizacije,
              procenu i termin koji vam odgovara.
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
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              Usluga <strong>odvoz šuta Novi Sad</strong> namenjena je svima koji žele brzo i bez
              komplikacija da uklone građevinski otpad. Bez obzira da li renovirate stan, kuću ili
              radite na većem gradilištu, organizujemo dolazak i odvoz u najkraćem roku. U praksi to
              znači da ne gubite dane na traženje prevoza, angažovanje dodatne radne snage i
              koordinaciju više izvođača. Radimo u gradu i okolini, a dolazak je moguć i isti dan,
              uz precizan dogovor termina i jasnu komunikaciju od prvog poziva.
              Klijenti nas najčešće biraju kada im je potreban <strong>brz odvoz šuta</strong> bez
              zastoja u radovima.
            </p>
            <div className="mt-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/odvoz-suta-Novi-Sad-kamion.webp"
                alt="odvoz šuta Novi Sad kamion"
                className="w-full h-[320px] md:h-[420px] object-cover"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 896px"
                quality={75}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kako funkcioniše odvoz šuta?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Proces je jednostavan i brz. Nakon što nas kontaktirate, dogovaramo termin dolaska i
                procenu količine otpada, a zatim naš tim dolazi na lokaciju, vrši utovar i odvoz bez
                komplikacija. Tokom celog procesa dobijate jasne
                informacije o dinamici rada kako biste mogli da planirate naredne faze renoviranja
                ili gradnje bez zastoja.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                U zavisnosti od situacije, radimo i iznošenje šuta sa sprata, kao i osnovno
                sređivanje prostora nakon odvoza, kako biste odmah mogli da nastavite radove. Naš
                prioritet je da sve bude završeno efikasno, uredno i u skladu sa dogovorom, bez
                dodatnog stresa za klijenta.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Koliko košta odvoz šuta?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Cena za odvoz šuta Novi Sad zavisi od količine materijala, pristupa lokaciji i vrste
                otpada. Trudimo se da ponudimo najpovoljnije rešenje uz potpuno transparentan dogovor
                bez skrivenih troškova. Pre početka posla objašnjavamo šta je uključeno u cenu, tako
                da unapred znate šta plaćate i koliko će usluga trajati.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Najbrži način da dobijete tačnu cenu je da pošaljete fotografiju ili kratak opis
                situacije, nakon čega odmah dobijate procenu i slobodan termin. Na taj način lako
                upoređujete opcije i brzo donosite odluku, bez dugog čekanja i neizvesnosti.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Koje vrste otpada odvozimo?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Vršimo odvoz betona, cigle, šuta, keramike, zemlje i drugih vrsta građevinskog
                otpada. Pokrivamo i odvoz kabastog otpada i starih stvari sa stambenih i poslovnih
                objekata. Prilagođavamo se tipu objekta i pristupu terenu, bilo da je u pitanju
                porodična kuća, stan u zgradi ili poslovni prostor.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ako niste sigurni da li vaš materijal spada u odvoz šuta, pošaljite
                upit i daćemo vam jasne informacije pre dolaska na lokaciju. Cilj je da
                unapred rešimo sve nedoumice, kako bi realizacija bila brza i bez nepredviđenih
                troškova.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Zašto izabrati našu uslugu?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Odvoz organizujemo brzo, efikasno i bez komplikacija, sa fokusom da klijent dobije
                praktično rešenje bez gubljenja vremena. Dolazak je moguć isti dan, a termine
                prilagođavamo vašem rasporedu. Uslugu obavljamo svakodnevno na terenu kod klijenata
                širom grada, uključujući Liman, Detelinaru, Novo Naselje i Petrovaradin.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Iskustvo na terenu i veliki broj zadovoljnih klijenata potvrđuju da
                <strong> odvoz gradjevinskog suta Novi Sad</strong> može biti profesionalno odrađen
                od prvog poziva do završetka posla, uz poštovanje rokova i dogovorenih uslova.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Contact />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Odvoz šuta isti dan u Novom Sadu
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Za hitne situacije organizujemo izlazak ekipe u najkraćem mogućem roku, često već istog
              dana. Brza reakcija je posebno važna kada želite da nastavite renoviranje bez
              zadržavanja i kada vam je oslobađanje prostora prioritet. Na terenu radimo fleksibilno i
              prilagođavamo se stvarnom stanju na objektu, bez komplikovane procedure.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Termine prilagođavamo vašim obavezama, pa možete planirati odvoz u jutarnjim ili
              popodnevnim satima. Fleksibilan pristup i efikasna realizacija pomažu da posao bude
              završen brzo, uredno i bez nepotrebnog čekanja. U praksi svakodnevno pokrivamo grad
              i okolna naselja prema dostupnim terminima. Kada je potrebna hitna intervencija,
              organizujemo dolazak istog dana čim potvrdimo detalje i pristup lokaciji.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Najčešće intervencije imamo na lokacijama kao što su Liman, Detelinara, Novo Naselje i
              Petrovaradin, ali izlazimo i na druge adrese u gradu. Cilj nam je da dobijete pouzdanu
              uslugu istog dana kada vam je zaista potrebna.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gde radimo u Novom Sadu</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Redovno radimo na teritoriji celog grada, uključujući Veternik, Futog, Kamenicu i Petrovaradin. Ekipa izlazi na teren po dogovoru, sa fokusom da se posao završi
              brzo i bez čekanja.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Bez obzira na deo grada, organizujemo dolazak i odvoz u skladu sa vašim rasporedom i
              dinamikom radova. Na taj način dobijate pouzdanu uslugu na jednoj adresi ili više
              lokacija tokom istog dana.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/odvoz-gradjevinskog-suta-novi-sad-usluga.webp"
                alt="odvoz građevinskog šuta Novi Sad usluga"
                className="w-full h-[300px] md:h-[380px] object-cover"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 896px"
                quality={75}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

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
