// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import appcss from './App.css';

import Footer from "./componentes/Footer/Footer";
import Navbar from "./componentes/Navbar/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./componentes/Homepage/Homepage";
import AboutUs from "./componentes/AboutUs/AboutUs";
import Watches from "./componentes/Watches/Watches";
import NotFound from "./componentes/NotFound/NotFound";
import Contact from "./componentes/Contact/Contact";
import ProductDetails from "./componentes/ProductDetais/ProductDetails";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="watches" element={<Watches />} />
            <Route path="watches/:watchId" element={<ProductDetails />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
