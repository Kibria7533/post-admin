import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Table from "../table/Table";
import {useState} from 'react'
import Modal from "../modal/Modal";
export default function ManageUser() {
    const [addUser,setAddUser]=useState(false)
    const userModal=()=>{
        setAddUser(!addUser)
    }
    return(
        <>
            <div className="wrapper container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className='col-md-10'>
                        <Navbar/>
                        <table className="table table-hover col-md-10">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Post-Title</th>
                                <th scope="col">Manage Buttons</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td><button>Delete</button>/<button onClick={()=>userModal()}>Add User</button></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            {
                addUser&&(
                    <Modal setAddUser={setAddUser} addUser={addUser} />
                )

            }

        </>
    )
}