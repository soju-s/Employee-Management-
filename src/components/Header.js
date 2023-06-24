import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar variant="dark" bg="primary">
      <Container>
        <Navbar.Brand className="fs-4" href="/">
          <i class="fa-solid fa-layer-group">Employee Management </i>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
