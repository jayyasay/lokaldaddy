import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Gallery1 from "../assets/gallery-1.jpg";
import Gallery2 from "../assets/gallery-2.jpg";
import Gallery3 from "../assets/gallery-3.jpg";

const Gallery = () => {
  return (
    <>
      <Container className="gallery">
        <h2>Art & Peace</h2>
        <Row className="gallery-row g-0">
          <Col xs={12} md={4}>
            <img src={Gallery1} alt="" className="hover-zoom" />
          </Col>
          <Col xs={12} md={4}>
            <img src={Gallery2} alt="" className="hover-zoom" />
          </Col>
          <Col xs={12} md={4}>
            <img src={Gallery3} alt="" className="hover-zoom" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button className="gallery-button">View Gallery</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
