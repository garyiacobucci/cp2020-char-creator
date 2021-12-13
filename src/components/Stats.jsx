import React, { useContext } from 'react';
import { 
  FormControlLabel, FormControl,
  Radio, RadioGroup 
} from '@material-ui/core';
import { UserContext } from '../UserContext';
import PointsDistributor from './PointsDistributor';
import { diceRoll, randRollMethodOptions } from '../staticData.js';

const Stats = () => {

  //Connect to UserContext via Context API:
  const {
    toggleTheme,
    userHandle,
    setUserHandle,
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
  } = useContext(UserContext);

  //Define function for updating controlled form input:
  function handleChange(event, hookName) {
    const {value} = event.target;
    //Invoke the appropriate hook updating function:
    if (hookName===assignCharPointsRoll) hookName([value])
    else hookName(value);
  }

  const reducedCharPointsRoll = (charPointsRoll.reduce((a,b)=>a+b,0));

  return (
    <div className="component-wrapper">
      <div className="widget">
        <h2>Randomize Everything?</h2>
        <p>Clicking "Randomize Everything" button below will randomly select everything: Roll Method, Stats, Role, Skills, Style, Background, etc.</p>
        <div><button onClick={toggleTheme}>Randomize Everything</button></div>
      </div>

      <div className="widget">
        <h2>Handle</h2>
        <p>What do they call you on the streets, choom?</p>
        <form>
          <input
            type="text"
            placeholder="E.g., Johnny Silverhand"
            onChange={(e) => handleChange(e, setUserHandle)}
            name="commentText"
            value={userHandle}
          />
          <p>Need inspiration? Here's a
            <a href="https://www.fantasynamegenerators.com/cyberpunk-names.php" target="_blank"> Cyberpunk name generator</a>.</p>
        </form>
      </div>

      <div className="widget">
        <h2>Statistics</h2>
        <h3>Character Points</h3>
        <p>Character Points are the cash of character creation—you can use them to "buy" the various "mechanics"
          aspects of the character, like good looks, a strong, hard body, unshakable cool and street smarts (but not 
          Skills). To continue, select a method of determining your points count: 
        </p>
        <div>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="Roll Method"
              name="roll-method-radio-group"
            >
              <FormControlLabel value="fast" control={<Radio />} label="Fast" onClick={() => {setRollMethod('Fast');assignCharPointsRoll(diceRoll(10, 9))}} />
              <FormControlLabel value="cineMajorHero" control={<Radio />} label="Major Hero" onClick={() => {setRollMethod('Major Hero');assignCharPointsRoll([80])}} />
              <FormControlLabel value="cineMajorSuppChar" control={<Radio />} label="Major Supporting Character" onClick={() => {setRollMethod('Major Supporting Character');assignCharPointsRoll([70])}} />
              <FormControlLabel value="cineMinorHero" control={<Radio />} label="Minor Hero" onClick={() => {setRollMethod('Minor Hero');assignCharPointsRoll([75])}} />
              <FormControlLabel value="cineMinorSuppChar" control={<Radio />} label="Minor Supporting Character" onClick={() => {setRollMethod('Minor Supporting Character');assignCharPointsRoll([60])}} />
              <FormControlLabel value="average" control={<Radio />} label="Average" onClick={() => {setRollMethod('Average');assignCharPointsRoll([50])}} />
              <FormControlLabel value="manual" control={<Radio />} label="Manually Enter Value" onClick={() => {setRollMethod('Manually Enter')}} />
            </RadioGroup>
          </FormControl>
          <div><button onClick={()=>{setRollMethod(randRollMethodOptions[diceRoll(6,1)-1][0]);assignCharPointsRoll(randRollMethodOptions[diceRoll(6,1)-1][1])}}>Randomize</button></div>         
        </div>
        <div>
          <p>Roll method: {rollMethod}</p>
          {rollMethod==='Manually Enter' && 
          <form>
            <input
              type="text"
              onChange={(e) => handleChange(e, assignCharPointsRoll)}
              name="manual-points-amount"
              value={[charPointsRoll]}
            />
          </form>}
          {charPointsRoll.length > 1 ? 
            <div>
              <p>Rolls: {charPointsRoll && charPointsRoll.join(', ')}</p>
              <p>Points Total: {charPointsRoll && reducedCharPointsRoll}</p>
            </div> : 
            <div>
              <p>Points Total: {charPointsRoll}</p>
            </div>
          }
        </div>
      </div>

      <div className="widget">
        <h3>User-Assigned Stats</h3>
        <p>Each Cyberpunk character has nine Statistics—values representing the level of native ability
           of the character in specific areas of activity. These Stats are rated from two to ten, with 
           two being the worst possible, ten being the best possible, and the average falling at about 
           five or six. Divide your total number of Character Points between each of your nine Stats, 
           adjusting the amounts in each one as you think best describes the character's natural abilities. 
           No Statistic may be less than two or greater than ten. 
        </p>

        {(charPointsHaveBeenRolled) ? 
        
        <div>
          <p className="callout">Stats Points to Distribute: {reducedCharPointsRoll-accAssignedPoints}</p>

          <PointsDistributor 
            pointValue={intPoints} 
            categoryName={'Intelligence'} 
            categoryShorthand={'INT'}
            addCallback={(e) => setIntPoints(intPoints+1)}
            subCallback={(e) => setIntPoints(intPoints-1)}
            description={`This is a measure of your problem solving ability; figuring out problems, noticing things, 
            remembering information. Almost every character type will need a high Intelligence, with 
            Netrunners and Corporates requiring the highest of all.`} 
          />

          <PointsDistributor 
            pointValue={refPoints} 
            categoryName={'Reflexes'} 
            categoryShorthand={'REF'}
            addCallback={(e) => setRefPoints(refPoints+1)}
            subCallback={(e) => setRefPoints(refPoints-1)}
            description={`This is a combined index, covering not only your basic dexterity, but also how your 
            level of physical coordination will affect feats of driving, piloting, fighting and 
            athletics. Characters who intend to engage in a great deal of combat (such as Solos, 
            Nomads or Rockerboys) should always invest in the highest possible Reflex.`}
          />

          <PointsDistributor 
            pointValue={coolPoints} 
            categoryName={'Cool'} 
            categoryShorthand={'COOL'}
            addCallback={(e) => setCoolPoints(coolPoints+1)}
            subCallback={(e) => setCoolPoints(coolPoints-1)}
            description={`This index measures how well the character stands up to stress, fear, pressure, physical pain 
            and/or torture. In determining your willingness to fight on despite wounds oryourfighting ability
            under fire, Cool (CL) is essential. It is also the measure of how "together" your character is and
            how tough he appears to others. Rockerboys and Fixers should always have a high Cool, with Solos
            and Nomads having the highest of all.`}
          />

          <PointsDistributor 
            pointValue={techPoints} 
            categoryName={'Tech'} 
            categoryShorthand={'TECH'}
            addCallback={(e) => setTechPoints(techPoints+1)}
            subCallback={(e) => setTechPoints(techPoints-1)}
            description={`This is an index of how well you relate to hardware and other technically oriented things. 
            In Cyberpunk, the ability to use and repair technology is of paramount importance—TECH will 
            be the Stat used when fixing, repairing and attempting to use unfamiliar tech. While all 
            characters should have a decent Tech Stat, potential Techies should always opt for the 
            highest possible score in this area.`}
          />

          <PointsDistributor 
            pointValue={attPoints} 
            categoryName={'Attractiveness'} 
            categoryShorthand={'ATT'}
            addCallback={(e) => setAttPoints(attPoints+1)}
            subCallback={(e) => setAttPoints(attPoints-1)}
            description={`This is how good-looking you are. In Cyberpunk, it's not enough to be good—you have to look 
            good while you're doing it (Attitude is Everything). Attractiveness is especially important to 
            Medias and Rockerboys, as being good-looking is part of their jobs.`}
          />

          <PointsDistributor 
            pointValue={luckPoints} 
            categoryName={'Luck'} 
            categoryShorthand={'LUCK'}
            addCallback={(e) => setLuckPoints(luckPoints+1)}
            subCallback={(e) => setLuckPoints(luckPoints-1)}
            description={`This is the intangible "something" that throws the balance of events into your favor. Your luck represents
            how many points you may use each game to influence the outcome of a critical event. To use Luck, you may add
            any or all of the points of luck a character has to a critical die roll (declaring your inetntion to use Luck
            before the roll is made) until all of your Luck stat is used up. Luck is always restored at the end of each 
            game session.`}
          />

          <PointsDistributor 
            pointValue={maPoints} 
            categoryName={'Movement Allowance'} 
            categoryShorthand={'MA'}
            addCallback={(e) => setMaPoints(maPoints+1)}
            subCallback={(e) => setMaPoints(maPoints-1)}
            description={`This is an index of how fast your character can run (important in combat situations). The higher your Movement 
            Allowance (MA), the more distance you can cover in a turn. (Affects RUN and LEAP)`}
          />

          <PointsDistributor 
            pointValue={bodyPoints} 
            categoryName={'Body Type'} 
            categoryShorthand={'BODY'}
            addCallback={(e) => setBodyPoints(bodyPoints+1)}
            subCallback={(e) => setBodyPoints(bodyPoints-1)}
            description={`Strength, Endurance and Constitution are all based on the character's Body Type. Body Type determines how 
            much damage you can take in wounds, how much you can lift or carry, how far you can throw, how well
            you recover from shock, and how much additional damage you cause with physical attacks. Body Type is 
            important to all character types, but to Solos, Rockerboys and Nomads most of all. (Affects CARRY and LIFT)`}
          />

          <PointsDistributor 
            pointValue={empPoints} 
            categoryName={'Empathy'} 
            categoryShorthand={'EMP'}
            addCallback={(e) => setEmpPoints(empPoints+1)}
            subCallback={(e) => setEmpPoints(empPoints-1)}
            description={<>This Stat represents how well you relate to other living things—a measure of charisma and sympathetic 
            emotions. In a world of alienated, future-shocked survivors, the ability to be "human" can no longer be
            taken for granted. Empathy (EM) is critical when leading, convincing, seducing, or perceiving emotional
            undercurrents. Empathy is also a measure of how close he/she is to the line between feeling human being
            and <a href="https://cyberpunk.fandom.com/wiki/Cyberpsychosis" target="_blank">cold-blooded cyber-monster</a>.</>}
          />
        </div>
        : <div className="warning">You must determine your Character Points before you can assign them (See above)!</div> }

  


        <h3>Derived Stats</h3>
        <p>Below fields are automatically calculated.</p>
        <ul>
          <li>Run {maPoints * 3} meters</li>
          <li>Leap {(maPoints * 3)/4} meters</li>
          <li>Lift {bodyPoints*40} kgs / {Math.floor(bodyPoints*40*2.2046)} lbs</li>
          <li>Carry {bodyPoints*10} kgs / {Math.floor(bodyPoints*10*2.2046)} lbs</li>
          <li>Body type:&nbsp;
            {(() => {
              switch (true) {
                case (bodyPoints <= 2 && charPointsHaveBeenRolled): {return 'Very Weak'};
                case (bodyPoints >= 3 && bodyPoints <=4):   return 'Weak';
                case (bodyPoints >= 5 && bodyPoints <= 7): return 'Average';
                case (bodyPoints >= 8 && bodyPoints <= 9):  return 'Strong';
                case (bodyPoints === 10): return 'Very Strong';
                case (bodyPoints >= 11): return 'Cybernetically Enhanced';
              }
            })()}
          </li>
          <li>Body type modifier:&nbsp;
            {(() => {
              switch (true) {
                case (bodyPoints <= 2 && charPointsHaveBeenRolled): {return '-0'};
                case (bodyPoints >= 3 && bodyPoints <=4):   return '-1';
                case (bodyPoints >= 5 && bodyPoints <= 7): return '-2';
                case (bodyPoints >= 8 && bodyPoints <= 9):  return '-3';
                case (bodyPoints === 10): return '-4';
                case (bodyPoints >= 11): return '-5';
              }
            })()}</li>
          <li>Save: {bodyPoints}</li>
          <li>Humanity: {empPoints*10}</li>
        </ul>
      </div>

    </div>
  )
}

export default Stats