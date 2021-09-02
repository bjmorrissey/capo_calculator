import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="header">
      
        <div className="logo">Capo Calculator</div>
        <div className="nav-items">
          <ul>
            <li><a href="/">Calc some chords</a></li>
            {/* <li><a href="/show_chord">Look up a cowboy chord</a></li> */}
            <li><a href="/capo_check">Capo Note Check</a></li>
            <li><a href="#">What chord should I play? </a></li>
            
          </ul>
        </div>
      
    </div>
  )
}

export default Navbar;