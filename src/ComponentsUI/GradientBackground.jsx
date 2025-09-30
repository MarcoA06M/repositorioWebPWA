import React from 'react';

const GradientBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="mx-auto w-full h-full opacity-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            transform: 'translateY(-30%)',
          }}
        />
        <div 
          className="mx-auto w-full h-full opacity-30 bg-gradient-to-tr from-[#80b5ff] to-[#fc89db]"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            transform: 'translateY(30%) rotate(180deg)',
          }}
        />
      </div>
      {children}
    </div>
  );
};

export default GradientBackground;