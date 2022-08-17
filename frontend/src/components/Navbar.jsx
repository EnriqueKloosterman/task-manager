import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-zinc-600 flex justify-between px-10 py-2'>
            <Link to='/'>
                <h2 className='text-stone-100 font-bold'>Task Manager</h2>
            </Link>
            <ul className='flex gap-x-5 text-stone-50'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/new">Create Task</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar