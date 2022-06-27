import './Sidebar.css';
import {NavLink} from "react-router-dom";

export default function Sidebar(){
    return(
        <>
            <div className="sidebar col-md-2">
                <ul>
                    <li className="logo">Logo</li>
                    <li className="dividar">
                        <NavLink to='/' className="dashboard">
                            <i className="bi bi-speedometer2"></i>dashboard</NavLink
                        >
                    </li>
                    <li><NavLink to={'/manage-post'} className="managepost">Manage Post</NavLink></li>
                    <li><NavLink to={'/manage-user'} className="pages">Manage User</NavLink></li>
                    <li><NavLink to="/manage-catagory" className="tables">Manage Catagory</NavLink></li>

                </ul>
            </div>
        </>

    )
}