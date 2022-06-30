import './Modal.css'
import {useState} from "react";
export default function AddPostModal({setAddModal,addModal,addPost}){
    const [postTitle,setPostTitle]=useState('')
    const [postBody,setPostBody]=useState('')
    const [createDate,setCreateDate]=useState('')
    const postAdd=()=>{
        setAddModal(!addModal);
        const post={
            post_title:postTitle,
            text:postBody,
            create_date:createDate
        }
        addPost(post)

    }
    return(
        <>
            <div className="userModal">
                <button className="btn--close-modal" onClick={()=>setAddModal(!addModal)}>&times;</button>
                <h2 className="modal__header">
                    Add A <span className="highlight">Post</span>
                </h2>
                <div className="modal__form">
                    <label>Post Title</label>
                    <input type="text" value={postTitle} onChange={(e)=>setPostTitle(e.target.value)}/>
                    <label>Post Body</label>
                    <input type="text" value={postBody} onChange={(e)=>setPostBody(e.target.value)}/>
                    <label>Post Create Date</label>
                    <input type="text" value={createDate} onChange={(e)=>setCreateDate(e.target.value)}/>
                    <button className="button" onClick={ postAdd}>Add Post</button>
                </div>
            </div>
            <div className="overlay" onClick={()=>setAddModal(!addModal)}></div>
        </>
    )
}