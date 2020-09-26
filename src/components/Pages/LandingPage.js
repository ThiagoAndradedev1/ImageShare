import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const LandingPage = () => {
  return (
    <Fragment>
      <section
        style={{
          marginBottom: "35px",
          marginTop: "55px",
        }}
        className='section mt-5'
      >
        <div>
          <div style={{ marginBottom: "85px" }} className='container'>
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
                    <span style={{ color: "#484848" }}>Bem Vindo ao</span>{" "}
                    <span style={{ color: "#696969" }}>Image</span>
                    <span style={{ color: "#6610f2" }}>Share</span>
                  </h2>
                  <p className='margin-top-s'>
                    Whether you’re a full stack web developer, content author,
                    or business professional – Solodev gives you the power to
                    build, customize, and manage modules to boost your website.
                  </p>
                  <div>
                    <Link to='/images'>
                      {" "}
                      <Button className='btn-landing-page'>Armazenar</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div
          style={{
            backgroundColor: "black",
            minHeight: "450px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{ marginBottom: "85px", marginTop: "55px" }}
            className='container'
          >
            <div className='row'>
              <div className='col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0'>
                <div>
                  <h3 style={{ color: "#6633FF" }}>Sarah Jeni</h3>
                  <h2
                    style={{
                      fontSize: "2.0em",
                      textTransform: "uppercase",
                      color: "white",
                    }}
                  >
                    Ultra helped me increase my revenue by over 3x in less than
                    3 months!
                  </h2>
                  <p style={{ color: "#C8C8C8" }} className='margin-top-s'>
                    Whether you’re a full stack web developer, content author,
                    or business professional – Solodev gives you the power to
                    build, customize, and manage modules to boost your website.
                  </p>
                </div>
              </div>
              <div className='col-md-6'>
                <div>
                  <img
                    alt='Web Studio'
                    className='img-fluid'
                    src='https://images.unsplash.com/photo-1599687266725-0d4d52716b86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                  />
                </div>
              </div>
              {/* <div className='col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0'>
                <div>
                  <h3 style={{ color: "#FF4500" }}>Sarah Jeni</h3>
                  <h2
                    style={{
                      fontSize: "2.0em",
                      textTransform: "uppercase",
                      color: "white",
                    }}
                  >
                    Ultra helped me increase my revenue by over 3x in less than
                    3 months!
                  </h2>
                  <p style={{ color: "#C8C8C8" }} className='margin-top-s'>
                    Whether you’re a full stack web developer, content author,
                    or business professional – Solodev gives you the power to
                    build, customize, and manage modules to boost your website.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div></div>
        </div>
        <div
          style={{
            backgroundColor: "#6610f2",
            minHeight: "450px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{ marginBottom: "85px", marginTop: "55px" }}
            className='container'
          >
            <div class='container'>
              <div class='row'>
                <div class='col-sm'>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant='top'
                      src='holder.js/100px180?text=Image cap'
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>

                    <Card.Body>
                      <Card.Link href='#'>Card Link</Card.Link>
                      <Card.Link href='#'>Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
                <div class='col-sm'>
                  {" "}
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant='top'
                      src='holder.js/100px180?text=Image cap'
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>

                    <Card.Body>
                      <Card.Link href='#'>Card Link</Card.Link>
                      <Card.Link href='#'>Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
                <div class='col-sm'>
                  {" "}
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant='top'
                      src='holder.js/100px180?text=Image cap'
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>

                    <Card.Body>
                      <Card.Link href='#'>Card Link</Card.Link>
                      <Card.Link href='#'>Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </Fragment>
  );
};

export default LandingPage;
