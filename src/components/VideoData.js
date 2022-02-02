import React, { useState } from 'react'


function VideoData({ views, createdAt, upvotes, downvotes }) {
    const [upVoteCount, addOneUpVote] = useState(upvotes)
    const [downVoteCount, addOneDownVote] = useState(downvotes)

    const handleUpVote = () => {
        const plusOneVote = upVoteCount + 1
        addOneUpVote(plusOneVote)
    }

    const handleDownVote = (event) => {
        const plusOneVote = downVoteCount + 1
            addOneDownVote(plusOneVote)

    }

    return (
        <div>
            <p>{views} views | uploaded on {createdAt}</p>
            <button onClick={handleUpVote} >{upVoteCount}👍</button>
            <button onClick={handleDownVote}>{downVoteCount}👎</button>

        </div>

    )

}

export default VideoData