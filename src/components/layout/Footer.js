import React from "react";

const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <div className='left-col'>
          <h6
            className='logo-bootstrap-navbar'
            style={{
              fontSize: "1em",
              textTransform: "uppercase",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            <span style={{ color: "#696969" }}>Image</span>
            <span style={{ color: "#6610f2" }}>Share</span>
          </h6>
          <p className='right-text'>
            © 2020 Created By DarkCode All Rights Reserved
          </p>
        </div>
        <div className='right-col'>
          <h1>Nossa Caixa de Entrada</h1>
          <div className='border'></div>
          <p>Cadastre-se e receba notícias e atualizações diariamente.</p>
          <form action='' className='newsletter form'>
            <input
              type='text'
              className='txt'
              placeholder='Digite o seu Email'
            />
            <input type='submit' className='btn' value='submit' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
