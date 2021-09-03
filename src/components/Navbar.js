import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="header">
      
        <div className="logo">Capo Calculator</div>
        <div className="nav-items">
          <ul>
            <li><Link to="/capo_calculator">Calc some chords</Link></li>
            {/* <li><a href="/show_chord">Look up a cowboy chord</a></li> */}
            <li><Link to="/capo_calculator/capo_check">Capo Note Check</Link></li>
            <li><Link to="#">What chord should I play? </Link></li>
            
          </ul>
        </div>
      
    </div>
  )
}

export default Navbar;