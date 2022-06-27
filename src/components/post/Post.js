// import './Post.css';
// import {useState,useEffect} from  'react'
// export default function Post({Posts}){
//     const [posts,setPosts]=useState('');
//     const [count,setCount]=useState(0)
//     useEffect(()=>{
//         setUser(Posts)
//         },[Posts]
//
//     )
//     return(
//         <table className="table table-hover col-md-10">
//             <thead>
//             <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">Post-Title</th>
//             </tr>
//             </thead>
//             <tbody>
//             {
//                 posts.map(post=>{
//                     setCount(count+1)
//                     return(
//                     <tr>
//                         <th >{count}</th>
//                         <td>{post.title}</td>
//                     </tr>
//                     )
//                 })
//             }
//
//
//             </tbody>
//         </table>
//     )
// }