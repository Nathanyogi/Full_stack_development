import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen , faTrashCan
} from '@fortawesome/free-solid-svg-icons'


function Todo({todo,completed,setUpdateTask,deleteTask}){
    return (
        <>
        {todo.length ? "":"No Tasks..."}
        {todo
        .sort((a,b)=> a.id>b.id ? 1 : -1)
        .map((todo_items,index) =>{
            return (
                <React.Fragment key={todo_items.id}>
                <div className='todoBg rounded m-2 p-2'>
                    <div className={todo_items.status ? "done" : ""}>
                        <span className='number rounded-circle'>{index + 1}</span>
                        <span className='text'>{todo_items.task}</span>
                    </div>
                    <div className='icons'>
                        <span title='Completed / Not Completed' onClick={() =>completed(todo_items.id)}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </span>
                        {!todo_items.status && <span title='Edit' onClick={()=>setUpdateTask(todo_items)}>
                            <FontAwesomeIcon icon={faPen} />
                        </span>}
                        <span title='Delete' onClick={() =>deleteTask(todo_items.id)}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </span>
                    </div>
                </div>
                </React.Fragment>
            )
        })}
        </>
    )
}

export default Todo; 