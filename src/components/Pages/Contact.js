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
                    // type="text"
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
    </Fragment>
  );
};

export default Contact;
