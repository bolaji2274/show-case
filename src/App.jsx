import React, { Suspense, useEffect } from "react";
import ReactGA from "react-ga4";

import Spinner from "./components/Spinner"
import Navbar from "./sections/Navbar";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

// Lazy loaded components
const Hero = React.lazy(() => import('./sections/Hero'));
const About = React.lazy(() => import('./sections/About'));
const Projects = React.lazy(() => import('./sections/Projects'));
const Experiences = React.lazy(() => import('./sections/Experiences'));

// Fetch the ID from environment variables
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID;

// Initialize GA only if the ID exists
if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

const App = () => {
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      // Send pageview signal
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    } else {
      console.warn("Google Analytics ID is missing. Check your .env file or build-args.");
    }
  }, []);

  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      
      <Suspense fallback={<Spinner />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<Spinner />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<Spinner />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<Spinner />}>
        <Experiences />
      </Suspense>

      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;