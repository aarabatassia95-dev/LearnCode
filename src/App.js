import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PrPage from './PrPage'
function App() {
  return (
    <div>
      <Routes>  
        <Route path='/' element={<PrPage/>}/>
      </Routes>
    </div>
  )
}

export default App
