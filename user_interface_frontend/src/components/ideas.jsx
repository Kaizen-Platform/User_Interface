import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Ideas = (props) => {
    const curTime = new Date().toLocaleTimeString();
    return (
        <div className='idea'>
            <div className='idea-top'>
                <div className='dp'>
                    <img src={props.userImg} alt="profile-image" />
                    </div>
                <div className='user-details'>
                    <NavLink to="/profile"><h3 title={props.id}>{props.name}</h3></NavLink>
                    <div className='idea-time'>
                        <h4>{props.uid}</h4>
                        <p>{curTime}</p>
                    </div>
                </div>
                <div className='status'>
                <button title="Status" className='status-button' >{props.status}</button>
                </div>
            </div>

            <div className='idea-category'>
                <h3>{props.category}</h3>
            </div>
            <div className='idea-details'>
                <a href='#'><h3>{props.description}</h3></a>
                <img alt="attachment" />
            </div>
            <div className='idea-remark'>
            <textarea placeholder='Add remarks'></textarea>
            </div>
        </div>
    );
}

export default Ideas;
