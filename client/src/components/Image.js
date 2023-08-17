import React, { useState, useRef, useEffect } from "react";
import { Button, Typography, Paper } from "@mui/material";
import Container from "@mui/material/Container";

const ImageUpload = ({ updateUrl, initialImage }) => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    setUploadedImageUrl(initialImage);
  }, [initialImage]);

  const handleFileChange = async () => {
    const selectedFile = fileInputRef.current.files[0];

    if (!selectedFile) {
      console.log("No file selected");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", selectedFile);

      const response = await fetch("/getimg", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Image uploaded successfully:", responseData.imageUrl);
        setUploadedImageUrl(responseData.imageUrl);
        updateUrl(responseData.imageUrl);
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Container>
      {uploadedImageUrl && (
        <Paper elevation={3} style={{ padding: "16px", marginTop: "16px" }}>
          <img
            src={uploadedImageUrl}
            alt="Uploaded"
            style={{ minWidth: "400px", maxWidth: "400px", marginTop: "8px" }}
          />
        </Paper>
      )}
      <Button component="label" variant="contained" color="primary">
        Upload Image
        <input
          type="file"
          accept="image/*"
          name="image"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </Button>
    </Container>
  );
};

export default ImageUpload;
