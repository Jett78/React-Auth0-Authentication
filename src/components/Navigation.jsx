import React from 'react'

const Navigation = () => {
  

  return (
    <div>
        <section className='flex justify-between px-[22vh] py-5  bg-blue-300'>
            <h2 className='text-2xl font-semibold'>Authentication</h2>
            <nav className='flex items-center gap-10 list-none text-l font-semibold text-gray-700'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </nav>
        </section>
    </div>
  )
}

export default Navigation