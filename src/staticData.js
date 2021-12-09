// Simulate a d10 roll n times. Returns an array of rolls.
const d10 = (n) => {
  const rolls = new Array;
  for (let i = 0; i < n; i++) {
    let roll = Math.floor(Math.random() * 10) + 1;
    rolls.push(roll); 
  }
  return rolls;  
}


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
      stat_int09: "Ed./General Knowledge",
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
      stat_int20: "Shadow/Track",
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


export { d10, skills, career}