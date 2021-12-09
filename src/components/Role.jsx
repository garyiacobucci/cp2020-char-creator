import React, { useContext } from 'react';
import { 
  Button, MenuItem, InputLabel, Select,
  FormControlLabel, FormControl,
  Radio, RadioGroup 
} from '@material-ui/core';
import { UserContext } from '../UserContext';
import CareerSkills from './CareerSkills';
import PickupSkillsMenu from './PickupSkillsMenu';
import { clothes, hairstyle, affectations, famRank, childEnv, 
  persTraits, persValued, youValue, howFeel, valuedPos } from './../staticData';

const Role = () => {

  //Connect to UserContext via Context API:
  const {
    refPoints, intPoints,
    role, setRole, manualRole, setManualRole,
    addNewPickupSkillRow, removePickupSkillRow, 
    pickupSkillCategories, updatePickupSkillCategories, 
    pickupSkillValues, updatePickupSkillValues, accPickupSkills,
    selectedClothes, setSelectedClothes, 
    selectedHairstyle, setSelectedHairstyle, 
    selectedAffectations, setSelectedAffectations,
    selectedFamRank, setFamRank, 
    selectedChildEnv, setChildEnv, 
    selectedPersTraits, setPersTraits, 
    selectedPersValued, setPersValued, 
    selectedYouValue, setYouValue, 
    selectedHowFeel, setHowFeel, 
    selectedValuedPos, setValuedPos
  } = useContext(UserContext);

  return (
    <div className="widget">

      <h2>Role and Skills</h2>
      <h3>Role</h3>
      <p>To start playing, first one must create their character. 
        A Cyberpunk on the mean streets of Night City, working for whoever pays best, 
        taking down local gangs or going up against multinational conglomerates, 
        whatever it is you will need to prepare accordingly. Learn more about the nine
        roles you can choose to live:</p>
      <ul>
        <li><a href="https://cyberpunk.fandom.com/wiki/Rockerboy" target="_blank">Rockerboy</a></li>
        <li><a href="https://cyberpunk.fandom.com/wiki/Solo"target="_blank">Solo</a></li>
        <li><a href="https://cyberpunk.fandom.com/wiki/Netrunner"target="_blank">Netrunner</a></li>
        <li><a href="https://cyberpunk.fandom.com/wiki/Techie"target="_blank">Techie</a></li>
        <li><a href="https://cyberpunk.fandom.com/wiki/Media"target="_blank">Media</a></li>
        <li><a href="https://cyberpunk.fandom.com/wiki/Cop"target="_blank">Cop</a></li>
        <li><a href="https://cyberpunk.fandom.com/wiki/Corporate"target="_blank">Corporate</a></li>
        <li><a href="https://cyberpunk.fandom.com/wiki/Fixer"target="_blank">Fixer</a></li>
        <li><a href="https://cyberpunk.fandom.com/wiki/Nomad"target="_blank">Nomad</a></li>
      </ul>

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
          <div><Button variant="contained" onClick={()=>{addNewPickupSkillRow()}}>Add a Pickup Skill</Button></div>
        </div>

        {pickupSkillCategories.map((category, i) => (
          <div className="pickup-skill-row" key={i}>

            <div className="pickup-skill-category-menu">
              <Select
                labelId="pickup-skills-category-select-label"
                id="pickup-skills-category-select"
                value={category}
                label="Pickup Skill Category"
                onChange={(e)=>updatePickupSkillCategories(e, i)}
              >
                <MenuItem value={'select'}>SELECT</MenuItem>
                <MenuItem value={'attr'}>ATTR</MenuItem>
                <MenuItem value={'body'}>BODY</MenuItem>
                <MenuItem value={'cool'}>COOL</MenuItem>
                <MenuItem value={'emp'}>EMP</MenuItem>
                <MenuItem value={'stat_int'}>INT</MenuItem>
                <MenuItem value={'ref'}>REF</MenuItem>
                <MenuItem value={'tech'}>TECH</MenuItem>
              </Select>
            </div>


            <PickupSkillsMenu i={i} />


            <div className="pickup-skills-points-distributor">
              <Button 
                variant="contained" onClick={()=>updatePickupSkillValues(i, 1)}
                disabled={category==='select'||(refPoints+intPoints)-accPickupSkills<1} >+
              </Button>
              <Button 
                variant="contained" onClick={()=>updatePickupSkillValues(i, -1)}
                disabled={category==='select'||pickupSkillValues[i]<1} >-
              </Button>
            </div>

            <div className="pickup-skill-points-value">
              {pickupSkillValues[i]}
            </div>

            <div><Button onClick={()=>removePickupSkillRow(i)}>X</Button></div>

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

      <div className="clothes-menu">
        <span>Clothing:&nbsp;</span>
        <Select
          labelId="clothes-select-label"
          id="clothes-select"
          value={selectedClothes}
          label="Clothes"
          onChange={(e)=>setSelectedClothes(e.target.value)}
        >
          <MenuItem value={'select'}>SELECT</MenuItem>
          <MenuItem value={Object.values(clothes)[0]}>{Object.values(clothes)[0]}</MenuItem>
          <MenuItem value={Object.values(clothes)[1]}>{Object.values(clothes)[1]}</MenuItem>
          <MenuItem value={Object.values(clothes)[2]}>{Object.values(clothes)[2]}</MenuItem>
          <MenuItem value={Object.values(clothes)[3]}>{Object.values(clothes)[3]}</MenuItem>
          <MenuItem value={Object.values(clothes)[4]}>{Object.values(clothes)[4]}</MenuItem>
          <MenuItem value={Object.values(clothes)[5]}>{Object.values(clothes)[5]}</MenuItem>
          <MenuItem value={Object.values(clothes)[6]}>{Object.values(clothes)[6]}</MenuItem>
          <MenuItem value={Object.values(clothes)[7]}>{Object.values(clothes)[7]}</MenuItem>
          <MenuItem value={Object.values(clothes)[8]}>{Object.values(clothes)[8]}</MenuItem>
          <MenuItem value={Object.values(clothes)[9]}>{Object.values(clothes)[9]}</MenuItem>
          <MenuItem value={Object.values(clothes)[10]}>{Object.values(clothes)[10]}</MenuItem>
        </Select>
      </div>

      <div className="hairstyle-menu">
        <span>Hairstyle:&nbsp;</span>
        <Select
          labelId="hairstyle-select-label"
          id="hairstyle-select"
          value={selectedHairstyle}
          label="hairstyle"
          onChange={(e)=>setSelectedHairstyle(e.target.value)}
        >
          <MenuItem value={'select'}>SELECT</MenuItem>
          <MenuItem value={Object.values(hairstyle)[0]}>{Object.values(hairstyle)[0]}</MenuItem>
          <MenuItem value={Object.values(hairstyle)[1]}>{Object.values(hairstyle)[1]}</MenuItem>
          <MenuItem value={Object.values(hairstyle)[2]}>{Object.values(hairstyle)[2]}</MenuItem>
          <MenuItem value={Object.values(hairstyle)[3]}>{Object.values(hairstyle)[3]}</MenuItem>
          <MenuItem value={Object.values(hairstyle)[4]}>{Object.values(hairstyle)[4]}</MenuItem>
          <MenuItem value={Object.values(hairstyle)[5]}>{Object.values(hairstyle)[5]}</MenuItem>
          <MenuItem value={Object.values(hairstyle)[6]}>{Object.values(hairstyle)[6]}</MenuItem>
          <MenuItem value={Object.values(hairstyle)[7]}>{Object.values(hairstyle)[7]}</MenuItem>
          <MenuItem value={Object.values(hairstyle)[8]}>{Object.values(hairstyle)[8]}</MenuItem>
          <MenuItem value={Object.values(hairstyle)[9]}>{Object.values(hairstyle)[9]}</MenuItem>
          <MenuItem value={Object.values(hairstyle)[10]}>{Object.values(hairstyle)[10]}</MenuItem>
        </Select>
      </div>

      <div className="affectations-menu">
        <span>Affectations:&nbsp;</span>
        <Select
          labelId="affectations-select-label"
          id="affectations-select"
          value={selectedAffectations}
          label="affectations"
          onChange={(e)=>setSelectedAffectations(e.target.value)}
        >
          <MenuItem value={'select'}>SELECT</MenuItem>
          <MenuItem value={Object.values(affectations)[0]}>{Object.values(affectations)[0]}</MenuItem>
          <MenuItem value={Object.values(affectations)[1]}>{Object.values(affectations)[1]}</MenuItem>
          <MenuItem value={Object.values(affectations)[2]}>{Object.values(affectations)[2]}</MenuItem>
          <MenuItem value={Object.values(affectations)[3]}>{Object.values(affectations)[3]}</MenuItem>
          <MenuItem value={Object.values(affectations)[4]}>{Object.values(affectations)[4]}</MenuItem>
          <MenuItem value={Object.values(affectations)[5]}>{Object.values(affectations)[5]}</MenuItem>
          <MenuItem value={Object.values(affectations)[6]}>{Object.values(affectations)[6]}</MenuItem>
          <MenuItem value={Object.values(affectations)[7]}>{Object.values(affectations)[7]}</MenuItem>
          <MenuItem value={Object.values(affectations)[8]}>{Object.values(affectations)[8]}</MenuItem>
          <MenuItem value={Object.values(affectations)[9]}>{Object.values(affectations)[9]}</MenuItem>
          <MenuItem value={Object.values(affectations)[10]}>{Object.values(affectations)[10]}</MenuItem>
        </Select>
      </div>


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

      <div className="famRank-menu">
        <span>Family Ranking:&nbsp;</span>
        <Select
          labelId="famRank-select-label"
          id="famRank-select"
          value={selectedFamRank}
          label="famRank"
          onChange={(e)=>setFamRank(e.target.value)}
        >
          <MenuItem value={'select'}>SELECT</MenuItem>
          <MenuItem value={Object.values(famRank)[0]}>{Object.values(famRank)[0]}</MenuItem>
          <MenuItem value={Object.values(famRank)[1]}>{Object.values(famRank)[1]}</MenuItem>
          <MenuItem value={Object.values(famRank)[2]}>{Object.values(famRank)[2]}</MenuItem>
          <MenuItem value={Object.values(famRank)[3]}>{Object.values(famRank)[3]}</MenuItem>
          <MenuItem value={Object.values(famRank)[4]}>{Object.values(famRank)[4]}</MenuItem>
          <MenuItem value={Object.values(famRank)[5]}>{Object.values(famRank)[5]}</MenuItem>
          <MenuItem value={Object.values(famRank)[6]}>{Object.values(famRank)[6]}</MenuItem>
          <MenuItem value={Object.values(famRank)[7]}>{Object.values(famRank)[7]}</MenuItem>
          <MenuItem value={Object.values(famRank)[8]}>{Object.values(famRank)[8]}</MenuItem>
          <MenuItem value={Object.values(famRank)[9]}>{Object.values(famRank)[9]}</MenuItem>
          <MenuItem value={Object.values(famRank)[10]}>{Object.values(famRank)[10]}</MenuItem>
        </Select>
      </div>

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
   
      <div className="childEnv-menu">
        <span>Childhood Environment:&nbsp;</span>
        <Select
          labelId="childEnv-select-label"
          id="childEnv-select"
          value={selectedChildEnv}
          label="childEnv"
          onChange={(e)=>setChildEnv(e.target.value)}
        >
          <MenuItem value={'select'}>SELECT</MenuItem>
          <MenuItem value={Object.values(childEnv)[0]}>{Object.values(childEnv)[0]}</MenuItem>
          <MenuItem value={Object.values(childEnv)[1]}>{Object.values(childEnv)[1]}</MenuItem>
          <MenuItem value={Object.values(childEnv)[2]}>{Object.values(childEnv)[2]}</MenuItem>
          <MenuItem value={Object.values(childEnv)[3]}>{Object.values(childEnv)[3]}</MenuItem>
          <MenuItem value={Object.values(childEnv)[4]}>{Object.values(childEnv)[4]}</MenuItem>
          <MenuItem value={Object.values(childEnv)[5]}>{Object.values(childEnv)[5]}</MenuItem>
          <MenuItem value={Object.values(childEnv)[6]}>{Object.values(childEnv)[6]}</MenuItem>
          <MenuItem value={Object.values(childEnv)[7]}>{Object.values(childEnv)[7]}</MenuItem>
          <MenuItem value={Object.values(childEnv)[8]}>{Object.values(childEnv)[8]}</MenuItem>
          <MenuItem value={Object.values(childEnv)[9]}>{Object.values(childEnv)[9]}</MenuItem>
          <MenuItem value={Object.values(childEnv)[10]}>{Object.values(childEnv)[10]}</MenuItem>
        </Select>
      </div>


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
     
      <div className="persTraits-menu">
        <span>Personality Traits:&nbsp;</span>
        <Select
          labelId="persTraits-select-label"
          id="persTraits-select"
          value={selectedPersTraits}
          label="persTraits"
          onChange={(e)=>setPersTraits(e.target.value)}
        >
          <MenuItem value={'select'}>SELECT</MenuItem>
          <MenuItem value={Object.values(persTraits)[0]}>{Object.values(persTraits)[0]}</MenuItem>
          <MenuItem value={Object.values(persTraits)[1]}>{Object.values(persTraits)[1]}</MenuItem>
          <MenuItem value={Object.values(persTraits)[2]}>{Object.values(persTraits)[2]}</MenuItem>
          <MenuItem value={Object.values(persTraits)[3]}>{Object.values(persTraits)[3]}</MenuItem>
          <MenuItem value={Object.values(persTraits)[4]}>{Object.values(persTraits)[4]}</MenuItem>
          <MenuItem value={Object.values(persTraits)[5]}>{Object.values(persTraits)[5]}</MenuItem>
          <MenuItem value={Object.values(persTraits)[6]}>{Object.values(persTraits)[6]}</MenuItem>
          <MenuItem value={Object.values(persTraits)[7]}>{Object.values(persTraits)[7]}</MenuItem>
          <MenuItem value={Object.values(persTraits)[8]}>{Object.values(persTraits)[8]}</MenuItem>
          <MenuItem value={Object.values(persTraits)[9]}>{Object.values(persTraits)[9]}</MenuItem>
          <MenuItem value={Object.values(persTraits)[10]}>{Object.values(persTraits)[10]}</MenuItem>
        </Select>
      </div>


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

      <div className="persValued-menu">
        <span>Person Most Valued:&nbsp;</span>
        <Select
          labelId="persValued-select-label"
          id="persValued-select"
          value={selectedPersValued}
          label="persValued"
          onChange={(e)=>setPersValued(e.target.value)}
        >
          <MenuItem value={'select'}>SELECT</MenuItem>
          <MenuItem value={Object.values(persValued)[0]}>{Object.values(persValued)[0]}</MenuItem>
          <MenuItem value={Object.values(persValued)[1]}>{Object.values(persValued)[1]}</MenuItem>
          <MenuItem value={Object.values(persValued)[2]}>{Object.values(persValued)[2]}</MenuItem>
          <MenuItem value={Object.values(persValued)[3]}>{Object.values(persValued)[3]}</MenuItem>
          <MenuItem value={Object.values(persValued)[4]}>{Object.values(persValued)[4]}</MenuItem>
          <MenuItem value={Object.values(persValued)[5]}>{Object.values(persValued)[5]}</MenuItem>
          <MenuItem value={Object.values(persValued)[6]}>{Object.values(persValued)[6]}</MenuItem>
          <MenuItem value={Object.values(persValued)[7]}>{Object.values(persValued)[7]}</MenuItem>
          <MenuItem value={Object.values(persValued)[8]}>{Object.values(persValued)[8]}</MenuItem>
          <MenuItem value={Object.values(persValued)[9]}>{Object.values(persValued)[9]}</MenuItem>
          <MenuItem value={Object.values(persValued)[10]}>{Object.values(persValued)[10]}</MenuItem>
        </Select>
      </div>


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

      <div className="youValue-menu">
        <span>You most value:&nbsp;</span>
        <Select
          labelId="youValue-select-label"
          id="youValue-select"
          value={selectedYouValue}
          label="youValue"
          onChange={(e)=>setYouValue(e.target.value)}
        >
          <MenuItem value={'select'}>SELECT</MenuItem>
          <MenuItem value={Object.values(youValue)[0]}>{Object.values(youValue)[0]}</MenuItem>
          <MenuItem value={Object.values(youValue)[1]}>{Object.values(youValue)[1]}</MenuItem>
          <MenuItem value={Object.values(youValue)[2]}>{Object.values(youValue)[2]}</MenuItem>
          <MenuItem value={Object.values(youValue)[3]}>{Object.values(youValue)[3]}</MenuItem>
          <MenuItem value={Object.values(youValue)[4]}>{Object.values(youValue)[4]}</MenuItem>
          <MenuItem value={Object.values(youValue)[5]}>{Object.values(youValue)[5]}</MenuItem>
          <MenuItem value={Object.values(youValue)[6]}>{Object.values(youValue)[6]}</MenuItem>
          <MenuItem value={Object.values(youValue)[7]}>{Object.values(youValue)[7]}</MenuItem>
          <MenuItem value={Object.values(youValue)[8]}>{Object.values(youValue)[8]}</MenuItem>
          <MenuItem value={Object.values(youValue)[9]}>{Object.values(youValue)[9]}</MenuItem>
          <MenuItem value={Object.values(youValue)[10]}>{Object.values(youValue)[10]}</MenuItem>
        </Select>
      </div>


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

      <div className="howFeel-menu">
        <span>Disposition:&nbsp;</span>
        <Select
          labelId="howFeel-select-label"
          id="howFeel-select"
          value={selectedHowFeel}
          label="howFeel"
          onChange={(e)=>setHowFeel(e.target.value)}
        >
          <MenuItem value={'select'}>SELECT</MenuItem>
          <MenuItem value={Object.values(howFeel)[0]}>{Object.values(howFeel)[0]}</MenuItem>
          <MenuItem value={Object.values(howFeel)[1]}>{Object.values(howFeel)[1]}</MenuItem>
          <MenuItem value={Object.values(howFeel)[2]}>{Object.values(howFeel)[2]}</MenuItem>
          <MenuItem value={Object.values(howFeel)[3]}>{Object.values(howFeel)[3]}</MenuItem>
          <MenuItem value={Object.values(howFeel)[4]}>{Object.values(howFeel)[4]}</MenuItem>
          <MenuItem value={Object.values(howFeel)[5]}>{Object.values(howFeel)[5]}</MenuItem>
          <MenuItem value={Object.values(howFeel)[6]}>{Object.values(howFeel)[6]}</MenuItem>
          <MenuItem value={Object.values(howFeel)[7]}>{Object.values(howFeel)[7]}</MenuItem>
          <MenuItem value={Object.values(howFeel)[8]}>{Object.values(howFeel)[8]}</MenuItem>
          <MenuItem value={Object.values(howFeel)[9]}>{Object.values(howFeel)[9]}</MenuItem>
          <MenuItem value={Object.values(howFeel)[10]}>{Object.values(howFeel)[10]}</MenuItem>
        </Select>
      </div>


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

      <div className="valuedPos-menu">
        <span>Most valued posession:&nbsp;</span>
        <Select
          labelId="valuedPos-select-label"
          id="valuedPos-select"
          value={selectedValuedPos}
          label="valuedPos"
          onChange={(e)=>setValuedPos(e.target.value)}
        >
          <MenuItem value={'select'}>SELECT</MenuItem>
          <MenuItem value={Object.values(valuedPos)[0]}>{Object.values(valuedPos)[0]}</MenuItem>
          <MenuItem value={Object.values(valuedPos)[1]}>{Object.values(valuedPos)[1]}</MenuItem>
          <MenuItem value={Object.values(valuedPos)[2]}>{Object.values(valuedPos)[2]}</MenuItem>
          <MenuItem value={Object.values(valuedPos)[3]}>{Object.values(valuedPos)[3]}</MenuItem>
          <MenuItem value={Object.values(valuedPos)[4]}>{Object.values(valuedPos)[4]}</MenuItem>
          <MenuItem value={Object.values(valuedPos)[5]}>{Object.values(valuedPos)[5]}</MenuItem>
          <MenuItem value={Object.values(valuedPos)[6]}>{Object.values(valuedPos)[6]}</MenuItem>
          <MenuItem value={Object.values(valuedPos)[7]}>{Object.values(valuedPos)[7]}</MenuItem>
          <MenuItem value={Object.values(valuedPos)[8]}>{Object.values(valuedPos)[8]}</MenuItem>
          <MenuItem value={Object.values(valuedPos)[9]}>{Object.values(valuedPos)[9]}</MenuItem>
          <MenuItem value={Object.values(valuedPos)[10]}>{Object.values(valuedPos)[10]}</MenuItem>
        </Select>
      </div>


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