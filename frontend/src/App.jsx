import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SendMoney from './components/SendMoney'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import Signup from './pages/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/sendmoney" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
