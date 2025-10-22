import { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { LanguageProvider } from './contexts/LanguageContext';
import AnimatePresenceWrapper from './components/AnimatePresenceWrapper';
import { PageTransition } from './utils/animations.jsx';

const AppContent = () => {
  return (
    <AnimatePresenceWrapper>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <AnimatePresence>
          <Header key="header" />
          <Hero key="hero" />
          <Benefits key="benefits" />
          <Collaboration key="collaboration" />
          <Services key="services" />
          <Pricing key="pricing" />
          <Roadmap key="roadmap" />
          <Footer key="footer" />
        </AnimatePresence>
      </div>
    </AnimatePresenceWrapper>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <Suspense fallback={
        <div className="flex items-center justify-center w-full h-screen">
          <div className="animate-pulse">Loading...</div>
        </div>
      }>
        <PageTransition>
          <AppContent />
          <ButtonGradient />
        </PageTransition>
      </Suspense>
    </LanguageProvider>
  );
};

export default App;
