import About from '@/components/About';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import News from '@/components/News';
import Recruitment from '@/components/Recruitment';
import ScrollTop from '@/components/ScrollTop';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="pb-6">
        <main className="md:px-12 xl:px-0">
          <About />
          <News />
          <Recruitment />
          <Faq />
          <Contact />
        </main>
        <ScrollTop />
      </div>
      <Footer />
    </>
  );
}
