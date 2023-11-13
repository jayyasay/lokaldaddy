import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const data = [
  {
    title: "Address",
    content:
      "B2 L29 Yen street Villa Carolina 1 Tunasan 1771 Muntinlupa City, Philippines",
  },
  {
    title: "Opening Hours",
    content: "Always open",
  },
  {
    title: "Contact",
    content: "09991234567",
  },
];

const SmallBox = () => {
  return (
    <>
      <Container className="flex-column">
        {data &&
          data.map((item, index) => (
            <Row>
              <Col className="contact-item">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </Col>
            </Row>
          ))}
      </Container>
    </>
  );
};

export default SmallBox;
