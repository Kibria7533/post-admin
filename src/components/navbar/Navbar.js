import './Navbar.css'
import profileImage from'../../icon/undraw_profile_1.svg'
import {NavLink} from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <div className="row">


                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary col-md-6 ">

                        <div className="collapse navbar-collapse nav--1">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link"
                                    >Home <span className="sr-only">(current)</span></a
                                    >
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Pricing</a>
                                </li>
                            </ul>

                        </div>
                    </nav>




                <nav className="col-md-6 navbar navbar-expand-lg navbar-dark bg-primary nav--2 ">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link"
                            ><span className="material-icons">email </span></a
                            >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Mr Doggy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                            ><img src={profileImage} className="profile_img"
                            /></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}