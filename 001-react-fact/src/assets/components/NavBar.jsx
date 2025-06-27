import React from 'react'

function NavBar() {
  return (
    <div className='flex-grow'>
        <nav className='flex flex-row items-center gap-3 border-b-1 border-gray-600 pb-4'>
            
            <img src='/src/react-logo.png' alt='React logo' width={"50px"}/>
            <h1 className='text-[#00DBFF] text-4xl'>ReactFacts</h1>
        </nav>
    </div>
  )
}

export default NavBar