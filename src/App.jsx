// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
// use this for the project cards - map over projects in function App() - see activity 10



function App() {

  // const [state, setState] = useState('/')

  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  )
}

export default App
