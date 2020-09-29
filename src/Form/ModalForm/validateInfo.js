import React from "react";

const validateInfo = (values, image) => {
  let errors = {};

  if (!values.title) {
    errors.title = "Você precisa escolher um título para a imagem.";
  } else if (values.title.length > 15) {
    errors.title = "Você chegou ao limite de caracteres para o título.";
  }

  if (!values.description) {
    errors.description = "Você precisa escrever uma descrição para a imagem.";
  } else if (values.description.length > 100) {
    errors.description =
      "Você chegou ao limite de caracteres para a descrição.";
  } else if (values.description.length < 1) {
    errors.description = "Você precisa escrever no mínimo 50 caracteres";
  }

  if (!image) {
    errors.fileinput = "Você precisa selecionar uma imagem.";
  }

  return errors;
};

export default validateInfo;