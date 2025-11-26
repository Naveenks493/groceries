import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Routers from './Routers.jsx'
import { Bounce, ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routers />

<ToastContainer 
position='top-right'
reverseOrder={false}
/>


 </BrowserRouter>
)
