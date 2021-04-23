import React from 'react'
import Todo from './Todo';

const TodoList = ({ tareas, todoDelete, todoToogleCompleted, setTodoEdit }) => {
   //console.log(tareas);
    return (
        <>
            <h1 className="texto display-4">Todo Sobre Lista de Tareas</h1>
            { 
             tareas.length ===0 
             ?(
                 <div className="alert alert-primary">
                     No hay tareas. Por favor agregar una {":)"}
                 </div>
             )
             : (
                tareas.map(tarea => (
                    <Todo key={tarea.id} todo={tarea} todoDelete={todoDelete} todoToogleCompleted={todoToogleCompleted} setTodoEdit={setTodoEdit} />))
             )
            }
        </>
    )
}

export default TodoList
