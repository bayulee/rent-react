import React from "react";
import logo from "../imgs/logo.jpg";
import { Link } from "react-router-dom";

function DashBoard() {
  return (
    <div>
      <header>
      <div>
        <img src={logo} alt="logo" width="100px" height="80px" className="img" />
        </div>
        <nav>
          <h4>HOUSE RENT MANAGEMENT APP. (WA MUNICIPAL)</h4>
          <ul>
          <li>
          <Link to="/login">Login</Link>
          </li>
          <li>
          <Link to="/register">Register</Link>
          </li>
          </ul>
        </nav>
      </header>
      <banner>
        <div>
          <img src="./imgs/logo.jpg" alt="logo" />
          <div>house management app</div>
        </div>
      </banner>
    </div>
  );
}

export default DashBoard;
