import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import './../Styles/Hero.css';

const Hero = () => {
  const handleCTAClick = (section) => {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section py-5">
      <Container>
        <Row className="hero-row align-items-center min-vh-100">
          <Col lg={6} className="hero-content fade-in">
            <h1 className="hero-title display-3 fw-bold fs-7 mb-4">
              Your Path to <span className="hero-highlight">IELTS Success</span> Starts Here
            </h1>
            
            <p className="hero-description lead mb-4 fs-6 text-muted">
              <strong>Practice Smart, Score Higher.</strong> Master IELTS with our AI-powered platform 
              designed to help you achieve your dream band score faster.
            </p>
            
            <div className="hero-actions d-flex gap-3 flex-wrap mb-4">
              <Button 
                variant="success" 
                size="lg"
                className="btn-premium hero-cta-primary"
                onClick={() => handleCTAClick('#pricing')}
              >
                🚀 Start Free Trial
              </Button>
              
              <Button 
                variant="outline-success" 
                size="lg"
                className="hero-cta-secondary border-2"
                onClick={() => handleCTAClick('#assessment')}
              >
                📊 Free Assessment
              </Button>
            </div>
            
            <div className="hero-features d-flex gap-3 text-muted small">
              <span className="hero-feature">✅ 7-day free trial</span>
              <span className="hero-feature">🎯 Band score guarantee</span>
              <span className="hero-feature">⭐ 4.9/5 rating</span>
            </div>
          </Col>
          
          <Col lg={6} className="hero-side text-center fade-in">
            <div className="premium-card hero-card p-5 mx-auto">
              <Badge bg="success" className="hero-card-badge">🎯 Trusted by 10,000+ Students</Badge>
              
              <div className="hero-card-logo brand-logo fw-bold mb-3">
                <span className="brand-logo-bold">Prep</span>
                <span className="brand-logo-light">Well</span>
              </div>
              
              <p className="hero-card-subtitle text-muted mb-4 fw-medium">Where Confidence Meets Fluency</p>
              
              <div className="hero-card-stats bg-light rounded-3 p-3">
                <div className="hero-stat-item d-flex justify-content-between text-sm mb-2">
                  <span>Speaking</span>
                  <span className="text-success fw-bold">+2.0 bands</span>
                </div>
                <div className="hero-stat-item d-flex justify-content-between text-sm mb-2">
                  <span>Writing</span>
                  <span className="text-success fw-bold">+1.5 bands</span>
                </div>
                <div className="hero-stat-item d-flex justify-content-between text-sm">
                  <span>Overall</span>
                  <span className="text-success fw-bold">+1.8 bands avg.</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;