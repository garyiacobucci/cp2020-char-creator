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

  const [pickupSkills, setPickupSkills] = useState([['Select', 'Select', 0]]);

  const accPickupSkills = pickupSkills.reduce((allTotal, skillArray) => {
    const value = skillArray[2];
    return allTotal + value;
  }, 0);

  // This function is used to update the pickupSkills state that is selected by the user. 
  // This data, as initialized above, consists of an array of arrays, where each element is
  // an array consisting of ['selected category from pickup skill category dropdown', 
  // 'selected pickup skill from dropdown', and a numeric value selected by them].
  const updatePickupSkill = (event, array, targetElement, updatedValue) => {
    // First, we create a copy of the array to be updated.
    const updatedPickupSkills = [...pickupSkills];
    if (targetElement === 2) {
      // A bit convoluted, but if the targetElement is index 2, it means we're looking to modify the numeric value.
      // Therefore, we won't extract the updated value from the event.target, but from the optional fourth argument we've passed in.
      updatedPickupSkills[array][2] = updatedValue;
    }
    // Otherwise, we extract the updated information from event.target.value, and finally we call the hook's update function.
    else updatedPickupSkills[array][targetElement] = event.target.value;
    setPickupSkills(updatedPickupSkills);
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
          pickupSkills, setPickupSkills, updatePickupSkill, accPickupSkills
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}
