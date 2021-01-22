import React from 'react';
import './videosList.css';

import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/cardInfo';

const VideosListTemplate = (props) => {
    return props.data.map( (item,i) => (
        <Link to={`/videos/${item.id}`} key={i}>
            <div className='videoListItem_wrapper'>
                <div className='left'
                    style={{
                        background:`url(/images/videos/${item.image})`
                    }}
                >
                    <div
                    style={{
                        background:`url(/images/play.png)`
                    }}></div>
                </div>
                <div className='right'>
                    <CardInfo teams={props.teams} team={item.team} date={item.date}/>
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    ))
}

export default VideosListTemplate;