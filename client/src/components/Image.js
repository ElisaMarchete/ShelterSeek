import React, { useState, useRef } from 'react';
import { Button, Typography, Paper } from '@mui/material';

const ImageUpload = ({ updateUrl }) => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = async () => {
    const selectedFile = fileInputRef.current.files[0];

    if (!selectedFile) {
      console.log('No file selected');
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('image', selectedFile);

      const response = await fetch('http://localhost:3001/getimg', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Image uploaded successfully:', responseData.imageUrl);
        setUploadedImageUrl(responseData.imageUrl);
        updateUrl(responseData.imageUrl);
      } else {
        console.error('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
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
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </Button>

      {uploadedImageUrl && (
        <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
          <Typography variant="h6">Uploaded Image:</Typography>
          <img
            src={uploadedImageUrl}
            alt="Uploaded"
            style={{ maxWidth: '200px', marginTop: '8px' }}
          />
        </Paper>
      )}
    </div>
  );
};

/*
  const [imageUrl, setImageUrl] = useState('');

  const handleUpdateUrl = (newImageUrl) => {
    setImageUrl(newImageUrl);
  };*/

export default ImageUpload;




