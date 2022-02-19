import { useState } from "react";
import { useEffect } from "react";
import { FaUserInjured } from "react-icons/fa";
import { getIdeas,deleteUserIdea } from "../Service/api";
import Ideas from "./ideas";
import Idata from "./ideas_data";
import SideNavLeft from "./Side_nav_left";
import SideNavRight from "./Side_nav_right";
import TopNav from "./top_nav";
import UserIdeas from "./UserIdeas";
import { v4 as uuid } from 'uuid';
import '../App.css';
import './nav.css';
import '../containers/containers.css';

const MyIdeas = () => {

  useEffect(() => {
    getMyIdeas();
  }, []);

  const [myideas, setMyideas] = useState([])

  const getMyIdeas = async () => {
    const res = await getIdeas();
    setMyideas(res.data);
  }

 const DeleteIdea= async (id)=>{
    await deleteUserIdea(id);
    getMyIdeas();
 }
  const MyIdeaBlock = myideas.map((val) => {
    return (<UserIdeas
    key={val.id}
      category={val.category}
      description={val.description}
      id={val.id}
      delete={()=>DeleteIdea(val.id)}
     >
    </UserIdeas>);
  })

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
           {MyIdeaBlock}
       </div>
       <div className='navbar-right'>
    
      <SideNavRight/>
      </div>
     </div>
     </body>
    );
  }

export default MyIdeas;
