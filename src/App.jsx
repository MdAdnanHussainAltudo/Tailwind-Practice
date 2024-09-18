import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Pages/Home.jsx";
import MyWorks from "./Pages/MyWorks.jsx";
import Blog from "./Pages/Blog.jsx";
import Contact from "./Pages/Contact.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/works" element={<MyWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
