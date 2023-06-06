import { useState, useContext } from "react"
import { TaskContext } from './context/TaskContext'
// import {Tasks} from "./Task.js"
// import Tasklist from "./Tasklist.jsx";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ title, description });
    setTitle('')
    setDescription('')
    // ------otra forma de crear la linea de arriba(ver en TaskContent)------
    // ------NOTA: cuando se guarda una prop generica (para todos, se colocan llaves)------
    // createTask(taskTitle, descriptionTask);
    // ------NOTA: cuando se guarda una prop en especifico (no se colocan llaves)------
    // --------------------------------------------------
  }
  return (
    <div className="bg-slate-800 max-w-md mx-auto mb-3 rounded-xl">
      <form onSubmit={handleSubmit} className="p-10">
        <h1 className="text-white text-2xl font-bold mb-4">Escribe tu Tarea</h1>
        <input className="bg-slate-300 p-3 w-full mb-2" placeholder="Titulo de la Tarea"
          onChange={(e) => setTitle(e.target.value)} value={title} required autoFocus />
        <textarea className="bg-slate-300 p-3 w-full mb-2" placeholder="Escribe el contenido de la tarea" onChange={(e) => setDescription(e.target.value)} value={description} required></textarea>
        <button className="bg-indigo-500 rounded-sm px-3 py-1 text-white hover:bg-indigo-400" >Agregar</button>
      </form></div>
  )
}

export default TaskForm
