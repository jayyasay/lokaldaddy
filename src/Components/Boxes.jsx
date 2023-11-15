import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaRegImages } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Boxes() {
  const data = [
    {
      image: <FaRegCalendarAlt />,
      text: "Request an appointment",
      link: "/contact-us",
    },
    { image: <RxAvatar />, text: "About our parlor", link: "/contact-us" },
    { image: <FaRegImages />, text: "View gallery", link: "/gallery" },
    {
      image: <FaMeta />,
      text: "Visit our Meta page",
      link: "https://www.facebook.com/Lokaldaddy",
    },
  ];

  const isExternalLink = (link) => /^(https?:|mailto:|tel:)/.test(link);

  const handleOnClick = (e, link) => {
    if (isExternalLink(link)) {
      window.location.href = link;
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const removeTextDecoration = {
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <>
      <Container>
        <Row className="gap-3 pt-4 pb-4">
          {data.map((item, index) => (
            <Col
              xs={12}
              md={6}
              key={item.text}
              as={Link}
              to={item.link}
              onClick={(e) => handleOnClick(e, item.link)}
              // className="p-0"
              style={{
                ...removeTextDecoration,
                ...(index % 2 !== 0 ? { flex: 1 } : null),
              }}
            >
              <Card className="card-override">
                {item.image}
                <Card.Body>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Boxes;
