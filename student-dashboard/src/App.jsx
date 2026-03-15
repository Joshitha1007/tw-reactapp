import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './components/sidebar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <main className='Main'>
        <Outlet />
      </main>
    </div>
  )
}
export default App;


 