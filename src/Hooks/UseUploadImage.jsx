import { useState } from "react";

export const useUploadImage = () => {
  let username = window.localStorage.getItem("user");
  const [selectedImage, setSelectedImage] = useState(false);
  const [statusImage, setStatusImage] = useState(false);

  const handleSendPhoto = (e) => {
    e.preventDefault();
    if (selectedImage) {
      const data = {
        image: selectedImage,
      };

      let dataFetch = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      setStatusImage('Se esta procesando la imagen')
      fetch(`http://localhost:6655/Upload/?username=${username}`, dataFetch)
        .then((response) => response.text())
        .then((data) => {
          setStatusImage(data);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleChangePhoto = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const base64Data = e.target.result;
      setSelectedImage(base64Data);
    };

    reader.readAsDataURL(imageFile);
  };

  return { handleChangePhoto, handleSendPhoto, selectedImage, statusImage };
};
