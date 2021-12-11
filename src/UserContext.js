import React, { useState } from 'react';
import { career } from './staticData';
const UserContext = React.createContext();

function UserContextProvider(props) {

    // State data for setting theme:
    const [theme, setTheme] = useState('2020');
    
    function toggleTheme() {
      setTheme(prevTheme => prevTheme === '2020' ? '2077' : '2020')
      console.log(theme);
    };

    // State for userHandle:
    const [userHandle, setUserHandle] = useState('');

    // State for selected roll method (used for assigning character points):
    const [rollMethod, setRollMethod] = useState('');

    // Context data for assignable character points:
    const [charPointsRoll, setCharPointsRoll] = useState([]);

    const [charPointsHaveBeenRolled, setCharPointsHaveBeenRolled] = useState(false);

    function assignCharPointsRoll(roll) {
      setCharPointsRoll(roll);
      if (!charPointsHaveBeenRolled) setCharPointsHaveBeenRolled(true);
    }

    const [intPoints, setIntPoints] = useState(5);
    const [refPoints, setRefPoints] = useState(5);
    const [techPoints, setTechPoints] = useState(5);
    const [coolPoints, setCoolPoints] = useState(5);
    const [attPoints, setAttPoints] = useState(5);
    const [luckPoints, setLuckPoints] = useState(5);
    const [maPoints, setMaPoints] = useState(5);
    const [bodyPoints, setBodyPoints] = useState(5);
    const [empPoints, setEmpPoints] = useState(5);

    const accAssignedPoints = 
      intPoints+refPoints+techPoints+coolPoints+attPoints+luckPoints+maPoints+bodyPoints+empPoints;

    // State for Career Skills points:

    const [careerSkillPoints, setCareerSkillPoints] = useState({1:4,2:4,3:4,4:4,5:4,6:4,7:4,8:4,9:4,10:4,11:0,12:0});

    const accSkillPoints = 
      Object.values(careerSkillPoints).reduce(function (sum, value) {
        return sum + value;
    }, 0);

  // State for chosen role:

  const [manualRole, setManualRole] = useState(false);

  const [role, setRole] = useState('');

  // Context and state-dependent methods for pickup skills:

  const [pickupSkillCategories, setPickupSkillCategories] = useState([]);
  const [pickupSkills, setPickupSkills] = useState([]);
  const [pickupSkillValues, setPickupSkillValues] = useState([]);

  const accPickupSkills = pickupSkillValues.reduce((a, b) => {
    return a + b;
  }, 0);

  const addNewPickupSkillRow = () => {
    setPickupSkillCategories([...pickupSkillCategories, 'select']);
    setPickupSkills([...pickupSkills, 'select']);
    setPickupSkillValues([...pickupSkillValues, 0]);
  }

  const removePickupSkillRow = (i) => {
    const updatedPickupSkills = [...pickupSkills];
    updatedPickupSkills.splice(i, 1);
    setPickupSkills(updatedPickupSkills);
    const updatedPickupSkillValues = [...pickupSkillValues];
    updatedPickupSkillValues.splice(i, 1);
    setPickupSkillValues(updatedPickupSkillValues);
    const updatedPickupSkillCategories = [...pickupSkillCategories];
    updatedPickupSkillCategories.splice(i, 1);
    setPickupSkillCategories(updatedPickupSkillCategories);
    }

  const resetPickupSkills = (i) => {
    const updatedPickupSkills = [...pickupSkills];
    updatedPickupSkills[i] = 'select';
    setPickupSkills(updatedPickupSkills);
  } 

  const updatePickupSkillCategories = (e, i) => {
    const updatedPickupSkillCategories = [...pickupSkillCategories];
    updatedPickupSkillCategories[i] = e.target.value;
    setPickupSkillCategories(updatedPickupSkillCategories);
    resetPickupSkills(i);
  }

  const updatePickupSkills = (e, i) => {
    const updatedPickupSkills = [...pickupSkills];
    updatedPickupSkills[i] = e.target.value;
    setPickupSkills(updatedPickupSkills);
  } 

  const updatePickupSkillValues = (i, amount) => {
    const updatedPickupSkillValues = [...pickupSkillValues];
    updatedPickupSkillValues[i] = updatedPickupSkillValues[i]+amount;
    setPickupSkillValues(updatedPickupSkillValues);
  }

  // State for clothes & personal style
  const [selectedClothes, setSelectedClothes] = useState('select');
  const [selectedHairstyle, setSelectedHairstyle] = useState('select');
  const [selectedAffectations, setSelectedAffectations] = useState('select');

  // State for family background
  const [selectedEthnicity, setEthnicity] = useState('select');
  const [selectedLanguage, setLanguage] = useState('select');
  const [selectedFamRank, setFamRank] = useState('select');
  const [selectedParentStatus, setParentStatus] = useState('select');
  const [selectedParentTragedy, setParentTragedy] = useState('select');
  const [selectedChildEnv, setChildEnv] = useState('select');

  // State and functionality for siblings
  const [siblings, setSiblings] = useState([]);

  const addSibling = () => {
    const updatedSiblings = [...siblings];
    updatedSiblings[updatedSiblings.length] = {gender: 'select', age: 'select', feeling: 'select'};
    setSiblings(updatedSiblings);
  }

  const removeSibling = (i) => {
    const updatedSiblings = [...siblings];
    updatedSiblings.splice(i, 1);
    setSiblings(updatedSiblings);
  }
  
  const updateSibling = (sibling, key, newValue) => {
    // Will modify the value at the provided sibling index's key.
    const updatedSiblings = [...siblings];
    updatedSiblings[sibling][key] = newValue;
    setSiblings(updatedSiblings);
  }
  
  // State for personality
  const [selectedPersTraits, setPersTraits] = useState('select');
  const [selectedPersValued, setPersValued] = useState('select');
  const [selectedYouValue, setYouValue] = useState('select');
  const [selectedHowFeel, setHowFeel] = useState('select');
  const [selectedValuedPos, setValuedPos] = useState('select');


    return (
        <UserContext.Provider value={{
          theme, toggleTheme,
          userHandle, setUserHandle,
          rollMethod, setRollMethod,
          assignCharPointsRoll, charPointsRoll, charPointsHaveBeenRolled,
          intPoints, setIntPoints,
          refPoints, setRefPoints,
          techPoints, setTechPoints,
          coolPoints, setCoolPoints,
          attPoints, setAttPoints,
          luckPoints, setLuckPoints,
          maPoints, setMaPoints,
          bodyPoints, setBodyPoints,
          empPoints, setEmpPoints,
          accAssignedPoints,
          careerSkillPoints, setCareerSkillPoints,
          accSkillPoints,
          role, setRole, manualRole, setManualRole,
          addNewPickupSkillRow, removePickupSkillRow, pickupSkillCategories, setPickupSkillCategories, 
            updatePickupSkillCategories, pickupSkills, setPickupSkills, updatePickupSkills,
            pickupSkillValues, setPickupSkillValues, updatePickupSkillValues, accPickupSkills,
          selectedClothes, setSelectedClothes, 
          selectedHairstyle, setSelectedHairstyle, 
          selectedAffectations, setSelectedAffectations,
          selectedEthnicity, setEthnicity,
          selectedLanguage, setLanguage,
          selectedFamRank, setFamRank, 
          selectedParentStatus, setParentStatus,
          selectedParentTragedy,setParentTragedy,
          siblings, setSiblings, addSibling, removeSibling, updateSibling,
          selectedChildEnv, setChildEnv, 
          selectedPersTraits, setPersTraits, 
          selectedPersValued, setPersValued, 
          selectedYouValue, setYouValue, 
          selectedHowFeel, setHowFeel, 
          selectedValuedPos, setValuedPos

        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}
