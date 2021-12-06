import React, { useState } from 'react';
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

    const [careerSkillPoints, setCareerSkillPoints] = useState({1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0});

    const accSkillPoints = 
      careerSkillPoints[1]+
      careerSkillPoints[2]+
      careerSkillPoints[3]+
      careerSkillPoints[4]+
      careerSkillPoints[5]+
      careerSkillPoints[6]+
      careerSkillPoints[7]+
      careerSkillPoints[8]+
      careerSkillPoints[9]+
      careerSkillPoints[10]

  // State for chosen role:

  const [manualRole, setManualRole] = useState(false);

  const [role, setRole] = useState();

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
          role, setRole, manualRole, setManualRole
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}
