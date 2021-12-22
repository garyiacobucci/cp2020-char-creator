import { IsoTwoTone } from "@material-ui/icons";

// Simulate a d10 roll n times. Returns an array of rolls.
const diceRoll = (sides, n) => {
  const rolls = new Array;
  for (let i = 0; i < n; i++) {
    let roll = Math.floor(Math.random() * sides) + 1;
    rolls.push(roll);
  }
  return rolls;  
}

const randRollMethodOptions = [
    ['Fast',diceRoll(10,9)],
    ['Major Hero', [80]],
    ['Major Supporting Character', [70]],
    ['Minor Hero', [75]],
    ['Minor Supporting Character', [60]],
    ['Average', [50]]
]

const clothes = [
  "Biker leathers",
  "Blue jeans",
  "Corporate suits",
  "Jumpsuits",
  "Miniskirts",
  "High Fashion",
  "Cammos",
  "Normal clothes",
  "Nude",
  "Bag lady chic"
];

const hairstyle = [
  "Mohawk",
  "Long & Ratty",
  "Short & Spiked",
  "Wild & all over",
  "Bald",
  "Striped",
  "Tinted",
  "Neat, short",
  "Short, curly",
  "Long, straight"
];

const affectations = [
  "Tattoos",
  "Mirrorshades",
  "Ritual Scars",
  "Spiked gloves",
  "Nose Rings",
  "Earrings",
  "Long fingernails",
  "Spike heel boots",
  "Weird contact lenses",
  "Fingerless gloves"
];

const ethnic = [
  "Anglo-American",
  "African",
  "Japanese/Korean",
  "Central European/Soviet",
  "Pacific Islander",
  "Chinese/Southeast Asian",
  "Black American",
  "Hispanic/American",
  "Central/South American",
  "European"
];

const languages = {
  "Anglo-American": ["English"],
  "African": ["Bantu", "Fante", "Kongo","Ashanti","Zulu","Swahili"],
  "Japanese/Korean": ["Japanese", "Korean"],
  "Central European/Soviet": ["Bulgarian", "Russian", "Czech", "Polish", "Ukranian", "Slovak"],
  "Pacific Islander": ["Micronesian", "Tagalog", "Polynesian", "Malayan", "Sudanese", "Indonesian", "Hawaiian"],
  "Chinese/Southeast Asian": ["Burmese", "Cantonese", "Mandarin","Thai", "Tibetan", "Vietnamese"],
  "Black American": ["English", "Blackfolk"],
  "Hispanic/American": ["Spanish", "English"],
  "Central/South American": ["Spanish", "Portuguese"],
  "European": ["French", "German", "English", "Spanish", "Italian", "Greek", "Danish", "Dutch", "Norwegian", "Swedish"]
};

const famRank = [
  "Corporate Executive",
  "Corporate Manager",
  "Corporate Technician",
  "Nomad Pack",
  "Pirate Fleet",
  "Gang family",
  "Crime Lord",
  "Combat Zone Poor",
  "Urban homeless",
  "Arcology family"
];

const parentStatus = [
  "Both parents are living",
  "Something happened to one or both parents"
];

const parentTragedy = [
  "Your parent(s) died in warfare",
  "Your parent(s) died in an accident",
  "Your parent(s) were murdered",
  "Your parent(s) have amnesia and don't remember you",
  "You never knew your parent(s)",
  "Your parent(s) are in hiding to protect you",
  "You were left with relatives for safekeeping",
  "You grew up on the street and never had parents",
  "Your parent(s) gave you up for adoption",
  "Your parent(s) sold you for money"
];

const childEnv = [
  "Spent on the street, with no adult supervision",
  "Spent in a safe corporate suburbia",
  "In a Nomad Pack moving from town to town",
  "In a decaying, once upscale neighborhood",
  "In a defended corporate zone in the central City",
  "In the heart of the combat zone",
  "In a small village or town far from the city",
  "In a large arcology city",
  "In an aquatic pirate pack",
  "On a corporate controlled farm or research facility"
];

const persTraits = [
  "Shy and secretive",
  "Rebellious, antisocial, violent",
  "Arrogant, proud, aloof",
  "Moody, rash and headstrong",
  "Picky, fussy and nervous",
  "Stable and serious",
  "Silly and fluffheaded",
  "Sneaky and deceptive",
  "Intellectual and detached",
  "Friendly and outgoing"
];

