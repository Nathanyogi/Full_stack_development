import React,{useState} from "react";
import Message from "./message";

function Getstate(){
    const [name,setName] = useState("Nathan")

    return(
        <>
        <h1>Welcome {name}</h1>
        <Message name={name} state ={setName} />
        </>
    )
}

export default Getstate;