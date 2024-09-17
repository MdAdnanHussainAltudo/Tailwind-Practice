import Navbar from "./Components/Navbar/Navbar.jsx";
import "./App.css";
import Hero from "./Components/Hero/Hero.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import Works from "./Components/Works/Works.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Posts />
      <Works />
      <Footer />
    </>
  );
}

export default App;
