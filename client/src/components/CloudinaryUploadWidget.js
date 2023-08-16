import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PETS } from "../utils/mutations";
import Button from "@mui/material/Button";

const CloudinaryUploadWidget = ({ refetchPets }) => {
  const [addPets] = useMutation(ADD_PETS);
  //usestate
  // const [imageURL, setImageURL] = useState("");

  const cloudName = "dvz37vq43";
  const uploadPreset = "xawdeukq";

  const shelterId = "64d2dcd0f737eeb85b86fd72";

  const handleImageUpload = async (secureUrl) => {
    try {
      // Save the image URL to state
      // setImageURL(secureUrl);

      // Call the addPets mutation with the image URL
      await addPets({
        variables: {
          image: secureUrl,
          shelterId: shelterId,
        },
      });

      // Refetch the pets so the new pet appears on the page
      refetchPets();

      console.log("Pet added successfully!");
    } catch (error) {
      console.error("Error adding pet:", error);
    }
  };

  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        // console.log("Done! Here is the image info: ", result.info);
        const secureUrl = result.info.secure_url;
        console.log("Done! Here is the image info: ", secureUrl);
        handleImageUpload(secureUrl);
      }
    }
  );

  const addPicture = async (event) => {
    event.preventDefault();
    myWidget.open();
  };

  return (
    <div>
      <Button onClick={addPicture} variant="contained" size="large">
        Add Pets for Adoption
      </Button>
      {/* {imageURL && (
        <div>
          <p>Uploaded Image URL:</p>
          <img src={imageURL} alt="Uploaded Pet" />
        </div>
      )} */}
    </div>
  );
};

export default CloudinaryUploadWidget;
