import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="top">
          <div className="title">
            <h1>ABOUT ME</h1>
          </div>
          <p className="mt-4">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="row">
          <div className="col p-5">
            <h1>Get to know me !</h1>
            <p className="mt-5">
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
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="col p-5">
            <h1>My Skills</h1>
            <div className="skills mt-5">
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">JavaScript</div>
              <div className="skill">TypeScript</div>
              <div className="skill">React</div>
              <div className="skill">Angular</div>
              <div className="skill">Vue</div>
              <div className="skill">GIT</div>
              <div className="skill">Github</div>
              <div className="skill">Responsive</div>
              <div className="skill">Node JS</div>
              <div className="skill">MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
