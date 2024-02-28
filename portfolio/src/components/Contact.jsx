import React from 'react';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <div className='top'>
          <div className='title'>
            <h1>CONTACT</h1>
          </div>
          <p className='mt-4'>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
      </div>
      <div className='down'>
        <form
          className='contact-form mb-4'
          action='https://formsubmit.co/kacper.szweda@poczta.onet.eu'
          method='POST'
        >
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              name='name'
              id='exampleFormControlInput1'
              placeholder='Enter Your Name'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput2' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput2'
              placeholder='Enter Your Email'
              name='email'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlTextarea1' className='form-label'>
              Message
            </label>
            <textarea
              className='form-control'
              placeholder='Enter Your Message'
              id='exampleFormControlTextarea1'
              name='message'
              rows='8'
            ></textarea>
          </div>
          <button className='btn btn-primary' type='submit'>
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
