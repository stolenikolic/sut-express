import { Zap, DollarSign, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Brz dolazak',
    description: 'Dolazimo isti dan ili najkasnije sutradan. Bez dugog čekanja.',
  },
  {
    icon: DollarSign,
    title: 'Povoljne cene',
    description: 'Transparentne cene bez skrivenih troškova. Plaćate samo ono što vidite.',
  },
  {
    icon: Award,
    title: 'Profesionalna usluga',
    description: 'Obučena ekipa sa iskustvom i opremom za sve vrste poslova.',
  },
  {
    icon: Clock,
    title: 'Bez čekanja',
    description: 'Brz odgovor, brza ponuda, brza realizacija. Vaše vreme je dragoceno.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Zašto izabrati nas?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stotine zadovoljnih klijenata širom Novog Sada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-[#8ed356] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-[#8ed356] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="tel:+381665917670"
            className="inline-flex items-center justify-center gap-3 bg-[#8ed356] hover:bg-[#7bc244] text-black font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl hover:shadow-[#8ed356]/50 transition-all duration-300 hover:scale-105"
          >
            Zakažite odmah
          </a>
        </div>
      </div>
    </section>
  );
}
