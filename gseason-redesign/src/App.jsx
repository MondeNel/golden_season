import { useEffect } from 'react';
import Topbar from './components/layout/Topbar';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import TrustStrip from './components/sections/TrustStrip';
import ProductsSection from './components/sections/ProductsSection';
import DeploymentsSection from './components/sections/DeploymentsSection';
import AboutSection from './components/sections/AboutSection';
import ClientLogosSection from './components/sections/ClientLogosSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import WhyChooseSection from './components/sections/WhyChooseSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/layout/Footer';
import FloatingWidgets from './components/layout/FloatingWidgets';
import TeamSection from './components/sections/TeamSection';
import VideoSection from './components/sections/VideoSection';

export default function App() {
  // Ensure the page always opens at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <TrustStrip />
        <ProductsSection />
        <DeploymentsSection />
        <AboutSection />
        <ClientLogosSection />
        <TestimonialsSection />
        <TeamSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}