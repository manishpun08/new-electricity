import React from "react";
import VideoCard from "./partials/VideoCard";
import ErrorMessage from "@/components/ErrorMessage";
import { getVideoData } from "./hooks/getVideoData";

const VideoGallery = async () => {
  try {
    const { videoData } = await getVideoData();

    return (
      <div className="padding-x my-10">
        <VideoCard videoData={videoData?.data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching video data:", error);
    return <ErrorMessage errorMessage="video data" />;
  }
};

export default VideoGallery;
