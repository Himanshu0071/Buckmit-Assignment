import { useState } from 'react'
import Sidebar from './sidebar/Sidebar'
import './App.css'
import Header from './Header/Header'
import Dashboard from './Dashboard/Dashboard'
function App() {

  return (
    <>
    <div className='container'>
     <Sidebar/>
     <div className='main-content'>
     <Header/>
     <Dashboard/>
     </div>
     </div>
    </>
  )
}

export default App
