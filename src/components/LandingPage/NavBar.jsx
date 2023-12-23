import { Container, Navbar, Nav } from "react-bootstrap";
import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredLink(index);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const navbarStyle = {
    background: isScrolled ? "transparent" : " rgba(235, 112, 61, 0.9)",
    transition: "background 0.3s",
  };

  const navLinkStyle = {
    color: "white",
    fontWeight: 400,
    transition: "color 0.5s",
  };

  const navLinkHoverStyle = {
    color: "black",
    fontWeight: 600,
    transition: "color 0.3s",
  };

  const imageStyle = {
    borderRadius: "10%",
    opacity: isScrolled ? 0 : 1,
    transition: "opacity 0.3s",
  };

  const menuItems = [
    "Work",
    "About",
    "Services",
    "Ideas",
    "Careers",
    "Contact",
  ];

  return (
    <>
      <Navbar
        expand="md"
        className={`navbar sticky-top border-body`}
        style={navbarStyle}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="src/assets/logo/suitmedia.png"
              width="90"
              height="auto"
              className="d-inline-block align-top me-2"
              style={imageStyle}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ms-auto">
              {menuItems.map((link, index) => (
                <Nav.Link
                  className="pe-3"
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  style={
                    hoveredLink === index ? navLinkHoverStyle : navLinkStyle
                  }
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
