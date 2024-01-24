import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="top">
          <div className="title">
            <h1>Contact</h1>
          </div>
          <p className="mt-4">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
      </div>
      <form action="" className=" contact-form">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            placeholder="Your message"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default Contact;
