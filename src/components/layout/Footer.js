import React, { Fragment, useContext } from "react";
import imageApiContext from "../../context/api/imageApiContext";

const Footer = () => {
  const { isLoading } = useContext(imageApiContext);


  return (
    <Fragment>
      {!isLoading && <footer className='page-footer font-small blue'>
      <div className='footer-copyright text-center py-3'>
        © 2020 Copyright:{" "}
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
      </div>
    </footer>}
    </Fragment>
  );
};

export default Footer;
