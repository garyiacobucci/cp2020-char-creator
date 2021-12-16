import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { UserContext } from '../UserContext';
import { roles, career } from './../staticData';
import { Language } from '@material-ui/icons';

const CharSheet = () => {

  //Connect to UserContext via Context API:
  const {

    userHandle,
    charPointsRoll, charPointsHaveBeenRolled,
    intPoints,
    refPoints,
    techPoints,
    coolPoints,
    attPoints,
    luckPoints,
    maPoints,
    bodyPoints,
    empPoints,
    role,
    careerSkillPoints, pickupSkills,
    pickupSkillValues,
    selectedClothes,
    selectedHairstyle,
    selectedAffectations,
    selectedEthnicity,
    selectedLanguage,
    selectedFamRank, 
    selectedParentStatus,
    selectedParentTragedy,
    selectedChildEnv, 
    selectedPersTraits, 
    selectedPersValued, 
    selectedYouValue, 
    selectedHowFeel, 
    selectedValuedPos
  } = useContext(UserContext);


  return (
    <div className="component-wrapper">
      <div className="widget">
      <h2>Character Sheet</h2>
      <p className="callout">HANDLE: {userHandle}</p>
      <p className="callout">ROLE: {role}</p>  
      <p className="callout">CHARACTER POINTS: {charPointsRoll}</p>
      <h3>STATS</h3>
      <p>INT [{intPoints}]</p>
      <p>REF [{refPoints}]</p>
      <p>TECH [{techPoints}]</p>
      <p>COOL [{coolPoints}]</p>
      <p>ATTR [{attPoints}]</p>
      <p>LUCK [{luckPoints}]</p>
      <p>MA [{maPoints}]</p>
      <p>BODY [{bodyPoints}]</p>
      <p>EMP [{empPoints}]</p>
      <p>Humanity [{empPoints*10}]</p>
      <p>Run [{maPoints * 3}] m</p>
      <p>Leap [{(maPoints * 3)/4}] m</p>
      <p>Lift (kgs) [{bodyPoints*40}] Lift (lbs) [{Math.floor(bodyPoints*40*2.2046)}]</p>
      <p>Carry (kgs) [{bodyPoints*10}] Carry (lbs) [{Math.floor(bodyPoints*10*2.2046)}]</p>
      <p>SAVE [{bodyPoints}]</p>
      <p>BTM {(() => {
              switch (true) {
                case (bodyPoints <= 2 && charPointsHaveBeenRolled): {return '-0'};
                case (bodyPoints >= 3 && bodyPoints <=4):   return '-1';
                case (bodyPoints >= 5 && bodyPoints <= 7): return '-2';
                case (bodyPoints >= 8 && bodyPoints <= 9):  return '-3';
                case (bodyPoints === 10): return '-4';
                case (bodyPoints >= 11): return '-5';
              }
            })()}</p>
      <h3>SKILLS</h3>

      {(role!=='') ? 
          <ul>
          {Object.values(career[role]).map((careerSkill, i) => (
            <li key={i} >{careerSkill}: {careerSkillPoints[i+1]}</li>
          ))}
          {pickupSkills.map((skill, i) => (
            <li key={i}>{skill}: {pickupSkillValues[i]}</li>
          ))}
          </ul>  
        : ''}



        <h3>STYLE</h3>
        Clothes: {selectedClothes}
        Hair: {selectedHairstyle}
        Affectations: {selectedAffectations}
        Ethnicity: {selectedEthnicity}
        Language: {selectedLanguage}
        <h3>FAMILY BACKGROUND </h3>
        Family Ranking: {selectedFamRank}
        Status of Parents: {selectedParentStatus}
        Family Status: {selectedParentTragedy}
        Childhood Environment: {selectedChildEnv}
        SIBLINGS   
        <h3>MOTIVATIONS</h3>
        Personality Traits: {selectedPersTraits}
        Valued Person: {selectedPersValued}
        Value Most: {selectedYouValue}
        Feel About People: {selectedHowFeel}
        Valued Posession: {selectedValuedPos}
        LIFE EVENTS
        Age:

      <div>
          <button className="button">Copy Character To Clipboard</button>
      </div>
      </div>
    </div>
  )
}

export default CharSheet