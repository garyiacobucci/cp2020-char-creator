import React, { useContext } from 'react';
import { 
  button, MenuItem, InputLabel, Select,
  FormControlLabel, FormControl,
  Radio, RadioGroup 
} from '@material-ui/core';
import { UserContext } from '../UserContext';
import { persTraits, persValued, youValue, howFeel, valuedPos, diceRoll } from '../staticData';


const Motivations = () => {

  //Connect to UserContext via Context API:
  const { 
    selectedPersTraits, setPersTraits, 
    selectedPersValued, setPersValued, 
    selectedYouValue, setYouValue, 
    selectedHowFeel, setHowFeel, 
    selectedValuedPos, setValuedPos
   } = useContext(UserContext);

  return (
      <div className="widget">
        <h3>3. Motivations&nbsp;
          <button className="randomize" onClick={()=>{
          setPersTraits(persTraits[diceRoll(10,1)-1]);
          setPersValued(persValued[diceRoll(10,1)-1]);
          setYouValue(youValue[diceRoll(10,1)-1]);
          setHowFeel(howFeel[diceRoll(9,1)-1]);
          setValuedPos(valuedPos[diceRoll(10,1)-1])
          }}>Randomize</button></h3>
        <p>What makes you tick? Will you back up your friends or go for the
          main chance? What's important to you?
        </p>
        <div className="selection-dropdown">
          <span>Personality Traits:&nbsp;</span>
          <Select
            labelId="pers-traits-select-label"
            id="pers-traits-select"
            value={selectedPersTraits}
            label="pers-traits"
            onChange={(e)=>setPersTraits(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {persTraits.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>
        <div className="selection-dropdown">
          <span>Person You Value Most:&nbsp;</span>
          <Select
            labelId="pers-valued-select-label"
            id="pers-valued-select"
            value={selectedPersValued}
            label="pers-valued"
            onChange={(e)=>setPersValued(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {persValued.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>

        <div className="selection-dropdown">
          <span>You Most Value:&nbsp;</span>
          <Select
            labelId="you-value-select-label"
            id="you-value-select"
            value={selectedYouValue}
            label="you-value"
            onChange={(e)=>setYouValue(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {youValue.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>

        <div className="selection-dropdown">
          <span>Your Most Valued Possession:&nbsp;</span>
          <Select
            labelId="valued-pos-select-label"
            id="valued-pos-select"
            value={selectedValuedPos}
            label="valued-pos"
            onChange={(e)=>setValuedPos(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {valuedPos.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>          

        <div className="selection-dropdown">
          <span>Disposition:&nbsp;</span>
          <Select
            labelId="how-feel-select-label"
            id="how-feel-select"
            value={selectedHowFeel}
            label="how-feel"
            onChange={(e)=>setHowFeel(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {howFeel.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>      
      </div>
  )
}

export default Motivations