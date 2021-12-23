import React, { useContext } from 'react';
import { 
  MenuItem, Select
} from '@material-ui/core';
import { UserContext } from '../UserContext';
import { diceRoll, famRank, parentStatus, parentTragedy,
  childEnv } from '../staticData';


const FamilyBackground = () => {

  //Connect to UserContext via Context API:
  const { 
    setFamRank, selectedFamRank, setParentStatus, selectedParentStatus, setParentTragedy, selectedParentTragedy,
    setChildEnv, selectedChildEnv, siblings, addSibling, removeSibling,
    updateSibling } = useContext(UserContext);

  return (
      <div className="widget">
        <h3>2. Family Background&nbsp;
          <button className="randomize" onClick={()=>{
          setFamRank(famRank[diceRoll(10,1)-1]);
          setParentStatus(parentStatus[diceRoll(2,1)-1]);
          setParentTragedy(parentTragedy[diceRoll(10,1)-1]);
          setChildEnv(childEnv[diceRoll(10,1)-1]);
          }}>Randomize</button></h3>
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
            <span>What Happened:&nbsp;</span>
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


       <div className="selection-dropdown">
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

        <h4>Siblings (Add up to seven)</h4>

          <div><button className="button" onClick={()=>{addSibling()}} disabled={(siblings.length > 6)}>Add Sibling</button></div>

          {siblings.map((sibling, i) => (
            <div className="points-distributor-wrapper" key={i}>
              <div className="points-distributor-category-sibling"><span className="callout highlight">{i+1}</span></div>
              
              <div className="dropdown-cluster-wrapper">

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
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                    <MenuItem value={'Other/NB'}>Other/NB</MenuItem>                    
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
                    <MenuItem value={'Older than you'}>Older than you</MenuItem>
                    <MenuItem value={'Younger than you'}>Younger than you</MenuItem>
                    <MenuItem value={'Your twin'}>Your twin</MenuItem>
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
                    <MenuItem value={'Neutral towards you'}>Is neutral towards you</MenuItem>                    
                    <MenuItem value={'Likes you'}>Likes you</MenuItem>
                    <MenuItem value={'Dislikes you'}>Dislikes you</MenuItem>
                    <MenuItem value={'Hero worships you'}>Hero worships you</MenuItem>
                    <MenuItem value={'Hates you'}>Hates you</MenuItem>
                  </Select>
                </div>
              </div>  

              <div><button className="button" onClick={()=>removeSibling(i)}>X</button></div>

            </div>
          ))}
      </div>                
  )
}

export default FamilyBackground