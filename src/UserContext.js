import React, { useState } from 'react';
const UserContext = React.createContext();

function UserContextProvider(props) {

    // Context data for setting theme:
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

    const updateMaPoints = (maPoints) => {
      setMaPoints(maPoints);
      updateRun(maPoints);
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
          maPoints, updateMaPoints,
          bodyPoints, setBodyPoints,
          empPoints, setEmpPoints,
          accAssignedPoints,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}
