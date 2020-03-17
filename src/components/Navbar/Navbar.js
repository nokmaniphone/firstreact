import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return(
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Nokmaniphone S Sayavong</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">About <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="contacet.html">Contacet</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar