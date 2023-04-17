import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Customer from './views/Customer'

function App() {

  return (
    <div className="App flex">
      <Sidebar/>
      <Customer/>
    </div>
  )
}

export default App
