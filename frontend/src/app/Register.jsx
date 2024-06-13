import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../controller/userController.js";
import { UserContext } from "../contexts/UserContext";
import { Link } from 'react-router-dom'
import Alert from "../components/Alert.jsx";

export default function Register() {
      // Use user context
  const { setUser } = useContext(UserContext)

  // Use navigate hook
  const navigate = useNavigate()

  // Error state
  const [error, setError] = useState(null);

  // Form data state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // Handle login
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Register the user
      await registerUser(
        formData.email,
        formData.password,
        formData.passwordConfirm
      );
      // Update the user state
      setUser({email: formData.email, posts: []})
      // Navigate to dashboard
      navigate('/dashboard')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section onSubmit={handleRegister} className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>

         <div className="w-[80%] flex flex-col text-center gap-6">

              <h1 className='text-xl font-bold text-blue-800'>Register form</h1>

              <form className='flex flex-col gap-4'>

                <input 
                type="text" 
                placeholder='Enter your email'
                className='border w-full p-4 focus:outline-none rounded-md'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input 
                type="password" 
                placeholder='Enter your password'
                className='border w-full p-4 focus:outline-none rounded-md'
                value={formData.password}
                onChange={(e) =>
                 setFormData({ ...formData, password: e.target.value })
                 }
                />
                <input 
                type="password" 
                placeholder='Confirm password'
                className='border w-full p-4 focus:outline-none rounded-md'
                value={formData.passwordConfirm}
                onChange={(e) =>
                  setFormData({ ...formData, passwordConfirm: e.target.value })
                }
                />
                <button className='w-full py-4 bg-blue-800 rounded-md text-white font-medium text-xl hover:opacity-90'>Sign in</button>

              </form>

              <p>Already have an account? <Link className='text-md font-bold text-blue-800' to="/login">Sign In</Link></p>

         </div>

         {error && <Alert msg={error} />}
    </section>
  )
}
