import React from 'react'

function Content() {
  return (
    <div className='pt-10 overflow-clip bg-[url(/src/react-logo.png)] bg-no-repeat min-h-[800px] bg-[left_calc(150%)_top_calc(100%)] bg-size-[300px]'>
        {/* <div className='z-10 absolute right-8'>
            <img src='/src/react-logo.png' alt='background' className='opacity-10' width={"300px"}/>
        </div> */}
        <h1 className='text-4xl font-semibold text-white'>Fun facts about React</h1>
        <ul className='list-disc text-[#00DBFF] ps-10 pt-8'>
            <li className='p-1'><span className='text-gray-200'>Was first released in 2019</span></li>
            <li className='p-1'><span className='text-gray-200'>Was originally create by Jordan Walke</span></li>
            <li className='p-1'><span className='text-gray-200'>Was well over 200k stars on GitHub</span></li>
            <li className='p-1'><span className='text-gray-200'>Is maintained by Meta</span></li>
            <li className='p-1'><span className='text-gray-200'>Powers thousands of entreprise apps, including mobile apps</span></li>
        </ul>
    </div>
  )
}

export default Content