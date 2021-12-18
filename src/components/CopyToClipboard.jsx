
import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { UserContext } from '../UserContext';
import { roles, career } from './../staticData';
import { Language } from '@material-ui/icons';

const CopyToClipboard = () => {

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
    age, lifeEvents,
    copySuccessMessage, setCopySuccessMessage
  } = useContext(UserContext);


  // Preparing a template literal for family background based on whether we need to render 'Parent Tragedy' or not:
  const familyBackgroundText = () => {
    if (selectedParentStatus==='Something happened to one or both parents') {
      return (
  `- Family Ranking: ${(selectedFamRank!=='select')?selectedFamRank:'Must select family rank!'}
- Status of Parents: Something happened to one or both parents
- Family Status: ${(selectedParentTragedy!=='select')?selectedParentTragedy:'Must select parent tragedy!'}
- Childhood Environment: ${(selectedChildEnv!=='select')?selectedChildEnv:'Must select childhood environment!'}`     
      )
    } else return (
`- Family Ranking: ${(selectedFamRank!=='select')?selectedFamRank:'Must select family rank!'}
- Status of Parents: ${(selectedParentStatus!=='select')?selectedParentStatus:'Must select parent status!'}
- Childhood Environment: ${(selectedChildEnv!=='select')?selectedChildEnv:'Must select childhood environment!'}`     
    )
  }


  const plainTextCharacterSheet = 
`
HANDLE: ${(userHandle!=='')?userHandle:'Must select a handle!'}
ROLE: ${(role)!==''?role:'Must select a role!'}

-STATS -

CHARACTER POINTS: ${charPointsHaveBeenRolled?(charPointsRoll.reduce((a,b)=>a+b,0)):'Must determine character points!'}

INT [${intPoints}]
REF [${refPoints}]
TECH [${techPoints}]
COOL [${coolPoints}]
ATTR [${attPoints}]
LUCK [${luckPoints}]
MA [${maPoints}]
BODY [${bodyPoints}]
EMP [${empPoints}]

DERIVED STATS:

Humanity [${empPoints*10}]
Run [${maPoints * 3}] m
Leap [${(maPoints * 3)/4}] m
Lift (kgs) [${bodyPoints*40}] Lift (lbs) [${Math.floor(bodyPoints*40*2.2046)}]
Carry (kgs) [${bodyPoints*10}] Carry (lbs) [${Math.floor(bodyPoints*10*2.2046)}]
Save [${bodyPoints}]
Body Type Modifier ${(() => {
            switch (true) {
              case (bodyPoints <= 2 && charPointsHaveBeenRolled): {return '-0'};
              case (bodyPoints >= 3 && bodyPoints <=4):   return '-1';
              case (bodyPoints >= 5 && bodyPoints <= 7): return '-2';
              case (bodyPoints >= 8 && bodyPoints <= 9):  return '-3';
              case (bodyPoints === 10): return '-4';
              case (bodyPoints >= 11): return '-5';
            }
          })()}

SKILLS:
${(role!=='') ? 
      <ul>
      {Object.values(career[role]).map((careerSkill, i) => (
        <li key={i} >{careerSkill}: {careerSkillPoints[i+1]}</li>
      ))}
      {pickupSkills.map((skill, i) => (
        <li key={i}>{skill}: {pickupSkillValues[i]}</li>
      ))}
      </ul>  
    : 'Must add skills!'}

STYLE:
- Clothes: ${(selectedClothes!=='select')?selectedClothes:'Must select clothing!'}
- Hair: ${(selectedHairstyle!=='select')?selectedHairstyle:'Must select clothing!'}
- Affectations: ${(selectedAffectations!=='select')?selectedAffectations:'Must select clothing!'}
- Ethnicity: ${(selectedEthnicity!=='select')?selectedEthnicity:'Must select clothing!'}
- Language: ${(selectedLanguage!=='select')?selectedLanguage:'Must select clothing!'}

FAMILY BACKGROUND:
${familyBackgroundText()}

${(siblings.length>0) ? 
  `SIBLINGS:
${siblings.map((sibling, i)=>(
`${i}. ${sibling.gender} | ${sibling.age} | ${sibling.feeling}`
  )).join("\r\n")}`          
  :'No siblings–you are an only child.'}

MOTIVATIONS:
- Personality Traits: ${selectedPersTraits!=='select'?selectedPersTraits:'Must select personality traits!'}
- Valued Person: ${selectedPersValued!=='select'?selectedPersValued:'Must select valued person!'}
- Value Most: ${selectedYouValue!=='select'?selectedYouValue:'Must select what you value most!'}
- Feel About People: ${selectedHowFeel!=='select'?selectedHowFeel:'Must select disposition!'}
- Valued Possession: ${selectedValuedPos!=='select'?selectedValuedPos:'Must select valued possession!'}

LIFE EVENTS:
Age: ${age}
${(lifeEvents.length>0)?
  lifeEvents.map((lifeEvent, i = 17)=>(`${i}. ${lifeEvent}`)).join("\r\n")
  : 'Must generate life events!'}`

  const handleTooltip = () => {
    // Set the value of the tooltip text to a success message.
    setCopySuccessMessage('Copied Successfully!')
    // After three seconds, reset the value back to an empty string.
    setTimeout( function() {
      setCopySuccessMessage('');
  }, 3000);
  }

  return (
    <div>
        <button className="button" onClick={()=>{
          navigator.clipboard.writeText(plainTextCharacterSheet);
          handleTooltip();
          }}>Copy Character To Clipboard
        </button>
        <span className="warning fade-in">&nbsp;{copySuccessMessage}</span>
    </div>
  )
}

// Consider adding fade-in and fade-out on the copy success message per this link: 
// https://levelup.gitconnected.com/fade-in-out-text-in-react-fa8fc7a2a0b1

export default CopyToClipboard