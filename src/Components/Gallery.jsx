import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiCompass,
  FiLayers,
  FiPenTool,
  FiX,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import heroImage from "../assets/banner-1.jpg";
import detailImage from "../assets/gallery/gallery-6.jpg";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const imageModules = import.meta.glob("../assets/gallery/gallery-*.jpg", {
      eager: true,
      import: "default",
    });
    const imagePaths = Object.entries(imageModules)
      .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
      .map(([, src]) => src);

    setImages(imagePaths);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, lightboxOpen]);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const handleSlideOpen = (index) => (event) => {
    event.preventDefault();
    event.stopPropagation();
    openLightbox(index);
  };

  const showPrevious = (event) => {
    event?.stopPropagation();
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = (event) => {
    event?.stopPropagation();
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const currentLightboxImage = images[activeIndex] ?? heroImage;

  return (
    <main className="page-shell">
      <motion.section
        className="page-hero"
        initial="hidden"
        animate="visible"
        variants={reveal}
      >
        <div className="section-inner page-hero-grid">
          <div className="section-copy">
            <span className="eyebrow">Gallery</span>
            <h1>Work that looks clean, heals properly, and still holds up over time.</h1>
            <p>
              Not just how it looks right after, but how it settles and ages. That’s what we focus on.
            </p>
            <Link to="/contact-us#start-your-booking" className="ghost-button dark">
              Request your appointment <FiArrowRight />
            </Link>
          </div>
          <div className="page-hero-image">
            <img src={heroImage} alt="LokalDaddy tattoo showcase" />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-block warm-surface"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={reveal}
      >
        <div className="section-inner">
          <div className="gallery-showcase-head section-heading centered">
            <h2>Recent work, done cleaner and more premium.</h2>
            <p>
              A mix of styles done with consistency and attention to detail.
              Clean lines, solid shading, and proper healing results.
            </p>
          </div>

          <div className="filter-pills" aria-hidden="true">
            <span>Fine line</span>
            <span>Blackwork</span>
            <span>Floral</span>
            <span>Portraits</span>
            <span>Custom ideas</span>
          </div>

          <div className="gallery-slider-shell">
            <Swiper
              modules={[Autoplay, Navigation, Pagination, Keyboard]}
              navigation={true}
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              preventClicks={false}
              preventClicksPropagation={false}
              loop={images.length > 1}
              centeredSlides={true}
              grabCursor={true}
              speed={850}
              onTap={(swiper) => {
                const trigger = swiper.clickedSlide?.querySelector("[data-gallery-index]");
                const index = Number(trigger?.getAttribute("data-gallery-index"));

                if (Number.isInteger(index)) {
                  openLightbox(index);
                }
              }}
              autoplay={{
                delay: 3200,
                disableOnInteraction: false,
              }}
              spaceBetween={18}
              slidesPerView={1.15}
              breakpoints={{
                640: { slidesPerView: 2.1 },
                992: { slidesPerView: 3.2 },
                1280: { slidesPerView: 4.6 },
              }}
              className="gallery-swiper"
            >
              {images.map((src, index) => (
                <SwiperSlide key={src}>
                  <button
                    type="button"
                    className="gallery-slide-card"
                    data-gallery-index={index}
                    onClick={handleSlideOpen(index)}
                  >
                    <img
                      src={src}
                      alt={`LokalDaddy tattoo work ${index + 1}`}
                      loading="lazy"
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="gallery-process-luxe">
            <article className="gallery-process-luxe-copy">
              <h2>Not rushed. Not random.</h2>
              <p>
                Each tattoo is planned based on placement, skin flow, and
                long-term look. That&apos;s why it ends up cleaner and more
                balanced.
              </p>

              <div className="gallery-process-metrics">
                <div>
                  <span className="feature-icon">
                    <FiCompass />
                  </span>
                  <div>
                    <h3>Placement first</h3>
                    <p>Designed to follow the body instead of fighting it.</p>
                  </div>
                </div>
                <div>
                  <span className="feature-icon">
                    <FiLayers />
                  </span>
                  <div>
                    <h3>Better visual balance</h3>
                    <p>Spacing and scale are built in before the stencil goes on.</p>
                  </div>
                </div>
                <div>
                  <span className="feature-icon">
                    <FiPenTool />
                  </span>
                  <div>
                    <h3>Cleaner over time</h3>
                    <p>Strong silhouettes and better readability as the work settles.</p>
                  </div>
                </div>
              </div>
            </article>
            <button
              type="button"
              className="gallery-process-luxe-image"
              onClick={() => openLightbox(images.indexOf(detailImage) >= 0 ? images.indexOf(detailImage) : 0)}
            >
              <img src={detailImage} alt="LokalDaddy tattoo detail work" />
              <div className="gallery-process-badge">
                <span>Studio standard</span>
                <strong>Clean, balanced, intentional</strong>
              </div>
            </button>
          </div>
        </div>
      </motion.section>

      {lightboxOpen && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close gallery lightbox"
          >
            <FiX />
          </button>

          <div
            className="gallery-lightbox-shell"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-lightbox-viewer">
              <button
                type="button"
                className="gallery-lightbox-nav prev"
                onClick={showPrevious}
                aria-label="Previous image"
              >
                <FiChevronLeft />
              </button>

              <div className="gallery-lightbox-slide">
                <div
                  className="gallery-lightbox-image"
                  style={{ backgroundImage: `url(${currentLightboxImage})` }}
                  role="img"
                  aria-label={`Expanded LokalDaddy tattoo work ${activeIndex + 1}`}
                />
              </div>

              <button
                type="button"
                className="gallery-lightbox-nav next"
                onClick={showNext}
                aria-label="Next image"
              >
                <FiChevronRight />
              </button>
            </div>

            <div className="gallery-lightbox-caption">
              <span>
                {activeIndex + 1} / {images.length}
              </span>
              <strong>LokalDaddy Gallery</strong>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
