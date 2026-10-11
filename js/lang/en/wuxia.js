(() => {
  const C = RV.en.common, M = C.meet, X = C.sec;
  RV.en.settings.wuxia = {
    id: 'wuxia', name: 'Wuxia', pdf: 'Reincarnated as the Unlovable Villainess_Wuxia.pdf',
    blurb: 'Sects, swords and honour in the martial world.', doom: 'killed or imprisoned',
    names: ['Li Wei', 'Shen Yu', 'Bai Lian', 'Mo Chen', 'Xiao Feng', 'Yun Zhi', 'Han Jue', 'Lan Ming', 'Su Yin', 'Gu Ye'],
    backgrounds: ['Sect leader', "A sect's heir", 'Martial arts family', 'Nobility', "Farmer's daughter", 'Wandering xiake'],
    roles: ['Fighter', 'Poisoner', 'Healer', 'Tinkerer', 'Convoy guard', 'Scammer'],
    relations: ['Siblings', 'Sworn siblings', 'Childhood friends', 'Martial siblings', 'Master and disciple', 'Contractual obligations'],
    li: [
      ['Is', ['Sect leader', 'Guard / Assassin', 'Doctor / Poisoner', 'Martial artist / Xiake', 'Constable / Officer', 'Disciple']],
      ['Comes from', ['an ordinary family', 'a royal or noble family', 'a family of generals', 'a martial arts family', 'a family of scholars', 'a merchant family']],
      ['With', ['a face scar', 'a blindfold', 'a face tattoo', 'a veil', 'a birthmark', 'a beauty mark']],
      ['Type', ['Tsundere', 'Kuudere', 'Yandere', 'Urbane / Soft', 'Arrogant / Rude', 'Lively / Playful']],
      ['Seen as', ['Respected', 'Loved', 'Trusted', 'Feared', 'Hated', 'Mysterious']],
      ['With the Villainess', ['One-sided love', 'Defeated by her', 'Rivals', 'Blood feud', 'Master and disciple', 'Martial siblings']],
      ['With {P}', ['Love at first sight', 'Enemies to lovers', 'Childhood friends', 'Fake relationship', 'Love and hate', 'Forbidden love']]
    ],
    relLI: ['Siblings', 'Sworn siblings', 'Friends', 'Rivals', 'Partners', 'Enemies'],
    be: {
      what: ['killed', 'executed', 'imprisoned', 'captured', 'tortured', 'stripped of all martial arts'],
      by: ['@1', '@2', '@3', '@P', 'the Sect', 'the Court'],
      because: ['gotten too close to', 'abandoned', 'been set up by', 'plotted against', 'betrayed', 'challenged'],
      target: ['@1', '@2', '@3', '@P', 'the Allies', 'the Opposing Sect']
    },
    prot: {
      pers: ['Honest and sincere', 'Cold and aloof', 'Stubborn and proud', 'Innocent and naive', 'Warm and gentle', 'Timid and fearful'],
      hobby: ['Studying ancient scrolls', 'Adventure', 'Martial arts', 'Chess', 'Tea tasting', 'Forging weapons'],
      feelVil: ['Caring / Relying', 'Admiring / Respectful', 'Fearful / Disgusted', 'Conflicted', 'Guilty', 'Loyal'],
      feelLI: ['Admiration / Worship', 'Curiosity / Excitement', 'Resentment / Guilt', 'Platonic', 'Fear / Skepticism', 'Caring / Pity']
    },
    scen: [
      "Someone uses the Villainess' past crimes to force you away from an LI.",
      'Someone comes to settle a debt with the Villainess — and the payment is trouble.',
      'An LI asks to train a dual martial art with you.',
      'You must choose between loyalty and self-preservation.',
      'In danger, you can save only one of two LIs.',
      'A victim of the Villainess accuses you before the governor or royalty.',
      'You are caught in a compromising position.',
      "By the script, an LI's hometown is about to be massacred.",
      'A big name of the martial world snubs you in public and praises {P}.',
      'The martial arts tournament is about to begin.',
      "The Villainess' family and friends grow suspicious: you don't act like her.",
      'You enter a martial tournament whose prize is a marriage.',
      'You and an LI fall off a cliff.',
      'Lost in the wilderness in the rain, the LI falls ill and grows cold fast.',
      'You watch a romance bloom between {P} and an LI.',
      '{P} thinks one of the LIs has feelings for you.',
      "An LI's inner energy spirals out of control and endangers {P}.",
      "You are forced to hide in an LI's room.",
      'At a critical moment you weaken and lose control of your body.',
      'An LI is struck by a love poison.'
    ],
    extra: [
      'Two LIs duel.',
      'The court demands you hand over someone important to you.',
      'An LI is wanted by the court, with a bounty.',
      'A play staged in the city paints you as the villain.',
      'Because of an LI, you grow closer to {P}.',
      'By the script, an LI will be in danger and {P} would grow close to them by saving them.',
      "Someone meant to become {P}'s loyal follower confesses to you instead.",
      'Someone important to the Villainess abandons her to back {P}.',
      'You meet the mythical beast that {P} tames in the game.',
      'A letter of challenge arrives.',
      "You are trapped in a dream and can't wake up.",
      'You come by a human-skin mask.',
      'The script requires you to betray your sect or your country.',
      '{P} is poisoned, and all the evidence points at you.',
      'An LI strikes your pressure points and leaves you unable to move.',
      'An LI comes back from a war changed for good.',
      'Your sect or organisation casts you out.',
      'You come to blows with an LI.',
      'Someone in the martial world issues a kill order on you.',
      "You take over {P}'s part of the plot and receive the scroll of a legendary technique."
    ],
    twists: {
      2: 'You can swap bodies with an LI.',
      3: ['You glimpse a BE that differs from the script: reroll at least one aspect of a BE.', 'rerollBE'],
      7: C.tw.killedLI, 8: C.tw.killedP, 18: C.tw.murderer,
      19: 'You receive an item from your original life.',
      20: 'While asleep, you can talk to yourself from your original life.'
    },
    dates: {
      1: { meet: M.m1, loc: ['The stage station', 'The bamboo grove', 'An arena', 'An inn', 'A brothel', 'A temple'],
        secret: ['Carries a token that proves who they are', 'Uses a technique that contradicts their image', 'Performs a specific ritual after killing', 'Has an unexpected social circle', 'Hides their identity from someone close', 'Went through a strange training'] },
      3: { meet: M.m3, loc: ['An ancient ruin', 'The bamboo grove', 'The training hall', 'A market', 'A brothel', 'The scripture vault'],
        secret: ["Can't use their signature skill", 'Controls a cult or evil sect', 'Has ties to the opposing side', ['Has a decoy personal guard (new LI at 3♥)', 'newLI3'], 'Is the mysterious, unnamed master', 'Uses a cursed weapon, item or technique'] },
      6: { meet: M.m6, loc: ['A cliffside', 'The bamboo grove', 'The water cave', 'An opera house', 'A mountain villa', 'The treasure hall'],
        secret: ['Has always worn a human-skin mask', 'Has been undercover on a mission all along', 'Is teetering on the edge of madness', 'Is an imposter who killed the real one at the start', 'Is trapped in illusions tied to you', 'Has a reason for avoiding commitment'] },
      10: { meet: M.m10, loc: ['A luxury houseboat', 'The lakeside', 'A festival', 'The peach blossom grove', 'Your home', "{LI}'s home"],
        secret: [X.game, X.reinc, 'Is about to sacrifice the greater good for you', 'Wants to live in seclusion with you', 'Betrayed someone close, or their sect, for you', 'Faked their death to be with you'] },
      '-3': { meet: M.neg, loc: ['The crypt', 'The Miasma Forest', 'The Lake of Blood', 'An empty village', "{LI}'s home", "{LI}'s lair"],
        secret: [X.loved, 'Remembers a promise you made and forgot', 'Found someone to replace you', 'Has a deep inferiority complex towards you', X.knows, X.dev] },
      15: { meet: M.m15, loc: ['A moonlit lake', 'A sea of flowers', 'A raft on the lake', 'The marriage arena', 'Your home', "{LI}'s home"],
        secret: ['Wants to build a family with you', 'Will stay by your side no matter what', 'Passes every skill to you before losing their own', 'Uses extreme measures to keep you forever', X.save, X.pain] }
    },
    dateEv: {
      act: ['Protect', 'Attack', 'Approach', 'Challenge', 'Receive', 'Enjoy'],
      theme: ['Trust', 'Confession', 'Love', 'Hate', 'Rumour', 'Weapon'],
      enc1: ['An assassin', 'A constable', '{P}', 'Another LI', 'Thieves', 'A martial artist'],
      enc2: ['A beast', 'The opposing side', 'An enemy', 'Another LI', 'A scammer', 'No one']
    },
    scenOpt: { act: ['Protect', 'Attack', 'Resist', 'Challenge', 'Manipulate', 'Clash'], theme: ['Inheritance', 'Greater good', 'Love', 'Hate', 'Sentiment', 'Future'] },
    character: {
      goal: ['Collect', 'Seize', 'Harm', 'Fulfil', 'Prove', 'Protect'],
      focus: ['Loyalty', 'Status', 'Love', 'Family', 'Wealth', 'Martial arts'],
      desc: ['Traditional', 'Unconventional', 'Pompous', 'Humble', 'Aggressive', 'Gentle']
    }
  };
})();
