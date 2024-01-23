import React from "react";
import test from "../assets/Me.jpeg";

const Projects = () => {
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
            <img src={test} alt="" className="img" />
          </div>
          <div className="col-md-6 p-5 order-md-2">
            <div className="desc">
              <h1 className="mb-4">KS hotel</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                totam autem quibusdam alias. Soluta, earum eaque ex ducimus
                sint, totam dolorum autem at culpa quae aliquid, ipsa
                praesentium error! Quibusdam.
              </p>
              <div className="button">
                <button className="btn">CASE STUDY</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 p-5 order-md-1">
            <img src={test} alt="" className="img" />
          </div>
          <div className="col-md-6 p-5 order-md-2">
            <div className="desc">
              <h1 className="mb-4">Grandmom website</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                totam autem quibusdam alias. Soluta, earum eaque ex ducimus
                sint, totam dolorum autem at culpa quae aliquid, ipsa
                praesentium error! Quibusdam.
              </p>
              <div className="button">
                <button className="btn">CASE STUDY</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 p-5 order-md-1">
            <img src={test} alt="" className="img" />
          </div>
          <div className="col-md-6 p-5 order-md-2">
            <div className="desc">
              <h1 className="mb-4 dt">NoteBook</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                totam autem quibusdam alias. Soluta, earum eaque ex ducimus
                sint, totam dolorum autem at culpa quae aliquid, ipsa
                praesentium error! Quibusdam.
              </p>
              <div className="button">
                <button className="btn">CASE STUDY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
