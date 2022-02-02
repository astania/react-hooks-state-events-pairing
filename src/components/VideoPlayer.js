import React from 'react'


function VideoPlayer({ url, title }) {
    return (
        <div>
            <iframe
                width="459"
                height="262"
                src={url}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            {/* <VideoData views={views} createdAt={createdAt} upvotes={upvotes} downvotes={downvotes}/> */}
        </div>
    )
    //     

}

export default VideoPlayer