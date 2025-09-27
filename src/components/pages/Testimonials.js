import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './../Styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      score: "Band 8.5",
      text: "PrepWell transformed my IELTS preparation. The AI feedback pinpointed exactly where I needed improvement, and the personalized practice sessions made all the difference!",
      improvement: "+2.5 bands",
      avatar: "👩‍🎓",
      rating: 5,
      course: "Academic IELTS",
      duration: "3 months"
    },
    {
      id: 2,
      name: "Raj Patel",
      score: "Band 8.0", 
      text: "The personalized practice sessions helped me focus on my weak areas. Incredible results! I went from Band 6.5 to 8.0 in just 2 months.",
      improvement: "+1.5 bands",
      avatar: "👨‍💼",
      rating: 5,
      course: "General Training",
      duration: "2 months"
    },
    {
      id: 3,
      name: "Emily Davis",
      score: "Band 7.5", 
      text: "Where confidence meets fluency indeed! The mock tests built my confidence tremendously. The speaking practice with AI feedback was game-changing.",
      improvement: "+2.0 bands",
      avatar: "👩‍🏫",
      rating: 5,
      course: "Academic IELTS",
      duration: "4 months"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section py-5 bg-light position-relative">
      {/* Background elements */}
      <div className="testimonials-background position-absolute top-0 start-0 w-100 h-100 opacity-5">
        <div className="testimonials-background-circle"></div>
      </div>

      <Container className="testimonials-container">
        <div className="testimonials-header text-center mb-5 fade-in">
          <span className="testimonials-badge badge bg-success mb-3 px-3 py-2">Success Stories</span>
          <h2 className="testimonials-title display-4 fw-bold mb-3">What Our Students Say</h2>
          <p className="testimonials-subtitle lead text-muted">Join thousands of students who achieved their dream scores</p>
        </div>
        
        <Row className="testimonials-grid g-4">
          {testimonials.map((testimonial, index) => (
            <Col key={testimonial.id} md={4} className="testimonials-col fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <Card className="testimonial-card h-100 border-0">
                <Card.Body className="testimonial-card-body p-4 d-flex flex-column position-relative">
                  
                  {/* Quote mark */}
                  <div className="testimonial-quote position-absolute top-0 start-0 m-3 opacity-10">
                    <span>❝</span>
                  </div>
                  
                  <div className="testimonial-rating rating-stars mb-3 text-warning">
                    {"⭐".repeat(testimonial.rating)}
                  </div>
                  
                  <blockquote className="testimonial-text fst-italic text-muted mb-4 flex-grow-1 fs-6">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Student info */}
                  <div className="testimonial-student d-flex align-items-center justify-content-between mt-auto">
                    <div className="testimonial-avatar d-flex align-items-center">
                      <span className="testimonial-avatar-icon display-6 me-3">
                        {testimonial.avatar}
                      </span>
                      <div>
                        <h6 className="testimonial-name mb-1 fw-bold">{testimonial.name}</h6>
                        <small className="testimonial-score text-success fw-medium d-block">{testimonial.score}</small>
                        <small className="testimonial-course text-muted">{testimonial.course}</small>
                      </div>
                    </div>
                    <Badge className="testimonial-improvement fs-6 px-3 py-2">
                      {testimonial.improvement}
                    </Badge>
                  </div>
                  
                  {/* Course duration */}
                  <div className="testimonial-duration mt-3 pt-3 border-top">
                    <small className="text-muted">
                      <strong>Duration:</strong> {testimonial.duration}
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Overall rating */}
        <Row className="testimonials-rating mt-5 fade-in">
          <Col className="text-center">
            <div className="testimonials-overall bg-white rounded-3 p-4 shadow-sm">
              <h4 className="testimonials-overall-title fw-bold mb-2">Overall Student Satisfaction</h4>
              <div className="testimonials-overall-score display-1 fw-bold text-success mb-2">4.9/5</div>
              <div className="testimonials-overall-stars rating-stars mb-3">
                {"⭐".repeat(5)}
              </div>
              <p className="testimonials-overall-text text-muted mb-0">Based on 1,247 reviews from trusted students</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;