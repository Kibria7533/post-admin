import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import CatagoryTable from "../table/CatagoryTable";
import {useEffect, useState} from 'react'
import CatagoryModal from "../modal/CatagoryModal";
import UserTable from "../table/UserTable";
import axios from "axios";
export default function ManageUser() {
    const [users,setUsers]=useState([])
    const [id,setId]=useState('')

    const getUser=async ()=>{
        await axios.get('http://localhost:5000/get-all-user').then(data=>{
            setUsers(data.data)
        })
    }
    const deleteUser=async(id)=> {
        await axios.delete(`http://localhost:5000/delete-user/${id}`)
        getUser()
    }
    useEffect(()=>{
        getUser()
    },[])
    return(
        <>
            <div className="wrapper container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className='col-md-10'>
                        <Navbar/>
                        <UserTable users={users} deleteUser={deleteUser}/>
                    </div>

                </div>
            </div>


        </>
    )
}