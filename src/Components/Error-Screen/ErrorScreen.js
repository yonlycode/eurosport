import React from 'react'

export default function ErrorScreen({error,...props}) {
    
    return (
        <div>
            <h1>
                there is an error here
            </h1>
            <p id="error_message">
                {error}
            </p>
        </div>
    )
}
