import React, { useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';

const LifeEvents = () => {

  //Connect to UserContext via Context API:
  const {
    userHandle, age, setAge, lifeEvents, updateLifeEvents
  } = useContext(UserContext);

  useEffect(() => {
    console.log(lifeEvents);
}, [lifeEvents]);

  return (
    <div className="widget">
      <h3>4. Life Events</h3>
      <p>You know where you came from and what you look like. Now let's
        take a look at the major events that made you what you are. Choose&nbsp;
        {userHandle!=='' ? userHandle: <span>your character</span>}'s age.
        For each year of their life past 16, we'll determine a major event that
        shaped their life for that year.
      </p>
      <span className="callout">Age</span>
      <span className="fine-print">&nbsp;(Must be a value between 17 and 99):</span>
      <div className="callout">{age}</div>
      <button onClick={updateLifeEvents}>Generate Lifepath</button><br />
      <input type="checkbox" id="preventNothing" />
        <span className="fine-print">Check to prevent "Nothing Happened This Year" events.</span>
        <ol start="17">The following major events happened to you at age...
          {lifeEvents.map((event, i)=>(<li key={i}>{event}</li>))}
        </ol>
    </div>
  )
}

export default LifeEvents