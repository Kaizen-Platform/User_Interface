import React,{Component,useEffect, useState} from 'react';
import { IoMdCreate } from 'react-icons/io';
import {MdDeleteOutline} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './nav.css';
import photo from '../assets/dp.jpg';



const UserIdeas = (props) => {


    const curTime=new Date().toLocaleTimeString();

    return (

        <div className='idea'>
            <div className='idea-top'>
            <div className='dp'>
                    <img src={photo} alt="profile-image" />
                    </div>
                    <div className='user-details'>
                    <NavLink to="/profile"><h3 title={props.id}>Mansi Bhalotia</h3></NavLink>
                    <div className='idea-time'>
                        <h4>{props.id}</h4>
                        <p>{curTime}</p>
                    </div>
                </div>
                <div className='status'>
                <button title="Status" className='status-button' >Submitted</button>
                </div>
            </div>
            <div className='idea-category'>
                <h3>{props.category}</h3>
                <NavLink to={`/MyIdeas/EditIdeas/${props.id}`}><button className='icon-edit'><IoMdCreate/></button></NavLink>
              <button className='icon-delete' onClick={props.delete}><MdDeleteOutline/></button>
            </div>
            <div className='idea-details'>
                <a href='#'><h3>{props.description}</h3></a>
                <img alt="attachment"/>
            </div>
            <div className='idea-remark'>
            <textarea placeholder='Add remarks'></textarea>
            </div>
        </div>
    );
}

export default UserIdeas;