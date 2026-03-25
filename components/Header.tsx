import Image from 'next/image';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/sut-express-logo.png"
              alt="SUT EXPRESS logo"
              width={280}
              height={96}
              className="h-16 w-auto md:h-20"
              priority
            />
          </div>

          <a
            href="tel:+381665917670"
            className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-all duration-300"
          >
            066 591 7670
          </a>
        </div>
      </div>
    </header>
  );
}
