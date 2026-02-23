// import Hero from "./components/hero/Hero";
// import Portfolio from "./components/portfolio/Portfolio";
// import Services from "./components/services/Services";
// import Contact from "./components/contact/Contact";  
 
import {lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer"; 

const Hero = lazy(() => import ("./components/hero/Hero"));
const Services = lazy(() => import ("./components/services/Services"));
const Contact = lazy(() => import ("./components/contact/Contact"));


const App = () => {

  const { ref: servicesRef, inView: servicesInView } = useInView({threshold: 0, triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0, triggerOnce: true });

  return (

    <div className='container'>

      
        
          <section id="#home">
             <Hero/>
          </section>
      
      {/* <section id="#portfolio">
        <Portfolio/>
      </section>  */}

      <section ref={servicesRef}>
        <Suspense fallback="Loading">
          
            {servicesInView && <Services/>}
          
        </Suspense>
      </section>
      
      <section ref={contactRef}>
        <Suspense fallback="Loading">
            {contactInView && <Contact/>}
        </Suspense>
      </section>
    </div>

  );
};

export default App;