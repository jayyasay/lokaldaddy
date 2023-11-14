import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import SmallBox from "./ContactComponents/SmallBox";
import FormBox from "./ContactComponents/FormBox";
import { motion } from "framer-motion";

const Contact = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };
  return (
    <>
      <motion.div
        className="contact-bg g-0"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <h2>ABOUT OUR PARLOR</h2>
        <Container>
          <Row className="container m-auto">
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <SmallBox />
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 2 }}
              className="mb-sm-32"
            >
              <FormBox />
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
};

export default Contact;