const persValued = [
  "A parent (or guardian)",
  "Brother or sister",
  "Lover",
  "Friend",
  "Yourself",
  "A pet",
  "Teacher or mentor",
  "Public figure",
  "A personal hero",
  "No one"
];

const youValue = [
  "Money",
  "Honor",
  "Your word",
  "Honesty",
  "Knowledge",
  "Vengeance",
  "Love",
  "Power",
  "Having a good time",
  "Friendship"
];

const howFeel = [
  "Neutral",
  "I like almost everyone",
  "I hate almost everyone",
  "People are tools. Use them for your own goals and discard them",
  "Every person is a valuable individual",
  "People are obstacles to be destroyed if they cross me",
  "People are untrustworthy. Don't depend on anyone",
  "Wipe 'em all out and give the place to the cockroaches",
  "People are wonderful"
];

const valuedPos = [
  "A weapon",
  "A tool",
  "A piece of clothing",
  "A photograph",
  "A book or diary",
  "A recording",
  "A musical instrument",
  "A piece of jewelry",
  "A toy",
  "A letter"
];

const skills = {
  special: {
      name: "Special Abilities",
      Cop: "Authority",
      Rocker: "Charismatic Leadership",
      Solo: "Combat Sense",
      Media: "Credibility",
      Nomad: "Family",
      Netrunner: "Interface",
      Techie: "Jury Rig",
      MedTechie: "Medical Tech",
      Corp: "Resources",
      Fixer: "Streetdeal"
  },
  select: {
      name: 'Select a skill'
  },
  attr: {
      name: "Attractiveness Skills",
      attr01: "Personal Grooming",
      attr02: "Wardrobe & Style"
  },
  body: {
      name: "Body Skills",
      body01: "Endurance",
      body02: "Strength Feat",
      body03: "Swimming"
  },
  cool: {
      name: "Cool / Will Skills",
      cool01: "Interrogation",
      cool02: "Intimidate",
      cool03: "Oratory",
      cool04: "Resist Torture/Drugs",
      cool05: "Streetwise"
  },
  emp: {
      name: "Empathy Skills",
      emp01: "Human Perception",
      emp02: "Interview",
      emp03: "Leadership",
      emp04: "Seduction",
      emp05: "Social",
      emp06: "Persuasion and Fast Talk",
      emp07: "Perform"
  },
  stat_int: {
      name: "Intelligence Skills",
      stat_int01: "Accounting",
      stat_int02: "Anthropology",
      stat_int03: "Awareness / Notice",
      stat_int04: "Biology",
      stat_int05: "Botany",
      stat_int06: "Chemistry",
      stat_int07: "Composition",
      stat_int08: "Diagnose Illness",
      stat_int09: "Ed. / General Knowledge",
      stat_int10: "Expert",
      stat_int11: "Gamble",
      stat_int12: "Geology",
      stat_int13: "Hide/Evade",
      stat_int14: "History",
      stat_int15: "Know Language",
      stat_int16: "Library Search",
      stat_int17: "Mathematics",
      stat_int18: "Physics",
      stat_int19: "Programming",
      stat_int20: "Shadow / Track",
      stat_int21: "Stock Market",
      stat_int22: "System Knowledge",
      stat_int23: "Teaching",
      stat_int24: "Wilderness Survival",
      stat_int25: "Zoology"
  },
  ref: {
      name: "Reflex Skills",
      ref01: "Archery",
      ref02: "Athletics",
      ref03: "Brawling",
      ref04: "Dance",
      ref05: "Dodge & Escape",
      ref06: "Driving",
      ref07: "Fencing",
      ref08: "Handgun",
      ref09: "Heavy Weapons",
      ref10: "Martial Art",
      ref11: "Melee",
      ref12: "Motorcycle",
      ref13: "Operate Heavy Machinery",
      ref14: "Pilot Gyro",
      ref15: "Pilot Fixed Wing",
      ref16: "Pilot Dirigible",
      ref17: "Pilot Vect. Thrust Vehicle",
      ref18: "Rifle",
      ref19: "Stealth",
      ref20: "Submachinegun"
  },
  tech: {
      name: "Tech Skills",
      tech01: "Aero Tech",
      tech02: "AV Tech",
      tech03: "Basic Tech",
      tech04: "Cryotank Operation",
      tech05: "Cyberdeck Design",
      tech06: "CyberTech",
      tech07: "Demolitions",
      tech08: "Disguise",
      tech09: "Electronics",
      tech10: "Electronic Security",
      tech11: "First Aid",
      tech12: "Forgery",
      tech13: "Gyro Tech",
      tech14: "Paint or Draw",
      tech15: "Photo & Film",
      tech16: "Pharmaceuticals",
      tech17: "Pick Lock",
      tech18: "Pick Pocket",
      tech19: "Play Instrument",
      tech20: "Weaponsmith"
  }
}

