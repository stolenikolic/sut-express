import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Koliko košta odvoz šuta u Novom Sadu?',
    answer:
      'Cena odvoza šuta u Novom Sadu zavisi od količine otpada, pristupa lokaciji i vrste materijala. Najbrže je da nam pošaljete fotografiju ili kratak opis, pa odmah dobijate okvirnu cenu.',
  },
  {
    question: 'Da li dolazite isti dan?',
    answer:
      'Da, odvoz šuta u Novom Sadu često organizujemo isti dan. Termin potvrđujemo odmah nakon poziva ili poruke, u skladu sa vašom lokacijom.',
  },
  {
    question: 'Da li iznosite šut sa sprata?',
    answer:
      'Da, vršimo iznošenje šuta sa sprata u Novom Sadu, uključujući objekte bez lifta. Dogovaramo detalje unapred kako bi odvoz šuta bio brz i bezbedan.',
  },
  {
    question: 'Koje vrste otpada odvozite?',
    answer:
      'Odvozimo građevinski šut, stari nameštaj, zemlju i drugi kabasti otpad u Novom Sadu. Ako niste sigurni da li nešto spada u uslugu, pošaljite nam upit i dobićete tačan odgovor.',
  },
  {
    question: 'Na kojim lokacijama radite?',
    answer:
      'Pokrivamo Novi Sad i okolinu, uključujući Petrovaradin, Kamenicu, Futog i Veternik. Odvoz šuta i otpada vršimo brzo i pouzdano na svim lokacijama.',
  },
  {
    question: 'Kako da zakažem odvoz?',
    answer:
      'Odvoz šuta u Novom Sadu možete zakazati pozivom ili porukom na WhatsApp/Viber. Pošaljite lokaciju i opis otpada, a mi potvrđujemo termin i cenu u najkraćem roku.',
  },
  {
    question: 'Da li nudite kontejner za šut u Novom Sadu?',
    answer:
      'Da, u zavisnosti od količine otpada i trajanja radova možemo organizovati i kontejner za šut novi sad. Najbolje je da pošaljete opis situacije i dobićete preporuku najisplativije opcije.',
  },
  {
    question: 'Da li radite odvoz šuta za poslovne objekte?',
    answer:
      'Da, radimo odvoz šuta i građevinskog otpada za stanove, kuće, lokale i poslovne objekte. Termin i dinamiku prilagođavamo vašem radnom vremenu kako posao ne bi stajao.',
  },
  {
    question: 'Šta utiče na odvoz šuta cenu?',
    answer:
      'Na odvoz šuta cena najviše utiču količina otpada, pristup objektu, potreba za iznošenjem šuta i udaljenost lokacije. Nakon kratkog opisa ili fotografije dobijate jasnu procenu pre dolaska ekipe.',
  },
];

export default function Faq() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-gray-50">
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Najčešća pitanja</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kratki odgovori na pitanja koja najčešće dobijamo od klijenata.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 px-6 md:px-8 py-2">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-left text-lg text-gray-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
