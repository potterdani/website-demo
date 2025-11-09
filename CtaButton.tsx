
import React from 'react';

const CalendarIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);

const CtaButton: React.FC = () => {
    return (
        <a 
            href="https://habityield.hu/strategiai-hivas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button-animated inline-flex items-center justify-center space-x-3 mx-auto py-5 px-12 rounded-xl text-brand-text-dark font-extrabold text-xl uppercase tracking-wider shadow-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gradient-start/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-gradient-mid"
        >
            <CalendarIcon />
            <span>Kérem a Személyes Stratégiámat!</span>
        </a>
    );
}

export default CtaButton;
