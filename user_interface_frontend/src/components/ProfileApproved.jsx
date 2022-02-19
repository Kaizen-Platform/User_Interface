import React from 'react';
import Profile from '../containers/profile';
import Idata from './ideas_data';
import UserIdeas from './UserIdeas';
import './nav.css';

const Profileapproved = () => {
    return (
        <>
        
            <Profile/>
            <div className='created'>
            <div></div>
            <UserIdeas
         userImg={Idata[1].userimg}
         name={Idata[1].name}
         status={Idata[1].ideaStatus}
         uid={Idata[1].uid}
         category={Idata[1].category}
         description={Idata[1].description}
         attachment={Idata[1].attachment}
         ></UserIdeas>
         </div>
         
        </>
    );
}

export default Profileapproved;
