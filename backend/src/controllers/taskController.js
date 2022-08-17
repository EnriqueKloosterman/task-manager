const express = require('express');
const db = require('../database/models')

const taskController = {
    // mostrar todas las tartes
    getTasks: async (req, res) => {
        try{

            let allTasks = await db.Task.findAll()
            return res.json(allTasks)
            
        }
        catch(error){
            return res.status(500).json({ message: error.massage })
        }
    },
    // Obtener una tarea
    getTask: async (req, res) => {
        try{

            let id = req.params.id
            let singleTask = await db.Task.findByPk(id)
            
            if(singleTask == null){
                return res.status(404).json('tarea no encontrada')
            }
            return res.json(singleTask)
        }
        catch(error){
            return res.status(500).json({ message: error.massage })
        }
    },
    // crear una tarea
    createTask: async (req, res) => {
        try{

            const newTask = await db.Task.create({
                task: req.body.task,
                user_id: 1,
                done: 0
            }) 
            // return res.status(200).json(allTasks)
            return res.send('creando tareas')
        }
        catch(error){
            return res.status(500).json({ message: error.massage })
        }
    },
    // editar una tarea
    editTask: async (req, res) => {
        try{

            let id = req.params.id
            await db.Task.update({
                task: req.body.task
            },
            {
                where:{
                    id: id
                }
            })
            return res.send('tarea editada')
        }
        catch(error){
            return res.status(500).json({ message: error.massage })
        }
    },
    // eliminar una tarea
    deleteTask: async (req,res) => {
        try{

            let id = req.params.id;
            await db.Task.destroy({
                where:{
                    id: id
                }
            })
            return res.send('borrando tareas')
        }
        catch(error){
            return res.status(500).json({ message: error.massage })
        }
    }


}

module.exports = taskController;