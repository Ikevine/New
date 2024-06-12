import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    //hooks
    const [formData, setFormData] = useState({})
    

    //funtion to handle user input
    const handleTextChange =(e)=>{
        setFormData({
           ...formData,
            [e.target.id]: e.target.value
        })
    }
    console.log(formData);

  return (
    <section className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>

         <div className="w-[80%] flex flex-col text-center gap-6">

              <h1 className='text-xl font-bold text-blue-800'>Register form</h1>

              <form className='flex flex-col gap-4'>
                <input 
                type="text" 
                placeholder='Enter your username'
                className='border w-full p-4 focus:outline-none rounded-md'
                onChange={handleTextChange}
                id='username'
                />
                <input 
                type="text" 
                placeholder='Enter your email'
                className='border w-full p-4 focus:outline-none rounded-md'
                onChange={handleTextChange}
                id='email'
                />
                <input 
                type="password" 
                placeholder='Enter your password'
                className='border w-full p-4 focus:outline-none rounded-md'
                onChange={handleTextChange}
                id='password'
                />
                <input 
                type="password" 
                placeholder='Confirm password'
                className='border w-full p-4 focus:outline-none rounded-md'
                onChange={handleTextChange}
                id='confirm'
                />
                <button className='w-full py-4 bg-blue-800 rounded-md text-white font-medium text-xl hover:opacity-90'>Sign in</button>

              </form>

              <p>Already have an account? <Link className='text-md font-bold text-blue-800' to="/login">Sign In</Link></p>

         </div>
    </section>
  )
}
