import React, { Fragment, useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import validate from "../../../src/Form/ModalForm/validateInfo";
import useForm from "../../../src/Form/ModalForm/useForm";
import imageApiContext from "../../context/api/imageApiContext";
import Spinner from "../../components/layout/Spinner";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const ImageUpload = () => {
  const { handleChange, values, handleSubmit, errors, myImage, file } = useForm(
    validate
  );

  const { isLoading, successMsg, setSuccessMsg } = useContext(imageApiContext);

  useEffect(() => {
    setSuccessMsg(false);
  }, [setSuccessMsg]);

  return (
    <Fragment>
      <Container>
        {isLoading && <Spinner />}
        {!isLoading && (
          <div style={{ marginBottom: "85px", marginTop: "70px" }}>
            <h1
              style={{
                textTransform: "uppercase",
                fontWeight: "700",
                letterSpacing: "1px",
                textAlign: "center",
                marginBottom: "35px",
              }}
            >
              <span style={{ color: "black" }}>Upload de </span>
              <span style={{ color: "#C253FE" }}>Imagem</span>
            </h1>
            {successMsg && (
              <Alert
                style={{
                  textAlign: "center",
                  marginBottom: "35px",
                }}
                variant='success'
              >
                Imagem adicionada com sucesso ! Acesse as{" "}
                <Link to='/images'>imagens.</Link>
              </Alert>

              // <h4
              //   style={{
              //     textAlign: "center",
              //     marginBottom: "35px",
              //   }}
              // >
              //   <span style={{ color: "black" }}>Imagem adicionada com </span>
              //   <span style={{ color: "	#32CD32" }}>sucesso ! </span>
              //   <span style={{ color: "black" }}>
              //     Acesse as <Link to='/images'>imagens.</Link>
              //   </span>
              // </h4>
            )}
            <div className='row'>
              <div className='col-lg-6 c d-flex justify-content-center'>
                <div>
                  <img
                    style={{
                      minHeight: "250px",
                      maxWidth: "450px",
                      maxHeight: "600px",
                    }}
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : "https://fronteimoveis.com.br/wp-content/themes/fronte-theme/assets/img/placeholder-header.jpg"
                    }
                    className='img-fluid img-upload'
                    alt={file ? file.name : null}
                  />
                </div>
              </div>
              <div className='col-lg-6 align-items-center'>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      name='title'
                      value={values.title}
                      onChange={handleChange}
                      type='text'
                      placeholder='Titulo'
                    />
                  </Form.Group>
                  {errors.title && (
                    <p style={{ textAlign: "center", color: "red" }}>
                      {errors.title}
                    </p>
                  )}
                  <Form.Group controlId='exampleForm.ControlTextarea1'>
                    <Form.Control
                      value={values.description}
                      onChange={handleChange}
                      name='description'
                      placeholder='Descrição'
                      type='text'
                      as='textarea'
                      rows='3'
                    />
                  </Form.Group>
                  {errors.description && (
                    <p style={{ textAlign: "center", color: "red" }}>
                      {errors.description}
                    </p>
                  )}
                  <div className='mb-3'>
                    <Form.File id='formcheck-api-regular'>
                      <Form.File.Label>Regular file input</Form.File.Label>
                      <Form.File.Input
                        onChange={handleChange}
                        name='fileinput'
                        type='file'
                        ref={myImage}
                      />
                    </Form.File>
                    {errors.fileinput && (
                      <p
                        style={{
                          textAlign: "center",
                          color: "red",
                          marginTop: "10px",
                        }}
                      >
                        {errors.fileinput}
                      </p>
                    )}
                  </div>
                  <div className='mb-3 text-center'>
                    {/* <Link to='/images'> */}{" "}
                    <Button
                      style={{
                        backgroundColor: " black",
                        borderColor: " black",
                      }}
                      type='submit'
                    >
                      Enviar
                    </Button>
                    {/* </Link> */}
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Fragment>
  );
};

export default ImageUpload;
