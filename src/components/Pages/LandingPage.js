import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const LandingPage = () => {
  return (
    <Fragment>
      <div className='welcome-banner'>
        <div className='welcome-banner-text'>
          <div
            className='container'
            style={{ marginTop: "100px", textAlign: "center" }}
          >
            <h1
              style={{
                fontSize: "3em",
                textTransform: "uppercase",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              <span style={{ color: "	#696969" }}>Image</span>
              <span style={{ color: "#6610f2" }}>Share</span>
            </h1>
            <p
              style={{
                fontSize: "1em",
                color: "#fff",
              }}
            >
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quis veniam aperiam quasi voluptas soluta. Libero magni hic sequi
              dignissimos quo vitae id voluptatibus sapiente, suscipit nostrum
              officia. Consectetur, animi vel.
              <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Magni explicabo consequatur a reprehenderit unde sit, nam dolore
              ab neque perspiciatis nesciunt enim voluptatem quis ducimus soluta
              pariatur adipisci sunt totam!
            </p>
            <div>
              <Link to='/images'>
                {" "}
                <Button
                  style={{ marginTop: "25px" }}
                  className='btn-landing-page'
                >
                  Armazenar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{ marginBottom: "85px", marginTop: "45px" }}
          className='container'
        >
          <div className='row'>
            <div className='col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0'>
              <div>
                <h4 style={{ color: "#6610f2" }}>Nosso Aplicativo</h4>
                <h1
                  style={{
                    fontSize: "3.0em",
                    color: "	#080808",
                  }}
                >
                  Armazene imagens pelo celular
                </h1>
                <p
                  style={{ color: "black", fontSize: "1.2em" }}
                  className='margin-top-s'
                >
                  Whether you’re a full stack web developer, content author, or
                  business professional – Solodev gives you the power to build,
                  customize, and manage modules to boost your website.
                </p>
                <div>
                  <Link to='/images'>
                    {" "}
                    <Button className='btn-landing-page'>Cadastrar</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div>
                <img
                  alt='Web Studio'
                  className='img-fluid'
                  src='images/cellphone-img.svg'
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <div
          className='container-fluid opinion-banner'
          style={{ backgroundColor: "#c253fe" }}
        >
          <div className='row'>
            <div className='col-md-6'>
              <img
                alt='Web Studio'
                className='img-fluid'
                src='https://images.unsplash.com/photo-1551495657-ca60b4e820e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
              />
            </div>
            <div className='col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0'>
              <div>
                <h4 style={{ color: "#fff" }}>Sarah Jeni</h4>
                <h1
                  style={{
                    fontSize: "3.0em",
                    color: "	#080808",
                    textShadow: "0 0 20px #white",
                  }}
                >
                  Armazene imagens pelo celular
                </h1>
                <p
                  style={{
                    color: "black",
                    fontSize: "1.2em",
                    textShadow: "0 0 20px #white",
                  }}
                  className='margin-top-s'
                >
                  Whether you’re a full stack web developer, content author, or
                  business professional – Solodev gives you the power to build,
                  customize, and manage modules to boost your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{ marginBottom: "85px", marginTop: "45px" }}
          className='container'
        >
          <div className='row'>
            <div className='col-md-6'>
              <div>
                <img
                  alt='Web Studio'
                  className='img-fluid'
                  src='images/image-upload.svg'
                />
              </div>
            </div>
            <div className='col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0'>
              <div>
                <h4 style={{ color: "#6610f2" }}>Nosso Aplicativo</h4>
                <h1
                  style={{
                    fontSize: "3.0em",
                    color: "	#080808",
                  }}
                >
                  Armazene imagens pelo celular
                </h1>
                <p
                  style={{ color: "black", fontSize: "1.2em" }}
                  className='margin-top-s'
                >
                  Whether you’re a full stack web developer, content author, or
                  business professional – Solodev gives you the power to build,
                  customize, and manage modules to boost your website.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div
        style={{
          // maxHeight: "350px",
          // height: "350px"
          backgroundColor: "#c253fe",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "white" }}>Sobre Mim</h1>
          <img src='images/avataaars.svg' alt='' />
          <h3 style={{ marginTop: "25px" }} className='container'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            tempora tenetur illum perspiciatis, labore doloribus nisi ea
            doloremque itaque eius saepe fugit nobis laboriosam, ab, mollitia
            aut obcaecati tempore. Nulla?
          </h3>
          <div style={{ marginTop: "25px" }} className='container'>
            <div className='row'>
              <div className='col-sm'>
                <img
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                  src='https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png'
                  alt=''
                />
              </div>
              <div className='col-sm'>
                <img
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
                  alt=''
                />
              </div>
              <div className='col-sm'>
                <img
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/400px-C_Sharp_logo.svg.png'
                  alt=''
                />
              </div>
              <div className='col-sm'>
                <img
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                  src='https://www.pulumi.com/logos/tech/dotnet.png'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section
        style={{
          marginBottom: "35px",
          marginTop: "55px",
        }}
        className='section mt-5'
      > */}
      {/* <div>
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
                    <span style={{ color: "#505050" }}>Bem Vindo ao</span>{" "}
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
        </div> */}
      {/* <h3
          className='text-upload-landing-page'
          style={{
            textAlign: "center",
            marginBottom: "35px",
            color: "#505050",
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
        </div> */}
      {/* <div
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
        </div> */}
      {/* <div
          style={{
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
                  <h5 style={{ color: "#6633FF" }}>Sarah Jeni</h5>
                  <h2
                    style={{
                      fontSize: "2.0em",
                      color: "black",
                    }}
                  >
                    Ultra helped me increase my revenue by over 3x in less than
                    3 months!
                  </h2>
                  <p style={{ color: "black" }} className='margin-top-s'>
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
              </div> */}
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
      {/* </div>
          </div>
          <div></div>
        </div> */}
      {/* <div
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
        </div> */}
      {/* </section> */}
    </Fragment>
  );
};

export default LandingPage;
