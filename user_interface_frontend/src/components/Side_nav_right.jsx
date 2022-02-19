import React from 'react';
import {IoIosPeople} from 'react-icons/io';
import {FcIdea} from 'react-icons/fc';
import {BiCategoryAlt} from 'react-icons/bi';
import {SiGoogleanalytics} from 'react-icons/si';
import {IoMdSettings} from 'react-icons/io';
import './nav.css';
import { IoCreate } from 'react-icons/io5';
import { NavigationType, NavLink } from 'react-router-dom';

const SideNavRight = () => {
    return (
        <>
          <nav className="nav-right">
          <ul className='menu-links'>
                <li className='menu-link'> <a className='link'><i className='all-icon center icons '><IoIosPeople/></i></a></li>
                <li className='menu-link'> <a className='link'><i className='my-icon center'><FcIdea/></i></a></li>
                <li className='menu-link'> <a className='link '><i className='all-icon center'><BiCategoryAlt/></i></a></li>
                <li className='menu-link'> <a className='link'><i className='all-icon center'><SiGoogleanalytics/></i></a></li>
                <li className='menu-link'> <a className='link'><i className='all-icon center'><IoMdSettings/></i></a></li>
                <li></li>
                <li className='menu-link end'> <NavLink to="/create" className='link'><i className='settings center'><IoCreate/></i></NavLink></li>
            </ul>
              </nav>  
        </>
    );
}

export default SideNavRight;
