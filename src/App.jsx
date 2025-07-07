
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollingCreators from './components/ScrollingCreators'
import ValueSection from './components/ValueSection'
import ServicesSection from './components/ServicesSection'
import MyWork from './components/MyWork'
import AboutFounder from './components/AboutFounder'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {

  return (
    <div className='body'>
     <Navbar />
     <Hero />
     <ScrollingCreators/>
     <ValueSection/>
     <ServicesSection/>
     <MyWork/>
     <AboutFounder/>
     <ContactForm/>
     <Footer/>
    </div>
  )
}

export default App
