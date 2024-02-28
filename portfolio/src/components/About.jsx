import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="top">
          <div className="title">
            <h1 data-aos='fade-up' data-aos-delay='200'>ABOUT ME</h1>
          </div>
          <p data-aos='fade-up' data-aos-delay='250' className="mt-4">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="row">
          <div className="col p-5">
            <h1 data-aos='fade-up' data-aos-delay='200'>Get to know me !</h1>
            <p className="mt-5" data-aos='fade-up' data-aos-delay='250'>
              "I'm a junior Frontend Developer passionate about crafting and
              enhancing web applications using the Angular framework. Holding an
              engineering degree in software engineering from the University of
              Information Technology in Katowice and currently pursuing a
              master's degree in the same field, my skill set includes Angular,
              React, TypeScript, HTML, CSS, JavaScript, NodeJS, and MongoDb.{" "}
              <br /> <br />I specialize in building the frontend of websites and
              web applications, contributing to the overall success of the
              product. Explore some of my projects in the Projects section.{" "}
              <br /> <br />I enjoy sharing insights gained throughout my journey
              in web development with the Dev Community. Connect with me on
              LinkedIn for valuable content related to web development and
              programming. <br /> <br />
              I'm actively seeking job opportunities where I can contribute,
              learn, and grow. If you have a fitting opportunity aligning with
              my skills and experience, feel free to reach out."
            </p>
            <div className="button">
              <a data-aos='fade-up' data-aos-delay='250' href="#contact">Contact</a>
            </div>
          </div>
          <div className="col p-5">
            <h1 data-aos='zoom-in' data-aos-delay='200'>My Skills</h1>
            <div className="skills mt-5">
              <div data-aos='zoom-in' data-aos-delay='250' className="skill">HTML</div>
              <div data-aos='zoom-in' data-aos-delay='150' className="skill">CSS</div>
              <div data-aos='zoom-in' data-aos-delay='350' className="skill">JavaScript</div>
              <div data-aos='zoom-in' data-aos-delay='100' className="skill">TypeScript</div>
              <div data-aos='zoom-in' data-aos-delay='150' className="skill">React</div>
              <div data-aos='zoom-in' data-aos-delay='300' className="skill">Angular</div>
              <div data-aos='zoom-in' data-aos-delay='250' className="skill">Vue</div>
              <div data-aos='zoom-in' data-aos-delay='100' className="skill">GIT</div>
              <div data-aos='zoom-in' data-aos-delay='350' className="skill">Github</div>
              <div data-aos='zoom-in' data-aos-delay='200' className="skill">Responsive</div>
              <div data-aos='zoom-in' data-aos-delay='150' className="skill">Node JS</div>
              <div data-aos='zoom-in' data-aos-delay='350' className="skill">MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
