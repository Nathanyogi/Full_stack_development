import React from "react";

function Form({tempMessage,message,textValue,update}){
    return(
        <div className="form-section text-center">
            <form>
                <textarea className="text-area" placeholder="typeHere" rows="3" value={textValue} onChange={(e) => tempMessage(e)}/>
                {textValue.trim() && <button className=" btn btn-light" onClick={message} type="button">post message</button>}
            </form>
        </div>
    )
}

export default Form;