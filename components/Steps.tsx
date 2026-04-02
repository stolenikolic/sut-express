import { Camera, DollarSign, Truck } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    number: '01',
    title: 'Pošaljite sliku i lokaciju',
    description: 'Fotografišite šut i pošaljite nam putem WhatsApp-a ili Viber-a sa adresom',
  },
  {
    icon: DollarSign,
    number: '02',
    title: 'Dobijate cenu',
    description: 'Za nekoliko minuta dobijate tačnu cenu bez skrivenih troškova',
  },
  {
    icon: Truck,
    number: '03',
    title: 'Dolazimo i odvozimo',
    description: 'Naš tim dolazi u dogovoreno vreme i profesionalno obavlja posao',
  },
];

export default function Steps() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kako funkcioniše?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jednostavan proces u tri koraka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="absolute -top-4 -left-4 bg-[#8ed356] text-white text-2xl font-bold w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>

                  <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-4">
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#8ed356]/30 z-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
