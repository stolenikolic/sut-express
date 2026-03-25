import { Trash2, Sofa, Chrome as Home, Shovel } from 'lucide-react';

const services = [
  {
    icon: Trash2,
    title: 'Građevinski šut',
    description: 'Odvoz betona, cigle, keramike i ostalog građevinskog otpada',
  },
  {
    icon: Sofa,
    title: 'Stari namještaj',
    description: 'Iznošenje i odvoz starih kauča, ormara, stolova i druge opreme',
  },
  {
    icon: Home,
    title: 'Čišćenje podruma i garaža',
    description: 'Kompletno pražnjenje i čišćenje prostora od nepotrebnih stvari',
  },
  {
    icon: Shovel,
    title: 'Odvoz zemlje i otpada',
    description: 'Uklanjanje zemlje, korova i ostalog baštovanskog otpada',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Naše usluge
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Brz i profesionalan odvoz svih vrsta građevinskog otpada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-[#8ed356]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8ed356] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#8ed356] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
