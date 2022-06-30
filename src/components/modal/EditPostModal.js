import './Modal.css'
import {useEffect, useState} from "react";
export default function EditPostModal({setEditModal,editModal,upDatedPost,needEditDoc}){
    const [postTitle,setPostTitle]=useState('')
    const [postBody,setPostBody]=useState('')
    const [id,setId]=useState('')
    const [createDate,setCreateDate]=useState('')
    const handleClick=()=>{
        setEditModal(!editModal);
        const post={
            post_title:postTitle,
            text_content:postBody,
            create_date:createDate,
            id:id
        }
        upDatedPost(post)

    }
    useEffect(()=>{

        setPostTitle(needEditDoc[0].post_title)
        setPostBody(needEditDoc[0].text_content)
        setId(needEditDoc[0]._id)
        setCreateDate(needEditDoc[0].create_date)

    },[needEditDoc])
    return(
        <>
            <div className="userModal">
                <button className="btn--close-modal" onClick={()=>setEditModal(!editModal)}>&times;</button>
                <h2 className="modal__header">
                    Edit <span className="highlight">Post</span>
                </h2>
                <div className="modal__form">
                    <label>Post Title</label>
                    <input type="text" value={postTitle} onChange={(e)=>setPostTitle(e.target.value)}/>
                    <label>Post Body</label>
                    <input type="text" value={postBody} onChange={(e)=>setPostBody(e.target.value)}/>
                    <label>Post Create Date</label>
                    <input type="text" value={createDate} onChange={(e)=>setCreateDate(e.target.value)} placeholder={'YYYY-MM-DD'} />
                    <button className="button" onClick={ handleClick}>Edit</button>
                </div>
            </div>
            <div className="overlay" onClick={()=>setEditModal(!editModal)}></div>
        </>
    )
}