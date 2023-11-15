import React from "react";
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

function App() {
  return (
    <>
      <Router>
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
