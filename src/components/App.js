import React, { useState } from 'react'
import video from "../data/video.js";
import VideoPlayer from "./VideoPlayer"
import VideoData from "./VideoData"
import CommentSection from "./CommentSection"

function App() {
 const[videoInfo, setVideoInfo] = useState(video)

 console.log(videoInfo.embedUrl)
  return (
    <div className="App">
      
      <VideoPlayer url={videoInfo.embedUrl} title={videoInfo.title}/>
      <VideoData 
      views={videoInfo.views} 
      createdAt={videoInfo.createdAt}
      upvotes={videoInfo.upvotes}
      downvotes={videoInfo.downvotes}
      />
      <CommentSection comments={videoInfo.comments}/>

    </div>
  );
}

export default App;
