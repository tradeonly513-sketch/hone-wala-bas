import React from 'react'
import VideoCard from './VideoCard'

const VideoGrid = ({ videos, gridCols, aspectRatio }) => {
  return (
    <div className={`grid ${gridCols} gap-8 lg:gap-12`}>
      {videos.map((video, index) => (
        <VideoCard 
          key={index}
          videoId={video.videoId}
          aspectRatio={aspectRatio}
          index={index}
        />
      ))}
    </div>
  )
}

export default VideoGrid