import React from 'react'
import ReactDOM from 'react-dom/client'
// import Login from './pages/LoginPage/Login'
// import Home from './pages/HomePage/Home'
import Page from './pages/OtherPage/Page' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login/> */}
    {/* <Home/> */}
    <Page/>
  </React.StrictMode>,
)