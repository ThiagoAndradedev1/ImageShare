import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Fragment>
      <section
        style={{ marginBottom: "35px", marginTop: "55px" }}
        className='section mt-5'
      >
        <div>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div>
                  <img
                    alt='Web Studio'
                    className='img-fluid'
                    src='images/teste-2.svg'
                  />
                </div>
              </div>
              <div className='col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0'>
                <div>
                  <h2
                    style={{
                      fontSize: "2.0em",
                      textTransform: "uppercase",
                      color: "#696969",
                    }}
                  >
                    Armazene sua Imagem
                  </h2>
                  <p className='margin-top-s'>
                    Whether you’re a full stack web developer, content author,
                    or business professional – Solodev gives you the power to
                    build, customize, and manage modules to boost your website.
                  </p>
                  <div className='btn-block'>
                    <Button
                      as={Link}
                      to='/images'
                      // style={{ marginBottom: "25px", display: "inline" }}
                      className='btn-landing-page'
                      variant='primary'
                    >
                      Armazenar
                    </Button>
                    <Button
                      as={Link}
                      to='/howtoupload'
                      style={{
                        marginLeft: "8px",
                      }} // O margin left é que tá deformando o estilo
                      className='btn-landing-page'
                      variant='primary'
                    >
                      Como Armazenar ?
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <h3
        className='text-upload-landing-page'
        style={{
          textAlign: "center",
          marginBottom: "35px",
        }}
      >
        Como fazer Upload ?
      </h3>
      <div style={{ textAlign: "center" }} className='container'>
        <div className='row'>
          <div className='col-sm'>
            <Card className='card-landing-page'>
              <Card.Img
                variant='top'
                src='https://image.freepik.com/vetores-gratis/pasta-com-o-simbolo-do-site_18591-43658.jpg'
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm'>
            <Card className='card-landing-page'>
              <Card.Img
                variant='top'
                src='https://image.freepik.com/vetores-gratis/pasta-com-o-simbolo-do-site_18591-43658.jpg'
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm'>
            <Card className='card-landing-page'>
              <Card.Img
                variant='top'
                src='https://image.freepik.com/vetores-gratis/pasta-com-o-simbolo-do-site_18591-43658.jpg'
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div> */}
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
      {/* <div style={{ backgroundColor: "#6610f2" }}>
        <h3
          className='text-upload-landing-page'
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          Como fazer Upload ?
        </h3>
        <div style={{ textAlign: "center" }} className='container'>
          <div className='row'>
            <div className='col-sm'>
              <Card className='card-landing-page'>
                <Card.Img
                  variant='top'
                  src='https://image.freepik.com/vetores-gratis/pasta-com-o-simbolo-do-site_18591-43658.jpg'
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='col-sm'>
              <Card className='card-landing-page'>
                <Card.Img
                  variant='top'
                  src='https://image.freepik.com/vetores-gratis/pasta-com-o-simbolo-do-site_18591-43658.jpg'
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='col-sm'>
              <Card className='card-landing-page'>
                <Card.Img
                  variant='top'
                  src='https://image.freepik.com/vetores-gratis/pasta-com-o-simbolo-do-site_18591-43658.jpg'
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default LandingPage;
