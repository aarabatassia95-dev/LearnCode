import React from 'react'
import "./App.css";
import { Link } from "react-router-dom";
function PrPage() {
  return (
    <div className="home">

      <nav className="navbar">
        <div className="navbar-inner">
          <div className="logo">Learn<span>Code</span></div>

          <ul className="nav-links">
            <li className="nav-item">HTML</li>
            <li className="nav-item">React</li>
            <li className="nav-item">CSS</li>
            <li className="nav-item">Bootstrap</li>
            <li className="nav-item">Mongodb</li>
            
          </ul>
          <button  className="login">Login in</button>

        </div> 
      </nav>

      <header className="hero">
        <div className="hero-card">
          <h1>Hi there !</h1>
          <h2>Begin your free programming course today</h2>
          <p>No credit card required</p>
            <Link to="/"  className="hero-link">Note Sure Where To Begin ?</Link>
          <div className="hero-actions">
            <button className="btn-start">Start Learning</button>
          </div>
        </div>
      </header>

    </div>
  )
}

export default PrPage
