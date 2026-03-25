const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Građevinski otpad',
  },
  {
    url: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Kontejner za šut',
  },
  {
    url: 'https://images.pexels.com/photos/8486037/pexels-photo-8486037.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Odvoz namještaja',
  },
  {
    url: 'https://images.pexels.com/photos/5691588/pexels-photo-5691588.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Čišćenje prostora',
  },
  {
    url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Dovršeni posao',
  },
  {
    url: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Profesionalna ekipa',
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
            Pogledajte primjere našeg rada i zadovoljne klijente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.label}
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
