// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import appcss from './App.css';

import Footer from "./componentes/Footer/Footer";
import Navbar from "./componentes/Navbar/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./componentes/Homepage/Homepage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/watches" element={<Footer />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
