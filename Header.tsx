import React from 'react'
import Image from "next/image"
const Header = () => {
  return (
    <header  className='header'>
      {/* <Image src="/Images/imran.jpg" alt="website logo" width={50}height={50}/> */}
        <nav className='nav '>
        <ul className ="ul">
        <li>Home</li>
        <li>About</li>
        <li>contact us</li>
        <li>Services</li>
      </ul>
      </nav>
      
    </header>
  )
}

export default Header
