import React, { Suspense, useEffect } from "react";
import ReactGA from "react-ga4"; // Import GA

import Spinner from "./components/Spinner"

import Navbar from "./sections/Navbar";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

// Use React.lazy for components you want to load asynchronously
const Hero = React.lazy(() => import('./sections/Hero'));
const About = React.lazy(() => import('./sections/About'));
const Projects = React.lazy(() => import('./sections/Projects'));
const Experiences = React.lazy(() => import('./sections/Experiences'));

// Initialize Google Analytics with your Measurement ID
// Replace "G-XXXXXXXXXX" with your actual ID from Google Analytics
ReactGA.initialize("G-45YBEJXX5M");

const App = () => {
  
  useEffect(() => {
    // Send a pageview signal when the app loads
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
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