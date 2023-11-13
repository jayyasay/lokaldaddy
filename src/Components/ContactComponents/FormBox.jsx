import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const FormBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(this);
    fetch("/api/sendEmail", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };
  return (
    <>
      <Container className="flex-column" style={{ height: "100%" }}>
        <Row style={{ height: "100%" }}>
          <Col className="contact-item">
            <h3>Request an appointment</h3>
            <Form>
              <Row className="contact-item-form">
                <Col xs={12} md={6}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="Name" name="name" />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Contact number</Form.Label>
                  <Form.Control placeholder="Contact number" name="number" />
                </Col>
                <Col xs={12} md={12}>
                  <Button type="submit" className="gallery-button" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormBox;
