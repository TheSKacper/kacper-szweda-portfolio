import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import iwonaPage from "../assets/iwonaPage.png";
import shopPage from "../assets/shopPage.png";
import ksHotelPage from "../assets/ksHotelPage.png";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  
  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const rederModalTitle = () => {
    switch (selectedProject) {
      case "iwona":
        return <h1>Iwona website</h1>;
      case "grandmom":
        return <h1>Shop website</h1>;
      case "ksHotel":
        return <h1>Hotel website</h1>;
      default:
        return null;
    }
  };

  const rederModalLink = () => {
    switch (selectedProject) {
      case "iwona":
        return "github.com/TheSKacper/iwona-palys-szweda-website";
      case "grandmom":
        return "github.com/TheSKacper/TJShop";
      case "ksHotel":
        return "github.com/TheSKacper/KS-HOTEL";
      default:
        return null;
    }
  };

  const renderModalContent = () => {
    switch (selectedProject) {
      case "iwona":
        return (
          <div>
            <img src={iwonaPage} alt="" />
            <h2>Project Overview</h2>
            <p>
              I've designed a special website for my mom, a talented painter.
              This digital canvas beautifully showcases her vibrant artworks,
              from mesmerizing landscapes to intricate portraits. The
              user-friendly design offers an immersive experience, allowing
              visitors to explore her evolving artistic journey. The website is
              not just a gallery; it's a heartfelt tribute to her passion and
              creativity. I'm proud to bring her art to a wider audience and
              create a space where her talent shines.
            </p>
            <h2>Tools Used</h2>
            <div className="tools">
              <div className="toolSkill">HTML</div>
              <div className="toolSkill">CSS</div>
              <div className="toolSkill">JavaScript</div>
              <div className="toolSkill">React</div>
              <div className="toolSkill">Bootstrap</div>
              <div className="toolSkill">Git</div>
            </div>
          </div>
        );
      case "grandmom":
        return (
          <div>
            <img src={shopPage} alt="" />
            <h2>Project Overview</h2>
            <p>
              I've crafted an online store for my grandma's shop, featuring a
              curated collection of her unique products. The website captures
              the essence of her business, blending a personalized touch with
              the charm of her offerings. From one-of-a-kind items to a seamless
              shopping experience, the site reflects the heart and soul of her
              store. I'm excited to see her business thrive in the digital
              realm, showcasing the warmth and uniqueness that make her shop so
              special.
            </p>
            <h2>Tools Used</h2>
            <div className="tools">
              <div className="toolSkill">HTML</div>
              <div className="toolSkill">CSS</div>
              <div className="toolSkill">TypeScript</div>
              <div className="toolSkill">Angular</div>
              <div className="toolSkill">Bootstrap</div>
              <div className="toolSkill">Git</div>
            </div>
          </div>
        );
      case "ksHotel":
        return (
          <div>
            <img src={ksHotelPage} alt="" />
            <h2>Project Overview</h2>
            <p>
              I developed an online presence for a hotel, offering guests a
              seamless and elegant experience. From a sleek design to
              user-friendly features, the website reflects the comfort and
              sophistication synonymous with the hotel's brand. It's designed to
              provide guests with easy access to information, making their
              online experience as enjoyable as their stay. I'm proud to
              contribute to enhancing the hotel's digital presence and ensuring
              a positive impression for potential guests.
            </p>
            <h2>Tools Used</h2>
            <div className="tools">
              <div className="toolSkill">HTML</div>
              <div className="toolSkill">CSS</div>
              <div className="toolSkill">TypeScript</div>
              <div className="toolSkill">Angular</div>
              <div className="toolSkill">Node.js</div>
              <div className="toolSkill">Bootstrap</div>
              <div className="toolSkill">Git</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="top">
          <div className="title">
            <h1>Projects</h1>
          </div>
          <p className="mt-4">
            Explore my latest projects that showcase both my skills and passion
            for crafting web applications.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 p-5 order-md-6">
            <img src={iwonaPage} alt="" className="img" />
          </div>
          <div className="col-md-6 p-5 order-md-2">
            <div className="desc">
              <h1 className="mb-2">Iwona website</h1>
              <p>
                Created a website for Mom from scratch, showcasing her interests
                and passions. Designed with love and tailored to her style.
              </p>
              <div className="button">
                <button className="btn" onClick={() => openModal("iwona")}>
                  CASE STUDY
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 p-5 order-md-1">
            <img src={shopPage} alt="" className="img" />
          </div>
          <div className="col-md-6 p-5 order-md-2">
            <div className="desc">
              <h1 className="mb-2">Shop website</h1>
              <p>
                Crafted a website for Grandma's store, capturing the essence of
                her business. From unique products to a personalized touch, this
                site reflects her shop's charm. Eager to see her business thrive
                online!
              </p>
              <div className="button">
                <button className="btn" onClick={() => openModal("grandmom")}>
                  CASE STUDY
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 p-5 order-md-1">
            <img src={ksHotelPage} alt="" className="img" />
          </div>
          <div className="col-md-6 p-5 order-md-2">
            <div className="desc">
              <h1 className="mb-2 dt">Hotel website</h1>
              <p>
                Developed a website for KS Hotel, offering a seamless online
                experience for guests. From sleek design to user-friendly
                features, the site reflects the comfort and elegance synonymous
                with KS Hotel.
              </p>
              <div className="button">
                <button className="btn" onClick={() => openModal("ksHotel")}>
                  CASE STUDY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal centered show={showModal} onHide={closeModal} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>{rederModalTitle()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderModalContent()}</Modal.Body>
        <Modal.Footer className="footerModal">
          <a className="btn" href={"https://" + rederModalLink()}>
            PROJECT LINK
          </a>
          <button className="btn btn-secondary" onClick={closeModal}>
            GO BACK
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Projects;
