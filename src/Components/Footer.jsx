import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <>
      <Container className="footer" fluid>
        <Row>
          <Col xs={12} md={6}>
            <p>© 2023 All Rights Reserved - LokalDaddy PH</p>
          </Col>
          <Col xs={12} md={6}>
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
