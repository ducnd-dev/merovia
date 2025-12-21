import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
