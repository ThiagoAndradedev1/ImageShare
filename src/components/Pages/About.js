import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const About = () => {
  return (
    <Fragment>
      {/* <svg
        className='wave'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#0099ff'
          fill-opacity='8'
          d='M0,160L6.7,181.3C13.3,203,27,245,40,218.7C53.3,192,67,96,80,58.7C93.3,21,107,43,120,85.3C133.3,128,147,192,160,197.3C173.3,203,187,149,200,154.7C213.3,160,227,224,240,250.7C253.3,277,267,267,280,245.3C293.3,224,307,192,320,197.3C333.3,203,347,245,360,266.7C373.3,288,387,288,400,256C413.3,224,427,160,440,122.7C453.3,85,467,75,480,69.3C493.3,64,507,64,520,69.3C533.3,75,547,85,560,90.7C573.3,96,587,96,600,117.3C613.3,139,627,181,640,202.7C653.3,224,667,224,680,229.3C693.3,235,707,245,720,218.7C733.3,192,747,128,760,133.3C773.3,139,787,213,800,245.3C813.3,277,827,267,840,266.7C853.3,267,867,277,880,277.3C893.3,277,907,267,920,250.7C933.3,235,947,213,960,192C973.3,171,987,149,1000,154.7C1013.3,160,1027,192,1040,213.3C1053.3,235,1067,245,1080,240C1093.3,235,1107,213,1120,218.7C1133.3,224,1147,256,1160,229.3C1173.3,203,1187,117,1200,112C1213.3,107,1227,181,1240,181.3C1253.3,181,1267,107,1280,90.7C1293.3,75,1307,117,1320,144C1333.3,171,1347,181,1360,192C1373.3,203,1387,213,1400,192C1413.3,171,1427,117,1433,90.7L1440,64L1440,0L1433.3,0C1426.7,0,1413,0,1400,0C1386.7,0,1373,0,1360,0C1346.7,0,1333,0,1320,0C1306.7,0,1293,0,1280,0C1266.7,0,1253,0,1240,0C1226.7,0,1213,0,1200,0C1186.7,0,1173,0,1160,0C1146.7,0,1133,0,1120,0C1106.7,0,1093,0,1080,0C1066.7,0,1053,0,1040,0C1026.7,0,1013,0,1000,0C986.7,0,973,0,960,0C946.7,0,933,0,920,0C906.7,0,893,0,880,0C866.7,0,853,0,840,0C826.7,0,813,0,800,0C786.7,0,773,0,760,0C746.7,0,733,0,720,0C706.7,0,693,0,680,0C666.7,0,653,0,640,0C626.7,0,613,0,600,0C586.7,0,573,0,560,0C546.7,0,533,0,520,0C506.7,0,493,0,480,0C466.7,0,453,0,440,0C426.7,0,413,0,400,0C386.7,0,373,0,360,0C346.7,0,333,0,320,0C306.7,0,293,0,280,0C266.7,0,253,0,240,0C226.7,0,213,0,200,0C186.7,0,173,0,160,0C146.7,0,133,0,120,0C106.7,0,93,0,80,0C66.7,0,53,0,40,0C26.7,0,13,0,7,0L0,0Z'
        ></path>
      </svg> */}
      {/* <div
        style={{
          minHeight: "500px",
          textAlign: "center",
        }}
        className='about-background-img'
      ></div> */}
      {/* <h3 style={{ textAlign: "center", marginTop: "15px" }}>About Me</h3> */}
      <section className='section mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div>
                <img
                  alt='Web Studio'
                  className='img-fluid'
                  src='images/about-png.svg'
                />
              </div>
            </div>
            <div className='col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0'>
              <div>
                <h2
                  style={{
                    color: "#696969",
                    fontSize: "2.0em",
                    textTransform: "uppercase",
                  }}
                >
                  About Me
                </h2>
                <p className='margin-top-s'>
                  Whether you’re a full stack web developer, content author, or
                  business professional – Solodev gives you the power to build,
                  customize, and manage modules to boost your website.
                </p>
                <Button
                  style={{
                    marginBottom: "25px",
                    display: "block",
                  }}
                  className='btn-landing-page'
                  variant='primary'
                >
                  GITHUB
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <svg
        className='wave'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#6610f2'
          fillOpacity='1'
          d='M0,128L48,106.7C96,85,192,43,288,42.7C384,43,480,85,576,128C672,171,768,213,864,208C960,203,1056,149,1152,112C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg> */}
    </Fragment>
  );
};

export default About;
