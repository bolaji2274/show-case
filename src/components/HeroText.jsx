import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  // Enhanced words that better reflect DevOps and software engineering expertise
  const words = ["Secure", "Scalable", "Automated", "Cloud-Native", "Resilient"];
  
  // Additional descriptive words for secondary animation
  const techWords = ["CI/CD", "Kubernetes", "Microservices", "Infrastructure"];
  
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.div
          className="mb-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <span className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-blue-300">
            DevOps Engineer & Full-Stack Developer
          </span>
        </motion.div>
        
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Bolaji
        </motion.h1>
        
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Bridging Development & Operations <br /> 
            <span className="text-3xl text-neutral-400">to Build</span>
          </motion.p>
          
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Digital Solutions
          </motion.p>
          
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
          >
            {["AWS", "Docker","Python", "Terraform", "React", "Node.js", "Kubernetes"].map((tech, index) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-neutral-800 text-neutral-300 rounded-md border border-neutral-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
          
          <motion.p
            // className="mt-4 text-lg text-neutral-400 max-w-2xl"
            className="px-4 py-2 text-sm font-medium from-blue-500/20 to-purple-500/20 rounded-full text-blue-300"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.4 }}
          >
            Specializing in cloud infrastructure, automated deployments, and 
            building robust applications that scale from startup to enterprise.
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.div
          className="mb-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-blue-300">
            DevOps & Full-Stack
          </span>
        </motion.div>
        
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Bolaji
        </motion.p>
        
        <div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building & Deploying <br />
            <span className="text-2xl text-neutral-400">Exceptional</span>
          </motion.p>
          
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-6xl"
            />
          </motion.div>
          
          <motion.p
            className="text-3xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
          
          <motion.div
            className="mt-4 flex flex-wrap gap-2 justify-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
          >
            {["Cloud", "CI/CD", "Python", "Terraform", "React", "DevOps"].map((tech, index) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-neutral-800 text-neutral-300 rounded-md border border-neutral-700"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          
          <motion.p
            // className="mt-4 text-sm text-neutral-400 px-4"
            className="px-4 py-2 text-sm font-medium from-blue-500/20 to-purple-500/20 rounded-full text-blue-300"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.4 }}
          >
            From code to cloud - I ensure your applications are secure, 
            scalable, and always available.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;