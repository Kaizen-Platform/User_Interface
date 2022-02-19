import React from 'react';
import Profile from '../containers/profile';
import Idata from './ideas_data';
import UserIdeas from './UserIdeas';
import './nav.css';

const Profilemyideas = () => {
    return (
        <>
        
            <Profile/>
            <div className='created'>
            <UserIdeas
         userImg={Idata[0].userimg}
         name={Idata[0].name}
         status={Idata[0].ideaStatus}
         uid={Idata[0].uid}
         category={Idata[0].category}
         description={Idata[0].description}
         attachment={Idata[0].attachment}
         ></UserIdeas>
         </div>
         
        </>
    );
}

export default Profilemyideas;
