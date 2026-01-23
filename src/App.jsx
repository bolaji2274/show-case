import React, { Suspense } from "react";

import Spinner from "./components/Spinner";
import Navbar from "./sections/Navbar";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

// Use React.lazy for components you want to load asynchronously
const Hero = React.lazy(() => import('./sections/Hero'));
const About = React.lazy(() => import('./sections/About'));
const Projects = React.lazy(() => import('./sections/Projects'));
const Experiences = React.lazy(() => import('./sections/Experiences'));

const App = () => {
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
