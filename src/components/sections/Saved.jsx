import React from 'react'

import Help from '../minisections/Help'
import Social from '../minisections/Social'
import Profile from '../minisections/Profile'
import Terms from '../minisections/Terms'
import SavedJobs from '../minisections/SavedJobs'

const Saved = () => {
    return (
        <>
            <div className="main-dash" style={{height:'90vh'}}>
                 <div className="row">
                      <div className="first-col col-lg-2 col-md-12 col-sm-12 col-xs-12">
                      <p style={{fontSize:12, margin:8, color:"grey"}}>Home/Saved</p>
                          <Help/>
                          <Social/>

                      </div>
                      <div className="second-col col-lg-6 col-md-12 col-sm-12 col-xs-12">
                         <SavedJobs/>
                      </div>
                      <div className="third-col col-lg-3 col-md-12 col-sm-12 col-xs-12">
                         <Profile/>
                         <Terms/>
                      </div>
                 </div>
                
            </div>
        </>
    )
}

export default Saved
