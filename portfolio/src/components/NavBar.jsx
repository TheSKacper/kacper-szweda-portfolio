import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scolled, setScrolled] = useState(false);

  useEffect(() => {
    const onSroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onSroll);
    return () => window.removeEventListener("scroll", onSroll);
  }, []);

  return (
    <div className={scolled ? "scrolled" : ""}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            Kacper Szweda
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item ms-2">
                <a
                  className={
                    activeLink === "home" ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  href="#home"
                  onClick={() => setActiveLink("home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item ms-2">
                <a
                  className={
                    activeLink === "about" ? "nav-link active" : "nav-link"
                  }
                  href="#about"
                  onClick={() => setActiveLink("about")}
                >
                  About
                </a>
              </li>
              <li className="nav-item ms-2">
                <a
                  className={
                    activeLink === "projects" ? "nav-link active" : "nav-link"
                  }
                  href="#projects"
                  onClick={() => setActiveLink("projects")}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item ms-2">
                <a
                  className={
                    activeLink === "contact" ? "nav-link active" : "nav-link"
                  }
                  href="#contact"
                  onClick={() => setActiveLink("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item ms-1">
                <FaGithub href="" className="nav-link" size={50} />
              </li>
              <li className="nav-item ms-1">
                <FaLinkedin href="" className="nav-link" size={50} />
              </li>
              <li className="nav-item ms-1">
                <FaFacebook href="" className="nav-link" size={50} />
              </li>
              <li className="nav-item ms-1">
                <FaTwitter href="" className="nav-link" size={50} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
