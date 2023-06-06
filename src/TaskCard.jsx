import { useContext } from 'react'
import { TaskContext } from './context/TaskContext'



function TaskCard({ task }) {

  const { deleteTask } = useContext(TaskContext)
  // console.log(valor)



  return (
    <div className='bg-gray-800 text-white  p-4  rounded-xl' >
      <h1 className=' font-bold capitalize  text-2xl'>{task.title}</h1>
      <p className='text-gray-300 '>{task.description}</p>
      <button className='bg-red-500 px-1 py-1 rounded-md mt-4 hover:bg-red-400 text-blue' onClick={() => deleteTask(task.id)} >Eliminar Tarea</button>
    </div>
  )
}

export default TaskCard