import React, { useState, useEffect } from 'react';
import Navbar from './components/pages/Navbar';
import Hero from './components/pages/Hero';
import Features from './components/pages/Features';
import Stats from './components/pages/Stats';
import Testimonials from './components/pages/Testimonials';
import Pricing from './components/pages/Pricing';
import Footer from './components/pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading PrepWell...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats /> 
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;