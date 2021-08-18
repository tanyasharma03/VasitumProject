import React from 'react'
import fb from "../../images/facebook.svg"
import insta from "../../images/insta.svg"
import linkedin from "../../images/linkedin.svg"
import youtube from "../../images/youtube.svg"
import twitter from "../../images/twitter.svg"

const Social = () => {
    return (
        <>
            <div className="second-row">
                <h3>Follow Vasitum on Social Media</h3>
                <hr/>
                <div className="social-icons">
                <img src={fb} alt="logo"/>
                <img src={insta} alt="insta" />
                <img src={linkedin} alt="linkedin" />
                <img src={youtube} alt="youtube" />
                <img src={twitter} alt="twitter" />
                </div>
            </div>
        </>
    )
}

export default Social
