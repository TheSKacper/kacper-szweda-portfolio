import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-lg-6">
          <h1>Kacper Szweda</h1>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="col-lg-6 mb-4 social">
          <h1>SOCIAL</h1>
          <a href="https://github.com/TheSKacper">
            <FaGithub size={30} className=" icons mt-3" />
          </a>
          <a href="https://www.linkedin.com/in/kacper-szweda-a11a3724b/">
            <FaLinkedin size={30} className=" icons ms-3 mt-3" />
          </a>
          <a href="https://www.facebook.com/kacper.szweda.1">
            <FaFacebook size={30} className=" icons ms-3 mt-3" />
          </a>
          <a href="https://twitter.com/Kacper_JMS">
            <FaTwitter size={30} className=" icons ms-3 mt-3" />
          </a>
        </div>
      </div>
      <hr />
      <h5>©Copyright 2024. Made by Kacper Szweda</h5>
    </div>
  );
};

export default Footer;
