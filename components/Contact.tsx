import { Phone } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import ViberIcon from './icons/ViberIcon';

const contactMethods = [
  {
    icon: Phone,
    title: 'Telefon',
    value: '+381 66 591 7670',
    link: 'tel:+381665917670',
    description: 'Pozovite nas direktno',
    color: 'bg-[#8ed356]',
  },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    value: 'Pošalji poruku',
    link: 'https://wa.me/381665917670',
    description: 'Brz odgovor 24/7',
    color: 'bg-gray-700',
  },
  {
    icon: ViberIcon,
    title: 'Viber',
    value: 'Viber chat',
    link: 'viber://chat?number=381665917670',
    description: 'Dostupni non-stop',
    color: 'bg-gray-700',
  },
];

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kontaktirajte nas
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dostupni smo 24/7 za sve vaše upite. Odgovaramo brzo!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-[#8ed356] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className={`${method.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                <p className="text-[#8ed356] font-semibold text-lg mb-2">
                  {method.value}
                </p>
                <p className="text-gray-400">{method.description}</p>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
