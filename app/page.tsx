import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Faq from '@/components/Faq';
import Steps from '@/components/Steps';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Reviews from '@/components/Reviews';
import CoverageArea from '@/components/CoverageArea';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';

export default function Home() {
  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <Hero />
      <Services />
      <Faq />
      <Steps />
      <WhyChooseUs />
      <Gallery />
      <Contact />
      <Reviews />
      <CoverageArea />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
