import './Modal.css'
import {useEffect, useState} from "react";
export default function CatagoryModal({setEdit,edit,editableDoc,upDatedData}){
    const [catagTitle,setUPCatagTitle]=useState('')
    const [id,setId]=useState('')
    const handelEdit=(e)=>{
        setEdit(!edit)
        const upData={
            id,
            catagory_name:catagTitle
        }
        upDatedData(upData)
    }
    useEffect(()=>{
        setUPCatagTitle(editableDoc[0].catagory_name)
        setId(editableDoc[0]._id)
    },[editableDoc])
    console.log(editableDoc[0].catagory_name,'eit')
    return(
        <>
            <div className="userModal">
                <button className="btn--close-modal" onClick={()=>setEdit(!edit)}>&times;</button>
                <h2 className="modal__header">
                    Create a <span className="highlight">catagory</span>
                </h2>
                <div className="modal__form">
                    <label>Edit Title</label>
                    <input type="text" value={catagTitle} onChange={(e)=>setUPCatagTitle(e.target.value)}/>
                    <button className="button"  onClick={(e)=>
                        handelEdit(e)}>Add Catagory</button>
                </div>
            </div>
            <div className="overlay" onClick={()=>setEdit(!edit)}></div>
        </>
    )
}