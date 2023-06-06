import {createContext, useState, useEffect} from 'react'
import {Tasks as data} from "../Task"

export const TaskContext = createContext()


export function TaskContextProvider(props) {

   const [tasks, setTasks] = useState([]);

   function deleteTask(taskId){
setTasks(tasks.filter(task => task.id !== taskId))
}

  useEffect(() => {
  setTasks(data);
  }, []);



   function createTask(task){

// ------------otra forma de crear la linea de arriba----------
// function createTask(taskTitle, descriptionTask(ver en TaskForm)){
//   ---------------------------------------------------------
  setTasks([...tasks,{
    title: task.title,
    id: tasks.length,
    description: task.description,
  } ])

}
  return (
   <>
   <TaskContext.Provider value={{tasks,
  deleteTask, createTask}}>
    {props.children}
   </TaskContext.Provider>
   
   </>
  )
}

