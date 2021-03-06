import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { roles, career } from './../staticData';

const CareerPointsDistributor = (props) => {

  //Connect to UserContext via Context API:
  const {
    careerSkillPoints, setCareerSkillPoints,
    accSkillPoints, role,
  } = useContext(UserContext);


  return(
    <div className="career-points-container">
      {Object.values(career[role]).map((value, i) => (
        <div className="career-points-distributor-wrapper" key={i}>
          <div className="career-points-distributor-category">
            <div className="point-value">{careerSkillPoints[i+1]}</div>
            <div className="category-name">{value}</div>
          </div>
          <div className="points-distributor-control-panel">
            <button className="button"  onClick={(e) => setCareerSkillPoints({...careerSkillPoints, [i+1]:careerSkillPoints[i+1]+1})} disabled={(40-accSkillPoints<1)} >+</button>
            <button className="button" onClick={(e) => setCareerSkillPoints({...careerSkillPoints, [i+1]:careerSkillPoints[i+1]-1})} disabled={careerSkillPoints[i+1]<1}>-</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CareerPointsDistributor;

