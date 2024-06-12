import React from 'react'
import { FaHeartbeat } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-16 py-4'>
       {/* logo */}
       <Link to="/">
        <div className="flex gap-2">
            <span className='text-2xl font-bold text-blue-900'><FaHeartbeat/></span>
            <h1 className='font-bold text-blue-900'>Heart heal</h1>
        </div>
       </Link>
       
       {/* Link to other pages */}
       <ul className='flex gap-4 font-medium text-blue-950'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/Login'><li>Login</li></Link>
       </ul>
    </nav>
  )
}
