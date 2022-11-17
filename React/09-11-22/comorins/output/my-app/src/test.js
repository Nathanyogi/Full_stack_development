import React from "react";

class Test extends React.Component{
    constructor(props){
        super(props)
    }
    parentName(){
        this.props.changeName("mithun")
    }
    render(){
        return(
            <>
            <h1>{this.props.name}</h1>
            <button onClick={this.parentName.bind(this)}>change name</button>
            </>
        )
    }
}

export default Test;