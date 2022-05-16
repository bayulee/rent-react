import React from 'react'
import { Link} from "react-router-dom"
function Footer() {
  return (
    <footer className='page-footer'>
    <div className='footer-copyright'>
    <div className='container'>
    &copy;Bayson & Love (Rent Management App) 2022
    <div>email:bayuleepaul@gamil.com</div>
    <div>contacts: 0556161288 </div>
    </div>
    <nav className="navigation">
    <ul>
    <li>
    <Link to="/login">Login</Link>
    </li>
    <li>
    <Link to="/register">Register</Link>
    </li>
    </ul>
  </nav>
    </div>
    </footer>
  )
}

export default Footer