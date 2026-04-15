'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Marko Petrović',
    location: 'Liman, Novi Sad',
    rating: 5,
    text: 'Izuzetno brza usluga odvoza šuta. Pozvao sam ujutro, došli su već popodne i sve završili bez problema. Profesionalno i čisto odrađen posao.',
  },
  {
    name: 'Jelena Nikolić',
    location: 'Grbavica, Novi Sad',
    rating: 5,
    text: 'Nakon renoviranja stana imali smo dosta šuta. Poslala sam sliku, dobila cenu za 10 minuta i već sutradan je sve odvezeno. Odlična organizacija i pouzdana ekipa.',
  },
  {
    name: 'Stefan Jovanović',
    location: 'Futog',
    rating: 5,
    text: 'Koristio sam njihovu uslugu za prevoz građevinskog materijala. Sve je stiglo na vreme, bez kašnjenja i dodatnih troškova. Definitivno preporuka.',
  },
  {
    name: 'Nikola Stanić',
    location: 'Veternik',
    rating: 5,
    text: 'Dogovorili smo odvoz šuta isti dan. Ekipa je došla tačno na vreme i sve završila brzo. Cena je bila korektna i bez skrivenih troškova.',
  },
];

export default function Reviews() {
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = mobileCarouselRef.current;
    if (!container) return;

    const nextIndex = Math.max(0, Math.min(index, reviews.length - 1));
    const slideWidth = container.clientWidth + 16;

    container.scrollTo({
      left: nextIndex * slideWidth,
      behavior: 'smooth',
    });
    setActiveIndex(nextIndex);
  };

  const handleCarouselScroll = () => {
    const container = mobileCarouselRef.current;
    if (!container) return;

    const slideWidth = container.clientWidth + 16;
    const index = Math.round(container.scrollLeft / slideWidth);
    const safeIndex = Math.max(0, Math.min(index, reviews.length - 1));
    if (safeIndex !== activeIndex) {
      setActiveIndex(safeIndex);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-2 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Šta kažu naši klijenti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Iskustva klijenata kojima smo pomogli sa odvozom šuta i prevozom građevinskog materijala u
            Novom Sadu i okolini.
          </p>
        </div>

        <div className="md:hidden relative mx-auto w-[95vw] max-w-[680px]">
          <div
            ref={mobileCarouselRef}
            onScroll={handleCarouselScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="snap-center min-w-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
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

          {activeIndex > 0 && (
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              aria-label="Prethodni utisak"
              className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 active:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm shadow-lg transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
            </button>
          )}

          {activeIndex < reviews.length - 1 && (
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              aria-label="Sledeći utisak"
              className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 active:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm shadow-lg transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 text-white" strokeWidth={2.5} />
            </button>
          )}
        </div>

        <div className="md:hidden flex items-center justify-center gap-2 mt-6">
          {reviews.map((review, index) => (
            <span
              key={`${review.name}-${index}`}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-[#8ed356]' : 'bg-gray-300'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 gap-8">
          {reviews.map((review, index) => (
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
