import React from 'react'
import resume from "../../../images/resume.png"
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

const Updates = () => {
    return (
        <>
            <div className="updates">
                <p>Updates for you</p>
                <div className="row">
                <div className="update-resume col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <img src={resume} alt="resume" /><span>Upto 3 MB</span>
                    <h6>Resume Not Added</h6>
                    <p>Supported Files- .doc, .pdf, .docx, .rtf</p>
                    <hr/>
                    <p style={{marginLeft:38, color:"#0a337a"}}><PublishOutlinedIcon/> Upload Now</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Updates
