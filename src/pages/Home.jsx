import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WaveTransition from '../components/WaveTransition';
import ProductShowcase from '../components/ProductShowcase';
import Industries from '../components/Industries';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WaveTransition from="#0a0a0a" to="#ffffff" />
      <ProductShowcase />
      <WaveTransition from="#ffffff" to="#0a0a0a" />
      <Industries />
      <WaveTransition from="#0a0a0a" to="#ffffff" />
      <Benefits />
      <WaveTransition from="#ffffff" to="#fafafa" />
      <Testimonials />
      <WaveTransition from="#fafafa" to="#ffffff" />
      <Pricing />
      <WaveTransition from="#ffffff" to="#0a0a0a" />
      <LeadForm />
      <Footer />
    </>
  );
}
