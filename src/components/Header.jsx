import React from 'react';

// Import static assets
import Logo from './../Assets/Images/cp2020-logo.png';

const Header = (props) => {
  return (
    <div className="header">
      <img src={Logo} alt="Cyberpunk 2020 Logo" className="responsive"/>
        <h1>Cyberpunk 2020 Character Generator</h1>
    </div>
  )
}

export default Header