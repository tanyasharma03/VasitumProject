import React,{useState} from 'react'

import Help from '../minisections/Help'
import Social from '../minisections/Social'
import Profile from '../minisections/Profile'
import Terms from '../minisections/Terms'
import { NavLink } from 'react-router-dom'


import img1 from "../../images/save-job-web.svg"
import img2 from "../../images/Yet-to-screen-web.svg"
import img3 from "../../images/Shortlisted-Interview-web.svg"
import img4 from "../../images/offered-web.svg"
import img5 from "../../images/Joined-web.svg"
import img6 from "../../images/hold-rejected-web.svg"

const AppliedJobs = () => {

    const [job, setJob] = useState('all')
    const [close, setClose] = useState('show')
    let value;

    const handleClick =(event)=>{
       value= event.target.value;
       setJob(value);
    }

    const handleClose=()=>{
       setClose('hide')
    }

    const handleOpen=()=>{
        setClose('show')
    }


    return (
        <>
           <div className="main-dash">
                 <div className="row">
                      <div className="first-col col-lg-2 col-md-12 col-sm-12 col-xs-12">
                          <p style={{fontSize:12, margin:8, color:"grey"}}>Home/Applied Jobs</p>
                          <div className="filter">
                <h4>FILTER BY</h4>
                <hr/>
                <p>Stages <span onClick={handleClose}>-</span><span onClick={handleOpen}>+</span></p>

                { close === 'show'?
                <div>
                    <input type="radio" name="all" onClick={handleClick} value="all" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>All</label><br/>
                    <input type="radio" name="all" onClick={handleClick} value="yet" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>Yet to screen</label><br/>
                    <input type="radio" name="all" onClick={handleClick} value="short" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>Shortlisted</label><br/>
                    <input type="radio" name="all" onClick={handleClick} value="interview" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>In Interview</label><br/>
                    <input type="radio" name="all" onClick={handleClick} value="offer" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>Offered</label><br/>
                    <input type="radio" name="all" onClick={handleClick} value="join" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>Joined</label><br/>
                    <input type="radio" name="all" onClick={handleClick} value="hold" style={{marginRight:10, marginBottom:16,width:20, height:20}}/> <label>On Hold</label><br/>
                    <input type="radio" name="all" onClick={handleClick} value="match" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>No Match</label><br/>
                </div>: null
                }
                </div>
                          <Help/>
                          <Social/>

                      </div>
                      <div className="second-col col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div>
                           <div className="saved-jobs">
                               {
                                   (() => {

  

                                    switch (job) {
                         
                                       case 'all':
                         
                                           return (
                         
                                             <div><img src={img1} alt="logo"/>
                                             <p>You have not applied for a job yet. Start your job hunt now.</p></div>
                         
                                           )
                         
                                       case 'yet':
                         
                                           return (
                         
                                             <div><img src={img2} alt="logo"/>
                                             <p>You have no pending screenings.</p></div>
                         
                                           )
                                           case 'short':
                         
                                           return (
                         
                                             <div><img src={img3} alt="logo"/>
                                             <p>You have no shortlisted applications yet.</p></div>
                         
                                           )
                                           case 'interview':
                         
                                           return (
                         
                                             <div><img src={img3} alt="logo"/>
                                             <p>You have not received any interview invite yet.</p></div>
                         
                                           )
                                           case 'offer':
                         
                                           return (
                         
                                             <div><img src={img4} alt="logo"/>
                                             <p>You have not received any employment offer yet.</p></div>
                         
                                           )
                                           case 'join':
                         
                                           return (
                         
                                             <div><img src={img5} alt="logo"/>
                                             <p>You have not started a new job.</p></div>
                         
                                           )
                                           case 'hold':
                         
                                           return (
                         
                                             <div><img src={img6} alt="logo"/>
                                             <p>You have no on-hold applications.</p></div>
                         
                                           )
                                           case 'match':
                         
                                           return (
                         
                                             <div><img src={img6} alt="logo"/>
                                             <p>You have not been screened out. Good luck with the next steps.</p></div>
                         
                                           )
                                    }
                         
                           
                         
                                 })()
                               }
                             <NavLink to="/appliedjobs"><button>Search Jobs</button></NavLink>
                          </div>
                     </div>
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

export default AppliedJobs
