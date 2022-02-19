import React from 'react';
import '../App.css';
import Ideas from '../components/ideas';
import SideNavLeft from '../components/Side_nav_left';
import SideNavRight from '../components/Side_nav_right';
import TopNav from '../components/top_nav';
import Idata from '../components/ideas_data'


const Dashboard = () => {
    const IdeaBlock=Idata.map((val)=>{
        return(<Ideas
         userImg={val.userimg}
         id={val.empid}
         name={val.name}
         status={val.ideaStatus}
         uid={val.uid}
         category={val.category}
         description={val.description}
         attachment={val.attachment}
         ></Ideas>);
       } )
    return (
        <body className='dashboard-body'>
            <div>
            <TopNav/>
            </div>
            <div className='dashboard-wrapper'>
        
        <div className='navbar-left'>
      
       <SideNavLeft />
       </div>
       <div className='dashboard-main'>
           {IdeaBlock}
       </div>
       <div className='navbar-right'>
    
      <SideNavRight/>
      </div>
     </div>
     </body>
    );
}

export default Dashboard;
