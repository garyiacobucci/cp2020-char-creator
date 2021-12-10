import React, { useContext } from 'react';
import { 
  Button, MenuItem, InputLabel, Select,
  FormControlLabel, FormControl,
  Radio, RadioGroup 
} from '@material-ui/core';
import {MDCMenu, DropDownMenu} from '@material/menu';
import { UserContext } from '../UserContext';
import CareerSkills from './CareerSkills';
import PickupSkillsMenu from './PickupSkillsMenu';
import { clothes, hairstyle, affectations, ethnic, languages, famRank, parentStatus, parentTragedy,
  childEnv, persTraits, persValued, youValue, howFeel, valuedPos } from './../staticData';

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
    selectedEthnicity, setEthnicity,
    selectedLanguage, setLanguage,
    selectedFamRank, setFamRank, 
    selectedParentStatus, setParentStatus,
    selectedParentTragedy, setParentTragedy,
    selectedChildEnv, setChildEnv, 
    selectedPersTraits, setPersTraits, 
    selectedPersValued, setPersValued, 
    selectedYouValue, setYouValue, 
    selectedHowFeel, setHowFeel, 
    selectedValuedPos, setValuedPos
  } = useContext(UserContext);

  return (
    <div className="component-wrapper">

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

          <div>
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

      </div>

      <div className="widget">
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

        <div className="selection-dropdown">
          <span>Clothing:&nbsp;</span>
          <Select
            labelId="clothing-select-label"
            id="clothing-select"
            value={selectedClothes}
            label="clothing"
            onChange={(e)=>setSelectedClothes(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {clothes.map((key, i = 1) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>

        <div className="selection-dropdown">
          <span>Hairstyle:&nbsp;</span>
          <Select
            labelId="hairstyle-select-label"
            id="hairstyle-select"
            value={selectedHairstyle}
            label="hairstyle"
            onChange={(e)=>setSelectedHairstyle(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {hairstyle.map((key, i = 1) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>

        <div className="selection-dropdown">
          <span>Affectations:&nbsp;</span>
          <Select
            labelId="affectations-select-label"
            id="affectations-select"
            value={selectedAffectations}
            label="ethnicity"
            onChange={(e)=>setSelectedAffectations(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {affectations.map((key, i = 1) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>
      </div>

      <div className="widget">
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

        <div className="selection-dropdown">
          <span>Ethnic Origins:&nbsp;</span>
          <Select
            labelId="ethnicity-select-label"
            id="ethnicity-select"
            value={selectedEthnicity}
            label="ethnicity"
            onChange={(e)=>{setEthnicity(e.target.value);setLanguage('select')}}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {ethnic.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>

        {(selectedEthnicity!=='select') ? 
          <div className="selection-dropdown">
            <span>Language:&nbsp;</span>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={selectedLanguage}
              label="language"
              onChange={(e)=>setLanguage(e.target.value)}
            >
              <MenuItem value={'select'}>SELECT</MenuItem>
                {languages[selectedEthnicity].map((key, i = 0) => 
                  <MenuItem key={i} value={key}>{key}</MenuItem>            
                )}            
            </Select>
          </div>
        : ''}

      </div>



      <div className="widget">
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

        <div className="selection-dropdown">
          <span>Family Rank:&nbsp;</span>
          <Select
            labelId="family-ranking-select-label"
            id="family-ranking-select"
            value={selectedFamRank}
            label="family-ranking"
            onChange={(e)=>setFamRank(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {famRank.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
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

        <div className="selection-dropdown">
          <span>Parental Status:&nbsp;</span>
          <Select
            labelId="parental-status-select-label"
            id="parental-status-select"
            value={selectedParentStatus}
            label="parental-status"
            onChange={(e)=>{setParentStatus(e.target.value);setParentTragedy('select')}}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {parentStatus.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>

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


        {(selectedParentStatus!=='Both parents are living') ? 
          <div className="selection-dropdown">
            <span>What Happened To Your Parents:&nbsp;</span>
            <Select
              labelId="parent-tragedy-select-label"
              id="parent-tragedy-select"
              value={selectedParentTragedy}
              label="parent-tragedy"
              onChange={(e)=>setParentTragedy(e.target.value)}
            >
              <MenuItem value={'select'}>SELECT</MenuItem>
                {parentTragedy.map((key, i = 0) => 
                  <MenuItem key={i} value={key}>{key}</MenuItem>            
                )}            
            </Select>
          </div>
        : ''}





      </div>

      <div className="widget">
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
    
        <div className="child-environment-dropdown">
          <span>Childhood Environment:&nbsp;</span>
          <Select
            labelId="child-environment-select-label"
            id="child-environment-select"
            value={selectedChildEnv}
            label="child-environment"
            onChange={(e)=>setChildEnv(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {childEnv.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>
      </div>

      <div className="widget">
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
      </div>

      <div className="widget">
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
      
        <div className="selection-dropdown">
          <span>Personality Traits:&nbsp;</span>
          <Select
            labelId="pers-traits-select-label"
            id="pers-traits-select"
            value={selectedPersTraits}
            label="pers-traits"
            onChange={(e)=>setPersTraits(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {persTraits.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>
      </div>  

      <div className="widget">
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

        <div className="selection-dropdown">
          <span>Person Most Valued:&nbsp;</span>
          <Select
            labelId="pers-valued-select-label"
            id="pers-valued-select"
            value={selectedPersValued}
            label="pers-valued"
            onChange={(e)=>setPersValued(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {persValued.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>
      </div>  

      <div className="widget">
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

        <div className="selection-dropdown">
          <span>You Most Value:&nbsp;</span>
          <Select
            labelId="you-value-select-label"
            id="you-value-select"
            value={selectedYouValue}
            label="you-value"
            onChange={(e)=>setYouValue(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {youValue.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>
      </div>  

      <div className="widget">
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

        <div className="selection-dropdown">
          <span>Disposition:&nbsp;</span>
          <Select
            labelId="how-feel-select-label"
            id="how-feel-select"
            value={selectedHowFeel}
            label="how-feel"
            onChange={(e)=>setHowFeel(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {howFeel.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>
      </div>  

      <div className="widget">
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

        <div className="selection-dropdown">
          <span>Your Most Valued Posession:&nbsp;</span>
          <Select
            labelId="valued-pos-select-label"
            id="valued-pos-select"
            value={selectedValuedPos}
            label="valued-pos"
            onChange={(e)=>setValuedPos(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {valuedPos.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>
      </div>

      <div className="widget">
        <h3>Life Events</h3>
        <h4>Age</h4>

        <input type="checkbox" id="preventNothing" /> Check to prevent "Nothing Happened This Year" events.

        <p>Click radio button again to re-roll / reselect. When manually entering age, it must be a value between 17 and 99.</p>
        Randomly Choose Your Age
        Manually Choose Your Age
        <p>Age:</p>
      </div>
    </div>
  )
}

export default Role