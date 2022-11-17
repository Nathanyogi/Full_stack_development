function AddFrom({setNewTask,addTask,NewTask}){
    return (
        <>
        <div className='row mx-0 my-2'>
          <div className='col'> 
          <input className='form-control form-control-lg' onChange={(e) => setNewTask(e.target.value)} value={NewTask} placeholder="Enter Your Task Here"/>
          </div>
          <div className='col-auto'>
            <button className='btn btn-lg btn-success rounded-0' onClick={addTask}>ADD</button>
          </div>
        </div>
        </>
    )
}


export default AddFrom;