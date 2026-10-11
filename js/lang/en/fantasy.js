(() => {
  const C = RV.en.common, M = C.meet, X = C.sec;
  RV.en.settings.fantasy = {
    id: 'fantasy', name: 'Fantasy', pdf: 'Reincarnated as the Unlovable Villainess.pdf',
    blurb: 'Courts, magic and masquerade balls.', doom: 'killed or imprisoned',
    names: ['Cassian', 'Lucien', 'Rowan', 'Dorian', 'Evander', 'Silas', 'Alaric', 'Theron', 'Isolde', 'Seraphine'],
    backgrounds: ['Princess', 'Duchess', 'Heiress', "Royal's Ward", 'High Priestess', "The Princess' Lady-in-Waiting"],
    roles: ['Mage', 'Herbalist', 'Swordswoman', 'Huntress', 'Rogue', 'Strategist'],
    relations: ['Siblings', 'Cousins', 'Childhood friends', 'Acquaintances', 'Employer and servant', 'Rivals'],
    li: [
      ['Is', ['(Foreign) Prince or Princess', 'Knight / General', 'Merchant / Thief', 'Pirate / Assassin', 'Noble', 'Mage / Cleric']],
      ['With', ['a face scar', 'animal ears and tail', 'a pair of glasses', 'a mask', 'an eye patch', 'a beauty mark']],
      ['Type', ['Tsundere', 'Kuudere', 'Yandere', 'Flirtatious', 'Arrogant / Rude', 'Cheerful / Outgoing']],
      ['Seen as', ['Loved', 'Hated', 'Trusted', 'Feared', 'Respected', 'Mysterious']],
      ['With the Villainess', ['One-sided love', 'Betrothed', 'Bully and victim', 'Rivalry', 'Feigned affection', 'Manipulation']],
      ['With {P}', ['Love at first sight', 'Second chance', 'Childhood friends', 'Forbidden love', 'Enemies to lovers', 'Arranged marriage']]
    ],
    be: {
      what: ['killed', 'executed', 'exiled', 'framed', 'imprisoned', 'captured'],
      by: ['@1', '@2', '@3', '@P', 'the Crowd', 'the Crown'],
      because: ['gotten too close to', 'lied to or tricked', 'been tricked by', 'never helped', 'bullied or betrayed', 'angered'],
      target: ['@1', '@2', '@3', '@P', 'the People', 'the Crown']
    },
    prot: {
      pers: ['Gentle and kind', 'Cheerful and positive', 'Shy and timid', 'Active and brave', 'Rash and assertive', 'Observant and quiet'],
      hobby: ['Drawing and painting', 'Music', 'Writing', 'Cooking', 'Horseback riding', 'Hunting'],
      feelVil: ['Fearful / Distrustful', 'Admiring / Respectful', 'Loving', 'Sad / Sympathetic', 'Hopeful', 'Protective'],
      feelLI: ['Admiration', 'Infatuation', 'Annoyance', 'Fear / Skepticism', 'Friendship', 'Longing']
    },
    scen: [
      "A scandal from the Villainess' past resurfaces, and you get the blame.",
      'A collector arrives for a debt the Villainess ran up before you.',
      "One of the Villainess' lackeys picked a fight with {P} on your behalf.",
      'An influential figure criticises you harshly.',
      'You are hosting an important event.',
      'An LI mocks you in public.',
      'You are caught in a compromising situation.',
      'You are summoned before the royal court.',
      'An invitation to a masquerade ball arrives.',
      'Rumours of war with a neighbouring nation spread. What did the game say about it?',
      "The Villainess' family and friends grow suspicious: you don't act like her.",
      'A scandalous rumour links you to one of the LIs.',
      'A shady figure publicly claims to be your blood parent.',
      'Someone belittles you over your strained relationship with {P}.',
      'You watch a romance bloom between {P} and an LI.',
      "{P} confides that she isn't interested in one of the LIs.",
      'A royal invites you on a hunt.',
      'A wounded LI slips into your room at night, hiding from something.',
      'Terribly sick, you still have to appear at an important event.',
      'An LI falls ill.'
    ],
    extra: [
      'You are dragged into a conflict between two LIs.',
      'A strange transformation leaves an LI permanently changed.',
      'An LI injures you — accident or intent?',
      'You and {P} are kidnapped together.',
      '{P} fights with an LI because of you.',
      'By the script, an LI is about to be targeted for assassination.',
      "You take {P}'s place, knowing a dangerous plot awaits her.",
      "The Villainess' family tries to coerce and manipulate you into helping them.",
      'You are badly hurt protecting {P} or an LI.',
      'An LI gives you a gift you never wanted.',
      'One LI walks in on a seemingly intimate moment between you and another.',
      'Someone tries to blackmail you.',
      'The script requires you to hurt the protagonist for the plot to advance.',
      'Someone tries to assassinate {P}, and all the evidence points at you.',
      'The court receives evidence of your treason.',
      'A prophecy about you emerges.',
      'Rumour says a dragon circles the depths of the Dark Forest.',
      'Monsters attack — and the real target is you.',
      'An LI doubts the motives behind your change.',
      "You take over {P}'s part of the plot and uncover the royal family's dark secrets."
    ],
    twists: {
      2: 'Magic stops working.',
      3: 'A secret organisation, never mentioned before, is revealed.',
      7: C.tw.killedLI, 8: C.tw.killedP, 18: C.tw.murderer,
      19: 'The developer of the game starts talking to you in your sleep.',
      20: 'The developer manipulates the LIs into hating you and loving {P}.'
    },
    dates: {
      1: { meet: M.m1, loc: ['The Dark Forest', 'The castle', 'A local tavern', 'The dark alley', 'An auction', 'A café'],
        secret: ["Has a fear that doesn't fit their reputation", 'Has a surprising favourite food', 'Has an unexpected talent, hobby or interest', 'Dislikes a common activity, tradition or custom', 'Collects something unusual', 'Keeps a secret pet'] },
      3: { meet: M.m3, loc: ['The Dark Forest', 'The castle', 'A local market', 'The Shadow District', 'An illegal auction', 'A restaurant'],
        secret: ['Is far older than they look', 'Backs a resistance group', 'Deeply hates the current royal family', ['Twins posing as one person (new LI at 3♥)', 'newLI3'], 'Has a frightening dark side', 'True personality is the opposite of their reputation'] },
      6: { meet: M.m6, loc: ['The Dark Forest', 'The dance ball', 'A festival', 'The Shadow District', 'The dungeon or prison', 'A private room'],
        secret: ['Has been lying about who they really are', 'Has a tragic past', 'Committed a terrible crime', "Doesn't understand love, or cannot love", 'Has royal, divine or monstrous blood', 'Has a plan that could change everything'] },
      10: { meet: M.m10, loc: ['The Dark Forest', 'The dance ball', 'A festival', 'A fancy restaurant', 'Your home', "{LI}'s home"],
        secret: [X.game, X.reinc, 'Committed an unforgivable crime for you', 'Was the one who set you up', 'Would abandon everything just for you', 'Made a great sacrifice for you'] },
      '-3': { meet: M.neg, loc: ['The Dark Forest', 'The high tower', 'A graveyard or crypt', 'A gilded cage', "{LI}'s home", "{LI}'s hideout"],
        secret: [X.loved, 'Once admired you', 'Someone close to you is {LI} in disguise', 'Wants to turn you into a doll', X.knows, X.dev] },
      15: { meet: M.m15, loc: ['By the lake or the sea', "On a dragon's back", 'A ball held for you', 'A feast held for you', 'Your home', "{LI}'s home"],
        secret: ["Believes they don't deserve your love", 'Is uneasy about loving you too much', 'Would fall apart if you left', 'Would destroy the world for you', X.save, X.pain] }
    },
    dateEv: {
      act: ['Protect', 'Attack', 'Resist', 'Challenge', 'Celebrate', 'Enjoy'],
      theme: ['Adventure', 'Confession', 'Love', 'Hate', 'Secret', 'Treasure'],
      enc1: ['Noble(s)', 'A royal', '{P}', 'Another LI', 'The High Mage', 'A religious figure'],
      enc2: ['Creature or monster', 'An assassin', 'The mob', 'Another LI', 'Bandits', 'No one']
    },
    scenOpt: { act: ['Protect', 'Attack', 'Resist', 'Challenge', 'Manipulate', 'Clash'], theme: ['Adventure', 'Truth', 'Love', 'Hate', 'Revenge', 'Pride'] },
    character: {
      goal: ['Collect', 'Seize', 'Harm', 'Fulfil', 'Prove', 'Protect'],
      focus: ['Item', 'Power', 'Love', 'Family', 'Wealth', 'Knowledge'],
      desc: ['Positive', 'Negative', 'Plain', 'Flamboyant', 'Vengeful', 'Forgiving']
    },
    lastName: {
      stem: ['The colour of your shirt', 'Your favourite fruit', 'Your favourite animal', 'Your birth month', 'Your favourite gemstone', 'Your favourite flower'],
      suffix: ['+ton', '+shire', '+moore', '+ville', '+sky', '+berg']
    }
  };
})();
