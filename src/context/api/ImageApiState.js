import React, { useState } from "react";
import APIContext from "./imageApiContext";
import axios from "axios";

const ImageApiState = ({ children }) => {
  const [imageInfo, setImageInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [connectionErrorMsg, setConnectionErrorMsg] = useState(false);

  const api = axios.create({ baseURL: "http://localhost:5000/api" });

  const getAllData = async () => {
    setConnectionErrorMsg(false);
    setIsLoading(true);
    try {
      let response = await api.get("/ImageUpload");
      if (response.data.length > 0) {
        setImageInfo(response.data);
      }
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      setConnectionErrorMsg(true);
    }
  };

  const addImage = async (title, description, imageFile) => {
    setIsLoading(true);
    try {
      const fd = new FormData();

      fd.append("title", title);
      fd.append("description", description);
      fd.append("imageFile", imageFile);

      const response = await api.post("/ImageUpload", fd);

      setImageInfo([...imageInfo, response.data]);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  const deleteImage = async (id) => {
    setIsLoading(true);
    try {
      await api.delete(`/imageUpload/${id}`);
      setImageInfo(imageInfo.filter((img) => img.imageId !== id));
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <APIContext.Provider
      value={{
        isLoading,
        imageInfo,
        connectionErrorMsg,
        addImage,
        getAllData,
        deleteImage,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default ImageApiState;
