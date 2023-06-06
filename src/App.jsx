
import Tasklist from "./Tasklist.jsx"
import { TaskContext } from './context/TaskContext'
import TasksForm from "./TaskForm.jsx"
import { useState, useEffect } from 'react'
// --------------rfce(crear componente generico)------------------
function App() {
  return (<main className="bg-zinc-900 h-screen p-3">
    <div className="container mx-auto p10">
      <TasksForm />
      <Tasklist />
    </div>
  </main>
  );


}

// -------------------CONTADOR-----------------------
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
