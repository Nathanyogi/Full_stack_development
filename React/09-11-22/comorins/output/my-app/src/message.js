function Message(props){
    return(
        <>
        <h1>hai,hello</h1>
        <button onClick={() =>props.state("Yogesh")}>changeState</button>
        </>
        
    )
}

export default Message;