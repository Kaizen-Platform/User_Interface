import React from 'react';

import {IoIosPeople} from 'react-icons/io';
import {FcIdea} from 'react-icons/fc';
import {BiCategoryAlt} from 'react-icons/bi';
import {SiGoogleanalytics} from 'react-icons/si';
import {IoMdSettings} from 'react-icons/io';
import './nav.css';
import { NavLink } from 'react-router-dom';

const SideNavLeft = () => {
    return (
        <>
        <nav className='nav-left'>
          
            <ul className='menu-links'>
                <li className='menu-link profile'> <i className='all-icon center icons '><IoIosPeople/></i><p>Employee Id</p></li>
                <li className='menu-link'> <NavLink to="/dashboard" className='link'><i className='all-icon center icons '><IoIosPeople/></i>All Ideas</NavLink></li>
                <li className='menu-link'> <NavLink to="/MyIdeas" className='link'><i className='my-icon center'><FcIdea/></i>My Ideas</NavLink></li>
                <li className='menu-link'> <a className='link '><i className='all-icon center'><BiCategoryAlt/></i>Categories</a></li>
                <li className='menu-link'> <a className='link'><i className='all-icon center'><SiGoogleanalytics/></i>Analysis</a></li>
                <li className='menu-link'> <a className='link'><i className='all-icon center'><IoMdSettings/></i>Settings</a></li>
            </ul>
          
        </nav>
            
        </>
    );
}

export default SideNavLeft;
