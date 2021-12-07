import React, { useContext } from 'react';
import { 
  Button, MenuItem, InputLabel, Select,
  FormControlLabel, FormControl,
  Radio, RadioGroup 
} from '@material-ui/core';
import { UserContext } from '../UserContext';
import CareerSkills from './CareerSkills';

const Role = () => {

  //Connect to UserContext via Context API:
  const {
    refPoints, intPoints,
    role, setRole, manualRole, setManualRole,
    pickupSkills, setPickupSkills, updatePickupSkill, accPickupSkills
  } = useContext(UserContext);

  return (
    <div className="widget">

      <h2>Role and Skills</h2>
      <h3>Role</h3>
      <p>Click radio button again to re-roll / reselect</p>

        <div className="role-panel">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="Role Selection Method"
              name="role-selection-radio-group">
              <FormControlLabel value="random" control={<Radio />} label="Randomly Choose Role" onClick={() => setManualRole(false)} />
              <FormControlLabel value="manual" control={<Radio />} label="Manually Choose Role" onClick={() => setManualRole(true)} />
            </RadioGroup>
          </FormControl>

          { // Render a dropdown to select role manually, only if manual selection has been chosen by the user:
            manualRole ? <FormControl fullWidth>
            <InputLabel id="role-select-label">Role</InputLabel>
            <Select
              labelId="role-select-label"
              id="role-select"
              value={role}
              label="Role"
              onChange={(e)=>setRole(e.target.value)}
            >
              <MenuItem value={'Rocker'}>Rocker</MenuItem>
              <MenuItem value={'Solo'}>Solo</MenuItem>
              <MenuItem value={'Media'}>Media</MenuItem>
              <MenuItem value={'Nomad'}>Nomad</MenuItem>
              <MenuItem value={'Netrunner'}>Netrunner</MenuItem>
              <MenuItem value={'Techie'}>Techie</MenuItem>
              <MenuItem value={'MedTechie'}>MedTechie</MenuItem>
              <MenuItem value={'Corp'}>Corp</MenuItem>
              <MenuItem value={'Fixer'}>Fixer</MenuItem>
            </Select>
          </FormControl> : ''}

          {
            // Render the Career Skills panel interface once a role has been selected:
           (role !== '') ? <CareerSkills /> : ''
           }

        </div>
        <div className="pickup-skills-wrapper">
        <div id="pickup-skills-panel">
          <h4>Pickup Skills</h4>
          <h5>Pickup Skill Points (REF + INT) : {refPoints+intPoints}</h5>
          <h6>Pickup Skill Points Remaining: {(refPoints+intPoints)-accPickupSkills}</h6>
          <div><Button variant="contained" onClick={()=>{setPickupSkills([...pickupSkills, ['Select', 'Select', 0]])}}>Add a Pickup Skill</Button></div>
        </div>

        {pickupSkills.map((category, i) => (
          <div className="points-distributor-wrapper" key={i}>

            <div className="points-distributor-category">
              <Select
                labelId="pickup-skills-select-label"
                id="pickup-skills-select"
                value={pickupSkills[i][0]}
                label="Pickup Skill"
                onChange={(e)=>updatePickupSkill(e, i, 0)}
              >
                <MenuItem value={'Select'}>SELECT</MenuItem>
                <MenuItem value={'ATTR'}>ATTR</MenuItem>
                <MenuItem value={'BODY'}>BODY</MenuItem>
                <MenuItem value={'COOL'}>COOL</MenuItem>
                <MenuItem value={'EMP'}>EMP</MenuItem>
                <MenuItem value={'INT'}>INT</MenuItem>
                <MenuItem value={'REF'}>REF</MenuItem>
                <MenuItem value={'TECH'}>TECH</MenuItem>
              </Select>

            </div>
            <div className="points-distributor-control-panel">
              <Button 
                variant="contained" onClick={(e) => setPickupSkills((e)=>{updatePickupSkill(e, i, 2, pickupSkills[i][2]+1)})}
                disabled={pickupSkills[i][0]==='Select'||(refPoints+intPoints)-accPickupSkills<1} >+
              </Button>
              <Button 
                variant="contained" onClick={(e) => setPickupSkills((e)=>updatePickupSkill(e, i, 2, pickupSkills[i][2]-1))}
                disabled={pickupSkills[i][0]==='Select'||pickupSkills[i][2]<1} >-
              </Button>
            </div>
            <div className="points-distributor-value">
              {pickupSkills[i][2]}
            </div>
          </div>
        ))}        

      </div>





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

export default Role