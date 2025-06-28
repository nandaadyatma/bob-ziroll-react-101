import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

function App() {

  const ninjaTurtles = ['Leonardo', 'Michelangelo', 'Donatello', 'Raphael'];

  return (
    <div>
      {
        ninjaTurtles.map((turtle) => {
          return (
            <p>
              {turtle}.
            </p>
          )
        })
      }
    </div>
  )
}

export default App
