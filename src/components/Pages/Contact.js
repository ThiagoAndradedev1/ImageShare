import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Fragment>
      <section className='section mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div>
                <img
                  alt='Web Studio'
                  className='img-fluid'
                  src='images/contact.svg'
                />
              </div>
            </div>
            <div className='col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0'>
              <div>
                <h2 style={{ color: "#696969", fontSize: "3.7em" }}>
                  CONTATC ME
                </h2>
                <p className='margin-top-s'>
                  Whether you’re a full stack web developer, content author, or
                  business professional – Solodev gives you the power to build,
                  customize, and manage modules to boost your website.
                </p>

                <Form>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control type='email' placeholder='Enter email' />
                  </Form.Group>

                  <Form.Group controlId='formBasicPassword'>
                    <Form.Control type='password' placeholder='Password' />
                  </Form.Group>

                  <Form.Group controlId='exampleForm.ControlTextarea1'>
                    <Form.Control as='textarea' rows='3' />
                  </Form.Group>

                  <Button
                    className='btn-contact-page'
                    variant='primary'
                    // type='submit'
                    style={{ marginBottom: "25px" }}
                  >
                    Enviar
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        className='wave'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#6610f2'
          fillOpacity='1'
          d='M0,128L48,106.7C96,85,192,43,288,42.7C384,43,480,85,576,128C672,171,768,213,864,208C960,203,1056,149,1152,112C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </Fragment>
  );
};

export default Contact;
