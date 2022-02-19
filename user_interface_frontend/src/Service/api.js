import axios from 'axios';

const url="http://localhost:3003/ideas";

export const getIdeas=async (id)=>{
    id=id || "";
    return await axios.get(`${url}/${id}`);
}

export const addIdea=async (ideas)=>{
    return await axios.post(url,ideas);
}

export const editIdea=async(id,ideas)=>{
    return await axios.put(`${url}/${id}`,ideas)
}

export const deleteUserIdea=async(id)=>{
    return await axios.delete(`${url}/${id}`)
}