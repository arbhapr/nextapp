"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link className="nav-link" href="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" href="/">Home</Link>
            <Link className="nav-link" href="/about">About</Link>
            <Link className="nav-link" href="/services">Services</Link>
            <Link className="nav-link" href="/products">Our Products</Link>
            <Link className="nav-link" href="/quotes">Quotes</Link>
            <Link className="nav-link" href="/clientinserver">ClientInServer</Link>
            <Link className="nav-link" href="/blog">Blog</Link>
            <Link className="nav-link" href="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
