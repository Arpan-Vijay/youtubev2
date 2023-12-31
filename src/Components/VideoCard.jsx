import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../utils/constant'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { xs:'100%',md: '320px'}, boxShadow: 'none', borderRadius: 0 }}>

            {/* Individual Video Image Rendering */}
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: '100%', height: '180px' }}
                />
            </Link>


            {/* Video Details Card : Video Name and channel name  */}
            <CardContent
                sx={{ backgroundColor: '#1e1e1e', height: '106px' }}
            >

                {/* Video Name Typography */}
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                        {snippet?.title.slice(0, 60)}
                    </Typography>
                </Link>

                {/* Channel Name Typography */}
                <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle
                            sx={{ fontSize: 12, color: 'gray', marginLeft: '5px' }}
                        />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard

