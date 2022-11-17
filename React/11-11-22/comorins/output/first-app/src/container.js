import React,{useState} from "react";


function Container(props){
    const[email,setEmail] = useState(null)
    const[pass,setPass] = useState(null)
    let loginCheck = () =>{
        if(email =="nathanm" && pass =="12345"){
            props.setState(true)
            props.setUserName("nathan")
        }
        else{
            alert("please check user name and password")
        }
    }
    return(
        <div className="col-8 container">
            <label>Email</label>
            <input type="text" onKeyUp={(e) => setEmail(e.target.value)} /><br/>
            <label>Passeord</label>
            <input type="text" onKeyUp={(e) => setPass(e.target.value)} /> <br/>
            <button onClick={loginCheck}>login</button>
        </div>
    )
}

export default Container;