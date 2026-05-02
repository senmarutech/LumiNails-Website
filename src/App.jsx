import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import Pricing from "./components/Pricing"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Pricing />
      <About />
      <Contact />
    </div>
  )
}

export default App