import React from 'react'

import Help from '../minisections/Help'
import Social from '../minisections/Social'
import Profile from '../minisections/Profile'
import Terms from '../minisections/Terms'
import Updates from '../minisections/dashBody/Updates'

const Dashboard = () => {

    return (
        <>
            <div className="main-dash">
                <div className="row">
                <div className="first-col col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <Help/>
                    <Social/>
                </div>
                <div className="second-col col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <p style={{fontFamily:'sans-serif'}}>👋 The secret to getting head is getting started.</p>
                    <Updates/>
                </div>
                <div className="third-col col-lg-3 col-md-12 col-sm-12 col-xs-12">
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
            </div>
        </>
    )
}

export default Dashboard
