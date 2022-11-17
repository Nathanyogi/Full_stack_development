import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddFrom from './components/AddForm';
import UpdateFrom from './components/UpdateFrom';
import Todo from './components/Todo';

import './App.css';


function App() {

  // Todo list state
  const[todo,setTodo] = useState([])

  // Temp state for add task
  const[Newtask,setNewTask] = useState('');

  // temp state for updateTask
  const[updateTask,setUpdateTask] = useState('');

  // Add task
  let addTask = () =>{
    if(Newtask){
      let newId = todo.length + 1;
      let newTask = {id:newId, task:Newtask, status:false};
      setTodo([...todo,newTask])
      setNewTask('')
    }
  }

  // completed not completed
  let completed = (id) =>{ 
    let newTask = todo.map((task) =>{
      if(task.id === id){
        return ({...task,status:!task.status})
      }
      return task
    });
    setTodo(newTask)
  }

  // update function 
  let Update = (e) =>{
    let updatedTask = {...updateTask,task: e.target.value}
    setUpdateTask(updatedTask)
  }

  // function for show the updated task when press the update button
  let showUpdate = () =>{
    let filterTask = todo.filter((task)=> task.id !== updateTask.id)
    let newTask = [...filterTask,updateTask]
    setTodo(newTask)
    setUpdateTask('')
  }
  
  // Cancel update
  let cancelUpdate = () => setUpdateTask('');

  // deleted function
  let deleteTask = (id) =>{
    let filterTask = todo.filter((task) => task.id !== id)
    let newId = filterTask.map((task,index)=>{
      return {...task,id:index + 1}
    })
    setTodo(newId)
  }

  return(
    <div className='container app mt-3 pb-3'>
      <br/> <br/>
      <h1> React Todo APP </h1>
      <br/> <br/>

      {updateTask ? (<>
        <UpdateFrom 
        updateTask={updateTask}
        Update={Update}
        showUpdate={showUpdate}
        cancelUpdate={cancelUpdate}
        />
      </>):(<>
        <AddFrom 
        setNewTask={setNewTask}
        addTask={addTask}
        NewTask={Newtask}
        />
        </>
      )}

      <Todo 
      todo={todo}
      completed={completed}
      setUpdateTask={setUpdateTask}
      deleteTask={deleteTask}
      />
      
    </div>
    
    
    
    
  )
}

export default App;
