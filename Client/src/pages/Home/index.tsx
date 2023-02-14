import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Loader, Text, Title } from '@mantine/core';
import VideoCard from '../../components/global/VideoCard';
import Search from '../../components/forms/Search';


const getVideos = () => axios.get('http://localhost:3400/api/video/live');

const Home = () => {

  const { isLoading, isError, data } = useQuery({
    queryKey: ['videos'],
    queryFn: getVideos,
  });

//   if (isLoading) return (<div className='flex gap-4 justify-center mx-auto mt-8 max-w-md w-full'>
//     <Loader variant='bars' size="sm" />
//     <Text>Loading</Text>
//   </div>)
// if (isError)
//   return (
//     <div className='flex gap-4 justify-center mx-auto mt-8 max-w-md w-full'>
//       <Text className='text-red-400'>Something Went Wrong.</Text>
//     </div>
//   );

  return (
    <div className='grid w-full px-10 py-20'>
      <Title order={2} className='text-center'>Search Videos</Title>
      <Search />
      {/* <div className='grid gap-4 gap-y-8 max-w-3xl w-full md:grid-cols-2 lg:grid-cols-3'>
        {data?.data?.data?.map((item: any) => {
          return <VideoCard key={ item._id} {...item} />;
        })}
      </div> */}
    </div>
  );
};

export default Home;
