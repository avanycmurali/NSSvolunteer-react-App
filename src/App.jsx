import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddNss from './components/AddNss'
import ViewNss from './components/ViewNss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddNss/>}/>
      <Route path='/view'element={<ViewNss/>}/>
      </Routes></BrowserRouter>
      
    </>
  )
}

export default App
