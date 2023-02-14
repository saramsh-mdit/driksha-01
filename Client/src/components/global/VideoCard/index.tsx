import React from 'react'
import { Text, Title } from "@mantine/core";
import ReactPlayer from 'react-player/file';
import { Link } from 'react-router-dom';

const VideoCard = (props: any) => {
  return (
      <Link className='w-full' to={`/video/${props?.videoInfo?.filename}`}>
        <div className='flex flex-col gap-1 w-full'>
        <div className='h-40 w-full bg-green-200'></div>
        <Title order={4} className='text-gray-900'>{props?.title}</Title>
        </div>
      </Link>
  );
}

export default VideoCard