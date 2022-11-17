function UpdateFrom({updateTask,Update,showUpdate,cancelUpdate}){
    return (
        <>
        <div className='row mx-0'>
          <div className='col'>
            <input className='form-control form-control-lg' value={updateTask.task} onChange={(e) =>Update(e)}/>
          </div>
          <div className='col-auto'>
            <button className='btn btn-lg btn-success mr-20 rounded-0' onClick={showUpdate}>Update</button>
            <button className='btn btn-lg btn-secondary rounded-0' onClick={cancelUpdate}>Cancel</button>
          </div>
        </div>
        </>
    )
}
export default UpdateFrom;