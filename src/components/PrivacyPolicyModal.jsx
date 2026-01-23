import React from 'react';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-neutral-900 rounded-xl border border-neutral-700 p-6 shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-white">Privacy Policy</h2>
          <p className="text-sm text-neutral-400 mb-4">Last updated: January 2025</p>
          
          <h3 className="text-lg font-semibold text-white mt-4">1. Introduction</h3>
          <p className="text-neutral-300 text-sm">
            Welcome to bolajihammed.site. This Privacy Policy explains how I collect information when you visit my portfolio.
          </p>

          <h3 className="text-lg font-semibold text-white mt-4">2. Analytics</h3>
          <p className="text-neutral-300 text-sm">
            This site uses Google Analytics to analyze traffic. It gathers anonymous data (like your browser type and general location) to help me understand which projects attract the most interest.
          </p>

          <h3 className="text-lg font-semibold text-white mt-4">3. Contact</h3>
          <p className="text-neutral-300 text-sm">
            If you have questions, please reach out via the contact methods listed on this site.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;