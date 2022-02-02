import React from 'react'

function VideoData({views, createdAt, upvotes, downvotes}){
    return(
        <div>
        <p>{views} views | uploaded on {createdAt}</p>
        <button>{upvotes}👍</button>
        <button>{downvotes}👎</button>

        </div>

    )

}

export default VideoData