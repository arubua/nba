import React from 'react'
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {

    const navBars = () => (
        <div className="bars">
            <FontAwesome name="bars" style={{color:'#dfdfdf', padding:'10px', cursor:'pointer'}}></FontAwesome>
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
            <div className="headerOpt">
                {navBars()}
                {logo()}
            </div>
        </div>
    )
}
