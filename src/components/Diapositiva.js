import React from 'react';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';

const Diapositivas = ({ diapositivas }) => {
  const [actual, setActual] = React.useState(0);

  return (
    <Container fluid>
      <Row className="my-5 justify-content-center">
        <Col xs lg="2">
          {/* setActual(0) -> Reinicia el estado a 0 (posición inical) */}
          {/* Verifica la condición y estable si el boton es disabled (primera posicion) poniendo true o false */}
          <Button
            variant="success" onClick={() => setActual(0)} disabled={actual === 0 ? true : false}>
              Empezar
            </Button>
        </Col>
        <Col xs lg="2">
          {/* setActual(actual - 1) -> Establece el estado al actual - 1 (posición anterior) */}
          {/* Verifica la condición y estable si el boton es disabled (primera posicion) poniendo true o false */}
          <Button variant="success" onClick={() => setActual(actual - 1)} disabled={actual === 0 ? true : false}>
            Anterior
          </Button>
        </Col>
        <Col xs lg="2">
          {/* setActual(actual - 1) -> Establece el estado al actual + 1 (posición siguiente) */}
          {/* Verifica la condición y estable si el boton es disabled (última posicion) poniendo true o false */}
          <Button variant="success" onClick={() => setActual(actual + 1)} disabled={actual === diapositivas.length - 1 ? true : false}>
            Siguiente
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Card style={{ width: '40rem' }}>
          <Card.Body>
              {/* Mostar diapositiva actual con su contenido */}
            <h2>
              {diapositivas[actual].title}
            </h2>
            <h5>
              {diapositivas[actual].text}
            </h5>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default Diapositivas;
