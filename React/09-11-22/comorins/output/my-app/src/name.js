import React from "react";
import Test from "./test";

class ShowName extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name :"YOGESH",
            age :22
        }
    }
    changeNameUser(name){
        this.setState({
            ...this.state,
                 name
        })
    }
    render(){
        return(
            <>
            <h1>my first name is {this.state.name}</h1>
            <button onClick={this.changeNameUser.bind(this,'Nathan')}>changeName</button>
            <Test name={this.state.name} changeName={this.changeNameUser.bind(this)}/>
            </>  
        )
    }
}

export default ShowName;