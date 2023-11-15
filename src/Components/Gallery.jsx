import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Gallery1 from "../assets/gallery-1.jpg";
import Gallery2 from "../assets/gallery-2.jpg";
import Gallery3 from "../assets/gallery-3.jpg";
import { motion } from "framer-motion";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob("../assets/gallery/gallery-*.jpg");
      const imagePaths = await Promise.all(
        Object.entries(imageModules).map(async ([, importer]) => {
          const module = await importer();
          return module.default;
        })
      );
      setImages(imagePaths);
    };

    loadImages();
  }, []);
  const pageVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const handleViewMore = () => {
    setVisibleImages((prev) => prev + 3);
  };
  return (
    <>
      <motion.div
        className="container gallery"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <h2>Art & Peace</h2>
        <Row className="gallery-row g-3">
          <Col md={4} xs={12}>
            <img src={Gallery1} alt="" className="hover-zoom" loading="lazy" />
          </Col>
          <Col md={4} xs={12}>
            <img src={Gallery2} alt="" className="hover-zoom" loading="lazy" />
          </Col>
          <Col md={4} xs={12}>
            <img src={Gallery3} alt="" className="hover-zoom" loading="lazy" />
          </Col>
          {images.slice(0, visibleImages).map((src, index) => (
            <Col md={4} xs={12}>
              <motion.img
                src={src}
                alt=""
                className="hover-zoom"
                loading="lazy"
                initial="hidden"
                animate="show"
                variants={itemVariants}
              />
            </Col>
          ))}
          {visibleImages < images.length && (
            <Col xs={12}>
              <Button className="gallery-button" onClick={handleViewMore}>
                View more
              </Button>
            </Col>
          )}
        </Row>
      </motion.div>
    </>
  );
};

export default Gallery;
