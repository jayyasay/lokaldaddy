import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Navigation from "./Components/Navigation";
import Slider from "./Components/Slider";

import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Navigation />
      <Slider />
      <Gallery />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
