import React from 'react';
import { BiCategoryAlt } from 'react-icons/bi';
import { FcIdea } from 'react-icons/fc';
import { IoIosPeople } from 'react-icons/io';
import logo from '../assets/logo1.png';
import './containers.css';
import '../components/nav.css';
import { NavLink } from 'react-router-dom';
import photo from '../assets/dp.jpg';

const Profile = () => {
    return (
        <div className='profile-dashboard'>
        
            <nav className='profile-nav'>
                <NavLink to="/dashboard" className='logo plogo'>
                    <img src={logo} alt="logo" />
                </NavLink>
                <ul className='profile-links'>
                    <li className='profile-link '><NavLink to="/dashboard" className='plink'> <i className=''><IoIosPeople /></i>Dashboard</NavLink></li>
                    <li className='profile-link'> <a className='plink'><i className='plink '><IoIosPeople />Role</i></a></li>
                    <li className='profile-link'> <a className='plink'><i className='plink'><FcIdea /></i>Help</a></li>
                    <li className='profile-link'> <a className='plink '><i className='plink'><BiCategoryAlt /></i>Log Out</a></li>

                </ul>
            </nav>
            <section className='p-profile'>
                    <div className='profile-photo'>
                        <img src={photo}/>
                        </div>
                        <div className='p-userdetails'>
                            <div className='p-personaldetails'>
                        <p className='pusername'>Mansi Bhalotia</p>
                        <p className='p-id'>(Cdata1234)</p></div>
                        <div className='user-work'>
                        <p>1 Created </p>
                        <p>0 Worked </p>
                        <p>0 Ongoing </p>
                        </div>
                    </div> 
                    <div className='p-button'>
                        <button className='p-create'><NavLink to="/create">Cretae Ideas</NavLink></button>
                        <button className='p-edit'>Edit Profile</button>
                        </div>
                </section>
                <section className='profile-options'>
                    <ul className='pro-links'>
                        <li className=' '><NavLink to="/profile/MyIdeas" className=''>Created</NavLink></li>
                        <li className=''> <NavLink to="/profile/Approved" className=''>Approved</NavLink></li>
                        <li className=''> <NavLink to="/profile/Ongoing" className=''>Ongoing</NavLink></li>
                    </ul>
                </section>
                
        </div>
    );
}

export default Profile;
