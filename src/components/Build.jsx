import React, { useContext } from 'react';
import { 
  Button,
  FormControlLabel, FormControl, FormLabel,
  Radio, RadioGroup 
} from '@material-ui/core';
import { UserContext } from '../UserContext';
import methods from './../methods.js';

const Build = () => {

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
    maPoints, updateMaPoints,
    bodyPoints, setBodyPoints,
    empPoints, setEmpPoints,
    accAssignedPoints,
  } = useContext(UserContext);

  //Destructure common methods from methods file:
  const { d10 } = methods;

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
            <Button variant="contained" onClick={(e) => updateMaPoints(maPoints+1)} disabled={(!charPointsHaveBeenRolled || charPointsRoll-accAssignedPoints<1)}>+</Button>
            <Button variant="contained" onClick={(e) => updateMaPoints(maPoints-1)} disabled={(!charPointsHaveBeenRolled || maPoints<1)}>-</Button>
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
        <li>Body type</li>
        <li>Body type modifier</li>
        <li>Save: {bodyPoints}</li>
        <li>Humanity: {empPoints*10}</li>
      </ul>

      <h2>Role and Skills</h2>
      <h3>Role</h3>
      <p>Click radio button again to re-roll / reselect</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Role Selection Method"
          defaultValue="random"
          name="role-selection-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Role" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Role" />
        </RadioGroup>
      </FormControl>

      <h3>Skills</h3>
      <h5>Career Skills</h5>
      <h6>Career Skill Points Remaining: 40</h6>

      <h5>Pickup Skills</h5>
      <h6>Pickup Skill Points (REF + INT) :</h6>
      <h6>Pickup Skill Points Remaining:</h6>

      <h3>Origins and Personal Style</h3>
      <h4>Dress & Personal Style</h4>
      <p>Click radio button again to re-roll / reselect</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Style Selection Method"
          defaultValue="random"
          name="style-selection-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Style" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Style" />
        </RadioGroup>
      </FormControl>
      <ul>
        <li>Clothes:</li>
        <li>Hairstyle:</li>
        <li>Affectations:</li>
      </ul>

      <h3>Ethnic Origins</h3>
      <p>Click radio button again to re-roll / reselect</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Ethnicity Selection Method"
          defaultValue="random"
          name="ethnicity-selection-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Ethnicity" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Ethnicity" />
        </RadioGroup>
      </FormControl>
      <ul>
        <li>Ethnicity:</li>
        <li>Language:</li>
      </ul>

      <h3>Family Background</h3>
      <h4>Family Ranking</h4>
      <p>Click radio button again to re-roll / reselect</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Family Background Selection Method"
          defaultValue="random"
          name="family-selection-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Family Ranking" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Family Ranking" />
        </RadioGroup>
      </FormControl>
      <p>Family Ranking:</p>

      <h4>Parents</h4>
      <p>Click radio button again to re-roll / reselect</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Parental Status Selection Method"
          defaultValue="random"
          name="parental-status-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Parental Status" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Parental Status" />
        </RadioGroup>
      </FormControl>
      <p>Status of Parents:</p>

      <h4>Family Status</h4>
      <p>Click radio button again to re-roll / reselect</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Family Status Selection Method"
          defaultValue="random"
          name="family-status-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Family Status" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Family Status" />
        </RadioGroup>
      </FormControl>
      <p>Family Status:</p>

      <h4>Childhood Environment</h4>
      <p>Click radio button again to re-roll / reselect</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Childhood Environment Selection Method"
          defaultValue="random"
          name="childhood-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Childhood Environment" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Childhood Environment" />
        </RadioGroup>
      </FormControl>
      <p>Childhood Environment:</p>


      <h4>Siblings</h4>
      <p>Click radio button again to re-roll / reselect</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Siblings Selection Method"
          defaultValue="random"
          name="siblings-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Siblings" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Siblings" />
        </RadioGroup>
      </FormControl>
      <p>Have Siblings?:</p>

      <h3>Motivations</h3>
      <h4>Personality Traits</h4>
      <p>Click radio button again to re-roll / reselect</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Personality Traits Selection Method"
          defaultValue="random"
          name="personality-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Personality Traits" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Personality Traits" />
        </RadioGroup>
      </FormControl>
      <p>Personality Traits:</p>


      <h3>Person You Value Most</h3>
      <p>Click radio button again to re-roll / reselect</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Valued Person Selection Method"
          defaultValue="random"
          name="valued-person-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Valued Person" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Valued Person" />
        </RadioGroup>
      </FormControl>
      <p>Person You Value Most:</p>


      <h4>What Do You Value Most?</h4>
      <p>Click radio button again to re-roll / reselect</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Value Selection Method"
          defaultValue="random"
          name="value-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Value" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Value" />
        </RadioGroup>
      </FormControl>
      <p>What You Value:</p>


      <h4>How Do You Feel About Most People?</h4>
      <p>Click radio button again to re-roll / reselect</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Disposition Selection Method"
          defaultValue="random"
          name="disposition-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Disposition" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Disposition" />
        </RadioGroup>
      </FormControl>
      <p>How You Feel About Most People:</p>


      <h4>What Is Your Most Valued Possession?</h4>
      <p>Click radio button again to re-roll / reselect</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Valued Posession Selection Method"
          defaultValue="random"
          name="valued-posession-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Valued Posession" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Valued Posession" />
        </RadioGroup>
      </FormControl>
      <p>Most Valued Posession:</p>


      <h3>Life Events</h3>
      <h4>Age</h4>

      <input type="checkbox" id="preventNothing" /> Check to prevent "Nothing Happened This Year" events.

      <p>Click radio button again to re-roll / reselect. When manually entering age, it must be a value between 17 and 99.</p>
      Randomly Choose Your Age
      Manually Choose Your Age
      <p>Age:</p>
    </div>
  )
}

export default Build