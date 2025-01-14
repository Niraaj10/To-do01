import React from 'react'


const Header = () => {
  return (
    <>
        <header className='w-full p-4 flex justify-between fixed top-0 z-10 border-b border-green-200 backdrop-blur-lg'>
            <div className='flex gap-4'>
                <div>hamBurger</div>
                <div>DoIt</div>
            </div>
            <div>
                <ul className='flex gap-4'>
                    <li>Search</li>
                    <li>menu</li>
                    <li>light/dark</li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default Header