// Career Skills from pg. 44
const career = {
  Solo: {
      1: skills.special.Solo,
      2: skills.stat_int.stat_int03,
      3: skills.ref.ref08,
      4: skills.ref.ref03,
      5: skills.ref.ref10,
      6: skills.ref.ref11,
      7: skills.tech.tech20,
      8: skills.ref.ref18,
      9: skills.ref.ref02,
      10: skills.ref.ref20,
      11: skills.ref.ref19
  },
  Corp: {
      1: skills.special.Corp,
      2: skills.stat_int.stat_int03,
      3: skills.emp.emp01,
      4: skills.stat_int.stat_int09,
      5: skills.stat_int.stat_int16,
      6: skills.emp.emp05,
      7: skills.emp.emp06,
      8: skills.stat_int.stat_int21,
      9: skills.attr.attr02,
      10: skills.attr.attr01
  },
  Media: {
      1: skills.special.Media,
      2: skills.stat_int.stat_int03,
      3: skills.stat_int.stat_int07,
      4: skills.stat_int.stat_int09,
      5: skills.emp.emp06,
      6: skills.emp.emp01,
      7: skills.emp.emp05,
      8: skills.cool.cool05,
      9: skills.tech.tech15,
      10: skills.emp.emp02
  },
  Nomad: {
      1: skills.special.Nomad,
      2: skills.stat_int.stat_int03,
      3: skills.body.body01,
      4: skills.ref.ref11,
      5: skills.ref.ref18,
      6: skills.ref.ref06,
      7: skills.tech.tech03,
      8: skills.stat_int.stat_int24,
      9: skills.ref.ref03,
      10: skills.ref.ref02
  },
  Techie: {
      1: skills.special.Techie,
      2: skills.stat_int.stat_int03,
      3: skills.tech.tech03,
      4: skills.tech.tech06,
      5: skills.stat_int.stat_int23,
      6: skills.stat_int.stat_int09,
      7: skills.tech.tech09,
      8: skills.tech.tech01,
      9: skills.tech.tech02,
      10: skills.tech.tech20,
      11: skills.tech.tech10,
      12: skills.tech.tech13
  },
  Cop: {
      1: skills.special.Cop,
      2: skills.stat_int.stat_int03,
      3: skills.ref.ref08,
      4: skills.emp.emp01,
      5: skills.ref.ref02,
      6: skills.stat_int.stat_int09,
      7: skills.ref.ref03,
      8: skills.ref.ref11,
      9: skills.cool.cool01,
      10: skills.cool.cool05
  },
  Rocker: {
      1: skills.special.Rocker,
      2: skills.stat_int.stat_int03,
      3: skills.emp.emp07,
      4: skills.attr.attr02,
      5: skills.stat_int.stat_int07,
      6: skills.ref.ref03,
      7: skills.tech.tech19,
      8: skills.cool.cool05,
      9: skills.emp.emp06,
      10: skills.emp.emp04
  },
  MedTechie: {
      1: skills.special.MedTechie,
      2: skills.stat_int.stat_int03,
      3: skills.tech.tech03,
      4: skills.stat_int.stat_int08,
      5: skills.stat_int.stat_int09,
      6: skills.tech.tech04,
      7: skills.stat_int.stat_int16,
      8: skills.tech.tech16,
      9: skills.stat_int.stat_int25,
      10: skills.emp.emp01
  },
  Fixer: {
      1: skills.special.Fixer,
      2: skills.stat_int.stat_int03,
      3: skills.tech.tech12,
      4: skills.ref.ref08,
      5: skills.ref.ref03,
      6: skills.ref.ref11,
      7: skills.tech.tech17,
      8: skills.tech.tech18,
      9: skills.cool.cool02,
      10: skills.emp.emp06
  },
  Netrunner: {
      1: skills.special.Netrunner,
      2: skills.stat_int.stat_int03,
      3: skills.tech.tech03,
      4: skills.stat_int.stat_int09,
      5: skills.stat_int.stat_int22,
      6: skills.tech.tech06,
      7: skills.tech.tech05,
      8: skills.stat_int.stat_int07,
      9: skills.tech.tech09,
      10: skills.stat_int.stat_int19
  }
}

