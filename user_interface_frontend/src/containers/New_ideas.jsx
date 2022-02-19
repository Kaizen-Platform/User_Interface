import React, { useState } from 'react';
import { IoIosPeople } from 'react-icons/io';
import { v4 as uuid } from 'uuid';
import Select from 'react-select';
import { addIdea } from '../Service/api';
import { useNavigate } from 'react-router-dom';
import photo from '../assets/dp.jpg';
import '../components/nav.css'
import './containers.css'


const unique_id = uuid().slice(0, 8);
const NewIdeas = () => {
    const time = new Date().toLocaleTimeString();

    const initialValue = {
        role: '',
        category: "",
        description: "",
        summary: "",
        attachment: ""
    }

    
    const [ideas, setnewIdea] = useState(initialValue);
    const { role, category, summary, description } = ideas;
    const navigate=useNavigate();

    const addIdeas=async ()=>{
        if(summary==="" || description==="" || role==="" || category==="")
        alert("All fields are required");
        else{
        await addIdea(ideas);
        navigate('/MyIdeas');
        }

        
    }

    const handleRChange = (event) => {
        
        setnewIdea({ ...ideas,role:event.value });

    };
    const handleCChange = (event) => {
        
        setnewIdea({ ...ideas,category:event.value });

    }

    const handleRoleChange = (event) => {
        setnewIdea({ ...ideas, [event.target.name]: event.target.value });

    };


    const RoleOptions = [
        { value: 'User', label: 'User' },
        { value: 'Admin', label: 'Admin' },
        { value: 'Committee', label: 'Committee Member' }
    ]

    const CategoryOptions = [
        { value: 'default', label: 'Select Category' },
        { value: 'template', label: 'Template' },
        { value: 'tool', label: 'Tool' },
        { value: 'technical framework', label: 'Technical Framework' },
        { value: 'process framework', label: 'Process Framework' },
        { value: 'web portal', label: 'Web Portal' },
        { value: 'app', label: 'App' },
        { value: 'product', label: 'Product' }
    ]
    return (
        <div className='Idea-page'>
            <div className='newIdeas'>
                <div className='Idea-heading'>
                <div className='dp-small'>
                    <img src={photo} alt="profile-image" />
                    </div>
                    <h1 style={{ color: "#00AAFF", textAlign: 'center', margin: "10px" }}>Create Ideas </h1>

                </div>
                <div className='idea-uid'>
                    <button className='uid' title='Unique Identification Number'>{unique_id}</button>
                    <Select className='idea-role' onChange={handleRChange} options={RoleOptions} defaultValue={RoleOptions[0]} />
                    <Select className='newidea-category' name='category' onChange={handleCChange} options={CategoryOptions} defaultValue={CategoryOptions[0]} />
                </div>
                <div className='summary'>
                    <textarea
                        name='summary'
                        placeholder="Summary of the idea in not more than 512 characters..."
                        value={summary} onChange={handleRoleChange}
                        style={{ width: "90%", height: "150px", alignSelf: "center" }} />
                </div>
                <div className='description'>
                    <textarea
                        placeholder='Detailed description of the idea..'
                        name='description'
                        value={description} onChange={handleRoleChange}
                        style={{ width: "90%", height: "300px", alignSelf: "center" }} />
                </div>
                
                    <button className='submit-idea' onClick={()=>addIdeas()}>Submit</button>
               
            </div>
        </div>
    );
}

export default NewIdeas;

