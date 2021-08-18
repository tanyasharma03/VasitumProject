import React from 'react'
import img from "../../images/userIcon.svg"

const Profile = () => {
    return (
        <>
                <div className="profile-icon">
                    <div style={{height:112, backgroundColor:"#7C83FD"}}></div>
                    <div>
                        <div style={{backgroundColor:"#DDDDDD",position:'relative',width:100, height:100, borderRadius:"100%", marginLeft:90, marginTop:-60}}>
                        <img src={img} alt="usericon" />
                        </div>
                        <h4>Tanya Sharma</h4>
                        <p>tasu2612@gmail.com</p>
                        <p style={{color:"gray", marginBottom:30}}>Your profile is 10% complete</p>
                    </div>
                </div>
        </>
    )
}

export default Profile
