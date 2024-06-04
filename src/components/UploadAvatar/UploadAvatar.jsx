// src/UploadAvatar.js
import React, { useRef } from 'react';
import { message } from 'antd';

const UploadAvatar = () => {
  const inputRef = useRef(null);

  const handleUploadClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the file upload logic here
      console.log('Selected file:', file);
      message.success(`Selected file: ${file.name}`);
      // For demonstration, we just display a message
    }
  };

  return (
    <div>
      <span
        onClick={handleUploadClick}
        style={{ color: 'blue', textDecoration: 'none', cursor: 'pointer' }}
      >
        Update avatar image
      </span>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadAvatar;
