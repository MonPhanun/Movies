import { useState } from 'react';
import './../styles/loadingImage.scss'; // Adjust path based on your CSS file location

const ImageWithSkeleton = ({ src="", alt="", width="", height=""}) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleImageLoad = () => {
    setLoading(false);
    setError(false); // Reset error if image loads after a previous error
    console.log("handleImageLoad")
  };

  const handleImageError = () => {
    setLoading(false);
    setError(true);
    console.log("handleImageError")
  };

  // Combine external classNames with component-specific ones
//   const containerClasses = ['', className].filter(Boolean).join(' ');

  return (
    <div
      className='skeleton-container'
      style={{
        width: width || '100%', // Use prop width, otherwise 100%
        height: height || '200px', // Use prop height, otherwise default
      }}
    >
      {loading && (
        <div className="skeleton-shimmer"></div>
      )}
      {error && !loading && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          color: '#888',
          fontSize: '0.9em'
        }}>
          Error loading image
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        // Conditionally apply class to hide/show image
        className={loading || error ? 'image-hidden' : 'image-loaded'}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default ImageWithSkeleton;