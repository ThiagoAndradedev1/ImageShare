import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";

const HowToUpload = () => {
  return (
    <Fragment>
      <h3
        className='text-upload-landing-page'
        style={{
          textAlign: "center",
          marginBottom: "35px",
          color: "#696969",
          fontSize: "2.7em",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        Como fazer Upload ?
      </h3>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <img
            // style={{ maxWidth: "400px" }}
            alt='Web Studio'
            className='img-fluid'
            src='images/group-image.svg'
          />
        </div>
        <div className='col-sm-4'></div>
      </div>
      {/* <div>
        <img
          alt='Web Studio'
          className='img-fluid'
          src='images/group-image.svg'
        />
      </div> */}
      <div
        style={{ textAlign: "center", marginTop: "25px" }}
        className='container'
      >
        <div style={{ marginTop: "15px" }} className='row'>
          <div className='col-sm-4'>
            <Card className='card-landing-page'>
              <Card.Img
                style={{ maxHeight: "150px", marginTop: "10px" }}
                variant='top'
                src='images/folder.svg'
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
          <div className='col-sm-4'>
            <Card className='card-landing-page'>
              <Card.Img
                style={{ maxHeight: "150px", marginTop: "10px" }}
                variant='top'
                src='images/picture-how-to.svg'
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
          <div className='col-sm-4'>
            <Card className='card-landing-page'>
              <Card.Img
                style={{ maxHeight: "150px", marginTop: "10px" }}
                variant='top'
                src='images/success.svg'
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
      </div>
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

export default HowToUpload;
