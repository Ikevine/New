import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom';

// Importing pages
import Home from './app/Home';
import Login from './app/Login';
import Register from './app/Register';
import Navbar from './components/Navbar';
import Dashboard from './app/Dashboard';
import Error from './app/Error';

export default function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}
