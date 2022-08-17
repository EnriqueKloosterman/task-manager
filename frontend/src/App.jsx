import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import TaskForm from './pages/TaskForm'
import TaskPage from './pages/TaskPage'
import { TaskContextProvider } from './context/TaskProvider'



const App = () => {
  return (
    <div className="bg-zinc-800 h-screen ">
          <Navbar />
      <div className="container mx-auto py-4">
        <TaskContextProvider>
          <Routes>
            <Route exact path="/" element={<TaskPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App
