import React, { useContext } from 'react';
import { 
  Button,
  FormControlLabel, FormControl, FormLabel,
  Radio, RadioGroup 
} from '@material-ui/core';
import staticData from './../staticData';
import { UserContext } from '../UserContext';

const CareerSkills = () => {

  const {
    careerSkillPoints, setCareerSkillPoints,
    accSkillPoints,
    role
  } = useContext(UserContext);

  //Destructure static data:
  const { roles } = staticData;

  return(
    <div>
      <h3>Skills</h3>
      <h4>Career Skills</h4>
      <h5>Career Skill Points Remaining: {40-accSkillPoints}</h5>

      <div className="points-distributor-wrapper">
        <div className="points-distributor-category">
          {role && roles[role][0]}
        </div>
        <div className="points-distributor-control-panel">
          <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 1:careerSkillPoints[1]+1})} disabled={(40-accSkillPoints<1)} >+</Button>
          <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 1:careerSkillPoints[1]-1})} disabled={careerSkillPoints[1]<1}>-</Button>
        </div>
        <div className="points-distributor-value">
          {careerSkillPoints[1]}
        </div>
      </div>

      <div className="points-distributor-wrapper">
        <div className="points-distributor-category">
        {role && roles[role][1]}
        </div>
        <div className="points-distributor-control-panel">
        <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 2:careerSkillPoints[2]+1})} disabled={(40-accSkillPoints<1)} >+</Button>
          <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 2:careerSkillPoints[2]-1})} disabled={careerSkillPoints[2]<1}>-</Button>
        </div>
        <div className="points-distributor-value">
            {careerSkillPoints[2]}
        </div>
      </div>

      <div className="points-distributor-wrapper">
        <div className="points-distributor-category">
        {role && roles[role][2]}
        </div>
        <div className="points-distributor-control-panel">
        <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 3:careerSkillPoints[3]+1})} disabled={(40-accSkillPoints<1)} >+</Button>
          <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 3:careerSkillPoints[3]-1})} disabled={careerSkillPoints[3]<1}>-</Button>
        </div>
        <div className="points-distributor-value">
          {careerSkillPoints[3]}
        </div>
      </div>

      <div className="points-distributor-wrapper">
        <div className="points-distributor-category">
        {role && roles[role][3]}
        </div>
        <div className="points-distributor-control-panel">
        <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 4:careerSkillPoints[4]+1})} disabled={(40-accSkillPoints<1)} >+</Button>
          <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 4:careerSkillPoints[4]-1})} disabled={careerSkillPoints[4]<1}>-</Button>
        </div>
        <div className="points-distributor-value">
          {careerSkillPoints[4]}
        </div>
      </div>

      <div className="points-distributor-wrapper">
        <div className="points-distributor-category">
        {role && roles[role][4]}
        </div>
        <div className="points-distributor-control-panel">
        <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 5:careerSkillPoints[5]+1})} disabled={(40-accSkillPoints<1)} >+</Button>
          <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 5:careerSkillPoints[5]-1})} disabled={careerSkillPoints[5]<1}>-</Button>
        </div>
        <div className="points-distributor-value">
          {careerSkillPoints[5]}
        </div>
      </div>

      <div className="points-distributor-wrapper">
        <div className="points-distributor-category">
        {role && roles[role][5]}
        </div>
        <div className="points-distributor-control-panel">
        <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 6:careerSkillPoints[6]+1})} disabled={(40-accSkillPoints<1)} >+</Button>
          <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 6:careerSkillPoints[6]-1})} disabled={careerSkillPoints[6]<1}>-</Button>
        </div>
        <div className="points-distributor-value">
          {careerSkillPoints[6]}
        </div>
      </div>

      <div className="points-distributor-wrapper">
        <div className="points-distributor-category">
        {role && roles[role][6]}
        </div>
        <div className="points-distributor-control-panel">
        <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 7:careerSkillPoints[7]+1})} disabled={(40-accSkillPoints<1)} >+</Button>
          <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 7:careerSkillPoints[7]-1})} disabled={careerSkillPoints[7]<1}>-</Button>
        </div>
        <div className="points-distributor-value">
          {careerSkillPoints[7]}
        </div>
      </div>

      <div className="points-distributor-wrapper">
        <div className="points-distributor-category">
        {role && roles[role][7]}
        </div>
        <div className="points-distributor-control-panel">
        <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 8:careerSkillPoints[8]+1})} disabled={(40-accSkillPoints<1)} >+</Button>
          <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 8:careerSkillPoints[8]-1})} disabled={careerSkillPoints[8]<1}>-</Button>
        </div>
        <div className="points-distributor-value">
          {careerSkillPoints[8]}
        </div>
      </div>

      <div className="points-distributor-wrapper">
        <div className="points-distributor-category">
        {role && roles[role][8]}
        </div>
        <div className="points-distributor-control-panel">
        <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 9:careerSkillPoints[9]+1})} disabled={(40-accSkillPoints<1)} >+</Button>
          <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 9:careerSkillPoints[9]-1})} disabled={careerSkillPoints[9]<1}>-</Button>
        </div>
        <div className="points-distributor-value">
          {careerSkillPoints[9]}
        </div>
      </div>

      <div className="points-distributor-wrapper">
        <div className="points-distributor-category">
        {role && roles[role][9]}
        </div>
        <div className="points-distributor-control-panel">
        <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 10:careerSkillPoints[10]+1})} disabled={(40-accSkillPoints<1)} >+</Button>
          <Button variant="contained" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, 10:careerSkillPoints[10]-1})} disabled={careerSkillPoints[10]<1}>-</Button>
        </div>
        <div className="points-distributor-value">
          {careerSkillPoints[10]}
        </div>
      </div>

    </div>
  )
}

export default CareerSkills;