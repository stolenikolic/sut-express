const galleryImages = [
  {
    src: '/odvoz-gradjevinskog-materijala.webp',
    alt: 'Odvoz građevinskog otpada u Novom Sadu — Šut Express',
    label: 'Odvoz građevinskog otpada',
  },
  {
    src: '/kamion-sa-kontejnerom.webp',
    alt: 'Kamion sa kontejnerom za odvoz šuta, Novi Sad',
    label: 'Kamion sa kontejnerom',
  },
  {
    src: '/odvoz-suta.webp',
    alt: 'Odvoz šuta i građevinskog otpada u Novom Sadu',
    label: 'Odvoz šuta',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Naši radovi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pogledajte primere našeg rada i zadovoljne klijente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg">{image.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
