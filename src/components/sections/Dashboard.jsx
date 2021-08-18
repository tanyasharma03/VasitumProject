import React from 'react'

import Help from '../minisections/Help'
import Social from '../minisections/Social'
import Profile from '../minisections/Profile'
import Terms from '../minisections/Terms'

const Dashboard = () => {

    return (
        <>
            <div className="main-dash">
                <div className="first-col">
                    <Help/>
                    <Social/>
                </div>
                <div className="second-col">
                    <h1>hello</h1>
                </div>
                <div className="third-col">
                   <Profile/>
                   <div className="profile-info">
                       <div>
                       <p>Basics Details</p>
                       <p>Profile Picture</p>
                       <p>Skills</p>
                       <p>Experience</p>
                       <p>Education</p>
                       <p>Certification</p>
                       <p>Others</p>
                       <p>Mobile No.</p>
                       </div>
                       <div className="span">
                           <p>+Add</p>
                           <p>+Add</p>
                           <p>+Add</p>
                           <p>+Add</p>
                           <p>+Add</p>
                           <p>+Add</p>
                           <p>+Add</p>
                           <p>+Add</p>
                       </div>
                       
                   </div>
                   <div className="resume">
                       <h4>Resume not uploaded</h4>
                       <p>Attach your resume and increase your chance of getting shortlisted</p>
                       <input type="file" className="custom-file-input" />
                       <p>Supported Formats: doc, docx, pdf, rtf</p>
                       <p style={{marginBottom:10}}>Max file size: 3 MB</p>
                   </div>
                   <Terms/>
                </div>
            </div>
        </>
    )
}

export default Dashboard
