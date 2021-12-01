import React from 'react';
import './../styles.scss';
import MyImage from './../Assets/Images/cp2020-logo.png';

const Home = () => {
  return (
    <div className="container">
      <div className="header">
          <h1>Welcome to React application</h1>
      </div>
      <div className="react-logo"></div>
      <img src={MyImage} alt="torchlight in the sky" />
    </div>
  )
}

export default Home