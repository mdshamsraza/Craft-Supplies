import React from 'react'
import { NavLink } from 'react-router-dom'
import { SiShopee } from "react-icons/si";

function Header() {
  return (
  <>
  <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand " href="/">
   🛍️ Craft Supplie 
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link text-white " aria-current="page" href="#">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Category" className="nav-link"  href="#">
            Category
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Register" className="nav-link" href="#">
            Sign in
          </NavLink>
        </li>   
        <li className="nav-item">
          <NavLink to="/Login" className="nav-link" href="#">
            Login
          </NavLink>
        </li>   
        <li className="nav-item">
          <NavLink to="/Cart" className="nav-link" href="#">
            Cart (0)
          </NavLink>
        </li>   
      </ul>
      
    </div>
  </div>
</nav>

  </>
  )
}

export default Header