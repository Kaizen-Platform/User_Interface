import React from 'react';
import './nav.css';
import { BsPlusSquare } from 'react-icons/bs';
import { IoNotificationsCircleOutline } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import logo from '../assets/logo1.png';
import { IoSearchCircleOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const TopNav = () => {
    return (
        <>

            <nav className='top-nav'>
                <div className='logo'>
                    <NavLink to="/dashboard" ><img src={logo} alt="logo" /></NavLink>
                </div>
                <div className="new-ideas"><NavLink to="/create"><h3 className="create-wrapper"><i className="plus-icon center" ><BsPlusSquare /></i><span className='heading'>Create Ideas</span></h3></NavLink></div>
                <div className='search'>
                    <input type="text" placeholder="Search" className='searchBar'></input>
                    <i className='search-icon center'><IoSearchCircleOutline /></i>
                </div>

                <div className="menu-icons">
                <NavLink to=""><i className="not-icon center" ><IoNotificationsCircleOutline /></i></NavLink>
                    <NavLink to="/profile"><i className="user-icon center" ><FaRegUserCircle /></i></NavLink>
                </div>
                <div className='role-button'>
                    <select className="user-role" >
                        <option value="username">Hy, Mansi</option>
                        <option value="user-view">User</option>
                        <option value="admin-view">Admin</option>
                        <option value="committe-view">Committee Member</option>
                    </select>
                </div>
            </nav>
        </>
    );
}

export default TopNav;
