import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import "./App.css";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
