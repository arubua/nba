import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sideNav.css'

const SideNavItems = () => {

    const items = [
        {
            type: 'option',
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: 'option',
            icon: 'file',
            text: 'News',
            link: '/news'
        },
        {
            type: 'option',
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: 'option',
            icon: 'sign-in-alt',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: 'option',
            icon: 'sign-out-alt',
            text: 'Sign out',
            link: '/sign-out'
        }
    ]

    const showItems = () => {
        return items.map( (item,i) =>{
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesomeIcon icon={item.icon}
                            style={{marginRight:'8px'
                        }}/>
                        {item.text}
                    </Link>
                </div>
            )
        } )
    }


    return(
           <div className='option'>
               {showItems()}
           </div> 
    )
}

export default SideNavItems;