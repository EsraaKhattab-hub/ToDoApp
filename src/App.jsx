import { useEffect, useState } from 'react'
import { getPosts } from './api/axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // console.log("tasks",tasks);

  useEffect(()=>{
    getPosts().then(JSON =>{
      setTasks(JSON.parse(localStorage.getItem("tasks")));
      return JSON
    }).then(JSON=>{
      setSearchResults(JSON)
    })
    // setTasks(JSON.parse(localStorage.getItem("tasks")));
  },[]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className="bg-slate-00 w-screen h-screen flex flex-col items-center p-3 pt-32 gap-16 ">
      <CreateTask tasks={tasks} setTasks={setTasks}/>
      <ListTasks tasks={tasks} setTasks={setTasks}/>
      </div>
    
      </DndProvider>
 
  )
}

export default App
