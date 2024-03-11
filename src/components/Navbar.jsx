import { useState } from "react"
import './navbar.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)  
  return (
    <nav className='navbar'>
        <div className='navbar__container'>
            <a href="#">
                <h3 className="navbar__icon">
                    JuliusPage
                </h3>
                <ul className="navbar__menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </a>
        </div>
    </nav>
  )
}

export default Navbar