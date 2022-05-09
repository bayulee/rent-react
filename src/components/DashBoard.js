import React from 'react'
import logo from "../imgs/logo.jpg"
import Link from "react"
function DashBoard() {
  return (
    <div>
    <header>
    <img src={logo} alt="logo" width="100px"className='img'/>
    <nav>
    <h1>HOUSE RENT MANAGEMENT APP. (WA MUNICIPAL)</h1>
    <Link to={"/Login"}>Login</Link>
    <Link to={"/Register"}>Register</Link>
    
    </nav>
    </header>
    <banner>
    <div>
    <img src="./imgs/logo.jpg" alt="logo"/>
    <div>house management app</div>
    </div>
    </banner>
    </div>
  )
}

export default DashBoard