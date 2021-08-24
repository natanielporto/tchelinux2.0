import React from 'react';

interface VideoProps {
  video: {
  id: string;
  name: string;
  description: string;
  clip: string;
  }
}

const youtubeVideo = ({ video }): VideoProps => {
  const {
    id, name, description, clip,
  } = video;

  return (
    <div key={id}>
      <h1>{name}</h1>
      <h3>{description}</h3>
      <h3>{clip}</h3>
    </div>
  );
};

export default youtubeVideo;
