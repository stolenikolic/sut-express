import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Marko Petrović',
    location: 'Liman, Novi Sad',
    rating: 5,
    text: 'Izuzetno brza usluga! Pozvao sam ujutro, došli su popodne. Profesionalno i čisto obavljen posao. Toplo preporučujem!',
  },
  {
    name: 'Jelena Nikolić',
    location: 'Grbavica, Novi Sad',
    rating: 5,
    text: 'Nakon renovacije stana imala sam puno šuta. Poslala sam sliku, dobila cijenu za 10 minuta i sutradan je sve bilo odneseno. Super iskustvo!',
  },
  {
    name: 'Stefan Jovanović',
    location: 'Detelinara, Novi Sad',
    rating: 5,
    text: 'Najbolja usluga u Novom Sadu. Bez skrivenih troškova, tačna cijena kao što su rekli. Dolaze na vrijeme i brzo završe posao.',
  },
  {
    name: 'Ana Milanković',
    location: 'Centar, Novi Sad',
    rating: 5,
    text: 'Trebalo mi je da iznesem stari namještaj iz podruma. Momci su bili ljubazni, brzi i efikasni. Cijena isplativa. Hvala!',
  },
  {
    name: 'Nikola Đorđević',
    location: 'Telep, Novi Sad',
    rating: 5,
    text: 'Odličan odnos cijene i kvaliteta. Profesionalni pristup i brza realizacija. Koristio sam ih nekoliko puta i uvijek zadovoljan.',
  },
  {
    name: 'Milica Stojanović',
    location: 'Petrovaradin, Novi Sad',
    rating: 5,
    text: 'Rekla bih da su najbolji u gradu. Došli su isti dan kad sam ih kontaktirala. Sve preporuke za Šut Express!',
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Šta kažu naši klijenti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ocjene i iskustva zadovoljnih korisnika
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#8ed356] text-[#8ed356]"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
