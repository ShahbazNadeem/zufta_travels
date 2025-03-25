import React from 'react'

const Video = ({ src }) => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <video
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

    )
}

export default Video