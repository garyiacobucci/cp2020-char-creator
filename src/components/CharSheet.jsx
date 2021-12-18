import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { UserContext } from '../UserContext';
import { roles, career } from './../staticData';
import { Language } from '@material-ui/icons';
import CopyToClipboard from './CopyToClipboard';

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
    selectedValuedPos,
    siblings,
    age, lifeEvents
  } = useContext(UserContext);

  return (
    <div className="component-wrapper">
      <div className="widget">
      <h2>Character Sheet</h2>
      <p className="callout">HANDLE: {(userHandle!=='')?userHandle:'Must select a handle!'}</p>
      <p className="callout">ROLE: {(role)!==''?role:'Must select a role!'}</p>  
      <h3>STATS</h3>
      <h4>CHARACTER POINTS: {charPointsRoll}</h4>
      <div>
        INT [{intPoints}] // 
        REF [{refPoints}] //
        TECH [{techPoints}] //
        COOL [{coolPoints}] //
        ATTR [{attPoints}] //
        LUCK [{luckPoints}] //
        MA [{maPoints}] //
        BODY [{bodyPoints}] //
        EMP [{empPoints}]
      </div>
      <h4>DERIVED STATS</h4>
      <div>
        Humanity [{empPoints*10}] //
        Run [{maPoints * 3}] m //
        Leap [{(maPoints * 3)/4}] m //
        Lift (kgs) [{bodyPoints*40}] Lift (lbs) [{Math.floor(bodyPoints*40*2.2046)}] //
        Carry (kgs) [{bodyPoints*10}] Carry (lbs) [{Math.floor(bodyPoints*10*2.2046)}] //
        Save [{bodyPoints}] //
        Body Type Modifier {(() => {
                switch (true) {
                  case (bodyPoints <= 2 && charPointsHaveBeenRolled): {return '-0'};
                  case (bodyPoints >= 3 && bodyPoints <=4):   return '-1';
                  case (bodyPoints >= 5 && bodyPoints <= 7): return '-2';
                  case (bodyPoints >= 8 && bodyPoints <= 9):  return '-3';
                  case (bodyPoints === 10): return '-4';
                  case (bodyPoints >= 11): return '-5';
                }
              })()}
      </div>

    
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
        : 'Must add skills!'}



        <h3>STYLE</h3>
        <ul>
          <li>Clothes: {(selectedClothes!=='select')?selectedClothes:'Must select clothing!'}</li>
          <li>Hair: {(selectedHairstyle!=='select')?selectedHairstyle:'Must select clothing!'}</li>
          <li>Affectations: {(selectedAffectations!=='select')?selectedAffectations:'Must select clothing!'}</li>
          <li>Ethnicity: {(selectedEthnicity!=='select')?selectedEthnicity:'Must select clothing!'}</li>
          <li>Language: {(selectedLanguage!=='select')?selectedLanguage:'Must select clothing!'}</li>
        </ul>

        <h3>FAMILY BACKGROUND </h3>
        <ul>
          <li>Family Ranking: {(selectedFamRank!=='select')?selectedFamRank:'Must select family rank!'}</li>
          <li>Status of Parents: {(selectedParentStatus!=='select')?selectedParentStatus:'Must select parent status!'}</li>
          {(selectedParentStatus==='Something happened to one or both parents')?
            <li>Family Status: {(selectedParentTragedy!=='select')?selectedParentTragedy:'Must select parent tragedy!'}</li>:''}
          <li>Childhood Environment: {(selectedChildEnv!=='select')?selectedChildEnv:'Must select childhood environment!'}</li>
        </ul>

        <h4>SIBLINGS</h4>
        {(siblings.length>0) ?
            <ol>
            {siblings.map((sibling, i)=>(
                <li key={i}>{sibling.gender} | {sibling.age} | {sibling.feeling} </li>
              ))}          
            </ol>
        : 'No siblings–you are an only child.'
        }

        <h3>MOTIVATIONS</h3>
        <ul>
          <li>Personality Traits: {selectedPersTraits!=='select'?selectedPersTraits:'Must select personality traits!'}</li>
          <li>Valued Person: {selectedPersValued!=='select'?selectedPersValued:'Must select valued person!'}</li>
          <li>Value Most: {selectedYouValue!=='select'?selectedYouValue:'Must select what you value most!'}</li>
          <li>Feel About People: {selectedHowFeel!=='select'?selectedHowFeel:'Must select disposition!'}</li>
          <li>Valued Possession: {selectedValuedPos!=='select'?selectedValuedPos:'Must select valued possession!'}</li>
        </ul>
        <h3>LIFE EVENTS</h3>
        <h4>Age: {age}</h4>
        <h4>Life Events</h4>
        {lifeEvents.length>0?
        <ol start="17">
          {lifeEvents.map((event, i)=>(<li key={i}>{event}</li>))}
        </ol>        
        : <p>Must generate life events!</p>
        }


        <CopyToClipboard />
      </div>
    </div>
  )
}

export default CharSheet