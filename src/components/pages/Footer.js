import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBrain, FaGraduationCap, FaAward, FaShieldAlt} from "react-icons/fa";
import './../Styles/Footer.css';

const FooterModern = () => {
  return (
    <footer className="prepwell-footer-modern">
      <Container>
        {/* Feature Highlights */}
        <Row className="feature-highlights">
          <Col md={3} sm={6} className="feature-item">
            <div className="feature-icon">
              <FaBrain />
            </div>
            <div className="feature-content">
              <h5>AI-Powered Learning</h5>
              <p>Smart adaptive technology</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="feature-item">
            <div className="feature-icon">
              <FaGraduationCap />
            </div>
            <div className="feature-content">
              <h5>Expert Instructors</h5>
              <p>IELTS specialists</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="feature-item">
            <div className="feature-icon">
              <FaAward />
            </div>
            <div className="feature-content">
              <h5>Proven Results</h5>
              <p>95% success rate</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="feature-item">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <div className="feature-content">
              <h5>Secure Platform</h5>
              <p>Data protected</p>
            </div>
          </Col>
        </Row>

        {/* Main Footer Content */}
        <Row className="footer-main-modern">
          {/* Brand Column */}
          <Col lg={4} md={6} className="footer-brand-modern">
            <div className="brand-section">
              <div className="brand-logo">
                <span className="brand-prep">Prep</span>
                <span className="brand-well">Well</span>
              </div>
              <p className="brand-tagline">
                Revolutionizing IELTS preparation through intelligent technology and personalized learning paths.
              </p>
            </div>
          </Col>

          {/* Learning Resources */}
          <Col lg={2} md={3} sm={6} className="footer-links-modern">
            <h5 className="links-title">Resources</h5>
            <ul className="footer-links-list">
              <li><a href="#blog">Study Blog</a></li>
              <li><a href="#practice">Practice Tests</a></li>
              <li><a href="#vocabulary">Vocabulary Builder</a></li>
              <li><a href="#webinars">Live Webinars</a></li>
              <li><a href="#downloads">Study Materials</a></li>
            </ul>
          </Col>

          {/* IELTS Sections */}
          <Col lg={2} md={3} sm={6} className="footer-links-modern">
            <h5 className="links-title">IELTS Modules</h5>
            <ul className="footer-links-list">
              <li><a href="#listening">Listening</a></li>
              <li><a href="#reading">Reading</a></li>
              <li><a href="#writing">Writing</a></li>
              <li><a href="#speaking">Speaking</a></li>
              <li><a href="#band-calculator">Band Calculator</a></li>
            </ul>
          </Col>

          {/* Support */}
          <Col lg={2} md={3} sm={6} className="footer-links-modern">
            <h5 className="links-title">Support</h5>
            <ul className="footer-links-list">
              <li><a href="#help-center">Help Center</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#tutorials">Video Tutorials</a></li>
              <li><a href="#contact">Contact Support</a></li>
              <li><a href="#status">System Status</a></li>
            </ul>
          </Col>

          {/* Company */}
          <Col lg={2} md={3} sm={6} className="footer-links-modern">
            <h5 className="links-title">Company</h5>
            <ul className="footer-links-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#affiliate">Affiliate Program</a></li>
            </ul>
          </Col>
        </Row>

        {/* Newsletter Section */}
        <Row className="newsletter-modern">
          <Col lg={8} className="newsletter-content">
            <h4>Join 50,000+ Successful Test Takers</h4>
            <p>Get weekly IELTS tips and exclusive offers delivered to your inbox</p>
          </Col>
          <Col lg={4} className="newsletter-form">
            <div className="input-group-modern">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="email-input"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="footer-bottom-modern">
          <div className="footer-divider-modern"></div>
          <Row className="footer-bottom-content">
            <Col md={6} className="copyright-modern">
              <span>© 2025 PrepWell Institute. Empowering dreams through education.</span>
            </Col>
            <Col md={6} className="legal-links-modern">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
              <a href="#gdpr">GDPR</a>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default FooterModern;