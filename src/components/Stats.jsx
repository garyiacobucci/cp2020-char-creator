import React, { useContext } from 'react';
import { 
  Button,
  FormControlLabel, FormControl, FormLabel,
  Radio, RadioGroup 
} from '@material-ui/core';
import { UserContext } from '../UserContext';
import { d10 } from '../staticData.js';

const Stats = () => {

  //Connect to UserContext via Context API:
  const {
    toggleTheme,
    userHandle,
    setUserHandle,
    rollMethod, setRollMethod,
    assignCharPointsRoll, charPointsRoll, charPointsHaveBeenRolled,
    intPoints, setIntPoints,
    refPoints, setRefPoints,
    techPoints, setTechPoints,
    coolPoints, setCoolPoints,
    attPoints, setAttPoints,
    luckPoints, setLuckPoints,
    maPoints, setMaPoints,
    bodyPoints, setBodyPoints,
    empPoints, setEmpPoints,
    accAssignedPoints,
  } = useContext(UserContext);

  //Define function for updating controlled form input:
  function handleChange(event, hookName) {
    const {value} = event.target;
    //Invoke the appropriate hook updating function:
    if (hookName===assignCharPointsRoll) hookName([value])
    else hookName(value);
  }

  /*//Define function for handling controlled form submission:
  function handleSubmit(event) {
    event.preventDefault();
    // Update the local state version of comment data:
    setCommentData((prevData) => [...prevData, userText]);
    // Clear the text in the controlled input form:
    setUserHandle('');
  }*/

  return (
    <div className="widget">

      <h2>Randomize Everything?</h2>
      <p>Clicking "Randomize Everything" button below will randomly select everything: Roll Method, Stats, Role, Skills, Style, Background, etc.</p>
      <div><Button variant="contained" onClick={toggleTheme}>Randomize Everything</Button></div>

      <h2>Handle</h2>
      <p>Handle (name):</p>
      <form>
        <input
          type="text"
          placeholder="E.g., Johnny Silverhand"
          onChange={(e) => handleChange(e, setUserHandle)}
          name="commentText"
          value={userHandle}
        />
      </form>

      <h2>Statistics</h2>
      <p>Each character has nine Statistics -- values representing the level of native ability of the character in specific areas of activity.</p>
      <h4>Character Points; Choose Roll Method:</h4>
      <p>(Click a roll method; click again to re-roll)</p>
      <div className="split-display">
        <div className="split-display-child">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="Roll Method"
              name="roll-method-radio-group"
            >
              <FormControlLabel value="random" control={<Radio />} label="Random" onClick={() => setRollMethod('Random')} />
              <FormControlLabel value="fast" control={<Radio />} label="Fast" onClick={() => {setRollMethod('Fast');assignCharPointsRoll(d10(9))}} />
              <FormControlLabel value="cineMajorHero" control={<Radio />} label="Major Hero" onClick={() => {setRollMethod('Major Hero');assignCharPointsRoll([80])}} />
              <FormControlLabel value="cineMajorSuppChar" control={<Radio />} label="Major Supporting Character" onClick={() => {setRollMethod('Major Supporting Character');assignCharPointsRoll([70])}} />
              <FormControlLabel value="cineMinorHero" control={<Radio />} label="Minor Hero" onClick={() => {setRollMethod('Minor Hero');assignCharPointsRoll([75])}} />
              <FormControlLabel value="cineMinorSuppChar" control={<Radio />} label="Minor Supporting Character" onClick={() => {setRollMethod('Minor Supporting Character');assignCharPointsRoll([60])}} />
              <FormControlLabel value="average" control={<Radio />} label="Average" onClick={() => {setRollMethod('Average');assignCharPointsRoll([50])}} />
              <FormControlLabel value="manual" control={<Radio />} label="Manually Enter Value" onClick={() => {setRollMethod('Manually Enter')}} />
            </RadioGroup>
          </FormControl>              
        </div>
        <div className="split-display-child">
          <p>Roll method: {rollMethod}</p>
          {rollMethod==='Manually Enter' && 
          <form>
            <input
              type="text"
              onChange={(e) => handleChange(e, assignCharPointsRoll)}
              name="manual-points-amount"
              value={[charPointsRoll]}
            />
          </form>}
          {charPointsRoll.length > 1 ? 
            <div>
              <p>Rolls: {charPointsRoll && charPointsRoll.join(', ')}</p>
              <p>Points Total: {charPointsRoll && charPointsRoll.reduce(((a, b) => a + b))}</p>
            </div> : 
            <div>
              <p>Points Total: {charPointsRoll}</p>
            </div>
          }
        </div>
      </div>

      <h3>User Assigned Stats</h3>
      <p>You must choose a roll method above before you can edit these fields.</p>
      <h4>Stats Points Remaining: {charPointsRoll-accAssignedPoints}</h4>

      <div className="points-distributor-wrapper">
        <div className="points-distributor-category">
          Intelligence (INT)
        </div>
        <div className="points-distributor-control-panel">
          <Button variant="contained" onClick={(e) => setIntPoints(intPoints+1)} disabled={(!charPointsHaveBeenRolled || charPointsRoll-accAssignedPoints<1)}>+</Button>
          <Button variant="contained" onClick={(e) => setIntPoints(intPoints-1)} disabled={(!charPointsHaveBeenRolled || intPoints<1)}>-</Button>
        </div>
        <div className="points-distributor-value">
          {intPoints}
        </div>
      </div>

      <div className="points-distributor-wrapper">
        <div className="points-distributor-category">
            Reflexes (REF)
          </div>
          <div className="points-distributor-control-panel">
            <Button variant="contained" onClick={(e) => setRefPoints(refPoints+1)} disabled={(!charPointsHaveBeenRolled || charPointsRoll-accAssignedPoints<1)}>+</Button>
            <Button variant="contained" onClick={(e) => setRefPoints(refPoints-1)} disabled={(!charPointsHaveBeenRolled || refPoints<1)}>-</Button>
          </div>
          <div className="points-distributor-value">
            {refPoints}
          </div>
        </div>

        <div className="points-distributor-wrapper">
          <div className="points-distributor-category">
            Technical Ability (TECH)
          </div>
          <div className="points-distributor-control-panel">
            <Button variant="contained" onClick={(e) => setTechPoints(techPoints+1)} disabled={(!charPointsHaveBeenRolled || charPointsRoll-accAssignedPoints<1)}>+</Button>
            <Button variant="contained" onClick={(e) => setTechPoints(techPoints-1)} disabled={(!charPointsHaveBeenRolled || techPoints<1)}>-</Button>
          </div>
          <div className="points-distributor-value">
            {techPoints}
          </div>
        </div>

        <div className="points-distributor-wrapper">
          <div className="points-distributor-category">
            Cool (COOL)
          </div>
          <div className="points-distributor-control-panel">
            <Button variant="contained" onClick={(e) => setCoolPoints(coolPoints+1)} disabled={(!charPointsHaveBeenRolled || charPointsRoll-accAssignedPoints<1)}>+</Button>
            <Button variant="contained" onClick={(e) => setCoolPoints(coolPoints-1)} disabled={(!charPointsHaveBeenRolled || coolPoints<1)}>-</Button>
          </div>
          <div className="points-distributor-value">
            {coolPoints}
          </div>
        </div>

        <div className="points-distributor-wrapper">
          <div className="points-distributor-category">
            Attractiveness (ATT)
          </div>
          <div className="points-distributor-control-panel">
            <Button variant="contained" onClick={(e) => setAttPoints(attPoints+1)} disabled={(!charPointsHaveBeenRolled || charPointsRoll-accAssignedPoints<1)}>+</Button>
            <Button variant="contained" onClick={(e) => setAttPoints(attPoints-1)} disabled={(!charPointsHaveBeenRolled || attPoints<1)}>-</Button>
          </div>
          <div className="points-distributor-value">
            {attPoints}
          </div>
        </div>

        <div className="points-distributor-wrapper">
          <div className="points-distributor-category">
            Luck (LUCK)
          </div>
          <div className="points-distributor-control-panel">
            <Button variant="contained" onClick={(e) => setLuckPoints(luckPoints+1)} disabled={(!charPointsHaveBeenRolled || charPointsRoll-accAssignedPoints<1)}>+</Button>
            <Button variant="contained" onClick={(e) => setLuckPoints(luckPoints-1)} disabled={(!charPointsHaveBeenRolled || luckPoints<1)}>-</Button>
          </div>
          <div className="points-distributor-value">
            {luckPoints}
          </div>
        </div>

        <div className="points-distributor-wrapper">
          <div className="points-distributor-category">
            Movement Allowance (MA)
          </div>
          <div className="points-distributor-control-panel">
            <Button variant="contained" onClick={(e) => setMaPoints(maPoints+1)} disabled={(!charPointsHaveBeenRolled || charPointsRoll-accAssignedPoints<1)}>+</Button>
            <Button variant="contained" onClick={(e) => setMaPoints(maPoints-1)} disabled={(!charPointsHaveBeenRolled || maPoints<1)}>-</Button>
          </div>
          <div className="points-distributor-value">
            {maPoints}
          </div>
        </div>

        <div className="points-distributor-wrapper">
          <div className="points-distributor-category">
            Body Type (BODY)
          </div>
          <div className="points-distributor-control-panel">
            <Button variant="contained" onClick={(e) => setBodyPoints(bodyPoints+1)} disabled={(!charPointsHaveBeenRolled || charPointsRoll-accAssignedPoints<1)}>+</Button>
            <Button variant="contained" onClick={(e) => setBodyPoints(bodyPoints-1)} disabled={(!charPointsHaveBeenRolled || bodyPoints<1)}>-</Button>
          </div>
          <div className="points-distributor-value">
            {bodyPoints}
          </div>
        </div>

        <div className="points-distributor-wrapper">
          <div className="points-distributor-category">
            Empathy (EMP))
          </div>
          <div className="points-distributor-control-panel">
            <Button variant="contained" onClick={(e) => setEmpPoints(empPoints+1)} disabled={(!charPointsHaveBeenRolled || charPointsRoll-accAssignedPoints<1)}>+</Button>
            <Button variant="contained" onClick={(e) => setEmpPoints(empPoints-1)} disabled={(!charPointsHaveBeenRolled || empPoints<1)}>-</Button>
          </div>
          <div className="points-distributor-value">
            {empPoints}
          </div>
        </div>

      <h3>Derived Stats</h3>
      <p>Below fields are automatically calculated.</p>
      <ul>
        <li>Run {maPoints * 3} meters</li>
        <li>Leap {(maPoints * 3)/4} meters</li>
        <li>Lift {bodyPoints*40} kgs / {Math.floor(bodyPoints*40*2.2046)} lbs</li>
        <li>Carry {bodyPoints*10} kgs / {Math.floor(bodyPoints*10*2.2046)} lbs</li>
        <li>Body type:&nbsp;
          {(() => {
            switch (true) {
              case (bodyPoints <= 2 && charPointsHaveBeenRolled): {return 'Very Weak'};
              case (bodyPoints >= 3 && bodyPoints <=4):   return 'Weak';
              case (bodyPoints >= 5 && bodyPoints <= 7): return 'Average';
              case (bodyPoints >= 8 && bodyPoints <= 9):  return 'Strong';
              case (bodyPoints === 10): return 'Very Strong';
              case (bodyPoints >= 11): return 'Cybernetically Enhanced';
            }
          })()}
        </li>
        <li>Body type modifier:&nbsp;
          {(() => {
            switch (true) {
              case (bodyPoints <= 2 && charPointsHaveBeenRolled): {return '-0'};
              case (bodyPoints >= 3 && bodyPoints <=4):   return '-1';
              case (bodyPoints >= 5 && bodyPoints <= 7): return '-2';
              case (bodyPoints >= 8 && bodyPoints <= 9):  return '-3';
              case (bodyPoints === 10): return '-4';
              case (bodyPoints >= 11): return '-5';
            }
          })()}</li>
        <li>Save: {bodyPoints}</li>
        <li>Humanity: {empPoints*10}</li>
      </ul>
    </div>
  )
}

export default Stats