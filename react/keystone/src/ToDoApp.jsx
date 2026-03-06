import React from 'react'
import { useState } from 'react'

function ToDoApp() {

    const [todoList,setTodoList]=useState([])
    const [enteredTodo,setEnteredTodo]=useState("")

    function handleTodoChange(e){
        setEnteredTodo(e.target.value)
    }

    function handleAddTodo(e){
        setTodoList((oldval)=>([...oldval,enteredTodo]))
    }
    

    return (
        <div>
            <input type="text" name="" id="" placeholder='Enter Todo' onChange={handleTodoChange}/><br />
            <button onClick={handleAddTodo}>Add Todo Task</button>
            {
                todoList.map((task)=>{
                    return <div className='taskBox'>
                        <p>{task}</p>
                        <button className="deleteBtn" onClick={()=>{
                            const filteredTask=todoList.filter((i)=>{
                                return i!==task
                            })
                            setTodoList(filteredTask)
                        }}>Delete Task</button>
                    </div>
                })
            }
        </div>
    )
}

export default ToDoApp
