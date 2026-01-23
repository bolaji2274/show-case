import { useState } from "react";
import { mySocials } from "../constants";
import PrivacyPolicyModal from "../components/PrivacyPolicyModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Get current year automatically
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex flex-col items-center justify-between gap-5 pb-8 text-sm text-neutral-400 c-space md:flex-row relative">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full absolute top-0 left-0" />
      
      {/* Terms and Privacy Links */}
      <div className="flex gap-2 relative z-10">
        <p className="cursor-pointer hover:text-white transition-colors">Terms & Conditions</p>
        <p>|</p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer hover:text-white transition-colors focus:outline-none"
        >
          Privacy Policy
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 relative z-10">
        {mySocials.map((social, index) => (
          <a 
            href={social.href} 
            key={index}
            target={social.target}
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-black-300 transition-all"
          >
            <img 
              src={social.icon} 
              className={`w-1/2 h-1/2 ${
                social.name === 'GitHub' || social.name === 'Twitter' 
                  ? 'filter invert' 
                  : ''
              }`} 
              alt={social.name} 
            />
          </a>
        ))}
      </div>

      {/* Copyright & Analytics Note */}
      <div className="flex flex-col items-end gap-1 relative z-10 text-right">
        <p>© {currentYear} Bolaji. All rights reserved.</p>
        <p className="text-xs text-neutral-600">Analytics by Google</p>
      </div>

      {/* The Modal Component */}
      <PrivacyPolicyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Footer;