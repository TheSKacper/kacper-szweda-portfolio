import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const NavBar = () => {
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
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className={"nav-link"} href="#about">
                  About
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className={"nav-link"} href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className={"nav-link"} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item ms-1">
                <a href="https://github.com/TheSKacper">
                  <FaGithub className="nav-link social" size={50} />
                </a>
              </li>
              <li className="nav-item ms-1">
                <a href="https://www.linkedin.com/in/kacper-szweda-a11a3724b/">
                  <FaLinkedin className="nav-link social" size={50} />
                </a>
              </li>
              <li className="nav-item ms-1">
                <a href="https://www.facebook.com/kacper.szweda.1">
                  <FaFacebook className="nav-link social" size={50} />
                </a>
              </li>
              <li className="nav-item ms-1">
                <a href="https://twitter.com/Kacper_JMS">
                  <FaTwitter className="nav-link social" size={50} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
