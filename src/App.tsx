import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import Home from './pages/index'
import About from './pages/about'
import CreateNote from './pages/create-note'
import MyNotes from './pages/my-notes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/mynotes" element={<MyNotes />} />
        <Route path="/createnote" element={<CreateNote />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