// Tables for Life Event outcomes:

const youGetLucky = [
  // 1. Make a Powerful Connection
  ()=>{
    const connectionRoll = diceRoll(10,1);
    let connection;
    if (connectionRoll < 5) connection = "the Police Department"
    else if (connectionRoll > 4 && connectionRoll < 8) connection = "the District Attorney's Office"
    else connection = "the Mayor's Office";
    return `Made a powerful connection in ${connection}.`;
  },
  // 2. Financial Windfall
  ()=>{
    const windfall = diceRoll(10,1) * 100;
    return `Recieved a financial windfall of ${windfall} Eurodollars.`
  },
  // 3. Big Score
  ()=>{
    const score = diceRoll(10,1) * 100;
    return `Scored ${score} Eurodollars on a big job or deal.`
  },
  // 4. Find a Sensei
  ()=>{
    return 'Found a sensei. Begin at +2 or add +1 to a Martial Arts Skill of your choice.'
  },
  // 5. Find a Teacher
  ()=>{
    return 'Found a teacher. Add +1 to any INT-based skill, or begin a new INT-based skill at +2.'
  },
  // 6. Powerful Corp Exec
  ()=>{
    return 'A powerful corporate exec owed you a favor.'
  },
  // 7. Local Nomads
  ()=>{
    return 'Local Nomad pack befriended you. You can call upon them for one favor a month, equivalent to a Family Special Ability of +2.'
  },
  // 8. Make a Police Friend
  ()=>{
    return 'Made a friend on the police force. You may use them for inside information at a level of +2 Streetwise on any police-related situation.'
  },
  // 9. Boostergang likes you
  ()=>{
    return "Local Boostergang took a liking to you. (Who knows why? These are Boosters, right?) You can call upon them for one favor a month, equivalent to a Family Special Ability of +2. But don't push it."
  },
  // 10. Find a combat teacher
  ()=>{
    return 'Found a combat teacher. Add +1 to any weapon skill with the exception of Martial Arts or Brawling, or begin a new combat skill at +2.'
  }
]

