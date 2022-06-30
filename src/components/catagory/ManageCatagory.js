import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import CatagoryTable from "../table/CatagoryTable";
import {useState,useEffect} from "react";
import axios from "axios";
import CatagoryModal from "../modal/CatagoryModal";

export default function ManageCatagory() {
    const [catagory,setCatagory]=useState([]);
    const [edit,setEdit]=useState(false)
    const [editableDoc,setEditableDoc]=useState([])
    const getCatagory=async ()=>{
        await axios.get('http://localhost:5000/get-all-catagory').then(data=>{
            console.log(data)
            // console.log(data.data,'catagory')
            setCatagory(data.data.result);
        })

    }
    const deleteCatagory=async (id)=>{
        await axios.delete(`http://localhost:5000/delete-catagory/${id}`)
        getCatagory()
    }
    const needEdit=(data)=>{
        setEditableDoc([data])
        console.log(data,'data')
    }
    const upDatedData=async (data)=>{
        // console.log(data,'updated')
        await axios.put(`http://localhost:5000/update-catagory/${data.id}`,{data},{headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'}})
        getCatagory()
    }
    useEffect(()=>{
        getCatagory()
    },[])
    return(
        <>
            <div className="wrapper container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className='col-md-10'>
                        <Navbar/>
                        <CatagoryTable needEdit={needEdit} catagory={catagory} setCatagory={setCatagory}  edit ={edit} setEdit={setEdit} deleteCatagory={deleteCatagory}/>
                    </div>

                </div>
            </div>

            {
                edit &&(<CatagoryModal  editableDoc={editableDoc} upDatedData={upDatedData} edit ={edit} setEdit={setEdit} />)

            }

        </>
    )
}