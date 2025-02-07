// import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

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
