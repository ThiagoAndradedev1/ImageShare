import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

const Images = () => {
  return (
    <Fragment>
      <div style={{ textAlign: "center", marginTop: "110px" }}>
        <h1>Galeria de Imagens</h1>
        <p>Armazene suas imagens e tenha acesso após o upload completo.</p>
        <button type='button' className='btn btn-default btn-circle btn-xl'>
          +
        </button>
      </div>
    </Fragment>
  );
};

export default Images;
