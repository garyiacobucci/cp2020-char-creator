import React, { useContext } from 'react';
import { 
  Button, MenuItem, InputLabel, Select,
  FormControlLabel, FormControl,
  Radio, RadioGroup 
} from '@material-ui/core';
import { UserContext } from '../UserContext';
import CareerSkills from './CareerSkills';
import { skills } from './../staticData';

const PickupSkillsMenu = (props) => {

  //Connect to UserContext via Context API:
  const {
    refPoints, intPoints,
    role, setRole, manualRole, setManualRole,
    addNewPickupSkillRow, pickupSkillCategories, updatePickupSkillCategories, pickupSkills, updatePickupSkills, pickupSkillValues, updatePickupSkillValues, accPickupSkills
  } = useContext(UserContext);

  const { i } = props;

  return (
    <div className="pickup-skills-menu">

      {/*Forgive me, Andy Hunt and Dave Thomas, for violating the DRY principle thusly. JSX has me up against a wall. */}

      { //  If there are two skills, render this menu:
      (pickupSkillCategories[i]==='attr') &&
      <Select
        labelId="pickup-skills-select-label"
        id="pickup-skills-select"
        value={pickupSkills[i]}
        label="Pickup Skill"
        onChange={(e)=>updatePickupSkills(e, i)}
      >
        <MenuItem value={'select'}>SELECT</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[1]}>{Object.values(skills[pickupSkillCategories[i]])[1]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[2]}>{Object.values(skills[pickupSkillCategories[i]])[2]}</MenuItem>
      </Select>
      }

      { // If there are three skills, render this menu:
      (pickupSkillCategories[i]==='body') &&
      <Select
        labelId="pickup-skills-select-label"
        id="pickup-skills-select"
        value={pickupSkills[i]}
        label="Pickup Skill"
        onChange={(e)=>updatePickupSkills(e, i)}
      >
        <MenuItem value={'select'}>SELECT</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[1]}>{Object.values(skills[pickupSkillCategories[i]])[1]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[2]}>{Object.values(skills[pickupSkillCategories[i]])[2]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[3]}>{Object.values(skills[pickupSkillCategories[i]])[3]}</MenuItem>
      </Select>
      }

      { // If there are five skills, render this menu:
      (pickupSkillCategories[i]==='cool') &&
      <Select
        labelId="pickup-skills-select-label"
        id="pickup-skills-select"
        value={pickupSkills[i]}
        label="Pickup Skill"
        onChange={(e)=>updatePickupSkills(e, i)}
      >
        <MenuItem value={'select'}>SELECT</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[1]}>{Object.values(skills[pickupSkillCategories[i]])[1]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[2]}>{Object.values(skills[pickupSkillCategories[i]])[2]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[3]}>{Object.values(skills[pickupSkillCategories[i]])[3]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[4]}>{Object.values(skills[pickupSkillCategories[i]])[4]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[5]}>{Object.values(skills[pickupSkillCategories[i]])[5]}</MenuItem>
      </Select>
      }

      { // If there are seven skills, render this menu:
      (pickupSkillCategories[i]==='emp') &&
      <Select
        labelId="pickup-skills-select-label"
        id="pickup-skills-select"
        value={pickupSkills[i]}
        label="Pickup Skill"
        onChange={(e)=>updatePickupSkills(e, i)}
      >
        <MenuItem value={'select'}>SELECT</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[1]}>{Object.values(skills[pickupSkillCategories[i]])[1]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[2]}>{Object.values(skills[pickupSkillCategories[i]])[2]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[3]}>{Object.values(skills[pickupSkillCategories[i]])[3]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[4]}>{Object.values(skills[pickupSkillCategories[i]])[4]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[5]}>{Object.values(skills[pickupSkillCategories[i]])[5]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[6]}>{Object.values(skills[pickupSkillCategories[i]])[6]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[7]}>{Object.values(skills[pickupSkillCategories[i]])[7]}</MenuItem>
      </Select>
      }

      { // If there are 20 skills, render this menu:
      (pickupSkillCategories[i]==='tech' || pickupSkillCategories[i]==='ref') &&
      <Select
        labelId="pickup-skills-select-label"
        id="pickup-skills-select"
        value={pickupSkills[i]}
        label="Pickup Skill"
        onChange={(e)=>updatePickupSkills(e, i)}
      >
        <MenuItem value={'select'}>SELECT</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[1]}>{Object.values(skills[pickupSkillCategories[i]])[1]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[2]}>{Object.values(skills[pickupSkillCategories[i]])[2]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[3]}>{Object.values(skills[pickupSkillCategories[i]])[3]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[4]}>{Object.values(skills[pickupSkillCategories[i]])[4]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[5]}>{Object.values(skills[pickupSkillCategories[i]])[5]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[6]}>{Object.values(skills[pickupSkillCategories[i]])[6]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[7]}>{Object.values(skills[pickupSkillCategories[i]])[7]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[8]}>{Object.values(skills[pickupSkillCategories[i]])[8]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[9]}>{Object.values(skills[pickupSkillCategories[i]])[9]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[10]}>{Object.values(skills[pickupSkillCategories[i]])[10]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[11]}>{Object.values(skills[pickupSkillCategories[i]])[11]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[12]}>{Object.values(skills[pickupSkillCategories[i]])[12]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[13]}>{Object.values(skills[pickupSkillCategories[i]])[13]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[14]}>{Object.values(skills[pickupSkillCategories[i]])[14]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[15]}>{Object.values(skills[pickupSkillCategories[i]])[15]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[16]}>{Object.values(skills[pickupSkillCategories[i]])[16]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[17]}>{Object.values(skills[pickupSkillCategories[i]])[17]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[18]}>{Object.values(skills[pickupSkillCategories[i]])[18]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[19]}>{Object.values(skills[pickupSkillCategories[i]])[19]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[20]}>{Object.values(skills[pickupSkillCategories[i]])[20]}</MenuItem>
      </Select>
      }

