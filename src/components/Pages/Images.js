import React, { Fragment, useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import imageApiContext from "../../context/api/imageApiContext";
import Spinner from "../../components/layout/Spinner";
import useForm from "../../../src/Form/ModalForm/useForm";
import validate from "../../../src/Form/ModalForm/validateInfo";
toast.configure();

const Images = () => {
  const [lgShow, setLgShow] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const {
    isLoading,
    imageInfo,
    getAllData,
    connectionErrorMsg,
    deleteImage,
  } = useContext(imageApiContext);

  // const handleCloseUploadModal = () => {
  //   setShowUploadModal(false);
  //   values.title = "";
  //   values.description = "";
  //   errors.title = "";
  //   errors.description = "";
  //   errors.fileinput = "";
  // };
  // const handleShowUploadModal = () => setShowUploadModal(true);

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
        <h1
          style={{
            textTransform: "uppercase",
            fontWeight: "700",
            letterSpacing: "1px",
            textAlign: "center",
            marginBottom: "35px",
            marginTop: "25px",
          }}
        >
          <span style={{ color: "black" }}>Galeria de </span>
          <span style={{ color: "#C253FE" }}>Imagens</span>
        </h1>

        <p>Armazene suas imagens e tenha acesso após o upload completo.</p>
        <Link to='/imageupload'>
          {" "}
          <Button
            type='button'
            style={{ backgroundColor: "#c253fe", borderColor: "#c253fe" }}
            className='btn btn-default btn-add-style'
          >
            +
          </Button>
        </Link>
      </div>
      <Modal
        size='lg'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <h3
          style={{
            textTransform: "uppercase",
            fontWeight: "700",
            letterSpacing: "1px",
            textAlign: "center",
            marginBottom: "35px",
            marginTop: "25px",
          }}
        >
          <span style={{ color: "black" }}>Detalhes da </span>
          <span style={{ color: "#C253FE" }}>Imagem</span>
        </h3>
        <Modal.Body style={{ wordBreak: "break-all" }}>
          {" "}
          <div className='container'>
            <div className='row'>
              <div className='col-sm  d-flex justify-content-center'>
                {modalInfo && (
                  <img
                    alt='img'
                    src={`http://localhost:5000/images/${modalInfo.imageName}`}
                    className='img-fluid img-upload'
                  />
                )}
              </div>

              <div className='col-sm'>
                {modalInfo && (
                  <div>
                    <h2
                      style={{
                        color: "#696969",
                        textAlign: "center",
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
        {imageInfo.length === 0 && !isLoading && !connectionErrorMsg && (
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
