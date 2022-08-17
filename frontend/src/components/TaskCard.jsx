import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTask } from '../context/TaskProvider'

const TaskCard = ({task}) => {

    const {deleteTask, toggleTaskDone } = useTask();
    const navigate = useNavigate();

    // let completed = task.done;

    const toggleTask = async () => {
        await toggleTaskDone(task.id)
    }



    return (
        <div className='bg-slate-200 rounded-md p-4'>
            <div className="flex justify-end">
                <span className='bg-stone-100 p-1 rounded-full ' onClick={() => toggleTask(task.done)}>{task.done == 1 ? "✔" : "❌" }</span>
            </div>
            <h3 className='text-md font-bold text-center bg-stone-100 rounded-md p-2 my-3'>{task.task}</h3>
            <span>{task.createdAt}</span>
            <div className="flex gap-x-5 justify-end">
                <button className='bg-stone-100 p-1 rounded-full' onClick={() => deleteTask(task.id)}>🗑</button>
                <button className='bg-stone-100 p-1 rounded-full' onClick={() => navigate(`/edit/${task.id}`)}>📃</button>
            </div>
            {/* <button onClick={() => toggleTask(task.done)}>
                {task.done === 0 ? '❌' : '✔'}
            </button> */}
        </div>
    )
}

export default TaskCard