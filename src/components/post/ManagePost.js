import './Post.css';
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Table from "../table/Table";
// import {useState,useEffect} from  'react'
export default function ManagePost(){
    // const [user,setUser]=useState('');
    // const [count,setCount]=useState(0)
    return(

        <div className="wrapper container-fluid">
            <div className="row">
                <Sidebar />
                <div className='col-md-10'>
                    <Navbar/>
                    <Table />
                </div>

            </div>
        </div>

    )
}