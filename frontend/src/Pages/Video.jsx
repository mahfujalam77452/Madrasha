import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import VideoCard from '../Components/VideoCard/VideoCard';
import './CSS/Video.css'
const Video = () => {
  const {videoinfo} = useContext(DataContext);
  
  return (
    <div className='video-page'>
      <div className="video-container">
          {
            videoinfo.map(
              (item,i) => {
                
                return <VideoCard videolink = {item.videoLink} description = {item.description} key={i} />
              }
            )
          }
      </div>
    </div>
  )
}

export default Video
