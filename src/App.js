import React, { useState, useEffect} from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
const listaTareas = [
    {
        id: 1,
        title: 'Todo #1',
        description: 'Desc Todos #1',
        completed: false
    },
    {
        id: 2,
        title: 'Todo #2',
        description: 'Desc Todos #2',
        completed: false
    },
    {
        id: 3,
        title: 'Todo #3',
        description: 'Desc Todos #3',
        completed: false
    }
];

const localStorageP =JSON.parse(localStorage.getItem('tareas'))

const App = () => {
    const [tareas, setTareas] = useState(localStorageP|| listaTareas);
    const [todoEdit, setTodoEdit] = useState(null);
    useEffect(() => {
       localStorage.setItem('tareas', JSON.stringify(tareas))
    }, [tareas])

    const todoDelete = (todoId) => {
        if (todoEdit && todoId ===todoEdit.id) {
            setTodoEdit(null);
        }
        const todosDelete = tareas.filter(tarea => tarea.id !== todoId);
        setTareas(todosDelete);
    }
    const todoToogleCompleted = (todoId) => {
        const changeTodos = tareas.map(tarea => (tarea.id === todoId) ? { ...tarea, completed: !tarea.completed } : tarea);
        setTareas(changeTodos)
    }

    const todoAdd = (todo) => {
        const newTodo = {
            id: Date.now(),
            ...todo,
            completed: false
        }
        const changedTodos = [
            newTodo,
            ...tareas,
        ]

        setTareas(changedTodos);
    }

    const todoUpdate = (todoEdit) => {
        const changueTareas = tareas.map(tarea => (tarea.id === todoEdit.id) ? todoEdit : tarea)
        setTareas(changueTareas);
    }
    return (
        <div className="container mt-5" >
            <div className="row">
                <div className="col-8">
                    <TodoList tareas={tareas} todoDelete={todoDelete} todoToogleCompleted={todoToogleCompleted} setTodoEdit={setTodoEdit} />
                </div>
                <div className="col-4">
                    <TodoForm todoAdd={todoAdd} todoEdit={todoEdit} todoUpdate={todoUpdate} setTodoEdit={setTodoEdit} />
                </div>
            </div>
        </div>
    )
}
export default App
