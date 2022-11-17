import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './Form';
import Display from './Display';


 class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      tempMessage:"",
      message:[],
    }
  }
  // function to add a value to tempmessage when type the form
  AddTempMessage = (e) =>{
    this.setState({
      tempMessage:e.target.value,
    })
  }

  AddMessage = () =>{
    if(this.state.tempMessage){
      let Message = [this.state.tempMessage,...this.state.message];
      this.setState({
        tempMessage:"",
        message:Message
      });
    }
  }
  

  deletePost = (key) => {
    let posts = [...this.state.message];
    posts.splice(key,1)
    this.setState({
      message:posts
    })
  }

  render(){
    return (
      <div className="app">
        <h1 className='text-white text-center'>Message App</h1>
        <Form tempMessage={this.AddTempMessage} message={this.AddMessage} textValue={this.state.tempMessage}/>
        <Display DisplayMess={this.state.message} deletePost={this.deletePost}/>
      </div>
    );
  }
  
}

export default App;
