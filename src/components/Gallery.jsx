import { useState } from 'react';

const GalleryImage = ({ src, alt }) => {
  const [errored, setErrored] = useState(false);
  return errored ? (
    <div
      role="img"
      aria-label={`Placeholder for ${alt}`}
      style={{
        height: '320px',
        borderRadius: '14px',
        background: 'linear-gradient(135deg, rgba(197,165,114,0.2), rgba(15,15,16,0.8))',
        display: 'grid',
        placeItems: 'center',
        color: 'var(--color-muted)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
      }}
    >
      Image unavailable
    </div>
  ) : (
    <img src={src} alt={alt} loading="lazy" onError={() => setErrored(true)} />
  );
};

const Gallery = ({ images = [], title }) => {
  if (!images.length) return null;
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <GalleryImage key={src + index} src={src} alt={`${title} photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default Gallery;
