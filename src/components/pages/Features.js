import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './../Styles/Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "🧠",
      title: "Practice Smart",
      description: "AI identifies weak areas and creates personalized practice sessions",
      highlight: "AI-Powered",
      gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
      stats: "98% accuracy"
    },
    {
      id: 2,
      icon: "📈",
      title: "Score Higher", 
      description: "Proven strategies for 1.5+ band improvement",
      highlight: "Proven Results",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      stats: "+1.5 bands avg."
    },
    {
      id: 3,
      icon: "🎯",
      title: "Build Confidence",
      description: "Where confidence meets fluency through realistic tests",
      highlight: "Realistic Practice",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      stats: "10,000+ tests"
    },
    {
      id: 4,
      icon: "🚀",
      title: "Master IELTS",
      description: "Comprehensive preparation with expert feedback",
      highlight: "Expert Guidance",
      gradient: "linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)",
      stats: "24/7 support"
    }
  ];

  return (
    <section id="features" className="features-section py-5 bg-light position-relative">
      {/* Background decoration */}
      <div className="features-background position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <div className="features-background-circle"></div>
      </div>

      <Container className="features-container">
        <div className="features-header text-center mb-5 fade-in">
          <span className="features-badge badge bg-success mb-3 px-3 py-2">Why Choose PrepWell</span>
          <h2 className="features-title display-4 fw-bold mb-3">How PrepWell Works</h2>
          <p className="features-subtitle lead text-muted">Smart preparation for exceptional results</p>
        </div>
        
        <Row className="features-grid g-4">
          {features.map((feature, index) => (
            <Col key={feature.id} lg={3} md={6} className="feature-col fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <Card className="premium-card feature-card h-100 text-center border-0">
                <Card.Body className="feature-card-body p-4 d-flex flex-column position-relative">
                  {/* Gradient accent */}
                  <div 
                    className="feature-gradient-accent"
                    style={{background: feature.gradient}}
                  ></div>
                  
                  {/* Icon display */}
                  <div className="feature-icon mx-auto mb-3">
                    {feature.icon}
                  </div>
                  
                  <Card.Title className="feature-card-title h5 fw-bold mb-3">{feature.title}</Card.Title>
                  <Card.Text className="feature-card-text text-muted flex-grow-1 mb-3">{feature.description}</Card.Text>
                  
                  <div className="feature-card-footer mt-auto">
                    <span 
                      className="feature-highlight badge border-0 px-3 py-2 mb-2"
                      style={{
                        background: feature.gradient,
                        color: 'white',
                        fontWeight: '600'
                      }}
                    >
                      {feature.highlight}
                    </span>
                    <div className="feature-stats text-success small fw-bold">{feature.stats}</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;