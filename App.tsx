
import React from 'react';
import Header from './components/Header.tsx';
import HeroSection from './components/HeroSection.tsx';
import ProblemSection from './components/ProblemSection.tsx';
import SolutionSection from './components/SolutionSection.tsx';
import ProcessSection from './components/ProcessSection.tsx';
import FounderSection from './components/FounderSection.tsx';
import CtaSection from './components/CtaSection.tsx';
import FaqSection from './components/FaqSection.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-brand-bg-light">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <FounderSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;