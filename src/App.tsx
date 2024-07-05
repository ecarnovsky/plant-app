import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import CreateNote from './pages/create-note'
import MyNotes from './pages/my-notes'
import Signup from './pages/signup'
import Login from './pages/login'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/mynotes" element={<MyNotes />} />
        <Route path="/createnote" element={<CreateNote />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

