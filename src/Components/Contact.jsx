import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import SmallBox from "./ContactComponents/SmallBox";
import FormBox from "./ContactComponents/FormBox";

const Contact = () => {
  return (
    <>
      <Row className="contact-bg g-0" style={{marginTop: '90px', paddingBottom: '90px'}}>
        <h2>ABOUT OUR PARLOR</h2>
        <Container>
          <Row className="container m-auto">
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <SmallBox />
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} className="mb-sm-32">
              <FormBox />
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
};

export default Contact;
