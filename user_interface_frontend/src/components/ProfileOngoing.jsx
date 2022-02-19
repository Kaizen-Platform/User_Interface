import React from 'react';
import Profile from '../containers/profile';
import Idata from './ideas_data';
import UserIdeas from './UserIdeas';
import './nav.css';

const Profileongoing = () => {
    return (
        <>
        
            <Profile/>
            <div className='created'>
            <div></div>
            <UserIdeas
         userImg={Idata[2].userimg}
         name={Idata[2].name}
         status={Idata[2].ideaStatus}
         uid={Idata[2].uid}
         category={Idata[2].category}
         description={Idata[2].description}
         attachment={Idata[2].attachment}
         ></UserIdeas>
         </div>
         
        </>
    );
}

export default Profileongoing;
