import React from 'react'

export default function ErrorScreen(props) {
    
    return (
        <div>
            <h1>
                there is an error here
            </h1>
            <p id="error_message">
                {props.error}
            </p>
        </div>
    )
}
