import {React, useEffect, useState} from 'react';
import {Form, Formik } from 'formik';
import { useTask } from '../context/TaskProvider';
import { useNavigate, useParams } from 'react-router-dom';


const TaskForm = () => {

    const {createTask, getTask, updateTask} = useTask()
    const  [task, setTask] = useState({
        task: ""
    })
    const params = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const loadTask = async () => {
            if(params.id){
                const task = await getTask(params.id);
                setTask({
                    task: task.task
                })
            }            
        }
        loadTask();
    },[])

    return (
        <div className=''>
            <h2 className='text-white font-bold text-4xl text-center my-8'>
                {params.id ? "Editar Tarea" : "Nueva Tarea"}
            </h2>
            
            <div>
                <Formik
                    initialValues={task}
                    enableReinitialize={true}
                    onSubmit={ async (values, actions) => {

                        if(params.id){
                            await updateTask(params.id, values)
                            navigate('/');
                        }else{
                            await createTask(values)
                            navigate('/');
                        }
                        
                        setTask({
                            task: ""
                        });                }}
                >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                        <Form className="bg-slate-200 rounded-md max-w-md p-4 mx-auto" onSubmit={handleSubmit}>
                            <label className="font-bold text-2xl block text-center pb-4" htmlFor="">
                                {params.id ? "Editar Tarea" : "Nueva Tarea"}
                            </label>
                            <textarea name="task" ows="3" placeholder='ingrerse una tarea' className='px-2 py-1 rounded-md w-full text-center mb-2'
                            onChange={handleChange} 
                            value={values.task}
                            ></textarea>
                            <button type='submit' disabled={isSubmitting} className="block bg-cyan-600 p-2 rounded-md text-stone-100 font-bold w-full my-4">
                                { isSubmitting ? "guardando" : "guardar" }
                            </button>
                        </Form>
                )}
                </Formik>
            </div>
            
        </div>
    )
}

export default TaskForm