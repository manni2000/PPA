import React, { useState, Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LightDarkToggle from './components/LightDarkToggle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = lazy(() => import('./components/HeroSection'));
const ClientsSection = lazy(() => import('./components/ClientsSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const FeatureSection = lazy(() => import('./components/FeatureSection'));
const StatisticsSection = lazy(() => import('./components/StatisticsSection'));
const TestimonialSection = lazy(() => import('./components/TestimonialSection'));
const BlogSection = lazy(() => import('./components/BlogSection'));
const CTASection = lazy(() => import('./components/CTASection'));

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <Header />
      <LightDarkToggle toggleTheme={toggleTheme} />
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        <FeatureSection />
        <StatisticsSection />
        <TestimonialSection />
        <BlogSection />
        <CTASection />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
