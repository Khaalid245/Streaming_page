import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import KeyFeatures from "./components/KeyFeatures";
import PricePlans from "./components/PricePlans";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";


const App = () => {
  return (
 <main className="text-sm text-neutral-300 antialiased">
  <Navbar />
  <HeroSection />
  <HowItWorks/>
  <KeyFeatures/>
  <PricePlans />
  <Testimonials/>
  <Footer/>
  
  </main>
  )
}

export default App
