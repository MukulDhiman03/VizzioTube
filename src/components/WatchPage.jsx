import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu, toggleMenu } from "../../utils/appSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  //   console.log("Video ID:", videoId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  });

  //   useEffect(() => {
  //     fetchData();
  //   });
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  //         videoId +
  //         "&key=" +
  //         import.meta.env.VITE_GOOGLE_API_KEY
  //     );
  //     const data = await res.json();
  //     console.log("Data is ", data);
  //   };
  return (
    <div className="flex flex-col">
      <div className="px-5">
        <div
        >
          <iframe
            width="1260"
            height="600"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div></div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
