import React from "react";

const VideoCard = ({ info }) => {
  console.log("info", info);
  if (!info || !info.snippet) {
    return null;
  }
  const { snippet, statistics } = info;
  const { channelTitle, title, description, thumbnails } = snippet;
  return (
    <div className="p-4 m-2 w-80 shadow-xl rounded-lg mx-auto">
      <img className="rounded-lg" src={thumbnails.high.url} />
      <ul>
        <li className="font-bold py-2">{channelTitle}</li>
        <li>{title}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
