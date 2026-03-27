import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import GalleryPage from "./Pages/GalleryPage";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import { motion, AnimatePresence } from "framer-motion";

import { Analytics } from "@vercel/analytics/react";

function scrollPageToTop() {
  const runScroll = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  runScroll();
  requestAnimationFrame(runScroll);
  setTimeout(runScroll, 120);
}

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navigation />
        <AnimatedPage>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </AnimatedPage>
        <Footer />
      </Router>
      <Analytics />
    </>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1));

      const scrollToAnchor = () => {
        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      requestAnimationFrame(scrollToAnchor);
      setTimeout(scrollToAnchor, 150);
      return;
    }

    scrollPageToTop();
  }, [location.pathname, location.hash]);

  return null;
}

// AnimatedPage component that wraps each page with AnimatePresence
function AnimatedPage({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {children}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
