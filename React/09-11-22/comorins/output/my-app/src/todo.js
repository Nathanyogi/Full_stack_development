import React,{useState} from "react";


function Todo(){
    const [num,setNum] =useState(0)
    var add;
    function start() {
        add = setInterval(function() {
            setNum(num+1);
        },2000);
      }
    return(
        <>
        <h1>{num}</h1>
        <button onClick={() =>setNum(num+1)}>Increase</button>
        <button onClick={() =>num>0 ?setNum(num-1):num}>Decrease</button>
        <button onClick={start}>start</button>
        <button onClick={clearInterval(add)}>stop</button>
        </>
    )
}
export default Todo;