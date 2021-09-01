import React from 'react';

const Navbar = () => {
  return (
    <div className="header">
      
        <div className="logo">Capo Calculator</div>
        <div className="nav-items">
          <ul>
            <li><a href="/capo_calculator/calc">Calc some chords</a></li>
            {/* <li><a href="/show_chord">Look up a cowboy chord</a></li> */}
            <li><a href="/capo_calculator/capo_check">Capo Note Check</a></li>
            {/* <li><a href="#">What chord should I play? </a></li> */}
            
          </ul>
        </div>
      
    </div>
  )
}

export default Navbar;