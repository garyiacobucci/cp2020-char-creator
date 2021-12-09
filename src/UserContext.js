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
      console.log(charPointsRoll)
    }

    const [intPoints, setIntPoints] = useState(0);
    const [refPoints, setRefPoints] = useState(0);
    const [techPoints, setTechPoints] = useState(0);
    const [coolPoints, setCoolPoints] = useState(0);
    const [attPoints, setAttPoints] = useState(0);
    const [luckPoints, setLuckPoints] = useState(0);
    const [maPoints, setMaPoints] = useState(0);
    const [bodyPoints, setBodyPoints] = useState(0);
    const [empPoints, setEmpPoints] = useState(0);

    const accAssignedPoints = 
      intPoints+refPoints+techPoints+coolPoints+attPoints+luckPoints+maPoints+bodyPoints+empPoints;

    // State for Career Skills points:

    const [careerSkillPoints, setCareerSkillPoints] = useState({1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0});

    const accSkillPoints = 
      Object.values(careerSkillPoints).reduce(function (sum, value) {
        return sum + value;
    }, 0);

  // State for chosen role:

  const [manualRole, setManualRole] = useState(false);

  const [role, setRole] = useState('');

  // Context and state-dependent methods for pickup skills:

  const [pickupSkillCategories, setPickupSkillCategories] = useState(['select']);
  const [pickupSkills, setPickupSkills] = useState(['select']);
  const [pickupSkillValues, setPickupSkillValues] = useState([0]);

  const accPickupSkills = pickupSkillValues.reduce((a, b) => {
    return a + b;
  }, 0);

  const addNewPickupSkillRow = () => {
    setPickupSkillCategories([...pickupSkillCategories, 'select']);
    setPickupSkills([...pickupSkills, 'select']);
    setPickupSkillValues([...pickupSkillValues, 0]);
    console.log('pickupSkillCategories is ', pickupSkillCategories, ', pickupSkills is ', pickupSkills, ', and pickupSkillValues is ', pickupSkillValues)
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
            pickupSkillValues, setPickupSkillValues, updatePickupSkillValues, accPickupSkills
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}
