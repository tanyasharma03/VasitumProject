import React from 'react'
import AcUnitIcon from '@material-ui/icons/AcUnit';

const Navbar = () => {
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <AcUnitIcon/>
                    <h1>
                        <span>V</span>
                        <span>asitum</span>
                    </h1>
                </div>
            </nav>
        </>
    )
}

export default Navbar
