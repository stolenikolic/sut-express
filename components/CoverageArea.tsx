import { MapPin, CircleCheck as CheckCircle2 } from 'lucide-react';

const areas = [
  'Centar',
  'Grbavica',
  'Liman 1, 2, 3, 4',
  'Detelinara',
  'Telep',
  'Satelit',
  'Novo Naselje',
  'Adamovićevo Naselje',
  'Petrovaradin',
  'Sremska Kamenica',
  'Futog',
  'Veternik',
];

export default function CoverageArea() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8ed356]/10 rounded-2xl mb-6">
              <MapPin className="w-8 h-8 text-[#8ed356]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pokrivamo ceo Novi Sad
            </h2>
            <p className="text-xl text-gray-600">
              Brza dostava usluga u svim delovima grada i okolini
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#8ed356] flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#8ed356]/10 rounded-xl border-2 border-[#8ed356]/20">
              <p className="text-gray-700 text-center font-medium">
                <span className="font-bold text-gray-900">Nije na listi?</span>{' '}
                Kontaktirajte nas - pokrivamo i okolna mesta!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
