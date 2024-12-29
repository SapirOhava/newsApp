"use client";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function CustomNavbar() {
  return (
    <Navbar expand="md" bg="light" className="pt-5 pb-4">
      <Container fluid="xxl">
        <Navbar.Brand href="#intro">
          <span className="fw-bold text-secondary">
            Net Ninja Pro - The Book
          </span>
        </Navbar.Brand>

        {/* Toggle button for mobile nav */}
        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link href="#topics">About The Book</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#contact">Get in Touch</Nav.Link>

            {/* Mobile only item */}
            <Nav.Link href="#pricing" className="d-md-none">
              Pricing
            </Nav.Link>

            {/* Desktop only button */}
            <Nav.Item className="ms-2 d-none d-md-inline">
              <Button variant="secondary" href="#pricing">
                Buy Now
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
