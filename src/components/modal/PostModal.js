// import './Modal.css'
// export default function CatagoryModal({setEdit,edit}){
//     return(
//         <>
//             <div className="userModal">
//                 <button className="btn--close-modal" onClick={()=>setEdit(!edit)}>&times;</button>
//                 <h2 className="modal__header">
//                     Open your bank account <br/>
//                     in just <span className="highlight">5 minutes</span>
//                 </h2>
//                 <div className="modal__form">
//                     <label>First Name</label>
//                     <input type="text"/>
//                     <label>Last Name</label>
//                     <input type="text"/>
//                     <label>Email Address</label>
//                     <input type="email"/>
//                     <button className="button" onClick={()=>setEdit(!edit)}>Add User</button>
//                 </div>
//             </div>
//             <div className="overlay" onClick={()=>setEdit(!edit)}></div>
//         </>
//     )
// }