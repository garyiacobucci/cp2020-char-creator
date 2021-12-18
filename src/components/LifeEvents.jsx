import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';
import PointsDistributor from './PointsDistributor';


const LifeEvents = () => {

  //Connect to UserContext via Context API:
  const {
    userHandle, age, setAge, lifeEvents, updateLifeEvents, 
  } = useContext(UserContext);

  //Local state for the checkbox to toggle allowing "Nothing happened that year" in life path.
  const [preventNothingHappened, setPreventNothingHappened] = useState(false);

  const randomAge = () => {
    return Math.floor(Math.random() * (99 - 17) + 17);
  }

  return (
    <div className="widget">
      <h3>4. Life Events</h3>
      <p>You know where you came from and what you look like. Now let's
        take a look at the major events that made you what you are. Choose&nbsp;
        {userHandle!=='' ? userHandle: <span>your character</span>}'s age.
        For each year of their life past 16, we'll determine a major event that
        shaped their life for that year.
      </p>   

      <div className="points-distributor-wrapper">
        <div className="points-distributor-category">
            <div className="point-value">{age}</div>
            <div className="category-name">Age</div>
            <button className="randomize" onClick={()=>{
              setAge(()=>randomAge())
            }}>Randomize</button>
        </div>
        <div className="points-distributor-control-panel">
          <button className="button" onClick={()=>setAge(age+1)} disabled={age > 98}>+</button>
          <button className="button" onClick={()=>setAge(age-1)} disabled={age < 18}>-</button>
        </div>
        <div key='1' className="points-distributor-value">
          Must be a value between 17 and 99
        </div>
      </div>

      <button className="button" onClick={()=>updateLifeEvents(preventNothingHappened)}>Generate Life Events</button><br />
      <input type="checkbox" id="preventNothing" onClick={()=>setPreventNothingHappened(!preventNothingHappened)}/>
        <span className="fine-print">Check to prevent "Nothing Happened This Year" events.</span>
        <ol start="17">
          { (lifeEvents.length > 0) ? <p>The following major events happened to you at age...</p> : <p className="warning">// Generate your life events to see what happened to you each year //</p> }
        
          {lifeEvents.map((event, i)=>(<li key={i}>{event}</li>))}
        </ol>
    </div>
  )
}

export default LifeEvents