import TopBar from '@/components/TopBar'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import StickyCallBar from '@/components/StickyCallBar'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navigation />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <StickyCallBar />
    </div>
  );
}
