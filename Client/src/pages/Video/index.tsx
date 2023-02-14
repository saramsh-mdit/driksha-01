import React from 'react'
import { useParams } from 'react-router-dom';

const VideoDetails = () => {
    const { id } = useParams();
  return (
    <div>
      <video
        src={`http://localhost:3400/api/stream/${id}`}
        className='max-w-xl w-full h-full border border-solid'
        controls={true}
        crossOrigin='anonymous'
      ></video>
    </div>
  );
}

export default VideoDetails