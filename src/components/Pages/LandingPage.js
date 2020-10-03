import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <span style={{ color: "#fff" }}>Image</span>

              <span style={{ color: "#C253FE" }}>Share</span>
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
                <Button style={{ marginTop: "25px" }} className='btn-style'>
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
                <h4 style={{ color: "#c253fe" }} className='align-text-center'>
                  Nosso Aplicativo
                </h4>

                <h1
                  style={{
                    fontSize: "3.0em",
                    color: "	#080808",
                  }}
                  className='align-text-center'
                >
                  Armazene imagens pelo celular
                </h1>
                <p
                  style={{ color: "black", fontSize: "1.2em" }}
                  className='margin-top-s align-text-center'
                >
                  Whether you’re a full stack web developer, content author, or
                  business professional – Solodev gives you the power to build,
                  customize, and manage modules to boost your website.
                </p>
                <div>
                  <Link to='/images'>
                    {" "}
                    <Button className='btn-style'>Cadastrar</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div>
                <img
                  alt='Web Studio'
                  className='img-fluid cell-phone-img'
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
                <h4
                  className='align-text-center'
                  style={{ color: "#540094", fontSize: "2.0em" }}
                >
                  Sarah Jeni
                </h4>
                <h1
                  style={{
                    fontSize: "3.0em",
                    color: "#fff",
                    textShadow: "0 0 20px #white",
                  }}
                  className='align-text-center'
                >
                  Armazene imagens pelo celular
                </h1>
                <p
                  style={{
                    color: "#Fff",
                    fontSize: "1.2em",
                    textShadow: "0 0 20px #white",
                  }}
                  className='margin-top-s align-text-center'
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
                <h4 style={{ color: "#c253fe" }} className='align-text-center'>
                  Nosso Aplicativo
                </h4>

                <h1
                  style={{
                    fontSize: "3.0em",
                    color: "	#080808",
                  }}
                  className='align-text-center'
                >
                  Armazene imagens pelo celular
                </h1>
                <p
                  style={{ color: "black", fontSize: "1.2em" }}
                  className='margin-top-s align-text-center'
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
      <div>
        <div
          className='container-fluid opinion-banner'
          style={{ backgroundColor: "#c253fe" }}
        >
          <div className='row'>
            <div className='col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0'>
              <div>
                <h4
                  className='align-text-center'
                  style={{ color: "#540094", fontSize: "2.0em" }}
                >
                  Sarah Jeni
                </h4>
                <h1
                  style={{
                    fontSize: "3.0em",
                    color: "#fff",
                    textShadow: "0 0 20px #white",
                  }}
                  className='align-text-center'
                >
                  Armazene imagens pelo celular
                </h1>
                <p
                  style={{
                    color: "#Fff",
                    fontSize: "1.2em",
                    textShadow: "0 0 20px #white",
                  }}
                  className='margin-top-s align-text-center'
                >
                  Whether you’re a full stack web developer, content author, or
                  business professional – Solodev gives you the power to build,
                  customize, and manage modules to boost your website.
                </p>
              </div>
            </div>
            <div className='col-md-6'>
              <img
                alt='Web Studio'
                className='img-fluid'
                src='images/about-me.svg'
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <h1 style={{ color: "#C253FE", paddingTop: "25px" }}>Sobre Mim</h1>
          <img src='images/avataaars.svg' alt='' />
          <h3
            style={{ marginTop: "25px", color: "black", paddingBottom: "35px" }}
            className='container'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            tempora tenetur illum perspiciatis, labore doloribus nisi ea
            doloremque itaque eius saepe fugit nobis laboriosam, ab, mollitia
            aut obcaecati tempore. Nulla?
          </h3>
          <div
            style={{ marginTop: "25px", paddingBottom: "25px" }}
            className='container'
          >
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
                  src='https://www.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                  alt=''
                />
              </div>
              <div className='col-sm'>
                <img
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                  src='https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png'
                  alt=''
                />
              </div>
              <div className='col-sm'>
                <img
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                  src='https://miro.medium.com/max/512/1*5fQvZr2W6ydJ1fxjLgwhcg.png'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
