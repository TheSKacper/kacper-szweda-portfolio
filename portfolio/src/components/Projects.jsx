import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import iwonaPage from '../assets/iwonaPage.png';
import shopPage from '../assets/shopPage.png';
import chef from '../assets/Chef.png';

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
      case 'iwona':
        return <h1>Iwona website</h1>;
      case 'grandmom':
        return <h1>Shop website</h1>;
      case 'chef':
        return <h1>Chef website</h1>;
      default:
        return null;
    }
  };

  const rederModalLink = () => {
    switch (selectedProject) {
      case 'iwona':
        return 'github.com/TheSKacper/iwona-palys-szweda-website';
      case 'grandmom':
        return 'github.com/TheSKacper/TJShop';
      case 'chef':
        return 'github.com/TheSKacper/Chef-Roksana-web-page';
      default:
        return null;
    }
  };

  const renderModalContent = () => {
    switch (selectedProject) {
      case 'iwona':
        return (
          <div>
            <img src={iwonaPage} alt='' />
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
            <div className='tools'>
              <div className='toolSkill'>HTML</div>
              <div className='toolSkill'>CSS</div>
              <div className='toolSkill'>JavaScript</div>
              <div className='toolSkill'>React</div>
              <div className='toolSkill'>Bootstrap</div>
              <div className='toolSkill'>Git</div>
            </div>
          </div>
        );
      case 'grandmom':
        return (
          <div>
            <img src={shopPage} alt='' />
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
            <div className='tools'>
              <div className='toolSkill'>HTML</div>
              <div className='toolSkill'>CSS</div>
              <div className='toolSkill'>TypeScript</div>
              <div className='toolSkill'>React</div>
              <div className='toolSkill'>Bootstrap</div>
              <div className='toolSkill'>Java Spring</div>
              <div className='toolSkill'>MongoDB</div>
              <div className='toolSkill'>Git</div>
            </div>
          </div>
        );
      case 'chef':
        return (
          <div>
            <img src={chef} alt='' />
            <h2>Project Overview</h2>
            <p>
              Presenting Chef Roxana's digital hub, meticulously crafted to
              spotlight her culinary triumphs and offerings. From bespoke
              catering services to artisanal delights, immerse yourself in a
              virtual journey of taste and elegance. With seamless navigation
              and captivating design, this website embodies the essence of Chef
              Roxana's expertise, proudly brought to life by my design
            </p>
            <h2>Tools Used</h2>
            <div className='tools'>
              <div className='toolSkill'>HTML</div>
              <div className='toolSkill'>CSS</div>
              <div className='toolSkill'>JavaScript</div>
              <div className='toolSkill'>Bootstrap</div>
              <div className='toolSkill'>Git</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='projects' id='projects'>
      <div className='container'>
        <div className='top'>
          <div className='title'>
            <h1 data-aos='fade-up' data-aos-delay='200'>PROJECTS</h1>
          </div>
          <p data-aos='fade-up' data-aos-delay='250' className='mt-4'>
            Explore my latest projects that showcase both my skills and passion
            for crafting web applications.
          </p>
        </div>

        <div data-aos='fade-up' data-aos-delay='200' className='row'>
          <div className='col-md-6 p-5 order-md-6'>
            <img src={iwonaPage} alt='' className='img' />
          </div>
          <div className='col-md-6 p-5 order-md-2'>
            <div className='desc'>
              <h1 className='mb-2'>Iwona website</h1>
              <p>
                Created a website for Mom from scratch, showcasing her interests
                and passions. Designed with love and tailored to her style.
              </p>
              <div className='button'>
                <button className='btn' onClick={() => openModal('iwona')}>
                  CASE STUDY
                </button>
              </div>
            </div>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-delay='250' className='row'>
          <div className='col-md-6 p-5 order-md-1'>
            <img src={shopPage} alt='' className='img' />
          </div>
          <div className='col-md-6 p-5 order-md-2'>
            <div className='desc'>
              <h1 className='mb-2'>Shop website</h1>
              <p>
                Crafted a website for Grandma's store, capturing the essence of
                her business. From unique products to a personalized touch, this
                site reflects her shop's charm. Eager to see her business thrive
                online!
              </p>
              <div className='button'>
                <button className='btn' onClick={() => openModal('grandmom')}>
                  CASE STUDY
                </button>
              </div>
            </div>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-delay='300' className='row'>
          <div className='col-md-6 p-5 order-md-1'>
            <img src={chef} alt='' className='img' />
          </div>
          <div className='col-md-6 p-5 order-md-2'>
            <div className='desc'>
              <h1 className='mb-2 dt'>Chef website</h1>
              <p>
                Crafted a dynamic online platform for Chef Roxana's culinary
                world, delivering a seamless browsing experience for visitors.
                With its sleek design and intuitive functionality, the site
                mirrors the sophistication and culinary excellence associated
                with Chef Roxana's brand."
              </p>
              <div className='button'>
                <button className='btn' onClick={() => openModal('chef')}>
                  CASE STUDY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal centered show={showModal} onHide={closeModal} className='modal'>
        <Modal.Header closeButton>
          <Modal.Title>{rederModalTitle()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderModalContent()}</Modal.Body>
        <Modal.Footer className='footerModal'>
          <div className='activeButton'>
            <a
              target='_blank'
              rel='noreferrer'
              className='btn'
              href={'https://' + rederModalLink()}
            >
              PROJECT LINK
            </a>
            {selectedProject === 'iwona' ? (
              <a
                target='_blank'
                rel='noreferrer'
                href='https://theskacper.github.io/iwona-palys-szweda-website/'
                className='btn'
              >
                Active
              </a>
            ) : null}
            {selectedProject === 'chef' ? (
              <a
                target='_blank'
                rel='noreferrer'
                href='https://theskacper.github.io/Chef-Roksana-web-page/'
                className='btn'
              >
                Active
              </a>
            ) : null}
          </div>
          <button className='btn btn-secondary' onClick={closeModal}>
            GO BACK
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Projects;
