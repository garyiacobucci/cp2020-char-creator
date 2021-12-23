import React, { useContext, useEffect } from 'react';
import { 
  MenuItem, Select
} from '@material-ui/core';
import { UserContext } from '../UserContext';
import { clothes, hairstyle, affectations, ethnic, languages, diceRoll } from './../staticData';


const Origins = () => {

  //Connect to UserContext via Context API:
  const { setSelectedClothes, selectedClothes, setSelectedHairstyle, selectedHairstyle, 
    setSelectedAffectations, selectedAffectations, setEthnicity,
    selectedEthnicity, selectedLanguage, setLanguage
  } = useContext(UserContext);

  // Use useEffect to simulate async/await behavior, due to the asynchronous nature of Hooks.
  // Necessary so that when randomizing, language is updated only once ethnicity has been updated.
  useEffect(()=>{
    const languageOptions = languages[selectedEthnicity];
    if (languageOptions !== undefined) {
      setLanguage(languages[selectedEthnicity][diceRoll(languageOptions.length,1)-1])      
    }
  }, [selectedEthnicity])

  return (
    <div className="component-wrapper">
      <div className="widget">
        <h3>1. Origins and Personal Style&nbsp;
          <button className="randomize" onClick={()=>{
          setSelectedClothes(clothes[diceRoll(10,1)-1]);
          setSelectedHairstyle(hairstyle[diceRoll(10,1)-1]);
          setSelectedAffectations(affectations[diceRoll(10,1)-1]);
          setEthnicity(ethnic[diceRoll(10,1)-1]);
          }}>Randomize</button>
        </h3>
        <h4>Dress & Personal Style</h4>
        <p>In <i>Cyberpunk</i>, what you look like is what you are. Fashion is action, and style is everything.</p>
        <div className="selection-dropdown">
          <span>Clothing:&nbsp;</span>
          <Select
            labelId="clothing-select-label"
            id="clothing-select"
            value={selectedClothes}
            label="clothing"
            onChange={(e)=>setSelectedClothes(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {clothes.map((key, i = 1) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>

        <div className="selection-dropdown">
          <span>Hairstyle:&nbsp;</span>
          <Select
            labelId="hairstyle-select-label"
            id="hairstyle-select"
            value={selectedHairstyle}
            label="hairstyle"
            onChange={(e)=>setSelectedHairstyle(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {hairstyle.map((key, i = 1) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>

        <div className="selection-dropdown">
          <span>Affectations:&nbsp;</span>
          <Select
            labelId="affectations-select-label"
            id="affectations-select"
            value={selectedAffectations}
            label="ethnicity"
            onChange={(e)=>setSelectedAffectations(e.target.value)}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {affectations.map((key, i = 1) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>

        <h4>Ethnic Origins</h4>
        <p>
          The Cyberpunk world is multi-cultural and multinational. Where you come from determines your native language,
          customs and allegiances. Choose or roll one nationality, then choose a native tongue from the options listed
          for the ethnic type. This is your native language, which you speak at +8. In addition , you also 
          automatically know <a href="https://cyberpunk.fandom.com/wiki/Streetslang" target="_blank">streetslang</a>, a universal polyglot of English, French, German, Japanese and a half dozen
          other languages: 
        </p>
        <div className="selection-dropdown">
          <span>Culture:&nbsp;</span>
          <Select
            labelId="ethnicity-select-label"
            id="ethnicity-select"
            value={selectedEthnicity}
            label="ethnicity"
            onChange={(e)=>{setEthnicity(e.target.value);setLanguage('select')}}
          >
            <MenuItem value={'select'}>SELECT</MenuItem>
            {ethnic.map((key, i = 0) => 
              <MenuItem key={i} value={key}>{key}</MenuItem>            
            )}
          </Select>
        </div>

        {(selectedEthnicity!=='select') ? 
          <div className="selection-dropdown">
            <span>Language:&nbsp;</span>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={selectedLanguage}
              label="language"
              onChange={(e)=>setLanguage(e.target.value)}
            >
              <MenuItem value={'select'}>SELECT</MenuItem>
                {languages[selectedEthnicity].map((key, i = 0) => 
                  <MenuItem key={i} value={key}>{key}</MenuItem>            
                )}            
            </Select>
          </div>
        : ''}
      </div>
    </div>
  )
}

export default Origins