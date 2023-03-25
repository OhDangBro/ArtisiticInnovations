import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const ImageWithLoading = ({ src, alt, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      {isLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <CircularProgress />
        </div>
      )}
      <img
        {...props}
        src={`${src}?t=${Date.now()}`}
        alt={alt}
        onLoad={handleImageLoad}
        style={isLoading ? { display: 'none' } : {}}
      />
    </div>
  );
};

export default ImageWithLoading;
