import Topbar from './components/layout/Topbar';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
// ... all other section imports

export default function App() {
  return (
    <div className="font-body bg-navy text-white">
      <Topbar />
      <Navbar />
      <Hero />
      <TrustStrip />
      {/* ... */}
      <Footer />
      <FloatingWidgets />
    </div>
  );
}