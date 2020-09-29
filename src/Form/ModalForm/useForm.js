import { useState, useContext, useRef } from "react";
import imageApiContext from "../../../src/context/api/imageApiContext";
import { useHistory } from "react-router-dom";

const useForm = (validate, setShowUploadModal) => {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });
  const [file, setFile] = useState(null);

  const myImage = useRef(undefined);

  const { addImage } = useContext(imageApiContext);

  const history = useHistory();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "fileinput") {
      setFile(e.target.files[0]);
    } else {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const image = myImage.current.files[0];
    const errorsInside = validate(values, image);
    setErrors(errorsInside);
    if (Object.keys(errorsInside).length === 0) {
      addImage(values.title, values.description, image);
      history.push("/images");
    }
  };

  return { handleChange, values, handleSubmit, errors, myImage, file };
};

export default useForm;
