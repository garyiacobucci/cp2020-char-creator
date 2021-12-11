import React, { useContext } from 'react';
import { 
  button, MenuItem, InputLabel, Select,
  FormControlLabel, FormControl,
  Radio, RadioGroup 
} from '@material-ui/core';
import {MDCMenu, DropDownMenu} from '@material/menu';
import { UserContext } from '../UserContext';
import CareerPointsDistributor from './CareerPointsDistributor';
import PickupSkillsMenu from './PickupSkillsMenu';
import { career, clothes, hairstyle, affectations, ethnic, languages, famRank, parentStatus, parentTragedy,
  childEnv, persTraits, persValued, youValue, howFeel, valuedPos, diceRoll } from './../staticData';

const Role = () => {

  //Connect to UserContext via Context API:
  const {
    refPoints, intPoints,
    role, setRole, accSkillPoints,
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
    siblings, setSiblings, addSibling, removeSibling, updateSibling,
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
        <p>The world of Cyberpunk is a combination of savage, sophisticated, modern and retro-grade. 
          Fashion-model beautiful Techies rub shoulders with battle armored road warriors, 
          all of them making the scene in the hottest dance clubs, sleaziest bars and meanest streets 
          this side of the Postholocaust.
        </p>  
        <p>Each character in this world is playing a Role—a face that 
          person projects to the outside world as the real thing. There are 9 Roles in Cyberpunk:
          <a href="https://cyberpunk.fandom.com/wiki/Rockerboy" target="_blank"> Rockerboys</a>,
          <a href="https://cyberpunk.fandom.com/wiki/Solo"target="_blank"> Solos</a>,
          <a href="https://cyberpunk.fandom.com/wiki/Netrunner"target="_blank"> Netrunners</a>,
          <a href="https://cyberpunk.fandom.com/wiki/Corporate"target="_blank"> Corporates</a>,
          <a href="https://cyberpunk.fandom.com/wiki/Techie"target="_blank"> Techies</a>,
          <a href="https://cyberpunk.fandom.com/wiki/Cop"target="_blank"> Cops</a>,
          <a href="https://cyberpunk.fandom.com/wiki/Fixer"target="_blank"> Fixers</a>,
          <a href="https://cyberpunk.fandom.com/wiki/Media"target="_blank"> Medias</a>, and
          <a href="https://cyberpunk.fandom.com/wiki/Nomad"target="_blank"> Nomads</a>. 
          As a Cyberpunk player, you must select one role for your character:
        </p>

        {/*Role selection dropdown*/}
        <div className="role-panel">
          <FormControl fullWidth>
            <InputLabel id="role-select-label">Role</InputLabel>
            <Select
              labelId="role-select-label"
              id="role-select"
              value={role}
              label="Role"
              onChange={(e)=>setRole(e.target.value)}
            >
              {Object.keys(career).map((role, i) => (
                <MenuItem key={i} value={role}>{role}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <div><button onClick={()=>{setRole(Object.keys(career)[diceRoll(10,1)-1])}}>Randomize</button></div>

          <span className="callout">Career Skill Points Remaining: {40-accSkillPoints}<br/></span>

            {
              // Render the Career Skills panel interface once a role has been selected:
            (role !== '') ? <CareerPointsDistributor /> : 'Please select a role in order to assign Career Skill points!'
            }
          </div>

          <div>
            <div id="pickup-skills-panel">
              <p><b>Pickup Skills</b> are skills the character has learned in the course of knocking around, living his or her life.</p>
              <h3>Pickup Skill Points (REF + INT) : {refPoints+intPoints} | Remaining: {(refPoints+intPoints)-accPickupSkills}</h3>
              <div><button onClick={()=>{addNewPickupSkillRow()}}>Add a Pickup Skill</button></div>
            </div>

            {pickupSkillCategories.map((category, i) => (
              <div className="points-distributor-wrapper" key={i}>

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


                <div className="points-distributor-control-panel" id="pickup-control-panel">
                  <button 
                    onClick={()=>updatePickupSkillValues(i, 1)}
                    disabled={category==='select'||(refPoints+intPoints)-accPickupSkills<1} >+
                  </button>
                  <button 
                    onClick={()=>updatePickupSkillValues(i, -1)}
                    disabled={category==='select'||pickupSkillValues[i]<1} >-
                  </button>
                </div>

                <div className="point-value">
                  {pickupSkillValues[i]}
                </div>

                <div><button className="button" onClick={()=>removePickupSkillRow(i)}>X</button></div>

              </div>
            ))}

        </div>

      </div>

      <div className="widget">
        <h3>Origins and Personal Style</h3>
        <h4>Dress & Personal Style</h4>
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
        <div><button className="button" onClick={()=>{
          setSelectedClothes(clothes[diceRoll(10,1)-1]);
          setSelectedHairstyle(hairstyle[diceRoll(10,1)-1]);
          setSelectedAffectations(affectations[diceRoll(10,1)-1]);
          }}>Randomize</button></div>
      </div>

      <div className="widget">
        <h3>Ethnic Origins</h3>
        <div className="selection-dropdown">
          <span>Culture:&nbsp;</span>
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
        <div className="selection-dropdown">
          <span>Family Ranking:&nbsp;</span>
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

        {(selectedParentStatus==='Something happened to one or both parents') ? 
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
        <h5>You may add up to seven siblings:</h5>

          <div><button className="button" onClick={()=>{addSibling()}}>Add Sibling</button></div>

          {siblings.map((sibling, i) => (
            <div className="points-distributor-wrapper" key={i}>
              <div className="points-distributor-category"><h3>{i+1}</h3></div>
              <div className="selection-dropdown">
                <span>Gender:&nbsp;</span>
                <Select
                  labelId="sibling-gender-select-label"
                  id="sibling-gender-select"
                  value={sibling.gender}
                  label="sibling-gender"
                  onChange={(e)=>updateSibling(i, 'gender', e.target.value)}
                >
                  <MenuItem value={'select'}>SELECT</MenuItem>
                  <MenuItem value={'male'}>Male</MenuItem>
                  <MenuItem value={'female'}>Female</MenuItem>
                  <MenuItem value={'other'}>Other/NB</MenuItem>                    
                </Select>
              </div>

              <div className="selection-dropdown">
                <span>Age:&nbsp;</span>
                <Select
                  labelId="sibling-age-select-label"
                  id="sibling-age-select"
                  value={sibling.age}
                  label="sibling-age"
                  onChange={(e)=>updateSibling(i, 'age', e.target.value)}
                >
                  <MenuItem value={'select'}>SELECT</MenuItem>
                  <MenuItem value={'older than you'}>Older than you</MenuItem>
                  <MenuItem value={'younger than you'}>Younger than you</MenuItem>
                  <MenuItem value={'twin'}>Twin</MenuItem>
                </Select>
              </div>

              <div className="selection-dropdown">
                <span>Feeling Towards You:&nbsp;</span>
                <Select
                  labelId="sibling-feeling-select-label"
                  id="sibling-feeling-select"
                  value={sibling.feeling}
                  label="sibling-feeling"
                  onChange={(e)=>updateSibling(i, 'feeling', e.target.value)}
                >
                  <MenuItem value={'select'}>SELECT</MenuItem>
                  <MenuItem value={'neutral towards you'}>Is neutral towards you</MenuItem>                    
                  <MenuItem value={'likes you'}>Likes you</MenuItem>
                  <MenuItem value={'dislikes you'}>Dislikes you</MenuItem>
                  <MenuItem value={'hero worships you'}>Hero worships you</MenuItem>
                  <MenuItem value={'hates you'}>Hates you</MenuItem>
                </Select>
              </div>

              <div><button className="button" onClick={()=>removeSibling(i)}>X</button></div>

            </div>
          ))}


      </div>

      <div className="widget">
        <h3>Motivations</h3>
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

        <div className="selection-dropdown">
          <span>Person You Value Most:&nbsp;</span>
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