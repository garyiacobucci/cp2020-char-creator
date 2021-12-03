import React, { useContext } from 'react';
import { 
  Button,
  FormControlLabel, FormControl, FormLabel,
  Radio, RadioGroup 
} from '@material-ui/core';
import { UserContext } from '../UserContext';

const Build = () => {

  //Connect to UserContext via Context API:
  const {
    toggleTheme,
    userHandle,
    setUserHandle
  } = useContext(UserContext);

  //Define function for updating controlled form input:
  function handleChange(event, hookName) {
    const {value} = event.target;
    //Invoke the appropriate hook updating function:
    hookName(value);
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

      <h3>Randomize Everything?</h3>
      <p>Clicking "Randomize Everything" button below will randomly select everything: Roll Method, Stats, Role, Skills, Style, Background, etc.</p>
      <div><Button variant="contained" onClick={toggleTheme}>Randomize Everything</Button></div>

      <h3>Handle</h3>
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

      <h3>Statistics</h3>
      <p>Each character has nine Statistics -- values representing the level of native ability of the character in specific areas of activity.</p>
      <h2>Character Points; Choose Roll Method:</h2>
      <p>(Click a roll method; click again to re-roll)</p>
      <FormControl component="fieldset">
        <FormLabel component="legend">Roll Method</FormLabel>
        <RadioGroup
          aria-label="Roll Method"
          defaultValue="random"
          name="roll-method-radio-group"
        >
          <FormControlLabel value="random" control={<Radio />} label="Random" />
          <FormControlLabel value="fast" control={<Radio />} label="Fast" />
          <FormControlLabel value="cineMajorHero" control={<Radio />} label="Major Hero" />
          <FormControlLabel value="cineMajorSuppChar" control={<Radio />} label="Major Supporting Character" />
          <FormControlLabel value="cineMinorHero" control={<Radio />} label="Minor Hero" />
          <FormControlLabel value="cineMinorSuppChar" control={<Radio />} label="Minor Supporting Character" />
          <FormControlLabel value="average" control={<Radio />} label="Average" />
          <FormControlLabel value="manual" control={<Radio />} label="Manually Enter Value" />
        </RadioGroup>
      </FormControl>

      <h2>User Assigned Stats</h2>
      <p>You must choose a roll method above before you can edit these fields.</p>
      <h3>Stats Points Remaining:</h3>
      
      <table id="statsTable">
            <tbody>
                <tr>
                    <th>Intelligence (INT)</th>
                    <td><input type="text" id="int" class="statValueBoxes" size="2" disabled="true" /></td>
                </tr>
                <tr>
                    <th>Reflexes (REF)</th>
                    <td><input type="text" id="ref"  class="statValueBoxes"size="2" disabled="true" /></td>
                </tr>
                <tr>
                    <th>Technical Ability (TECH)</th>
                    <td><input type="text" id="tech"  class="statValueBoxes"size="2" disabled="true" /></td>
                </tr>
                <tr>
                    <th>Cool (COOL)</th>
                    <td><input type="text" id="cl"  class="statValueBoxes"size="2" disabled="true" /></td>
                </tr>
                <tr>
                    <th>Attractiveness (ATT)</th>
                    <td><input type="text" id="att"  class="statValueBoxes"size="2" disabled="true" /></td>
                </tr>
                <tr>
                    <th>Luck (LUCK)</th>
                    <td><input type="text" id="lk"  class="statValueBoxes"size="2" disabled="true" /></td>
                </tr>
                <tr>
                    <th>Movement Allowance (MA)</th>
                    <td><input type="text" id="ma"  class="statValueBoxes"size="2" disabled="true" /></td>
                </tr>
                <tr>
                    <th>Body Type (BODY)</th>
                    <td><input type="text" id="bt"  class="statValueBoxes"size="2" disabled="true" /></td>
                </tr>
                <tr>
                    <th>Empathy (EMP)</th>
                    <td><input type="text" id="emp"  class="statValueBoxes"size="2" disabled="true" /></td>
                </tr>
            </tbody>
        </table>

      <h2>Derived Stats</h2>
      <p>Below fields are automatically calculated.</p>
      <ul>
        <li>Run in meters</li>
        <li>Leap</li>
        <li>Lift in kgs in lbs</li>
        <li>Carry in kgs in lbs</li>
        <li>Body type</li>
        <li>Body type modifier</li>
        <li>Save</li>
        <li>Humanity</li>
      </ul>

      <h3>Role and Skills</h3>
      <h4>Role</h4>
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

      <br/><br/>

      <h4>Skills</h4>
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