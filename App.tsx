
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import RoutineMethod from './components/RoutineMethod';
import Subjects from './components/Subjects';
import TeacherProfiles from './components/TeacherProfiles';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CTAButton from './components/CTAButton';
import JsonLd from './components/JsonLd';

const App: React.FC = () => {
  // Smooth scroll implementation
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <RoutineMethod />
        <Subjects />
        <TeacherProfiles />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <CTAButton />
    </div>
  );
};

export default App;
