import React, { Fragment, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <Fragment>
      <div>
        <Navbar className='bootstrap-navbar' variant='light'>
          <Navbar.Brand href='#home'>
            <h6
              className='logo-bootstrap-navbar'
              style={{
                fontSize: "1em",
                textTransform: "uppercase",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              <span style={{ color: "	#696969" }}>Image</span>
              <span style={{ color: "#6610f2" }}>Share</span>
            </h6>
          </Navbar.Brand>
          <div
            style={{ color: "black" }}
            onClick={() => setToggleActive(!toggleActive)}
            className={toggleActive ? "toggleMenu active" : "toggleMenu"}
          ></div>
          <ul className={toggleActive ? "navigation active" : "navigation"}>
            <Navbar.Brand>
              <Nav.Link className='navbar-items' as={Link} to='/landingpage'>
                Home
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Nav.Link className='navbar-items' as={Link} to='/images'>
                Images
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Nav.Link className='navbar-items' as={Link} to='/about'>
                About
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Nav.Link className='navbar-items' as={Link} to='/contact'>
                Contact
              </Nav.Link>
            </Navbar.Brand>
          </ul>
        </Navbar>
      </div>
    </Fragment>
  );
};

export default Header;
