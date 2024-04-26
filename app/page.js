import About from "../components/About/about.jsx"
import ContactDetails from "../components/Contactdetails/Contactdetails.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Founder from "../components/Founder/Founder.jsx"
import Navbar from "../components/Navbar/Navbar.jsx"
import Origin from "../components/Origin/Origin.jsx"
import Services from "../components/Services/Services.js"
import Slider from "../components/Slider/Slider.jsx"
import './globals.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <br/>
      <Services/>
      <br/>
      <About/>
      <Founder/>
      <Origin/>
      <ContactDetails/>
      <Footer/>
    </div>
    
    
  );
}
