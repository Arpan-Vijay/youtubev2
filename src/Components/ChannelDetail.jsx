import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from '../Components'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  // console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`) //URL for getting a particular channel ID
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`) //URL for getting the videos of the channel by lastest order
      .then((data) => setVideos(data?.items))
  }, [id])



  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            zIndex: 10,
            height: '300px',
            backgroundColor: '#4158D0',
            backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'

          }}
        />

        <ChannelCard channelDetail={channelDetail} marginTop='-93px' />
      </Box>
      <Box display='flex' padding='2px'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
