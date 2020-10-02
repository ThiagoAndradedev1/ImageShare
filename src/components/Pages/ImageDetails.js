import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ImageDetails = () => {
  let { imageId } = useParams();

  useEffect(() => {
    console.log(imageId);
  }, [imageId]);

  return (
    <div style={{ textAlign: "center" }} className='container'>
      <h1>hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        voluptatem nobis ut necessitatibus sint sequi rerum aperiam, mollitia
        quae laudantium, deleniti voluptatibus esse harum temporibus in dolor
        quas, dolore eius?
      </p>
      <img
        // style={{
        //   minHeight: "250px",
        //   maxWidth: "450px",
        //   maxHeight: "600px",
        // }}
        className='img-fluid img-upload'
        src='https://fronteimoveis.com.br/wp-content/themes/fronte-theme/assets/img/placeholder-header.jpg'
        alt=''
      />
    </div>
  );
};

export default ImageDetails;
