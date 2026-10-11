/* Data shared by every setting (English).
   Table entries are condensed for the app; the full prompts live in the
   original game PDFs (Wym Lawson).
   {P} becomes the Protagonist's name, {LI} the love interest's name. */
RV.en.common = {
  oracle: ['Yes, and…', 'Yes', 'Yes, but…', 'No, but…', 'No', 'No, and…'],

  // "How do you meet" variants used by the Date tables
  meet: {
    m1: ['You bump into each other', 'The two of you are forced together', 'You knew {LI} would be there', '{LI} makes you come', 'You make {LI} come', 'Someone set the two of you up'],
    m3: ['You bump into each other', '{LI} knew you would be there', 'You knew {LI} would be there', 'You ask {LI} out', '{LI} makes you come', 'Someone set the two of you up'],
    m6: ['{LI} asks you out', '{LI} knew you would be there', 'You knew {LI} would be there', 'You ask {LI} out', '{LI} makes you come', '{LI} surprises you'],
    m10: ['{LI} asks you out', '{LI} makes you come', '{LI} surprises you', '{LI} leads you there', 'You are kidnapped', 'You ask {LI} out'],
    neg: ['{LI} confronts you', '{LI} traps you', '{LI} grabs you', '{LI} stalks you', 'You are brought to {LI}', "You step onto {LI}'s turf"],
    neg2: ['{LI} confronts you', '{LI} corners you', '{LI} grabs you', '{LI} stalks you', 'You are brought to {LI}', 'You are lured to {LI}'],
    m15: ['The two of you made plans', 'You lead {LI} there', '{LI} asks you out', '{LI} surprises you', 'Someone sent by {LI} fetches you', 'You ask {LI} out']
  },

  // Secrets that repeat in every setting
  sec: {
    game: 'Knows they are a character in a game',
    reinc: 'Was also reincarnated into this game',
    loved: 'Once loved you',
    knows: "Knows you aren't really the Villainess",
    dev: 'Is the developer of the otome game',
    save: 'Reincarnated to try to save you from the BEs',
    pain: 'Remembers the pain they caused you in every BE'
  },

  // Plot Twists (d20). null = defined per setting. [text, effect] wires a shortcut in the app.
  twists: [
    'An LI loses their memory; behaviour and relationships shift.',
    null,
    null,
    ['A new BE appears: counter 1d6, on day 2d6 + the current day.', 'newBE'],
    ['Every BE moves by 1 day.', 'shiftBE'],
    'An important character vanishes.',
    null,
    null,
    ['{P} becomes another LI.', 'newLIP'],
    ['A minor character becomes an LI.', 'newLI'],
    ['Someone from a different otome game shows up as a potential LI.', 'newLI'],
    'A person from your original life turns up in the game.',
    'An LI notices the Heart metre.',
    '{P} realises she is the Protagonist of an otome game.',
    "You find ominous clues that explain the Villainess' behaviour in the game.",
    'The Villainess wakes up and now shares the body with you.',
    'You learn why you were reincarnated as the Villainess.',
    null,
    null,
    null
  ],
  tw: {
    killedLI: ['An LI is killed.', 'liOut'],
    killedP: ['{P} is killed.', 'penOut'],
    murderer: 'You learn an LI killed the Villainess before you took over her body.',
    notFirst: "You weren't the first: another reincarnator lived as the Villainess before you."
  },

  // Time Travel table (d20)
  travel: [
    'Black threads choke you: +1 thread per trip. At four threads, that trip is your last.',
    'Each trip erases one person from the world for good.',
    "People's faces blur a little more with every trip.",
    'You must finish a specific task, or be destroyed.',
    'A higher being starts hunting you.',
    'Time travel wears your body down.',
    'You begin to forget your original life.',
    'The timeline splits: two of you now exist at once.',
    'Everything follows the previous timeline — except the small details.',
    'Getting close to one specific LI causes you excruciating pain.',
    'Fate pushes an LI away from you.',
    '{P} keeps her memories.',
    "{P}'s personality flips, as if another player were controlling her.",
    "{P}'s abilities suddenly reach an extraordinary level.",
    '{P} is being controlled by "you".',
    'A never-before-seen character appears and grows close to {P}.',
    'Someone who is neither an LI nor {P} shows signs of time travelling.',
    'An LI is replaced by a new one.',
    'The secret, hidden LI of the otome game appears (+1 LI).',
    'An LI from the sequel appears (+1 LI).'
  ],

  // Permanent 10 Hearts reward (d6)
  perks: [
    'Gain an extra Role (not on the starting list) tied to this LI.',
    'Raise your lowest attribute by 1 (max 5).',
    'Pick one more number that counts as a critical success.',
    'Critical failure leaves the game: a 6 is a normal failure (the Plot Twist becomes optional).',
    'Always roll one extra die and keep the best.',
    'Every success lowers one extra point of BE counter.'
  ],
  rewards: {
    1: 'Help: once, roll an extra die and keep the best.',
    3: 'Rescue: once, turn a result into a success.',
    6: 'All in: once, turn a result into a critical success.',
    10: 'Permanent reward (roll 1d6).',
    '-3': 'Hatred beyond the game: roll a Plot Twist.',
    15: 'Love beyond life: this LI leaves the game and you remove one BE.'
  },
  heartLabel: {
    '-3': 'Lethal animosity', '-1': 'Hatred, disgust, loathing', 1: 'Indifferent, neutral',
    3: 'Respectful, friendly, polite', 6: 'Admiration, fondness, warmth', 10: 'Love, affection, infatuation', 15: 'Unwavering devotion'
  },
  guide: 'Who is involved? What happens? How do you react — and how do {P} and the LIs respond?'
};
