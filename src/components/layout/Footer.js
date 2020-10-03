import React from "react";

const Footer = () => {
  return (
    <footer className='page-footer font-small blue'>
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
    </footer>
  );
};

export default Footer;
