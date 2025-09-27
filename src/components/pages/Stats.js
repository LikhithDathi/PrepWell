import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './../Styles/Stats.css';

const Stats = () => {
  const stats = [
    {
      id: 1,
      value: "15+",
      label: "Expert Trainers",
      icon: "👨‍🏫",
      description: "Certified IELTS experts"
    },
    {
      id: 2,
      value: "50K+", 
      label: "Practice Questions",
      icon: "📝",
      description: "Comprehensive question bank"
    },
    {
      id: 3,
      value: "2.5M+",
      label: "AI Evaluations",
      icon: "🤖",
      description: "Accurate feedback provided"
    },
    {
      id: 4,
      value: "30+",
      label: "Countries Served",
      icon: "🌍",
      description: "Global student community"
    }
  ];

  return (
    <section className="stats-section py-5 bg-white position-relative overflow-hidden">
      {/* Animated background */}
      <div className="stats-background position-absolute top-0 start-0 w-100 h-100">
        <div className="stats-background-gradient"></div>
      </div>

      <Container className="stats-container">
        <div className="stats-header text-center mb-5 fade-in">
          <span className="stats-badge badge bg-primary mb-3 px-3 py-2">Our Impact</span>
          <h2 className="stats-title display-4 fw-bold mb-3">Proven Track Record</h2>
          <p className="stats-subtitle lead text-muted">Numbers that speak for themselves</p>
        </div>
        
        <Row className="stats-grid g-4">
          {stats.map((stat, index) => (
            <Col key={stat.id} lg={3} md={6} className="stats-col text-center fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="stats-item p-4 h-100">
                <div className="stats-icon mb-3 mx-auto">
                  {stat.icon}
                </div>
                <div className="stats-value display-4 fw-bold text-success mb-2">{stat.value}</div>
                <h5 className="stats-label fw-bold mb-2 text-dark">{stat.label}</h5>
                <p className="stats-description text-muted small">{stat.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Unique CTA below stats */}
        <Row className="stats-cta mt-5 fade-in">
          <Col className="text-center">
            <div className="stats-cta-card bg-gradient rounded-3 p-5">
              <h3 className="stats-cta-title fw-bold mb-3">See the Difference Yourself</h3>
              <p className="stats-cta-text lead text-muted mb-4">Take our free assessment and get a personalized study plan</p>
              <div className="stats-cta-actions d-flex gap-3 justify-content-center flex-wrap">
                <Button variant="success" size="lg" className="stats-cta-primary px-4">
                  📊 Take Free Assessment
                </Button>
                <Button variant="outline-success" size="lg" className="stats-cta-secondary px-4">
                  👥 Join Free Workshop
                </Button>
              </div>
              <p className="stats-cta-note text-muted mt-3 small">No credit card required • Get instant results</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Stats;