const disasterStrikes = [
  ()=>{
    const debt = diceRoll(10,1) * 100;
    return `Incurred a debt of ${debt} Eurodollars. If you can't pay this now, you have a debt to pay in cash—or blood.`;
  },
  ()=>{
    const months = diceRoll(10,1);
    return `Were in prison, or held hostage (your choice) for ${months} months.`;
  },
  ()=>{
    return 'Contracted either an illness or drug habit in this time, and lost 1 pt of REF permanently as a result.'
  },
  ()=>{
    const betrayalRoll = diceRoll(10,1);
    if (betrayalRoll < 4) {
      return 'Were blackmailed by someone you trusted.';
    } else if (betrayalRoll > 3 && betrayalRoll < 8) {
      return 'Were backstabbed, and a secret exposed.';
    } else return 'Were betrayed by a close friend in romance or career (you choose).';
  },
  ()=>{
    const accidentRoll = diceRoll(10,1);
    let accident;
    if (accidentRoll < 5) {
       accident = `You were terribly disfigured and must subtract -5 from your ATT`;
    } else if (accidentRoll > 4 && accidentRoll < 7) {
       accident = `You were hospitalized for ${diceRoll(10,1)} months that year`
    } else if (accidentRoll > 6 && accidentRoll < 9) {
       accident = `You have lost ${diceRoll(10,1)} months of memory of that year`
    } else {
       accident = `You constantly relive nightmares (8 in 10 chance each night) of the accident and wake up screaming`
    }
    return `Were in an accident. ${accident}.`
  },
  ()=>{
    const relativeRoll = diceRoll(10,1);
    let relative;
    if (relativeRoll < 6) {
       relative = `died accidentally`;
    } else if (relativeRoll > 5 && relativeRoll < 9) {
       relative = `were murdered by unknown parties`
    } else {
       relative = `were murdered and you know who did it. You just need the proof`
    }
    return `Lost someone you really cared about. They ${relative}.`
  },    
  ()=>{
    const accuseRoll = diceRoll(10,1);
    let accuse;
    if (accuseRoll < 4) {
       accuse = 'theft';
    } else if (accuseRoll > 3 && accuseRoll < 6) {
       accuse = 'cowardice'
    } else if (accuseRoll > 5 && accuseRoll < 9) {
       accuse = 'murder'
    } else if (accuseRoll === 9) {
       accuse = 'rape'
    } else {
       accuse = 'lying or betrayal'
    }
    return `Were set up and falsely accused of ${accuse}.`
  },
  ()=>{
    const wantedRoll = diceRoll(10,1);
    let wanted;
    if (wantedRoll < 4) {
       wanted = 'Only a couple local cops want you';
    } else if (wantedRoll > 3 && wantedRoll < 7) {
       wanted = 'The entire local police force want you'
    } else if (wantedRoll > 6 && wantedRoll < 9) {
       wanted = 'The state police or militia want you'
    } else {
       wanted = 'The FBI or equivalent national police force want you'
    }
    return `Were hunted by the law. ${wanted}.`
  },  
  ()=>{
    const corpoRoll = diceRoll(10,1);
    let corpo;
    if (corpoRoll < 4) {
       corpo = "It's a small, local firm";
    } else if (corpoRoll > 3 && corpoRoll < 7) {
       corpo = "It's a larger corp with offices statewide"
    } else if (corpoRoll > 6 && corpoRoll < 9) {
       corpo = "It's a big, national corp with agents in major cities"
    } else {
       corpo = "It's a huge multinational with armies, ninjas, and spies everywhere"
    }
    return `Angered a corporate honcho. ${corpo}.`
  },    
  ()=>{
    const breakdownRoll = diceRoll(10,1);
    let breakdown;
    if (breakdownRoll < 4) {
       breakdown = "It's a nervous disorder, probably from a bioplague—lose 1 pt REF";
    } else if (breakdownRoll > 3 && breakdownRoll < 8) {
       breakdown = "You suffer anxiety attacks and phobias. Lose 1 pt from your CL stat"
    } else {
       breakdown = "It's a major psychosis. You hear voices, are violent, irrational, depressive. Lose 1 pt from your CL, 1 from REF"
    }
    return `Experienced a mental or physical breakdown. ${breakdown}.`
  },    
];

const youMadeAFriend = [
  "Made a new friend who's like a big brother/sister to you.",
  "Made a new friend who's like a kid sister/brother to you.",
  "Found a friend in a teacher or mentor.",
  "Found a friend in a partner or co-worker.",
  "Reconnected with an old lover (choose which one) as a friend.",
  "Turned an old enemy (choose which one) into a friend.",
  "Formed a connection with someone who's like a foster parent to you.",
  "Made a friend out of a relative.",
  "Reconnected with an old childhood friend.",
  "Met a new friend through a common interest."
]

