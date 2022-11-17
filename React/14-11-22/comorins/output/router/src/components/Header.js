import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../pages/Home";
import CreateCourse from "../pages/Createcourse";
import CourseList from "../pages/Courselist";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Header({}){

    const[email,setEmail] = useState(null)
    const[pass,setPass]= useState(null)

    const[user,setUser] = useState({id:"nathan",pass:"123"})

    // let addUser =() =>{
    //     if(email && pass){
    //         let userDetail = {id:email,pass:pass,status:false}
    //     }
    // }
    return (
        <>
            <Router>
            {<nav className="navbar navbar-expand-lg navbar-light bg-dark px-2">
                <label to className="navbar-brand text-white">CourseAPP</label>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/home" className="nav-link text-white" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/createcourse" className="nav-link text-white" >create course</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/courselist" className="nav-link text-white">CoureList</Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 text-right">
                        <Link to="/login" className="btn btn-success">LogIn</Link>
                    </form>
                </div>
                </nav>}

                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/createcourse">
                        <CreateCourse />
                    </Route>
                    <Route path="/courselist">
                        <CourseList />
                    </Route>
                    <Route path="/login">
                        <Login user={user} setEmail={setEmail} setPass={setPass} email={email} pass={pass}/>
                    </Route>
                    <Route path="Register"> 
                        <Register />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Header;