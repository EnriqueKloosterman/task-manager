import React, { useEffect } from 'react'
import TaskCard from '../components/TaskCard'
import { useTask } from '../context/TaskProvider'

const TaskPage = () => {
    const {tasks, loadTask} = useTask()
    
    useEffect(() => {
        loadTask()
    },[])

    function renderMain() {
        if(tasks.length == 0) return <h2 className='bg-slate-200 text-xl text-center p-3 rounded-md'>No hay ninguna tarea por realizar 🤷🏻‍♂️</h2>
        return tasks.map( task => (
            <TaskCard  task={task} key={task.id} />
        ))
    }

    return (
        <div>
            <h2 className='text-4xl text-white font-bold text-center mb-8'>Tareas</h2>
            <div className="grid grid-cols-3 gap-3">
                {renderMain()}
            </div>


        </div>
    )
}

export default TaskPage