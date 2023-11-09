import banner1 from "../assets/banner-1.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            style={{ position: "relative", paddingLeft: 0, paddingRight: 0 }}
          >
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              keyboard={true}
              mousewheel={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={banner1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner1} alt="" />
              </SwiperSlide>
            </Swiper>

            <Card className="homepage-card position-absolute">
              <Card.Body className="homepage-card-body">
                Forever
                <br />
                Art
                <br />
                for
                <br />
                Every
                <br />
                Soul
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Slider;
