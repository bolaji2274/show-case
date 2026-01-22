import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        
        {/* Grid 1 - Enhanced Personal Introduction */}
        <div className="flex items-end grid-default-color grid-1">
          {/* <img
          loading="lazy"
            // src="images/coding_ai.webp"
            src="images/coding_4.webp"
            className="absolute scale-[1.75] -right-[5rem] -top-[-5rem] md:scale-[4] md:left-20 md:inset-y-7 lg:scale-[1.5] bg-transparent"
            alt="Bolaji coding"
          /> */}

           {/* Mobile Image */}
          <img
          loading="lazy"
            src="images/coding_4.webp"
            className="absolute md:hidden object-cover object-center w-full h-full opacity-30"
            alt="Bolaji coding"
          />
          
          {/* Desktop Image */}
          <img
          loading="lazy"
            src="images/coding_4.webp"
            // className="hidden md:block absolute object-cover object-center scale-[1.2] right-0 top-0 w-3/5 h-full opacity-40"
            className="absolute scale-[1.75] -right-[5rem] -top-[-5rem] md:scale-[4] md:left-20 md:inset-y-7 lg:scale-[1.5] bg-transparent"
            alt="Bolaji coding with AI"
          />
          
         <div className="relative z-10 p-4 md:p-6 bg-gradient-to-r from-black/50 via-black/60 to-transparent md:bg-none md:bg-black/20 backdrop-blur-sm md:backdrop-blur-none rounded-lg md:rounded-none">
            {/* <p className="headtext text-white drop-shadow-lg">Hi, I'm Bolaji Hammed</p> */}
            <p className="subtext text-gray-100 md:text-white-400 drop-shadow-md leading-relaxed">
              My career in technology started with a deep dive into the world of Linux Systems. As a System Administrator, I learned the critical importance of high availability and the manual pain of traditional server management. This experience became my "why" for transitioning into DevOps Engineering.

I specialize in transforming manual workflows into fully automated CI/CD pipelines. By combining Infrastructure as Code (Terraform) with container orchestration (Docker & Kubernetes), I help organizations achieve 70% faster deployment cycles while maintaining 99.9% uptime.

Beyond the cloud, I am a Full-Stack Engineer who builds with the MERN stack and Python. Whether I'm developing an AI-driven Sentiment Analysis tool or a livestock management system, my goal is always the same: to build software that is as reliable as the infrastructure it runs on.
            </p>
            <div className="flex gap-2 mt-3">
              <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">
                99.9% Uptime
              </span>
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded border border-green-500/30">
                50+ Deployments
              </span>
            </div>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 - Enhanced Skills & Philosophy */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-4xl text-gray-500 font-bold">
              AUTOMATION FIRST
            </p>
            
            {/* Core Principles */}
            <Card
              style={{ rotate: "15deg", top: "5%", left: "10%" }}
              text="Infrastructure as Code"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "15%", right: "5%" }}
              text="CI/CD Pipeline"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "45deg", bottom: "40%", left: "5%" }}
              text="Monitoring & Observability"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-35deg", bottom: "20%", right: "15%" }}
              text="Microservices"
              containerRef={grid2Container}
            />

            {/* DevOps Tools */}
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "70%", borderRadius: "30%" }}
              image="images/logos/ansible.webp"
              loading="lazy"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%", borderRadius: "30%" }}
              image="images/logos/docker.webp"
              loading="lazy"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "5%", left: "40%", borderRadius: "30%" }}
              image="images/logos/terraform.webp"
              loading="lazy"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-60deg", top: "35%", left: "50%", borderRadius: "30%", width: "59px", height: "70px" }}
              image="images/logos/python.webp"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", bottom: "60%", right: "10%", borderRadius: "30%" }}
              image="images/logos/circleci.webp"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", bottom: "35%", right: "35%", borderRadius: "30%" }}
              image="images/logos/github.webp"
              loading="lazy"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "60deg", bottom: "10%", right: "20%", borderRadius: "30%" }}
              image="images/logos/kubernetes.webp"
              loading="lazy"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 - Enhanced Location & Availability */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[55%]">
            <p className="headtext">Global Reach</p>
            <p className="subtext">
              Based in Lagos, Nigeria (GMT+1). Available for remote collaboration 
              across time zones. I've successfully worked with teams in 
              North America, Europe, and Asia.
            </p>
            <div className="mt-3 text-xs text-gray-400">
              <p>🌍 Remote-First • 📅 Flexible Hours</p>
              <p>🚀 Quick Response Time</p>
            </div>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - Enhanced CTA */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Ready to Scale Your Infrastructure?
            </p>
            <p className="text-center text-sm text-gray-300 max-w-[80%]">
              Let's discuss how I can help automate your deployments and optimize your cloud architecture
            </p>
            <CopyEmailButton />
            <div className="flex gap-2 mt-2">
              <span className="px-2 py-1 text-xs bg-orange-500/20 text-orange-300 rounded">
                Free Consultation
              </span>
            </div>
          </div>
        </div>

        {/* Grid 5 - Enhanced Tech Stack */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[55%]">
            <p className="headtext">Tech Arsenal</p>
            <p className="subtext">
              Full-stack expertise with deep DevOps specialization. From React frontends 
              to Kubernetes clusters, I build end-to-end solutions that scale.
            </p>
            <div className="mt-3 space-y-1">
              <div className="flex gap-2 text-xs">
                <span className="text-blue-400">Cloud:</span>
                <span className="text-gray-300">AWS, Azure, GCP</span>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="text-green-400">Containers:</span>
                <span className="text-gray-300">Docker, Kubernetes, Helm</span>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="text-purple-400">Languages:</span>
                <span className="text-gray-300">Python, JavaScript, Go, Bash</span>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

        {/* New Grid 6 - Achievements & Metrics */}
        <div className="grid-black-color col-span-1 md:col-span-2 min-h-[18rem]">
          <div className="p-6">
            <p className="headtext mb-4">Impact & Achievements</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">99.9%</p>
                <p className="text-sm text-gray-400">System Uptime</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">75%</p>
                <p className="text-sm text-gray-400">Deployment Speed ↑</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-400">15+</p>
                <p className="text-sm text-gray-400">Production Apps</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-400">24/7</p>
                <p className="text-sm text-gray-400">Monitoring</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
              <p className="text-sm text-gray-300">
                <span className="text-yellow-400">🏆</span> Reduced infrastructure costs by 40% 
                through optimization and automation
              </p>
            </div>
          </div>
        </div>

        {/* New Grid 7 - Approach & Philosophy */}
        <div className="grid-special-color col-span-1 md:col-span-2 min-h-[18rem]">
          <div className="p-6">
            <p className="headtext mb-4">My DevOps Philosophy</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <p className="font-semibold text-white">Continuous Everything</p>
                  <p className="text-sm text-gray-300">
                    Integration, deployment, monitoring, and improvement
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛡️</span>
                <div>
                  <p className="font-semibold text-white">Security First</p>
                  <p className="text-sm text-gray-300">
                    Built-in security at every layer, not an afterthought
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-semibold text-white">Data-Driven Decisions</p>
                  <p className="text-sm text-gray-300">
                    Metrics and monitoring guide every optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;