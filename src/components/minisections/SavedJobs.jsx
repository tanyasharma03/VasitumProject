import React from 'react'
import {NavLink} from "react-router-dom"
import job from "../../images/save-job-web.svg"

const SavedJobs = () => {
    return (
        <>
            <div className="saved-jobs">
                <img src={job} alt="svg image"/>
                <p>You have no saved jobs. Browse jobs that you are interested in and save them to apply later.</p>
                <NavLink to="/appliedjobs"><button>Search Jobs</button></NavLink>
            </div>
        </>
    )
}

export default SavedJobs
