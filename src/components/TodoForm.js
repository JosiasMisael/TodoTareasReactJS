import React, {useState, useEffect} from 'react'
const initialForms ={
    title:'',
    description:'',
}
const TodoForm = ({todoAdd, todoEdit, todoUpdate, setTodoEdit}) => {

    const [values, setValues] = useState(initialForms);
    const {title, description} = values;
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] =useState(null);

    useEffect(() => {

        if (todoEdit) {
            setValues(todoEdit)
        }else{
            setValues(initialForms);
        }
    }, [todoEdit]);
    
    const handleInputRequest =(e)=>{
       const changueFormValues ={
           ...values,
           [e.target.name]: e.target.value
       }
       setValues(changueFormValues);
    }


    const handleSubmit = (e)=>{
     e.preventDefault();
     if(title.trim() === ''){
         setError('Debes de indicar un titulo');
         return;
        }
        if(description ===''){
         setError('Debes de indicar una descripcion');
         return;
     }
     if (todoEdit) {
         todoUpdate(values)
         setSuccessMessage('Actualizado con exito');
     }else{
         todoAdd(values);
         setSuccessMessage('Agregado con exito');
         setValues(initialForms);
     }
      setTimeout(() => {
          setSuccessMessage(null);
      }, 2000);
     setError(null);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="texto text-center display-5">{todoEdit ?'Editar Tarea' :'Nueva Tarea'}</h1>
               {
               (todoEdit)&& <button onClick={()=>{setTodoEdit(null); setValues(initialForms);}} className="btn btn-sm btn-outline-warning">Cancelar Edicion</button>
               }  
                <div className="d-grid gap-3">
                    <div className="p-2 mt-3 bg-light border ">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Titulo</label>
                        <input onChange={handleInputRequest} className="form-control" name="title" type="text" placeholder="Titulo" aria-label="default input example" value={title} />
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Descripcion</label>
                        <textarea onChange={handleInputRequest} className="form-control" type="text" placeholder="Descripcion" name="description" aria-label="default input example" value={description}></textarea>
                        <button type="submit" className="btn mt-3 btn-sm btn-outline-primary btn-block">{todoEdit ? 'Editar': 'Guardar'}</button>
                    </div>
                </div>
            </form>
            {
             (error) &&(
                 <div className="alert alert-danger mt-4">{error}</div>
                 )
             }
             {
                 successMessage && (
                    <div className="alert alert-success mt-4">{successMessage}</div>
                 )
             }
        </div>
    )
}

export default TodoForm
