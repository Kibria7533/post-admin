import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard'
import {useState} from "react";
import ManagePost from './components/post/ManagePost'
import ManageCatagory from "./components/catagory/ManageCatagory";
import ManageUser from "./components/user/ManageUser";
function App() {
// const [posts,setPosts]=useState('')
// const getPosts=async ()=>{
//    const res=await axios.get('/all-post')
//     console.log(res)
// }
return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Dashboard /> }/>
                <Route path='/manage-post' element={<ManagePost />}/>
                <Route path='/manage-catagory' element={<ManageCatagory />}/>
                <Route path='/manage-user' element={<ManageUser />}/>
            </Routes>
        </Router>

      </>
  );
}

export default App;
