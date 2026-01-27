import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";  



const App = () => {
  return (
    //Sections are imported here
    <div className=''>
      <Hero/>
      <Portfolio/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App