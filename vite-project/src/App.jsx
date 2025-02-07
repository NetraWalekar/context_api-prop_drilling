import React from 'react'
import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom'
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))

function App() {


  return (
    
    <BrowserRouter>
    <AppBar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/' element={<Landing></Landing>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

function AppBar(){
  const navigate = useNavigate()
  return(
      <div>
        <button onClick={() => {
         navigate("/")
        }}>Landing</button>
        <button onClick={() => {
         navigate("/dashboard")
        }}>Dashboard</button>
      </div>
  )
}

export default App
