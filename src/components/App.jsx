import React from 'react';
import './../styles.scss';
import Build from './Build';
import CharSheet from './CharSheet';
import Info from './Info';

// Import static assets
import Logo from './../Assets/Images/cp2020-logo.png';

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <img src={Logo} alt="Cyberpunk 2020 Logo" className="responsive"/>
          <h1>Cyberpunk 2020 Character Generator</h1>
      </div>

      <Info />
      <Build />
      <CharSheet />
  
    </div>
  )
}

export default App