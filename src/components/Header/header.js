import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './header.css';
import SideNav from './SideNav/sideNav';

export default function Header(props) {

    const navBars = () => (
        <div className="bars">
            <FontAwesomeIcon icon="bars" 
                onClick={props.onShowNav}
                style={{color:'#dfdfdf', 
                    padding:'10px', 
                    cursor:'pointer'
                }}>
            </FontAwesomeIcon>
        </div>
    )
    
    const logo = () => {
        return(
            <Link to="/" className="logo">
                <img alt="nba logo" src={process.env.PUBLIC_URL + 'images/nba_logo.png'}/>
            </Link>
        )
    }

    

    return (
        <div className="header">
            <SideNav {...props}/>
            <div className="headerOpt">
                {navBars()}
                {logo()}
            </div>
        </div>
    )
}
