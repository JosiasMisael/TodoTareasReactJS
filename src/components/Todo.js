import React from 'react'

const Todo = ({todo,todoDelete, todoToogleCompleted, setTodoEdit}) => {
    return (
        <div className="card my-4">
            <div className="card-body">
                <h3 className="card-title texto">{todo.title}
                {
                (!todo.completed)? <button type="button" onClick={()=>{todoToogleCompleted(todo.id)}} className="btn btn-sm btn-outline-success general">Terminar</button>: ''
                }
                </h3>
                <p className="card-text texto">{todo.description}</p>
                <hr></hr>
                <div className="d-felx justify-content-end">
                    <button type="button" onClick={ ()=>{setTodoEdit(todo)}}  className="btn btn-sm btn-outline-primary button">Editar</button>
                    <button type="button" onClick={()=>{ todoDelete(todo.id)  } } className="btn btn-sm btn-outline-danger">Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default Todo
