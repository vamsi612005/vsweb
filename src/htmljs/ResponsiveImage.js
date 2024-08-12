import React, { useState, useEffect } from 'react';

function ResponsiveImage({ srcLarge, srcSmall, alt }) {
  const [imageUrl, setImageUrl] = useState(srcLarge);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setImageUrl(screenWidth <= 768 ? srcSmall : srcLarge);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [srcLarge, srcSmall]);

  return <img src={imageUrl} class="d-block w-100" alt={alt} />;
}

export default ResponsiveImage;
