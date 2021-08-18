import React from 'react'
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import company from "../../../images/company-icon.svg"

const JobCards = (props) => {
    return (
        <>
            <div className="main-job">

                 <div className="job-cards">
                     <div className="icons">
                     <ThumbDownOutlinedIcon />
                     <BookmarkBorderOutlinedIcon style={{marginLeft:10}}/>
                     </div>
                     <img src={company} alt="company logo"/>
                     <h6>{props.title}</h6>
                     <p>{props.sub}</p>
                     <button>View Job</button>
                 </div>
                 
                 {/* <div className="job-cards">
                 <ThumbDownOutlinedIcon/>
                 <BookmarkBorderOutlinedIcon/>
                 </div>
                  
                 <div className="job-cards">
                 <ThumbDownOutlinedIcon/>
                 <BookmarkBorderOutlinedIcon/>
                 </div>
                 
                 <div className="job-cards">
                 <ThumbDownOutlinedIcon/>
                 <BookmarkBorderOutlinedIcon/>
                 </div> */}
                  
            </div>
        </>
    )
}

export default JobCards
