import React, { Fragment, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <Navbar className='nav-test' bg='light' expand='lg'>
        <Navbar.Brand href='#home'>
          <h3
            style={{
              fontSize: "1em",
              textTransform: "uppercase",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            <span style={{ color: "#383838" }}>Image</span>
            <span style={{ color: "#C253FE" }}>Share</span>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link className='nav-items-test' as={Link} to='/landingpage'>
              Home
            </Nav.Link>
            <Nav.Link
              className='nav-items-test'
              as={Link}
              to='/images'
              eventKey={2}
            >
              Images
            </Nav.Link>
            <Nav.Link
              className='nav-items-test'
              as={Link}
              to='/imageupload'
              eventKey={2}
            >
              Upload
            </Nav.Link>
            <Nav.Link
              className='nav-items-test'
              href='https://github.com/ThiagoAndradedev1'
              eventKey={2}
            >
              Github
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Header;
