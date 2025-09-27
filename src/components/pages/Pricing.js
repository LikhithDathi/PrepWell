import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import './../Styles/Pricing.css';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: "Free",
      period: "7-day trial",
      features: ["5 practice tests", "Basic AI feedback", "Progress tracking", "Email support"],
      popular: false,
      gradient: "linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)",
      buttonVariant: "outline-secondary"
    },
    {
      id: 2,
      name: "Pro",
      price: "$29",
      period: "per month",
      features: ["Unlimited practice tests", "Advanced AI feedback", "Expert reviews", "Priority support", "Band analysis"],
      popular: true,
      gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
      buttonVariant: "success"
    },
    {
      id: 3,
      name: "Premium",
      price: "$79",
      period: "3 months (Save 30%)",
      features: ["All Pro features", "1-on-1 coaching", "Band score guarantee", "Certificate", "Career guidance"],
      popular: false,
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      buttonVariant: "outline-primary"
    }
  ];

  return (
    <section id="pricing" className="pricing-section py-5 bg-white position-relative">
      {/* Background pattern */}
      <div className="pricing-background position-absolute top-0 end-0 w-50 h-100 opacity-5">
        <div className="pricing-background-circle"></div>
      </div>

      <Container className="pricing-container">
        <div className="pricing-header text-center mb-5 fade-in">
          <span className="pricing-badge badge bg-success mb-3 px-3 py-2">Simple Pricing</span>
          <h2 className="pricing-title display-4 fw-bold mb-3">Choose Your Plan</h2>
          <p className="pricing-subtitle lead text-muted">Start with a free trial. No credit card required.</p>
        </div>
        
        <Row className="pricing-grid g-4 justify-content-center">
          {plans.map((plan, index) => (
            <Col key={plan.id} lg={4} md={6} className="pricing-col fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <Card className={`premium-card pricing-card h-100 border-0 ${plan.popular ? 'popular-plan' : ''}`}>
                <Card.Body className="pricing-card-body p-4 d-flex flex-column text-center position-relative">
                  
                  {/* Popular badge */}
                  {plan.popular && (
                    <Badge className="pricing-popular-badge">
                      🏆 MOST POPULAR
                    </Badge>
                  )}

                  {/* Plan header with gradient */}
                  <div 
                    className="pricing-card-header rounded-3 p-3 mb-4 text-white"
                    style={{background: plan.gradient}}
                  >
                    <h4 className="pricing-plan-name fw-bold mb-1">{plan.name}</h4>
                    <div className="pricing-price my-3">
                      <span className="pricing-amount display-4 fw-bold">{plan.price}</span>
                      <small className="pricing-period d-block opacity-90">{plan.period}</small>
                    </div>
                  </div>
                  
                  {/* Features list */}
                  <ul className="pricing-features list-unstyled mb-4 flex-grow-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="pricing-feature mb-3 d-flex align-items-center">
                        <span 
                          className="pricing-feature-icon me-2"
                          style={{color: plan.gradient.includes('10b981') ? '#10b981' : '#8b5cf6'}}
                        >
                          ✓
                        </span>
                        <span className="pricing-feature-text text-start">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button 
                    variant={plan.buttonVariant}
                    size="lg"
                    className="pricing-cta mt-auto fw-bold py-2"
                    style={{
                      background: plan.popular ? plan.gradient : undefined,
                      border: plan.popular ? 'none' : undefined
                    }}
                  >
                    {plan.price === "Free" ? "Start Free Trial" : "Get Started"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Trust badges */}
        <Row className="pricing-trust mt-5 fade-in">
          <Col className="text-center">
            <div className="pricing-trust-badges d-flex justify-content-center gap-5 flex-wrap">
              <div className="pricing-trust-item text-center">
                <div className="pricing-trust-icon fw-bold text-success">🔒 Secure Payment</div>
                <small className="pricing-trust-text text-muted">256-bit encryption</small>
              </div>
              <div className="pricing-trust-item text-center">
                <div className="pricing-trust-icon fw-bold text-success">↩️ 30-Day Guarantee</div>
                <small className="pricing-trust-text text-muted">Money back guarantee</small>
              </div>
              <div className="pricing-trust-item text-center">
                <div className="pricing-trust-icon fw-bold text-success">👥 10,000+ Students</div>
                <small className="pricing-trust-text text-muted">Trusted worldwide</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;