import React from 'react'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = () => {
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <AcUnitIcon className="icon"/>
                    <h1>
                        Vasitum
                    </h1>
                </div>

                <div className="search-box">
                    <SearchIcon className="search-icon" />
                    <input type="text" placeholder="Search by name, designation, skills" />
                </div>

                <div className="nav-links">
                    <ul>
                        <li><HomeIcon className="nav-icons" style={{marginLeft:5}}/><br/><NavLink to="/" className="links">Home</NavLink></li>
                        <li><BookmarkBorderIcon className="nav-icons" style={{marginLeft:5}}/><br/><NavLink to="/saved" className="links">Saved</NavLink></li>
                        <li><CheckCircleOutlineIcon className="nav-icons" style={{ marginLeft:20}}/><br/><NavLink to="/appliedjobs" className="links">Applied Jobs</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
