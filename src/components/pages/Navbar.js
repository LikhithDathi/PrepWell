import React, { useState, useEffect } from 'react';
import { Navbar as BSNavbar, Nav, Container, Button } from 'react-bootstrap';
import './../Styles/Navbar.css';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setExpanded(false);
  };

  const navLinks = [
    { id: 1, label: "Home", href: "#home" },
    { id: 2, label: "Features", href: "#features" },
    { id: 3, label: "Success", href: "#testimonials" },
    { id: 4, label: "Pricing", href: "#pricing" }
  ];

  return (
    <BSNavbar 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      className={`navbar-premium ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <BSNavbar.Brand 
          href="#home" 
          className="navbar-brand brand-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
        >
          <span className="brand-logo-bold">Prep</span>
          <span className="brand-logo-light">Well</span>
        </BSNavbar.Brand>

        <BSNavbar.Toggle 
          aria-controls="main-navbar"
          className="navbar-toggle"
          onClick={() => setExpanded(!expanded)}
        />
        
        <BSNavbar.Collapse id="main-navbar">
          <Nav className="navbar-nav ms-auto align-items-center">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.id}
                href={link.href}
                className="nav-link-custom"
                onClick={(e) => {
                  e.preventDefault();
                  const target = link.href === '#pricing' ? '#testimonials' : link.href;
                  handleNavClick(target);
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          
          <Button 
            className="navbar-cta btn-premium-custom"
            onClick={() => handleNavClick('#testimonials')}
          >
            🚀 Free Assessment
          </Button>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;