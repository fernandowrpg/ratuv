(() => {
  const C = RV.en.common, M = C.meet, X = C.sec;
  RV.en.settings.paranormal = {
    id: 'paranormal', name: 'Paranormal', pdf: 'Reincarnated as the Unlovable Villainess_Paranormal.pdf',
    blurb: 'Vampires, werewolves and hunters in the city.', doom: 'killed or imprisoned',
    names: ['Adrian', 'Damon', 'Lucius', 'Raven', 'Elias', 'Viktor', 'Nyx', 'Caleb', 'Morgana', 'Asher'],
    backgrounds: ['Ordinary human', 'Vampire', 'Werewolf', 'Witch', 'Demon', 'Angel'],
    roles: ['Leader', 'Hunter', 'Criminal', 'Agent', 'Investigator', 'Cultist'],
    relations: ['Siblings', 'Cousins', 'Childhood friends', 'Coworkers', 'Opposing sides', 'Rivals'],
    li: [
      ['Is', ['(Fallen) Angel', 'Demon / Devil', 'Half human', 'Werewolf', 'Vampire', 'Ordinary human']],
      ['Works as', ['An investigator', 'A special agent', 'An exorcist / hunter', 'A doctor / scientist', 'A criminal / killer', 'A leader / ruler']],
      ['With', ['a face scar', 'freckles', 'tattoos', 'heterochromia', 'non-human parts', 'dark under-eyes']],
      ['Type', ['Tsundere', 'Kuudere', 'Yandere', 'Flirtatious', 'Arrogant / Rude', 'Cheerful / Outgoing']],
      ['Seen as', ['Respected', 'Loved', 'Trusted', 'Feared', 'Hated', 'Mysterious']],
      ['With the Villainess', ['One-sided love', 'Boss and employee', 'Mentor and protégé', 'Rivalry', 'Opposing sides', 'Feuding families']],
      ['With {P}', ['Love at first sight', 'Enemies to lovers', 'Childhood friends', 'Fated mates', 'First love', 'Forbidden love']]
    ],
    relLI: ['Siblings', 'Cousins', 'Friends', 'Rivals', 'Work partners', 'Enemies'],
    be: {
      what: ['killed', 'executed', 'banished', 'tortured', 'imprisoned', 'hunted'],
      by: ['@1', '@2', '@3', '@P', 'the Clan', 'the Government'],
      because: ['gotten too close to', 'abandoned', 'been tricked by', 'exposed', 'betrayed', 'challenged'],
      target: ['@1', '@2', '@3', '@P', 'the Supernaturals', 'the Rules']
    },
    prot: {
      pers: ['Curious and brave', 'Driven and resolute', 'Reserved and shy', 'Loving and loyal', 'Sarcastic and witty', 'Bold and feisty'],
      hobby: ['Martial arts', 'Witchcraft', 'Podcasting', 'Science', 'Photography', 'Reading'],
      feelVil: ['Loving', 'Admiring / Respectful', 'Concerned / Anxious', 'Conflicted', 'Resentful', 'Protective'],
      feelLI: ['Admiration', 'Curiosity / Excitement', 'Annoyance', 'Platonic', 'Fear / Skepticism', 'Guilt']
    },
    scen: [
      'Someone blackmails you over something the Villainess did before you arrived.',
      'Someone asks how a job the Villainess was hired for is going.',
      "One of {P}'s friends gets into a heated argument with you.",
      'An LI needs your blood.',
      'You get caught up in a conflict between rival groups.',
      "An ordinary human discovers an LI's identity.",
      'An LI lashes out at you over something the Villainess did.',
      'You are forced to work a job alongside an LI.',
      'You go undercover on a mission.',
      'Rumour says two supernatural clans are preparing an all-out war.',
      "The Villainess' family and friends grow suspicious: you don't act like her.",
      'You are accused of an atrocious crime against your own kind.',
      'Someone — or something — has been getting into your room unnoticed.',
      'Someone uses you to undermine {P}.',
      'You watch a romance bloom between {P} and an LI.',
      '{P} tells you she likes one of the LIs.',
      '{P} or an LI is turned into another kind of supernatural being.',
      'An LI turns up at your door, bleeding, asking to stay the night.',
      'You come out of a supernatural encounter injured.',
      'You and an LI have to share a bed.'
    ],
    extra: [
      'Because of you, the relationship between two LIs has flipped.',
      'An LI tries to use their power on you.',
      'An LI tries to kill you.',
      'In a dangerous moment, an LI chooses {P} over you.',
      'You and an LI have a heated argument over {P}.',
      'By the script, {P} is about to be attacked — and an LI would rescue her.',
      'Another body turns up: a serial killer is hunting your kind.',
      "The Villainess' old master tries to coerce and manipulate you.",
      'An LI accuses you of imitating {P}.',
      'Someone claims they were attacked by a person who looks exactly like you.',
      'One LI walks in on a seemingly intimate moment between you and another.',
      'You and an LI are bound together, unable to move more than inches apart.',
      'The script requires you to betray an LI for the plot to advance.',
      '{P} is kidnapped, and every sign points at you.',
      'You or another character loses significant supernatural abilities.',
      'Those who enforce supernatural law are after you.',
      'Your pack, clan or organisation rejects you.',
      "You are promoted, and an LI isn't happy about it.",
      'An attack meant for {P} in the script hits you instead.',
      "You take over {P}'s part of the plot and join a dangerous, secret mission."
    ],
    twists: {
      2: 'The System starts assigning you missions.',
      3: 'A new Villainess is revealed and becomes your biggest romantic rival.',
      7: C.tw.killedLI, 8: C.tw.killedP, 18: C.tw.murderer,
      19: 'A friend from your original life starts contacting you through the game.',
      20: 'You return to your original life for a brief moment.'
    },
    dates: {
      1: { meet: M.m1, loc: ['The woods', 'A church or temple', 'A club', 'A café', 'A dark alley', 'Your workplace'],
        secret: ['Gets shy with physical contact', 'Has a strange diet', 'Is confused by modern slang and technology', 'Holds a belief that clashes with their image', 'Has a tell when lying', 'Rejects the rules and culture of their kind'] },
      3: { meet: M.m3, loc: ['The underworld', 'A church or temple', 'A club', 'A restaurant', 'An old factory', 'Your workplace'],
        secret: ['Is much younger than you thought', 'Must follow a certain set of rules', "Cannot fulfil their kind's duty", ['Twins posing as one person (new LI at 3♥)', 'newLI3'], 'Has a frightening dark side', 'Has a secret child'] },
      6: { meet: M.m6, loc: ['The underworld', 'A theme park', 'A vehicle', 'A hotel', 'A party', 'Your workplace'],
        secret: ['Has been lying about who they really are', 'Has no memory of their origin', 'Broke an important rule of their kind', 'Made a pact with a dark force for your sake', 'Is dying', 'Wants to transform you'] },
      10: { meet: M.m10, loc: ['A dance ball', 'The theatre', 'A festival', 'A fancy restaurant', 'Your home', "{LI}'s home"],
        secret: [X.game, X.reinc, 'Is bound to you for life', 'Wants you to end them', 'Transformed themselves for you', 'Destroyed their family or clan for you'] },
      '-3': { meet: M.neg, loc: ['The head office', 'The deep woods', 'The catacomb', 'The lab', "{LI}'s home", "{LI}'s lair"],
        secret: [X.loved, 'You once mattered a great deal to {LI}', "Knows a weakness of the Villainess that you don't", 'Is about to experiment on you', X.knows, X.dev] },
      15: { meet: M.m15, loc: ['An art gallery or museum', 'The rooftop', 'A botanical garden', 'A banquet held for you', 'Your home', "{LI}'s home"],
        secret: ['Fears they are destined to hurt you', 'Believes their love is a burden to you', 'Cast a spell binding you together in every life', 'Would do anything to prove their love', X.save, X.pain] }
    },
    dateEv: {
      act: ['Protect', 'Attack', 'Reject', 'Challenge', 'Forget', 'Share'],
      theme: ['Dream', 'Confession', 'Love', 'Hate', 'Memory', 'Secret'],
      enc1: ['Fans or followers', 'An enforcer', '{P}', 'Another LI', 'Hunters', 'Cultists'],
      enc2: ['Creature or monster', 'Children', 'Supernatural beings', 'Another LI', 'A witch', 'No one']
    },
    scenOpt: { act: ['Protect', 'Attack', 'Preserve', 'Challenge', 'Accept', 'Follow'], theme: ['Faith', 'Bloodline', 'Love', 'Hate', 'History', 'Order'] },
    character: {
      goal: ['Collect', 'Seize', 'Harm', 'Fulfil', 'Prove', 'Protect'],
      focus: ['Secret', 'Power', 'Love', 'Family', 'Loyalty', 'Knowledge'],
      desc: ['Safe', 'Dangerous', 'Rotten', 'New', 'Hungry', 'Satiated']
    }
  };
})();
