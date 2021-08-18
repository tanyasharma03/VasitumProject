import React from 'react'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const Terms = () => {
    return (
        <>
            <div className="terms">
                <span>About </span>
                <span>Terms & Conditions </span>
                <span>Our Team </span>
                <span>Blog </span>
                <span>Privacy Policy</span>
                <div style={{display:"flex", marginTop:10, marginBottom:12}}>
                <MailOutlineOutlinedIcon className="mail"/><p>meet@vasitum.com</p>
                </div>
                <hr/>
                <div style={{display:'flex', marginTop:20, alignItems:'center'}}>
                <AcUnitIcon className="icon"/>
                    <h4>Vasitum </h4>
                    <p style={{color:"#000", marginTop:10}}>Vasitum ©2021</p>
                </div>
            </div>
        </>
    )
}

export default Terms
