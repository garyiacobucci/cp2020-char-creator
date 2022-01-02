import React, { useContext } from 'react';

// Import static assets
import LifepathImage from './../assets/images/cp2020-lifepath_image.jpg';

const LifePath = () => {

  //Connect to UserContext via Context API:
  /*const {
  } = useContext(UserContext);*/

  return (
    <div className="widget">
      <h2>Lifepath</h2>
      <p className="callout">Everyone on the street has a story. What's yours?</p>
      <p>
        lt's like climbing out of the clone vat. You got this half-formed person standing there, 
        dripping with slime. You got some stats, maybe an vague idea of where you're going with the character,
        but nothing else. So how do you take this Blank and make them really <i>Cyberpunk</i>?</p> 
      <p>
        You start with the Lifepath. Lifepath is a flowchart of "plot complications", designed to help you 
        give your Cyberpunk character an authentically dark future background. Its seven sections cover your 
        national and ethnic origins, your family, friends, enemies, personal habits and even key events on a 
        yearly basis. It's intended primarily as a guide; if you encounter something you don't think fits the
        character you've envisioned, feel free to change the path as you see fit. Remember; Cyberpunk hinges
        on roleplaying, so make use of the information in your Lifepath run. It's a guaranteed adventure generator!  
      </p>
      <img src={LifepathImage} alt="A cyberpsycho smashes a man into a wall, a detective, Johnny Silverhand, and two angry Corpos" className="responsive bordered-image"/>
    </div>
  )
}

export default LifePath