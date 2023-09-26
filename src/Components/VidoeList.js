import React from 'react';
import VideoItem from './VideoItem';
import './Videolist.css';

const VideoList = ({ videos, onVideoSelect }) => {
  const RenderStage = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return (
    <div className="video-list">
      <h4 className="video-list-title">Up Next</h4>
      <div className="video-list-items">{RenderStage}</div>
    </div>
  );
};

export default VideoList;
