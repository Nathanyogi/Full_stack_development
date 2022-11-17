import React from "react";

function Display({DisplayMess,deletePost,UpdateMessage}){
    return(
        <>
        {!DisplayMess.length && <p className="text-center">No posts ....</p>}
        <div className="display-message">
            {DisplayMess.map((message,index)=>{
                return(
                    <div className="message mt-2" key={index}>
                        <span>{index + 1 }.</span>
                        <span className="mx-3">{message}</span>
                        <div className="font">
                            <i className="fa fa-times fa-fw delete-font" onClick={() => deletePost(index)}></i>
                        </div>
                    </div>
                )
            })}
        </div></>
        
        
    )
}

export default Display;