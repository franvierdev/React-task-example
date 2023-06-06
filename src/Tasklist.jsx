import { useContext } from "react"
import TaskCard from "./TaskCard"
import { TaskContext } from './context/TaskContext'
// console.log(tasks)
function Tasklist() {

  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="text-white font-bold capitalize text-5xl mt-40 text-center">no hay tareas pendientes </h1>
  }
  return <div className="grid grid-cols-4 gap-2 ">{

    tasks.map((task) => (
      <TaskCard key={task.id} task={task} />
    ))
  }
  </div>
}

export default Tasklist