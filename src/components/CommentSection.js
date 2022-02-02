import React, { useState } from 'react'
import Comment from './Comment'

function CommentSection({ comments }) {
    const [isCommentShown, toggleShowComment] = useState(true)

    const toggleComments = () => {
        let showComment = !isCommentShown
        toggleShowComment(showComment)
        console.log(showComment)
    }

    return (
        <div>
            <button onClick={toggleComments}>{isCommentShown ? 'Hide Comments' : 'Show Comments'}</button>
            <h3>{comments.length} Comments</h3>
            {isCommentShown ? comments.map(comment => <Comment key={comment.id} user={comment.user} comment={comment.comment} />) : null}
        </div>
    )


}

export default CommentSection