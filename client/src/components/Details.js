import React,{useEffect} from 'react'
import { getUsers } from '../service/api'


function Details() {
    useEffect(() => {
        getAllUsers()
    }, [])
    const getAllUsers=async()=>{
        const response=await getUsers()
        console.log(response.data);
    }
    return (
        <div>
            <button className="btn btn-primary">Edit</button> 
            <button className="btn btn-danger">Delete</button>
        </div>
    )
}

export default Details

