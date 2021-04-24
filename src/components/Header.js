import React from 'react';
import logo from '../img/slide.png';
import { Col, Row } from 'react-bootstrap';

function Header() {
  return (
    <header class="bg-dark">
      <Row bg="primary">
        <Col className="text-center">
          <img src={logo} class="mt-1"/>
          <h2 class="text-white">DIAPOSITIVAS</h2>
        </Col>
      </Row>
    </header>
  )
}

export default Header;
