import React from 'react';
import AnimatedCanvas from './AnimatedCanvas.tsx';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 bg-brand-bg-light overflow-hidden">
      <AnimatedCanvas />
      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center mb-10">
          <div className="md:col-span-7 text-center md:text-left w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl mb-6 font-heading font-extrabold tracking-tight text-brand-text-dark">
              A rendszer, ami a háttérből támogat és elvezet a fenntartható csúcsteljesítményhez.
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-body font-normal text-gray-700">
              Szabadíts fel mentális energiát arra, ami igazán számít. Hogy ne csak túléld, hanem valóban megéld a mindennapokat.
            </h2>
          </div>
          <div className="md:col-span-5 w-full mt-8 md:mt-0">
            <div className="p-1 rounded-2xl cta-button-animated shadow-2xl">
              <div className="bg-white/60 backdrop-blur-md rounded-xl overflow-hidden h-[60vh] md:h-[70vh] max-h-[750px]">
                <iframe
                  src="https://app.minup.io/embed/habityield?canStartPayment=true"
                  title="Schedule Appointment"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-xl text-gray-700 font-semibold mb-6">Akik már használják a rendszert:</h3>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="p-2 shadow-lg rounded-lg bg-white/50 backdrop-blur-sm">
                    <img src="https://i.imgur.com/3wkMY5Z.png" alt="Google vélemény 1" className="w-full h-auto rounded-md" />
                </div>
                <div className="p-2 shadow-lg rounded-lg bg-white/50 backdrop-blur-sm">
                    <img src="https://picsum.photos/400/100?grayscale&blur=1" alt="Google vélemény 2" className="w-full h-auto rounded-md" />
                </div>
                <div className="p-2 shadow-lg rounded-lg bg-white/50 backdrop-blur-sm">
                    <img src="https://picsum.photos/400/100?grayscale&blur=2" alt="Google vélemény 3" className="w-full h-auto rounded-md" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;