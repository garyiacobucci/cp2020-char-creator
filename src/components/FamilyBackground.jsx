import React, { useContext } from 'react';
import { 
  button, MenuItem, InputLabel, Select,
  FormControlLabel, FormControl,
  Radio, RadioGroup 
} from '@material-ui/core';
import { UserContext } from '../UserContext';
import { famRank, parentStatus, parentTragedy,
  childEnv } from '../staticData';


const FamilyBackground = () => {

  //Connect to UserContext via Context API:
  const { 
    selectedClothes, selectedHairstyle, selectedAffectations, selectedEthnicity,
    setFamRank, selectedFamRank, setParentStatus, selectedParentStatus, setParentTragedy, selectedParentTragedy,
    setChildEnv, selectedChildEnv, siblings, addSibling, removeSibling,
    updateSibling } = useContext(UserContext);

  return (
      <div className="widget">
        <h3>2. Family Background</h3>
        <p>Who are you, and where did you come from? Everybody on the Street has a story
          and a past they're trying to live with. What's yours?</p>

          <div className="selection-dropdown">
          <span>Family Ranking:&nbsp;</span>
          <Select
            labelId="family-ranking-select-label"
            id="family-ranking-select"
            value={selectedFamRank}
            label="family-ranking"
            onChange={(e)=>setFamRank(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {famRank.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>

        <div className="selection-dropdown">
          <span>Parental Status:&nbsp;</span>
          <Select
            labelId="parental-status-select-label"
            id="parental-status-select"
            value={selectedParentStatus}
            label="parental-status"
            onChange={(e)=>{setParentStatus(e.target.value);setParentTragedy('select')}}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {parentStatus.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>

        {(selectedParentStatus==='Something happened to one or both parents') ? 
          <div className="selection-dropdown">
            <span>What Happened To Your Parents:&nbsp;</span>
            <Select
              labelId="parent-tragedy-select-label"
              id="parent-tragedy-select"
              value={selectedParentTragedy}
              label="parent-tragedy"
              onChange={(e)=>setParentTragedy(e.target.value)}
            >
              <MenuItem value={'select'}>SELECT</MenuItem>
                {parentTragedy.map((key, i = 0) => 
                  <MenuItem key={i} value={key}>{key}</MenuItem>            
                )}            
            </Select>
          </div>
        : ''}


       <div className="child-environment-dropdown">
          <span>Childhood Environment:&nbsp;</span>
          <Select
            labelId="child-environment-select-label"
            id="child-environment-select"
            value={selectedChildEnv}
            label="child-environment"
            onChange={(e)=>setChildEnv(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {childEnv.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>

        <h4>Siblings</h4>
        <h5>You may add up to seven siblings:</h5>

          <div><button className="button" onClick={()=>{addSibling()}}>Add Sibling</button></div>

          {siblings.map((sibling, i) => (
            <div className="points-distributor-wrapper" key={i}>
              <div className="points-distributor-category"><h3>{i+1}</h3></div>
              <div className="selection-dropdown">
                <span>Gender:&nbsp;</span>
                <Select
                  labelId="sibling-gender-select-label"
                  id="sibling-gender-select"
                  value={sibling.gender}
                  label="sibling-gender"
                  onChange={(e)=>updateSibling(i, 'gender', e.target.value)}
                >
                  <MenuItem value={'select'}>SELECT</MenuItem>
                  <MenuItem value={'male'}>Male</MenuItem>
                  <MenuItem value={'female'}>Female</MenuItem>
                  <MenuItem value={'other'}>Other/NB</MenuItem>                    
                </Select>
              </div>

              <div className="selection-dropdown">
                <span>Age:&nbsp;</span>
                <Select
                  labelId="sibling-age-select-label"
                  id="sibling-age-select"
                  value={sibling.age}
                  label="sibling-age"
                  onChange={(e)=>updateSibling(i, 'age', e.target.value)}
                >
                  <MenuItem value={'select'}>SELECT</MenuItem>
                  <MenuItem value={'older than you'}>Older than you</MenuItem>
                  <MenuItem value={'younger than you'}>Younger than you</MenuItem>
                  <MenuItem value={'twin'}>Twin</MenuItem>
                </Select>
              </div>

              <div className="selection-dropdown">
                <span>Feeling Towards You:&nbsp;</span>
                <Select
                  labelId="sibling-feeling-select-label"
                  id="sibling-feeling-select"
                  value={sibling.feeling}
                  label="sibling-feeling"
                  onChange={(e)=>updateSibling(i, 'feeling', e.target.value)}
                >
                  <MenuItem value={'select'}>SELECT</MenuItem>
                  <MenuItem value={'neutral towards you'}>Is neutral towards you</MenuItem>                    
                  <MenuItem value={'likes you'}>Likes you</MenuItem>
                  <MenuItem value={'dislikes you'}>Dislikes you</MenuItem>
                  <MenuItem value={'hero worships you'}>Hero worships you</MenuItem>
                  <MenuItem value={'hates you'}>Hates you</MenuItem>
                </Select>
              </div>

              <div><button className="button" onClick={()=>removeSibling(i)}>X</button></div>

            </div>
          ))}
      </div>                
  )
}

export default FamilyBackground