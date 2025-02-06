// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

import List from './components/List.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
// use this for the project cards - map over projectCardArray in function App() - see activity 10

// const projectCardArray = [
//   {
    // id: 1,
//     projectName: 'Saye's Shelter (Project 1)',
//     projectImg: {},
//     projectRepoLink: '',
//     projectDeployedLink?: '',
//   },
//   {
    // id: 2,
//     projectName: 'README Generator',
//     projectImg: {},
//     projectRepoLink: '',
//     projectDeployedLink?: '',
//   },
//   {
    // id: 3,
//     projectName: 'Vehicle Builder',
//     projectImg: {},
//     projectRepoLink: '',
//     projectDeployedLink?: '',
//   },
//   {
    // id: 4,
//     projectName: 'Weather Dashboard',
//     projectImg: {},
//     projectRepoLink: '',
//     projectDeployedLink?: '',
//   },
//   {
    // id: 5,
//     projectName: 'Employee Tracker',
//     projectImg: {},
//     projectRepoLink: '',
//     projectDeployedLink?: '',
//   },
//   {
    // id: 6,
//     projectName: 'Portfolio',
//     projectImg: {},
//     projectRepoLink: '',
//     projectDeployedLink?: '',
//   },
// ];

function App() {

  // const [page, setPage] = useState(?)

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
