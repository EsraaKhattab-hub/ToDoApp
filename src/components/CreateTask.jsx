import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Toast  from "react-hot-toast";




const CreateTask = ({tasks , setTasks}) => {

    const [task,setTask]= useState({
        id:"",
        name:"",
        description:"",
        deadline:"2023-07-11T14:54:34.736Z",
        status:"todo",
    });

    console.log(task);

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(task.name.length < 3) return Toast.error("a task must have more than 3 characters")

        setTasks((prev)=>{
            const list = [...prev,task];

            window.localStorage.setItem("tasks",JSON.stringify(list));
            return list;
        });

        Toast.success("Task Created");


        setTask({
            id:"",
            name:"",
            description:"",
            status:"todo",
    
        });
    

    };


    return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" 
        className="border-2 mt-3 border-slate-400 bg-slate-100 mb-2 rounded-md mr-4 px-1"
        value={task.name}
        onChange={(e)=>setTask({...task,id:uuidv4(),name:e.target.value})}/>
        <br></br>
        <textarea placeholder="description" 
        className="border-2 mt-3 border-slate-400 bg-slate-200  rounded-md w-64 px-1 mr-2 h-14"
        value={task.description}
        onChange={(e)=>setTask({...task,id:uuidv4(),description:e.target.value})}/>
        <button className="bg-cyan-500 rounded-md px-4 h-10 text-white 
        ">Create</button>
    </form>
    );
};
 
export default CreateTask;