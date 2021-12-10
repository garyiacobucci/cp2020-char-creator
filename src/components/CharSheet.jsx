import React from 'react';
import { Button } from '@material-ui/core';

const CharSheet = () => {
  return (
    <div className="component-wrapper">
      <div className="widget">
        <p>HANDLE  
          ROLE  
          CHARACTER POINTS  
          STATS
          INT [   ] REF [   ] TECH [   ] COOL [   ]
          ATTR [   ] LUCK [   ] MA [   ] BODY [   ]
          EMP [   ] Humanity [   ]
          Run [   ] Leap [   ]
          Lift (kgs) [   ] Lift (lbs) [   ]
          Carry (kgs) [   ] Carry (lbs) [   ]
          SAVE
          
          BTM

          SKILLS
          STYLE
          Clothes:  
          Hair:  
          Affectations:  
          Ethnicity:  
          Language:  
          FAMILY BACKGROUND
          Family Ranking:  
          Status of Parents:  
          Family Status:  
          Childhood Environment:  
          SIBLINGS   
          MOTIVATIONS
          Personality Traits:  
          Valued Person:  
          Value Most:  
          Feel About People:  
          Valued Posession:  
          LIFE EVENTS
          Age:
        </p>
      </div>

      <div>
          <Button variant="contained">Copy Character To Clipboard</Button>
      </div>


    </div>
  )
}

export default CharSheet