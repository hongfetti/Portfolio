import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
// use this for the project cards - map over someName (placeholder name) in function App() - see activity 10
// const someName = [
//   {
//     projectName: '',
//     projectImg: {},
//     projectrRepoLink: '',
//     projectDeployedLink: '',
//   }
// ]
function App() {

  const [count, setCount] = useState(0)
  // note to self, remove header and footer once component pages are complete and connected
  return (
    <>
      <Header />
      <main>
        <ul>
          <li>Why is the width only as long as the longest section of text on the page instead of just taking up the entire page?</li>

          <li>import header appears to be working but getting a red line underneath, application still runs however?</li>
        </ul>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            This card is a placeholder
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
