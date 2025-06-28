import React from 'react'

function Header() {
  return (
    <header className='flex flex-row items-center gap-4 border-b-1 border-gray-500 py-4 justify-center'>
        <img src="/src/globe.png" width={"32px"}/>
        <h1 className='text-2xl text-white pb-1'>my travel journal</h1>
    </header>
  )
}

export default Header