import React from 'react';
import './../styles.scss';
import Header from './Header';
import Stats from './Stats';
import Role from './Role';
import CharSheet from './CharSheet';
import Info from './Info';
import Footer from './Footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="column-container">
        <Info />
        <Stats />
        <Role />
        <CharSheet />
        <Footer />
      </div>
    </div>
  )
}

export default App