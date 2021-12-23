import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { career } from './../staticData';
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
      <div className="widget">
      <h2>Character Sheet</h2>
      <p className="">HANDLE: {(userHandle!=='')?<span className="highlight">{userHandle}</span>:<span className="warning">Must select a handle!</span>}</p>
      <p className="">ROLE: {(role)!==''?<span className="highlight">{role}</span>:<span className="warning">Must select a role!</span>}</p>  
      <h3>STATS</h3>
      <p>CHARACTER POINTS: {charPointsHaveBeenRolled?<span className="highlight">{charPointsRoll.reduce((a,b)=>a+b,0)}</span>:<span className="warning">Must determine character points!</span>}</p>
      <div>
        INT <span className="highlight">[{intPoints}]</span> // 
        REF <span className="highlight">[{refPoints}]</span> //
        TECH <span className="highlight">[{techPoints}]</span> //
        COOL <span className="highlight">[{coolPoints}]</span> //
        ATTR <span className="highlight">[{attPoints}]</span> //
        LUCK <span className="highlight">[{luckPoints}]</span> //
        MA <span className="highlight">[{maPoints}]</span> //
        BODY <span className="highlight">[{bodyPoints}]</span> //
        EMP <span className="highlight">[{empPoints}]</span>
      </div>
      <h4>DERIVED STATS</h4>
      <div>
        Humanity <span className="highlight">[{empPoints*10}]</span> //
        Run <span className="highlight">[{maPoints * 3}]</span> m //
        Leap <span className="highlight">[{(maPoints * 3)/4}]</span> m //
        Lift (kgs) <span className="highlight">[{bodyPoints*40}]</span> Lift (lbs) <span className="highlight">[{Math.floor(bodyPoints*40*2.2046)}]</span> //
        Carry (kgs) <span className="highlight">[{bodyPoints*10}]</span> Carry (lbs) <span className="highlight">[{Math.floor(bodyPoints*10*2.2046)}]</span> //
        Save <span className="highlight">[{bodyPoints}]</span> //
        Body Type Modifier <span className="highlight">[{(() => {
                switch (true) {
                  case (bodyPoints <= 2 && charPointsHaveBeenRolled): {return '-0'};
                  case (bodyPoints >= 3 && bodyPoints <=4):   return '-1';
                  case (bodyPoints >= 5 && bodyPoints <= 7): return '-2';
                  case (bodyPoints >= 8 && bodyPoints <= 9):  return '-3';
                  case (bodyPoints === 10): return '-4';
                  case (bodyPoints >= 11): return '-5';
                }
              })()}]</span>
      </div>

    
      <h3>SKILLS</h3>

      {(role!=='') ? 
          <ul>
          {Object.values(career[role]).map((careerSkill, i) => (
            <li key={i} >{careerSkill}: <span className="highlight">{careerSkillPoints[i+1]}</span></li>
          ))}
          {pickupSkills.map((skill, i) => (
            <li key={i}>{skill}: <span className="highlight">{pickupSkillValues[i]}</span></li>
          ))}
          </ul>  
        : <span className="warning">Must add skills!</span>}



        <h3>STYLE</h3>
        <ul>
          <li>Clothes: {(selectedClothes!=='select')?<span className="highlight">{selectedClothes}</span>:<span className="warning">Must select clothing!</span>}</li>
          <li>Hair: {(selectedHairstyle!=='select')?<span className="highlight">{selectedHairstyle}</span>:<span className="warning">Must select clothing!</span>}</li>
          <li>Affectations: {(selectedAffectations!=='select')?<span className="highlight">{selectedAffectations}</span>:<span className="warning">Must select clothing!</span>}</li>
          <li>Ethnicity: {(selectedEthnicity!=='select')?<span className="highlight">{selectedEthnicity}</span>:<span className="warning">Must select clothing!</span>}</li>
          <li>Language: {(selectedLanguage!=='select')?<span className="highlight">{selectedLanguage}</span>:<span className="warning">Must select clothing!</span>}</li>
        </ul>

        <h3>FAMILY BACKGROUND </h3>
        <ul>
          <li>Family Ranking: {(selectedFamRank!=='select')?<span className="highlight">{selectedFamRank}</span>:<span className="warning">Must select family rank!</span>}</li>
          <li>Status of Parents: {(selectedParentStatus!=='select')?<span className="highlight">{selectedParentStatus}</span>:<span className="warning">Must select parent status!</span>}</li>
          {(selectedParentStatus==='Something happened to one or both parents')?
            <li>Family Status: {(selectedParentTragedy!=='select')?<span className="highlight">{selectedParentTragedy}</span>:<span className="warning">Must select parent tragedy!</span>}</li>:''}
          <li>Childhood Environment: {(selectedChildEnv!=='select')?<span className="highlight">{selectedChildEnv}</span>:<span className="warning">Must select childhood environment!</span>}</li>
        </ul>

        <h4>SIBLINGS</h4>
        {(siblings.length>0) ?
            <ol>
            {siblings.map((sibling, i)=>(
                <li key={i}>{sibling.gender} | {sibling.age} | {sibling.feeling} </li>
              ))}          
            </ol>
        : <span className="highlight">No siblings–you are an only child.</span>
        }

        <h3>MOTIVATIONS</h3>
        <ul>
          <li>Personality Traits: {selectedPersTraits!=='select'?<span className="highlight">{selectedPersTraits}</span>:<span className="warning">Must select personality traits!</span>}</li>
          <li>Valued Person: {selectedPersValued!=='select'?<span className="highlight">{selectedPersValued}</span>:<span className="warning">Must select valued person!</span>}</li>
          <li>Value Most: {selectedYouValue!=='select'?<span className="highlight">{selectedYouValue}</span>:<span className="warning">Must select what you value most!</span>}</li>
          <li>Feel About People: {selectedHowFeel!=='select'?<span className="highlight">{selectedHowFeel}</span>:<span className="warning">Must select disposition!</span>}</li>
          <li>Valued Possession: {selectedValuedPos!=='select'?<span className="highlight">{selectedValuedPos}</span>:<span className="warning">Must select valued possession!</span>}</li>
        </ul>
        <h3>LIFE EVENTS</h3>
        <h4>Age: <span className="highlight">{age}</span></h4>
        {lifeEvents.length>0?
          <div>
            <h4>Annual Events</h4>
            <ol start="17">
              {lifeEvents.map((event, i)=>(<li key={i}>{event}</li>))}
            </ol>    
          </div>    
        : <p><span className="warning">Must generate life events!</span></p>
        }

        <CopyToClipboard />
      </div>
  )
}

export default CharSheet