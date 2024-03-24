import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SendMoney from './components/SendMoney'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import Signup from './pages/Signup'
import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import Pagenotfound from './pages/Pagenotfound'

function App() {
  const [isAuth, setisAuth] = useState(false);
  const [toast, settoast] = useState({
    color: "",
    text: "",
    display: true,

  });


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<LoginPage toast={toast} settoast={settoast} setisAuth={setisAuth} />} />
          <Route path="/signup" element={<Signup toast={toast} settoast={settoast} setisAuth={setisAuth} />} />

          <Route path="/dashboard" element={<Dashboard toast={toast} settoast={settoast} setisAuth={setisAuth} />} />
          <Route path='/sendmoney' element={<SendMoney toast={toast} settoast={settoast} />} />
          <Route path='*' element={<Pagenotfound />} />


        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
