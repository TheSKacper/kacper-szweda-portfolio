import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showIcons, setShowIcons] = useState(window.innerWidth > 991);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setShowIcons(window.innerWidth > 991);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
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
                  HOME
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className={"nav-link"} href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className={"nav-link"} href="#projects">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className={"nav-link"} href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
            {showIcons && (
              <ul className="navbar-nav ms-auto d-flex align-items-center">
                <li className="nav-item ms-1">
                  <a href="https://github.com/TheSKacper">
                    <FaGithub className="nav-link social" size={45} />
                  </a>
                </li>
                <li className="nav-item ms-1">
                  <a href="https://www.linkedin.com/in/kacper-szweda-a11a3724b/">
                    <FaLinkedin className="nav-link social" size={45} />
                  </a>
                </li>
                <li className="nav-item ms-1">
                  <a href="https://www.facebook.com/kacper.szweda.1">
                    <FaFacebook className="nav-link social" size={45} />
                  </a>
                </li>
                <li className="nav-item ms-1">
                  <a href="https://twitter.com/Kacper_JMS">
                    <FaTwitter className="nav-link social" size={45} />
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
