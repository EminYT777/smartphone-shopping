import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Profile from './pages/Profile'
import Registration from './pages/Registration'
import Smartphones from './pages/Smartphones'
import ErrorPage from './pages/ErrorPage'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/smartphones" element={<Smartphones />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
      
    </>
  )
}

export default App
