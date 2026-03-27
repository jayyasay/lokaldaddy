import { motion } from "framer-motion";
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import FormBox from "./ContactComponents/FormBox";
import SmallBox from "./ContactComponents/SmallBox";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <main className="page-shell">
      <motion.section
        className="page-hero"
        initial="hidden"
        animate="visible"
        variants={reveal}
      >
        <div className="section-inner page-hero-grid contact-hero-grid">
          <div className="section-copy">
            <span className="eyebrow">Consultation</span>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1>Let's figure it out properly before we put anything on your skin.</h1>
            <p>
              We go through your idea, placement, and size so there are no surprises when you come in.

            </p>
            <div className="consultation-points compact">
              <article>
                <FiMapPin />
                <span>
                  B2 L29 Yen Street, Villa Carolina 1, Tunasan, Muntinlupa City
                </span>
              </article>
              <article>
                <FiPhone />
                <span>0999 123 4567</span>
              </article>
              <article>
                <FiClock />
                <span>Flexible consultations and appointment scheduling</span>
              </article>
            </div>
          </div>

          <SmallBox />
        </div>
      </motion.section>

      <motion.section
        id="start-your-booking"
        className="section-block warm-surface"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={reveal}
      >
        <div className="section-inner consultation-grid contact-request-grid">
          <div className="section-heading centered">
            <span className="eyebrow">Start your booking</span>
            <h2>Send your idea first. We’ll guide you from there.</h2>
            <p>
              No need to overthink it. Just tell us what you want and we’ll help you shape it properly.
            </p>
          </div>

          <div className="contact-form-shell">
            <FormBox />
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Contact;
