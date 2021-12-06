const staticData = {

  // Simulate a d10 roll n times. Returns an array of rolls.
  d10: (n) => {
    const rolls = new Array;
    for (let i = 0; i < n; i++) {
      let roll = Math.floor(Math.random() * 10) + 1;
      rolls.push(roll); 
    }
    return rolls;  
  },

  // Roles and their associated career skills:

  roles: {
    Rocker:['Charismatic Leadership', 'Awareness/Notice', 'Perform', 'Wardrobe & Style', 'Composition', 'Brawling', 'Play Instrument', 'Streetwise', 'Persuasion', 'Seduction'],
    Solo:['Combat Sense', 'Awareness/Notice', 'Handgun', 'Brawling or Martial Arts', 'Melee', 'Weapons Tech', 'Rifle', 'Athletics', 'Submachinegun', 'Stealth'],
    Media:['Credibility', 'Awareness/Notice', 'Composition', 'Education', 'Persuation', 'Human Perception', 'Social', 'Streetwise', 'Photo & Film', 'Interview'],
    Nomad:['Family', 'Awareness/Notice', 'Endurance', 'Melee', 'Rifle', 'Drive', 'Basic Tech', 'Wilderness Survival', 'Brawling', 'Athletics'],
    Netrunner:['Interface', 'Awareness/Notice', 'Basic Tech', 'Education', 'System Knowledge', 'Cybertech', 'Cyberdeck Design', 'Composition', 'Electronics', 'Programming'],
    Techie:['Jury Rig', 'Awareness/Notice', 'Basic Tech', 'Cybertech', 'Teaching', 'Education', 'Electronics', 'Other Tech Skill 1', 'Other Tech Skill 2', 'Other Tech Skill 3'],
    MedTechie:['Medical Tech', 'Awareness/Notice', 'Basic Tech', 'Diagnose', 'Education', 'Cryotank Operation', 'Library Search', 'Pharmaceuticals', 'Zoology', 'Human Perception'],
    Corp:['Resources', 'Awareness/Notice', 'Human Perception', 'Education', 'Library Search', 'Social', 'Persuation', 'Stock Market', 'Wardrobe & Style', 'Personal Grooming'],
    Cop:['Authority', 'Awareness/Notice', 'Handgun', 'Human Perception', 'Athletics', 'Education', 'Brawling', 'Melee', 'Interrogation', 'Streetwise'],
    Fixer:['Streetdeal', 'Awareness/Notice', 'Forgery', 'Handgun', 'Brawling', 'Melee', 'Pick Lock', 'Pickpocket', 'Intimidate', 'Persuasion']
  }

}

export default staticData;