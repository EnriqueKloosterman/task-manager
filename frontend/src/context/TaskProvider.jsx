import { createContext, useContext, useState } from "react";
import { deleteTaskRequest, getTasksRequest, createTaskRequest, getTaskRequest, updateTaskRequest, taskToggleRequest } from "../api/task.api";
import {TaskContext} from './TaskContext';



export const useTask = () => {
    const context = useContext(TaskContext)
    if(!context){
        throw new Error("useTask must be used within a TaskContextProvider")
    }
    return context;
}

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    async function loadTask(){
        const response = await getTasksRequest()
        setTasks(response.data);
    }

    const deleteTask = async (id) => {
        try{            
            const response = await deleteTaskRequest(id)
            setTasks(tasks.filter(task => task.id !== id))
            console.log(response);
        }
        catch(error){
            console.error(error)
        }
    }
    const createTask = async(task) =>{
        try{
            const response = await createTaskRequest(task)
            console.log(response);
        }
        catch(error) {
            console.error(error)
        }
    }
    const getTask = async (id) => {
        try {
            const response = await getTaskRequest(id);
            return response.data
        }
        catch(error) {
            console.error(error)
        }
    }
    const updateTask = async (id, newData) => {
        try{
            const response = await updateTaskRequest(id, newData);
            console.log(response);
        }
        catch(error){
            console.error(error)
        }
    }

    const toggleTaskDone = async (id) => {
        try{
            const taskFound = tasks.find((task) => task.id === id);        
            await taskToggleRequest(id, taskFound.done === 0 ? true : false);
            // tasks.map(task => task.id === id ? task.done = task.done === 0 ? 1 : 0 : task.done);
            // setTasks([...tasks]);
            setTasks(
                tasks.map((task) => 
                    task.id === id ? { ...task, done: !task.done } : task
                    )
                );
            console.log(taskFound.done)
        }
        catch(error){
            console.error(error);
        }
    }

    return <TaskContext.Provider value={{ tasks, loadTask, deleteTask, createTask, getTask, updateTask, toggleTaskDone }}>
            {children}
        </TaskContext.Provider>;
};