const youMadeAnEnemy = () => {
  // 1. Roll enemy's gender -- Even: male, odd: female
  const genderRoll = diceRoll(2, 1);
  let gender;
  if (genderRoll[0] === 1) gender = 'male';
  else gender = 'female';
  // 2. Roll enemy's relationship to player
  const relationshipRoll = diceRoll(10,1)[0];
  let relationship;
  const relationshipOptions = [
    'ex-friend',
    'ex-lover',
    'relative',
    'childhood enemy',
    'employee',
    'employer',
    'partner or co-worker',
    'booster gang member',
    'corporate exec',
    'government official'
  ]
  relationship = relationshipOptions[relationshipRoll-1];
  // 3. Roll cause of emnity
  const originRoll = diceRoll(10,1)[0];
  let origin;
  // Secondary roll for option #5 (caused a disability)
  const injuryRoll = diceRoll(6,1)[0];
  let injury;
  if (injuryRoll < 3) {
    injury = 'cost the other an eye';
  } else if (injuryRoll > 2 && injuryRoll < 5) {
    injury = 'cost the other an arm';
  } else injury = 'badly scarred the other';
  const origins = [
    'caused the other to lose face or status',
    'caused the loss of a lover, friend, or relative',
    'caused a major humiliation',
    'accused the other of cowardice or some other personal flaw',
    injury,
    'deserted or betrayed the other',
    "turned down the other's offer of job or romantic involvement",
    "just didn't like the other, and the feeling turned out to be mutual",
    'was a romantic rival to the other',
    "foiled a plan of the other"
  ]
  origin = origins[originRoll-1];
  // 4. Roll who's fracked off
  const frackRoll = diceRoll(10,1)[0];
  let fracked;
  if (frackRoll < 5) fracked = 'They hate you'
  else if (frackRoll > 4 && frackRoll < 8) fracked = 'You hate them'
  else fracked = "The feeling's mutual";
  // 5. Roll whatcha gonna do about it
  const responseRoll = diceRoll(10,1)[0];
  let response;
  if (responseRoll < 3) response = 'go into a murderous killing rage'
  else if (responseRoll > 2 && responseRoll < 5) response = 'avoid the scum'
  else if (responseRoll > 4 && responseRoll < 7) response = 'backstab the other'
  else if (responseRoll > 6 && responseRoll < 9) response = 'ignore the scum'
  else response = 'verbally rip into the other';
  // 6. Roll what they can throw against you
  const forcesRoll = diceRoll(10,1)[0];
  let forces;
  if (forcesRoll < 4) forces = 'only themselves'
  else if (forcesRoll > 3 && forcesRoll < 6) forces = 'themselves and a few others'
  else if (forcesRoll > 5 && forcesRoll < 8) forces = 'an entire gang'
  else if (forcesRoll === 8) forces = 'a small corporation'
  else if (forcesRoll === 9) forces = 'a large corporation'
  else forces = 'an entire government agency';
  return `Made an enemy. They're a ${gender} ${relationship}. 
    One of you ${origin}. ${fracked}. If you ever
    meet, the injured party would probably ${response}. 
    They can throw ${forces} against you.`;
}

const romanticLife = (roll) => {
  let loveAffair;
  // Handle 'Tragic Love Affair'
  if (roll === 5 ) {
    const tragicOptions = [
      'Lover died in an accident.',
      'Lover mysteriously vanished.',
      "Had a tragic love affair that didn't work out.",
      'A personal goal or vendetta came between you and a lover.',
      'Lover was kidnapped.',
      'Lover went insane.',
      'Lover comitted suicide.',
      'Lover was killed in a fight.',
      'A romantic rival cut you out of the action.',
      'Lover was imprisoned or exiled.'
    ]
    loveAffair = tragicOptions[diceRoll(10,1)-1];
  }
  else {
    const problemsOptions = [
      // Handle 'Love Affair With Problems'
      "Their friends/family hated you",
      "Their friends/family were willing to use any means to get rid of you",
      "Your friends/family hated your lover",
      'A romantic rival come between you and your lover',
      'You were separated from your lover',
      'You fought constantly with your lover',
      'They were your professional rival',
      'One of you was insanely jealous',
      "One of you were 'messing around'",
      'You each had conflicting backgrounds and families'
    ];
    const mutualOptions = [
      'They still love you',
      'You still love them',
      'You still love each other',
      'You hate them',
      'They hate you',
      'You hate each other',
      "You're friends",
      "There are no feelings either way; it's over",
      'You like them, but they hate you',
      'They like you, but you hate them'
    ]
    // Concatenate 'Mutual Feelings'
    loveAffair = `Had a love affair with problems. ${problemsOptions[diceRoll(10,1)-1]}. ${mutualOptions[diceRoll(10,1)-1]}.`
  }
  return loveAffair;
}


export { diceRoll, clothes, hairstyle, affectations, famRank, ethnic, languages, parentStatus, 
  parentTragedy, childEnv, persTraits, persValued, youValue, howFeel, valuedPos, skills, career, 
  randRollMethodOptions, youGetLucky, disasterStrikes, youMadeAFriend, youMadeAnEnemy, romanticLife}