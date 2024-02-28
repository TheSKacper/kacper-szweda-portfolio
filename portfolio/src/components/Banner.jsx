import React from 'react';

const Banner = () => {
  return (
    <section className='banner' id='home'>
      <div  className='box'>
        <h1 className='mb-5' data-aos='fade-up' data-aos-delay='200'>
          HEY, I'M KACPER SZWEDA
        </h1>
        <span data-aos='fade-up' data-aos-delay='250'>
          I'm a Frontend Web Developer sculpting digital experiences for
          success. Let's turn ideas into captivating realities together!
        </span>
        <a href='#projects' data-aos='fade-up' data-aos-delay='300'>
          PROJECTS
        </a>
      </div>
    </section>
  );
};

export default Banner;
