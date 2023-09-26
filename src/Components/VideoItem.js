import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <div className="video-thumbnail">
        <img alt={video.snippet.title} className="sidevideo ui image" src={video.snippet.thumbnails.medium.url} />
      </div>
      <div className="video-content">
        <div className="video-title">{video.snippet.title}</div>
        <div className="video-channel">{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
}

export default VideoItem;
