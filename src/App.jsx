import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import HomePage from "./Pages/HomePage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import WorkPage from "./Pages/WorkPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Tailwind-Practice" element={<HomePage />} />
          <Route path="/Tailwind-Practice/blog" element={<BlogPage />} />
          <Route path="/Tailwind-Practice/works" element={<WorkPage />} />
          <Route path="/Tailwind-Practice/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
