import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
// import { createBrowswerRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
// import Error from './pages/Error.jsx'
// import Portfolio from './pages/Portfolio.jsx'
// import Contact from './pages/Contact.jsx'
// import Resume from './pages/Resume.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <About />,
//       },
//       {
//         path: '/About',
//         element: <About />,
//       },
//       {
//         path: '/Portfolio',
//         element: <Portfolio />,
//       },
//       {
//         path: '/Contact',
//         element: <Contact />,
//       },
//       {
//         path: '/Resume',
//         element: <Resume />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router} />
  <StrictMode>
    <App />
  </StrictMode>,
);
