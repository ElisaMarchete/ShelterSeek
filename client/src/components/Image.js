import React, { useState } from 'react';

const ImageUpload = (updateUrl) => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [formData, setFormData] = useState({image :(null)});

  const handleFileChange = (event) => {
    setFormData({image: event.target.files[0]});
    handleUpload();
  }


  const handleUpload = async () => {
    if (!formData.image) {
      console.log('No file selected');
      return;
    }
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('image', formData.image);
  
      const response = await fetch('http://localhost:3001/getimg', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.ok) {
        const responseData = await response.json(); // Parse the JSON response
        console.log('Image uploaded successfully:', responseData.imageUrl);
        setUploadedImageUrl(responseData.imageUrl); // Store the image URL
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
      <input type="file" accept="image/*" name = "image" onChange={handleFileChange} />

      {uploadedImageUrl && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={uploadedImageUrl} alt="Uploaded" style={{ maxWidth: '200px' }} />
        </div>
      )}
    </div>
  );
};
export default ImageUpload;








