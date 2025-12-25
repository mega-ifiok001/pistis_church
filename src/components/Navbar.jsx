import React from 'react'
import { Link } from 'react-router-dom'
import official_logo from '../assets/pistis_logo.avif'

const Navbar = () => {
  return (
    <>
        <nav className="bg-black p-2 text-white">
            <div className="container mx-auto">
                <img src={official_logo} className='w-50' alt="Official Logo" />
            </div>
        </nav>
    </>
  )
}

export default Navbar