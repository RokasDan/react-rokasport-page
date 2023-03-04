import React from 'react';

function VideoComponent({ src }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%'}}>
      <iframe
        src={src}
        title="Video"
        frameBorder="0"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default VideoComponent;
