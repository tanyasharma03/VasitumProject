import React from 'react'
import resume from "../../../images/resume.png"

const Updates = () => {
    return (
        <>
            <div className="updates">
                <p>Updates for you</p>
                <div className="update-resume">
                    <img src={resume} alt="resume" />
                </div>
            </div>
        </>
    )
}

export default Updates
