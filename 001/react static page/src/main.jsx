// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { createRoot } from "react-dom/client";

var root = createRoot(document.getElementById("root"))
root.render(
  <div>
    <h1>Hello World</h1>
  </div>
)