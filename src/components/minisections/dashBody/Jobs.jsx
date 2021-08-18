import React from 'react'
import JobCards from './JobCards'

const Jobs = () => {
    return (
        <>
            <div className="job">
                <p>Are these right for you?</p>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <JobCards title="PHP - Laravel Developer" sub="Hiring for leading tech company | Jaipur"/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <JobCards title="Key Account Manager"
                       sub="Cars24 Services Pvt Ltd| Agra ClientOnboarding, Dealer Management, Field Sales"/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <JobCards title="Procurement Associate" 
                    sub="Cars24 Services Pvt Ltd| Agra ClientOnboarding, Dealer Management, Field Sales"/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <JobCards title="TECH SUPPORT ENGINEER" sub="CSS CORP | Pune"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobs
