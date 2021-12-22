import React, { useContext } from 'react';
import { MenuItem, InputLabel, Select, FormControl } from '@material-ui/core';
import { UserContext } from '../UserContext';
import CareerPointsDistributor from './CareerPointsDistributor';
import PickupSkillsMenu from './PickupSkillsMenu';
import LifeEvents from './LifeEvents';
import LifePath from './LifePath';
import Origins from './Origins';
import FamilyBackground from './FamilyBackground';
import Motivations from './Motivations';
import { career, diceRoll } from './../staticData';

const Role = () => {

  //Connect to UserContext via Context API:
  const {
    refPoints, intPoints,
    role, setRole, accSkillPoints,
    addNewPickupSkillRow, removePickupSkillRow, 
    setCareerSkillPoints,
    pickupSkills,
    pickupSkillCategories, updatePickupSkillCategories, 
    pickupSkillValues, updatePickupSkillValues, accPickupSkills
  } = useContext(UserContext);

  return (
    <div className="component-wrapper">

      <div className="widget">

        <h2>Role and Skills</h2>
        <h3>Role&nbsp;<button className="randomize" onClick={()=>{
          setRole(Object.keys(career)[diceRoll(10,1)-1]);
          setCareerSkillPoints({1:4,2:4,3:4,4:4,5:4,6:4,7:4,8:4,9:4,10:4,11:0,12:0})
        }}>Randomize</button></h3>
        <p>The world of Cyberpunk is a combination of savage, sophisticated, modern and retrograde. 
          Fashion model-beautiful Techies rub shoulders with battle-armored road warriors, 
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
            <InputLabel id="role-select-label">&nbsp;ROLE</InputLabel>
            <Select
              labelId="role-select-label"
              id="role-select"
              value={role}
              label="role"
              onChange={(e)=>{setRole(e.target.value);setCareerSkillPoints({1:4,2:4,3:4,4:4,5:4,6:4,7:4,8:4,9:4,10:4,11:0,12:0})}}
            >
              {Object.keys(career).map((role, i) => (
                <MenuItem key={i} value={role}>{role}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <p className="callout">Career Skill Points to Distribute: {40-accSkillPoints}<br/></p>

            {
              // Render the Career Skills panel interface once a role has been selected:
            (role !== '') ? <CareerPointsDistributor /> : <div className="warning">// Please select a role in order to assign Career Skill points //</div>
            }
          </div>

          <div>
            <div id="pickup-skills-panel">
              <p><b>Pickup Skills</b> are skills the character has learned in the course of knocking around, living his or her life.</p>
              <h3>Pickup Skill Points (REF + INT) : <span className="callout highlight">{refPoints+intPoints}</span> | Remaining: <span className="callout highlight">{(refPoints+intPoints)-accPickupSkills}</span></h3>
              <div><button className="button" onClick={()=>{addNewPickupSkillRow()}}>Add a Pickup Skill</button></div>
            </div>

            {pickupSkillCategories.map((category, i) => (
              <div className="points-distributor-wrapper" key={i}>

                <div className="pickup-skill-category-menu">
                  <div className="dropdown-cluster-wrapper">
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

                  <PickupSkillsMenu i={i} />
                  </div>
                </div>



                <div className="points-distributor-control-panel" id="pickup-control-panel">
                  <button
                    className="button"
                    onClick={()=>updatePickupSkillValues(i, 1)}
                    disabled={pickupSkills[i]==='select'||(refPoints+intPoints)-accPickupSkills<1} >+
                  </button>
                  <button
                    className="button"
                    onClick={()=>updatePickupSkillValues(i, -1)}
                    disabled={pickupSkills[i]==='select'||pickupSkillValues[i]<1} >-
                  </button>
                </div>

                <div className="point-value">
                  {pickupSkillValues[i]}
                </div>

                <div><button className="button" onClick={()=>removePickupSkillRow(i)}>X</button></div>

              </div>
            ))}

        </div>
              <p className="fine-print">For complete descriptions of individual Pickup Skills, <a href="https://rpg.web-mage.ca/pages/cpskills.php" target="_blank">please visit this page</a> (opens in a new window).</p>
      </div>

      <LifePath />
  
      <Origins />

      <FamilyBackground />

      <Motivations />

      <LifeEvents />
    </div>
  )
}

export default Role