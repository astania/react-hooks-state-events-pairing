import React from 'react'

function Comment({ key, user, comment }) {
    return (
        <div key={key}>
            <h5>{user}</h5>
            <p>{comment}</p>
        </div>
        )

}


export default Comment