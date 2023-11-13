import Home from "./Pages/Home";
import GalleryPage from "./Pages/GalleryPage";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
      <Analytics />
    </>
  );
}

export default App;
