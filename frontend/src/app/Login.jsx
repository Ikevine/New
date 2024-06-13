import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../controller/userController.js'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Alert from '../components/Alert';

export default function () {

    // Use user context
  const { setUser } = useContext(UserContext)

  // Use navigate hook
  const navigate = useNavigate()

  // Error state
  const [error, setError] = useState(null);

  // Form data state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Login the user
      await loginUser(email, password);
      // Update the user state
      setUser({email, posts: []})
      // Navigate to dashboard
      navigate('/dashboard')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
         <div className="w-[80%] flex flex-col text-center gap-6">

              <h1 className='text-xl font-bold text-blue-800'>Login form</h1>

              <form onSubmit={handleLogin} className='flex flex-col gap-4'>

                <input 
                type="text" 
                placeholder='Enter your email'
                className='border w-full p-4 focus:outline-none rounded-md'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder='Enter your password'
                className='border w-full p-4 focus:outline-none rounded-md'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button className='w-full py-4 bg-blue-800 rounded-md text-white font-medium text-xl hover:opacity-90'>Sign in</button>
              </form>
              
              <p>Don't have an account? <Link className='text-md font-bold text-blue-800' to="/register">Sign Up</Link></p>
         </div>
         {error && <Alert msg={error} />}
    </section>
  )
}
