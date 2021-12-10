import React, { useContext } from 'react';
import { 
  Button,
  FormControlLabel, FormControl, FormLabel,
  Radio, RadioGroup 
} from '@material-ui/core';
import { roles, career } from './../staticData';
import { UserContext } from '../UserContext';

const CareerSkills = () => {

  const {
    careerSkillPoints, setCareerSkillPoints,
    accSkillPoints,
    role
  } = useContext(UserContext);

  return(
    <div>
      <h3>Skills</h3>
      <h4>Career Skills</h4>
      <h5>Career Skill Points Remaining: {40-accSkillPoints}</h5>

      {Object.values(career[role]).map((value, i) => (
        <div key={i}>
          <div className="points-distributor-category">
            {value}
          </div>
          <div className="points-distributor-control-panel">
            <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, [i+1]:careerSkillPoints[i+1]+1})} disabled={(40-accSkillPoints<1)} >+</Button>
            <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, [i+1]:careerSkillPoints[i+1]-1})} disabled={careerSkillPoints[i+1]<1}>-</Button>
          </div>
          <div className="points-distributor-value">
            {careerSkillPoints[i+1]}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CareerSkills;