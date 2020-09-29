import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import validate from "../../../src/Form/ModalForm/validateInfo";
import useForm from "../../../src/Form/ModalForm/useForm";
import { CardDeck } from "react-bootstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ImageUpload = () => {
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    test,
    myImage,
    file,
    // currentImage,
  } = useForm(validate);

  return (
    <Fragment>
      <Container>
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <h3 style={{ textAlign: "center", marginTop: "15px" }}>
            Adicione Imagens
          </h3>
          <Card.Body>
            <div style={{ marginBottom: "85px" }} className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div>
                    {/* <img
                      alt='Web Studio'
                      className='img-fluid'
                      src='https://fronteimoveis.com.br/wp-content/themes/fronte-theme/assets/img/placeholder-header.jpg'
                    /> */}
                    <img
                      src={
                        file
                          ? URL.createObjectURL(file)
                          : "https://fronteimoveis.com.br/wp-content/themes/fronte-theme/assets/img/placeholder-header.jpg"
                      }
                      className='img-fluid'
                      alt={file ? file.name : null}
                    />
                  </div>
                </div>
                <div className='col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0'>
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
                          backgroundColor: "#6610f2",
                          borderColor: "#6610f2",
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
          </Card.Body>
        </Card>
      </Container>
    </Fragment>
  );
};

export default ImageUpload;
