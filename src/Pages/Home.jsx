import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiShield,
  FiStar,
  FiZap,
} from "react-icons/fi";
import bannerImage from "../assets/banner-1.jpg";
import galleryOne from "../assets/gallery-1.jpg";
import galleryTwo from "../assets/gallery-2.jpg";
import galleryThree from "../assets/gallery-3.jpg";
import galleryFour from "../assets/gallery/gallery-4.jpg";
import galleryFive from "../assets/gallery/gallery-5.jpg";
import gallerySix from "../assets/gallery/gallery-6.jpg";
import galleryTwelve from "../assets/gallery/gallery-12.jpg";

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const featureCards = [
  {
    icon: <FiStar />,
    title: "Custom-fit sessions",
    text: "Everything is adjusted based on your needs, not rushed or generic.",
  },
  {
    icon: <FiShield />,
    title: "Calm, clean process",
    text: "You stay comfortable while we focus on precision and hygiene.",
  },
  {
    icon: <FiZap />,
    title: "Bold or minimal",
    text: "Every style is done with clarity and intention.",
  },
];

const previewWorks = [
  { image: galleryOne, alt: "Tattoo portrait artwork" },
  { image: galleryTwo, alt: "Lotus moon tattoo" },
  { image: galleryThree, alt: "Fine line tiger tattoo" },
  { image: galleryFour, alt: "Portrait tattoo sleeve" },
  { image: galleryFive, alt: "Tattoo details on skin" },
  { image: gallerySix, alt: "Custom tattoo artwork" },
];

const Home = () => {
  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="hero-backdrop" />
        <div className="hero-banner-image">
          <img src={bannerImage} alt="LokalDaddy hero background" />
        </div>
        <div className="section-inner hero-stage">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <span className="eyebrow">LokalDaddy Tattoo Lounge</span>
            <h1>Bold design. Clean execution. A tattoo that actually lasts.</h1>
            <p>
              A clean and modern approach to tattooing. We focus on precision, detail, and making sure your tattoo heals properly and looks good long-term.
            </p>
            <div className="hero-actions">
              <Link to="/contact-us" className="brand-button">
                Get started
              </Link>
              <Link to="/gallery" className="outline-button">
                Learn more <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="section-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <div className="section-inner split-section">
          <div className="section-copy">
            <h2>Designed to feel right even before we start.</h2>
            <p>
              The whole process is built to be smooth and stress-free. From consultation to aftercare, everything is done properly so you get the best result possible.
            </p>
            <div className="feature-list">
              {featureCards.map((card) => (
                <article key={card.title} className="feature-card">
                  <div className="feature-icon">{card.icon}</div>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="collage-grid">
            <img src={galleryFour} alt="Portrait tattoo" className="collage-large" />
            <img src={galleryTwo} alt="Fine line floral tattoo" />
            <img src={galleryTwelve} alt="Tattoo sleeve collage" />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-block warm-surface"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <div className="section-inner">
          <div className="section-heading centered">
            <span className="eyebrow">Gallery</span>
            <h2>Recent work, done cleaner and more premium.</h2>
            <p>
              A mix of styles done with consistency and attention to detail. Clean lines, solid shading, and proper healing results.
            </p>
          </div>

          <div className="filter-pills" aria-hidden="true">
            <span>Fine line</span>
            <span>Blackwork</span>
            <span>Floral</span>
            <span>Portraits</span>
            <span>Custom ideas</span>
          </div>

          <div className="gallery-preview-grid">
            {previewWorks.map((item) => (
              <article key={item.image} className="gallery-preview-card">
                <img src={item.image} alt={item.alt} />
              </article>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/gallery" className="brand-button">
              View the full gallery
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-block dark-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <div className="section-inner showcase-split">
          <div className="section-copy light-copy">
            <span className="eyebrow">Featured Direction</span>
            <h2>Where your idea becomes something real.</h2>
            <p>
              We take your concept and turn it into something that fits your body, your style, and actually lasts over time.
            </p>
            <Link to="/contact-us" className="brand-button">
              Start your design
            </Link>
          </div>

          <div className="showcase-stack">
            <article className="showcase-phone">
              <img src={galleryFive} alt="Tattoo close-up" />
            </article>
            <article className="showcase-phone offset">
              <img src={gallerySix} alt="Tattoo showcase detail" />
            </article>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Home;
