import React from 'react';
import './Header.css'
const Header = () => {
    return (
            
       <div className=' mx-auto w-100'>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand text-warning ps-5" href="/Meal">Meal DB</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav nav-item  ms-auto mb-2 mb-lg-0 pe-5">
       
        <a className="nav-link nav-hover  text-light"  href="/">Shop</a>
        <a className="nav-link text-light" href="/">Order</a>
        <a className="nav-link text-light  " href='/'>Review</a>
        
      </ul>
      
    </div>
  </div>
</nav>
        </div>
       </div>
    );
};

export default Header;