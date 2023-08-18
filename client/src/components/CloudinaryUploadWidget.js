import React, { useRef } from "react";
import { Button } from "@mui/material";
import { ADD_PETS } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const ImageUpload = ({ refetchPets, shelterId }) => {
  const fileInputRef = useRef(null);
  const [addPets] = useMutation(ADD_PETS);

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
        await addPets({
          variables: {
            image: responseData.imageUrl,
            shelterId: shelterId,
          },
        });
        refetchPets();
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default ImageUpload;
