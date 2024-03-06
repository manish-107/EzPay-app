import './App.css'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
      <div className="flex justify-center h-screen bg-slate-300">
        <div className="flex flex-col justify-center">
          <div className="p-2 px-4 text-center bg-white rounded-lg w-80 h-max">
            <LoginPage />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
