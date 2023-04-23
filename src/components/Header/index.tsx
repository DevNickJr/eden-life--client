import React from 'react'
import { useLocation, Link } from 'react-router-dom'


const Header = () => {

  return (
      <header className='bg-white shadow-md flex items-center justify-between py-2 px-4 md:py-5 md:px-10 lg:px-24 fixed top-0 left-0 z-10 w-full min-h-[50px]'>
        <Link to={"/"}>
          {/* <img src={Logo} alt="" className='h-8 md:h-12' /> */}
          EDEN LIFE
        </Link>
        <nav className="hidden md:flex items-center gap-x-14 md:gap-4 lg:gap-7">
          <ul className='flex flex-col md:flex-row items-center text-sm text-dark-light gap-7 md:gap-4 lg:gap-7 font-medium'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/blogs">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header;