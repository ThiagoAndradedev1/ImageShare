import React, { Fragment, useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import imageApiContext from "../../context/api/imageApiContext";
import Spinner from "../../components/layout/Spinner";
import useForm from "../../../src/Form/ModalForm/useForm";
import validate from "../../../src/Form/ModalForm/validateInfo";
toast.configure();

const Images = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    test,
    myImage,
    file,
    // currentImage,
  } = useForm(validate, showUploadModal);
  const [lgShow, setLgShow] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const {
    isLoading,
    imageInfo,
    getAllData,
    connectionErrorMsg,
    deleteImage,
  } = useContext(imageApiContext);

  const handleCloseUploadModal = () => {
    setShowUploadModal(false);
    values.title = "";
    values.description = "";
    errors.title = "";
    errors.description = "";
    errors.fileinput = "";
  };
  const handleShowUploadModal = () => setShowUploadModal(true);

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setInfoModal = (imageInfo) => {
    console.log(imageInfo);
    setModalInfo(imageInfo);
    setLgShow(true);
  };

  const notifyDeleteMsg = () => {
    toast.success("✔️ Imagem deletada com successo...");
  };

  const removeImage = () => {
    deleteImage(modalInfo.imageId);
    notifyDeleteMsg();
    setLgShow(false);
  };

  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#696969" }}>Galeria de Imagens</h1>
        <p>Armazene suas imagens e tenha acesso após o upload completo.</p>
        <Link to='/imageupload'>
          {" "}
          <Button
            // onClick={handleShowUploadModal}
            type='button'
            style={{ backgroundColor: "#6610f2", borderColor: "#6610f2" }}
            className='btn btn-default btn-circle btn-xl'
          >
            +
          </Button>
        </Link>
      </div>
      {/* <Modal show={showUploadModal} onHide={handleCloseUploadModal}>
        <h3
          style={{
            textAlign: "center",
            marginTop: "15px",
            color: "#696969",
            marginBottom: "15px",
          }}
        >
          Adicione Imagem
        </h3>
        <Container> */}
      {/* <Form onSubmit={handleSubmit}>
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
              <Button
                style={{ backgroundColor: "#6610f2", borderColor: "#6610f2" }}
                type='submit'
              >
                Enviar
              </Button>
            </div>
            <Row>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4}>
                <img
                  src={file ? URL.createObjectURL(file) : null}
                  alt={file ? file.name : null}
                />
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
            </Row>
          </Form> */}
      {/* <img
            src={file ? URL.createObjectURL(file) : null}
            alt={file ? file.name : null}
          /> */}
      {/* </Container>
      </Modal> */}
      <Modal
        size='lg'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <h3
          style={{
            textAlign: "center",
            marginTop: "15px",
            color: "#696969",
          }}
        >
          Detalhes da Imagem
        </h3>
        <Modal.Body>
          {" "}
          <section className='section mt-5'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div>
                    {modalInfo && (
                      <img
                        alt='Web Studio'
                        className='img-fluid'
                        src={`http://localhost:5000/images/${modalInfo.imageName}`}
                      />
                    )}
                  </div>
                </div>
                <div className='col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0'>
                  <div>
                    {modalInfo && (
                      <div>
                        <h2
                          style={{
                            color: "#696969",
                            fontSize: "2.0em",
                          }}
                        >
                          {modalInfo.title}
                        </h2>
                        <p className='margin-top-s'>{modalInfo.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "red", borderColor: "red" }}
            variant='primary'
            onClick={() => removeImage()}
          >
            Delete Image
          </Button>
        </Modal.Footer>
      </Modal>
      {isLoading && <Spinner />}
      <div className='container'>
        {connectionErrorMsg && (
          <Alert
            style={{ marginTop: "20px", textAlign: "center" }}
            variant='danger'
          >
            Ocorreu um erro de conexão com nosso banco de dados, atualize a sua
            página.
          </Alert>
        )}
        {imageInfo.length === 0 && !isLoading && (
          <h3 style={{ textAlign: "center", marginTop: "25px" }}>
            Não existe nenhuma imagem para exibir.
          </h3>
        )}
        <div className='img-grid'>
          {imageInfo.length > 0 &&
            !isLoading &&
            imageInfo.map((info) => {
              return (
                <div key={info.imageId} className='img-wrap'>
                  <img
                    onClick={() => setInfoModal(info)}
                    style={{ cursor: "pointer" }}
                    src={`http://localhost:5000/images/${info.imageName}`}
                    alt='123'
                  />
                  <div className='centered'>
                    <h1 style={{ color: "#fff" }}>{info.title}</h1>
                  </div>
                </div>
              );
            })}
          ;
        </div>
      </div>
    </Fragment>
  );
};

export default Images;
