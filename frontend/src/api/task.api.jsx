import axios from "axios";

export const getTasksRequest = async () => 
    await axios.get("http://localhost:3001/task");

export const createTaskRequest = async (task) => 
    await axios.post("http://localhost:3001/task", task);

export const deleteTaskRequest = async (id) =>
    await axios.delete(`http://localhost:3001/task/${id}`);

export const getTaskRequest = async (id) => 
    await axios.get(`http://localhost:3001/task/${id}`)

export const updateTaskRequest = async (id, newData) => 
    await axios.put(`http://localhost:3001/task/${id}`, newData)
    
export const taskToggleRequest = async (id, done) =>
    await axios.put(`http://localhost:3001/task/${id}`, {
        done,
    })