{ // If there are 20 skills, render this menu:
      (pickupSkillCategories[i]==='stat_int') &&
      <Select
        labelId="pickup-skills-select-label"
        id="pickup-skills-select"
        value={pickupSkills[i]}
        label="Pickup Skill"
        onChange={(e)=>updatePickupSkills(e, i)}
      >
        <MenuItem value={'select'}>SELECT</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[1]}>{Object.values(skills[pickupSkillCategories[i]])[1]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[2]}>{Object.values(skills[pickupSkillCategories[i]])[2]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[3]}>{Object.values(skills[pickupSkillCategories[i]])[3]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[4]}>{Object.values(skills[pickupSkillCategories[i]])[4]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[5]}>{Object.values(skills[pickupSkillCategories[i]])[5]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[6]}>{Object.values(skills[pickupSkillCategories[i]])[6]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[7]}>{Object.values(skills[pickupSkillCategories[i]])[7]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[8]}>{Object.values(skills[pickupSkillCategories[i]])[8]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[9]}>{Object.values(skills[pickupSkillCategories[i]])[9]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[10]}>{Object.values(skills[pickupSkillCategories[i]])[10]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[11]}>{Object.values(skills[pickupSkillCategories[i]])[11]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[12]}>{Object.values(skills[pickupSkillCategories[i]])[12]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[13]}>{Object.values(skills[pickupSkillCategories[i]])[13]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[14]}>{Object.values(skills[pickupSkillCategories[i]])[14]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[15]}>{Object.values(skills[pickupSkillCategories[i]])[15]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[16]}>{Object.values(skills[pickupSkillCategories[i]])[16]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[17]}>{Object.values(skills[pickupSkillCategories[i]])[17]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[18]}>{Object.values(skills[pickupSkillCategories[i]])[18]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[19]}>{Object.values(skills[pickupSkillCategories[i]])[19]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[20]}>{Object.values(skills[pickupSkillCategories[i]])[20]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[21]}>{Object.values(skills[pickupSkillCategories[i]])[21]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[22]}>{Object.values(skills[pickupSkillCategories[i]])[22]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[23]}>{Object.values(skills[pickupSkillCategories[i]])[23]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[24]}>{Object.values(skills[pickupSkillCategories[i]])[24]}</MenuItem>
        <MenuItem value={Object.values(skills[pickupSkillCategories[i]])[25]}>{Object.values(skills[pickupSkillCategories[i]])[25]}</MenuItem>
      </Select>
      }
  </div>
  )
}

export default PickupSkillsMenu;