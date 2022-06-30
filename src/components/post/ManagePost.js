import '../modal/Modal.css'
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import PostTable from "../table/PostTable";
import {useState,useEffect} from  'react'
import axios from "axios";
import EditPostModal from "../modal/EditPostModal";
import AddPostModal from "../modal/AddPostModal";
export default function ManagePost(){
    const [posts,setPosts]=useState([]);
    const [count,setCount]=useState(0);
    const [editModal,setEditModal]=useState(false)
    const [addModal,setAddModal]=useState(false)
    const [needEditDoc,setNeedEditDoc]=useState([])

    const getAllPost=async ()=>{
        await axios.get('http://localhost:5000/all-post').then(data=>{
            console.log(data.data.result)
            setPosts(data.data.result)
        })

    }
    const deletepost=async (post)=>{
        console.log(post,'delete post')
        await axios.delete(`http://localhost:5000/delete-post/${post._id}`)
        getAllPost()
    }
    const addPost=async (data)=>{
        await axios.post('http://localhost:5000/insert',data,{headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'}})
        getAllPost()
    }
    const editInfo=(data)=>{
        console.log(data,'edit data')
        setNeedEditDoc([data])
    }
    const upDatedPost=async (data)=>{
        // console.log('updated data',data)
        await axios.put(`http://localhost:5000/update-post/${data.id}`,data,{headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'}})
        getAllPost()
    }
    useEffect(()=>{
        getAllPost();

    },[])

    return(
        <>

            <div className="wrapper container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className='col-md-10'>
                        <Navbar/>
                        <PostTable posts={posts} deletepost={deletepost} setEditModal={setEditModal} editModal={editModal} editInfo={editInfo}/>
                        <button className="button" onClick={()=>setAddModal(!addModal)}>Add Post</button>
                    </div>

                </div>
            </div>
            {
                ( editModal && (
                    <EditPostModal setEditModal={setEditModal} editModal={editModal} needEditDoc={needEditDoc} upDatedPost={upDatedPost}/>
                ))
                ||
                (addModal && (
                    <AddPostModal setAddModal={setAddModal} addModal={addModal} addPost ={addPost}/>
                ))
            }
        </>
    )
}