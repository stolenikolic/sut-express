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
  title: 'Prevoz građevinskog materijala Novi Sad | Brza isporuka | Šut Express',
  description:
    'Prevoz građevinskog materijala Novi Sad uz brzu i pouzdanu isporuku, bez kašnjenja i komplikacija.',
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

export default function PrevozGradjevinskogMaterijalaNoviSadPage() {
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
              Prevoz građevinskog materijala Novi Sad –{' '}
              <span className="text-[#8ed356]">brza i pouzdana isporuka</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl">
              Ako vam je potreban siguran i brz prevoz građevinskog materijala, organizujemo
              isporuku direktno na vašu lokaciju bez kašnjenja i komplikacija. Radimo sa privatnim
              klijentima i firmama, uz fleksibilne termine i dogovor prema vašim potrebama.
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
              <strong>Prevoz građevinskog materijala</strong> je ključan deo svakog projekta.
              Kašnjenje u isporuci često usporava radove, zato je važno imati pouzdan transport koji
              dolazi tačno na vreme.
              <br />
              <br />
              Naš tim organizuje prevoz od tačke preuzimanja do vaše lokacije, bez nepotrebnog
              čekanja i dodatnih problema.
            </p>
            <div className="mt-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="prevoz građevinskog materijala novi sad"
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
                Kada vam je potreban prevoz materijala?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Najčešće nas klijenti kontaktiraju kada započinju radove i treba im brza dostava
                materijala na gradilište ili kućnu adresu.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 leading-relaxed">
                <li>Takođe, često radimo prevoz za one koji nemaju sopstveni transport</li>
                <li>za one koji žele da izbegnu više odlazaka</li>
                <li>i za one koji žele da izbegnu gubljenje vremena</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Bez obzira na situaciju, cilj je da materijal stigne kada vam je potreban, kako bi
                radovi tekli bez prekida.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                U ovakvim situacijama, brz i organizovan prevoz često pravi veliku razliku u tempu
                radova.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Šta prevozimo?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Vršimo prevoz različitih vrsta građevinskog materijala, uključujući cement, ciglu,
                blokove, pesak, šljunak i sličan teret.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 leading-relaxed">
                <li>cement</li>
                <li>cigla i blokovi</li>
                <li>pesak i šljunak</li>
                <li>sličan teret</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Transport organizujemo u skladu sa količinom i vrstom materijala, vodeći računa o
                sigurnosti i efikasnosti tokom cele isporuke.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kako funkcioniše usluga?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Dovoljno je da nam pošaljete osnovne informacije o materijalu i lokaciji. Nakon toga
                dogovaramo termin preuzimanja i isporuke.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dolazimo u dogovoreno vreme, preuzimamo materijal i vršimo transport bez zadržavanja.
                Sve je organizovano tako da vi ne gubite vreme i možete da nastavite radove bez{' '}
                čekanja.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Ceo proces je jednostavan i bez komplikacija, tako da ne morate da brinete o
                organizaciji transporta.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Brz transport bez zastoja
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Razumemo koliko je važno da materijal stigne na vreme. U većini slučajeva možemo
                organizovati prevoz u kratkom roku, u skladu sa vašim planom rada. Radimo fleksibilno
                i prilagođavamo se situaciji na terenu.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Contact />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gde vršimo prevoz?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Prevoz građevinskog materijala Novi Sad obavljamo na teritoriji celog grada i okolnih
              naselja. Dolazimo na lokaciju brzo i organizujemo transport bez komplikacija.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Ako vam je potreban <strong>pouzdan prevoz građevinskog materijala</strong>, slobodno
              nas kontaktirajte. Pošaljite osnovne informacije i dobićete brz odgovor sa predlogom
              termina i cene.
              Prevoz građevinskog materijala Novi Sad organizujemo brzo i efikasno, bez obzira na
              deo grada.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="https://images.pexels.com/photos/100667/pexels-photo-100667.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="isporuka građevinskog materijala novi sad"
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
