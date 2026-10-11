(() => {
  const C = RV.en.common, M = C.meet, X = C.sec;
  RV.en.settings.idol = {
    id: 'idol', name: 'Idol', pdf: 'Reincarnated as the Unlovable Villainess_Idol.pdf',
    blurb: 'Stages, agencies and fandoms.', doom: 'cancelled or blacklisted',
    names: ['Jae', 'Ren', 'Haru', 'Kai', 'Min', 'Leo', 'Noah', 'Yuna', 'Rio', 'Sol'],
    backgrounds: ['Struggling', 'Former child star', 'Nepo baby', 'Social media influencer', 'Foreign', 'Reality star'],
    roles: ['Idol', 'Idol trainee', 'Assistant', 'Manager', 'Fan', 'Anti'],
    relations: ['Childhood friends', 'Anti and celebrity', 'Rivals', 'Coworkers', 'Senior and junior', 'Contractual obligations'],
    li: [
      ['Is', ['Idol', 'Idol trainee', 'Ex-idol', 'Actor / Singer', 'Producer / Manager', 'Artist / Designer']],
      ['Background', ['An industry insider', 'A nepo baby', 'Deep in debt', 'Self-made', 'An outsider', 'An elite']],
      ['With', ['an androgynous style', 'a gap tooth', 'prominent tattoos', 'sharp canines', 'dimples', 'a beauty mark']],
      ['Type', ['Tsundere', 'Kuudere', 'Yandere', 'Funny / Goofy', 'Arrogant / Rude', 'Joyful / Energetic']],
      ['Seen as', ['Respected', 'Loved', 'Trusted', 'Feared', 'Hated', 'Disgraced']],
      ['With the Villainess', ['One-sided love', 'Benefactor', 'Rivalry', 'Ex-lovers', 'Coworkers', 'Contractual obligations']],
      ['With {P}', ['Love at first sight', 'Enemies to lovers', 'Childhood friends', 'Fake relationship', 'Secret alliance', 'Forbidden love']]
    ],
    relLI: ['Siblings', 'Friends', 'Coworkers', 'Rivals', 'Partners', 'Enemies'],
    be: {
      what: ['cancelled', 'blacklisted', 'dropped', 'exposed', 'bankrupted', 'erased'],
      by: ['@1', '@2', '@3', '@P', 'the Agency', 'the Public'],
      because: ['gotten too close to', 'sabotaged', 'been set up by', 'plotted against', 'disobeyed', 'exposed'],
      target: ['@1', '@2', '@3', '@P', 'the Company', 'the Fans and Antis']
    },
    prot: {
      pers: ['Bright and sunny', 'Ambitious and aloof', 'Diligent and humble', 'Elegant and graceful', 'Quirky and charming', 'Witty and sharp'],
      hobby: ['Hiking', 'Video games', 'Crochet', 'Baking', 'Farming and gardening', 'Board games'],
      feelVil: ['Worship / Obsession', 'Envy', 'Fear / Caution', 'Curiosity', 'Pity / Disappointment', 'Gratitude'],
      feelLI: ['Fan admiration', 'Curiosity / Excitement', 'Indifference / Apathy', 'Platonic', 'Fear / Intimidation', 'Disappointment / Hurt']
    },
    scen: [
      "Someone uses the Villainess' problematic past to blackmail you out of a group.",
      'A loan shark shows up: the Villainess ran up a huge debt.',
      'You are being cancelled online.',
      'You are made to take the blame for a scandal involving {P} or an LI.',
      "An LI's personal item goes missing, and suspicion lands on you.",
      'You find out the company mistreats its staff or its idols.',
      'You are caught in a compromising position.',
      "By the script, an LI's past is about to be exposed.",
      "An industry heavyweight calls you out for the Villainess' behaviour.",
      'You are invited onto a reality show.',
      "The Villainess' family and friends grow suspicious: you don't act like her.",
      'You have an obsessive fan.',
      'A boss, producer or coworker undermines your work in public.',
      'An idol group is breaking up.',
      'You watch a romance bloom between {P} and an LI.',
      '{P} believes the dating rumours about you and an LI.',
      'An interviewer asks an invasive question meant to make you look bad.',
      "You get into an LI's car by mistake, and the two of you end up locked in.",
      "Unwell, you collapse at an event you couldn't skip.",
      'A threatening letter or package arrives from a fan.'
    ],
    extra: [
      'An LI makes the news for the wrong reasons.',
      'Someone is impersonating you online.',
      'A photo of you close to an LI leaks, captioned as dating.',
      'An LI throws shade at you in an interview.',
      'Fans start shipping you with an LI — theories, fanfics and edits.',
      'Two LIs have a very public feud.',
      'A video of you and {P} goes viral, and you look bad in it.',
      "Someone you trust switches to {P}'s side.",
      'You know an obsessed fan will attack {P} — and which LI would save her on that route.',
      "A threatening letter arrives from an LI's fan.",
      '{P} admits she is falling for the LI you have the most Hearts with.',
      'A rival agency offers you everything, as long as you betray an LI.',
      "An LI freezes and can't perform; only you can help.",
      'Two LIs come to blows, and it is all on camera.',
      'An LI goes on hiatus.',
      'The ship between {P} and an LI becomes the biggest of all.',
      'A stalker breaks into your home.',
      'You and an LI run from paparazzi or fans.',
      'Word is that a song was written about you.',
      "You take over {P}'s part of the plot and land a life-changing opportunity."
    ],
    twists: {
      2: 'You swap bodies with {P}.',
      3: '{P} has a secret partner.',
      7: ['An LI falls into a coma.', 'liOut'],
      8: ['{P} falls into a coma.', 'penOut'],
      18: C.tw.notFirst,
      19: "A child claims to be yours from the future, here to help — and won't say who the other parent is.",
      20: 'Someone identical to the Villainess appears.'
    },
    dates: {
      1: { meet: M.m1, loc: ['The rooftop', 'The practice room', 'The company', 'The studio', 'The parking lot', 'A convenience store'],
        secret: ['Has an embarrassing habit they hide', 'Dislikes something about themselves that others love', 'Secretly makes things, even though they are bad at it', 'Believes in blood types or horoscopes', 'Hides their identity from someone close', "Doesn't know something everybody knows"] },
      3: { meet: M.m3, loc: ['The rooftop', 'A night market', 'The airport', 'A public event', 'The gym', 'A convenience store'],
        secret: ['Secretly owns your agency', 'Is the secret child of someone powerful, rich or famous', 'Is your long-time online friend', ['Has a long-lost identical twin (new LI at 3♥)', 'newLI3'], 'Is working with the antis', 'Someone from their past is blackmailing them'] },
      6: { meet: M.m6, loc: ['The rooftop', 'The riverside', 'The club', 'A fanmeeting', 'The karaoke room', 'A convenience store'],
        secret: ['Is a (corporate) spy', 'Has ties to a criminal organisation or cult', 'Lost the ability to do something they were good at', 'Plans to expose the whole industry', 'Is addicted to something', 'Is afraid to get close to you'] },
      10: { meet: ['{LI} asks you out', '{LI} makes you come', '{LI} surprises you', '{LI} leads you there', 'You are lied to', 'You ask {LI} out'],
        loc: ['The private yacht', 'The lakeside', 'A concert', "{LI}'s private studio", 'Your home', "{LI}'s home"],
        secret: [X.game, X.reinc, 'Is about to announce their love publicly', 'Wants to give up everything to be with you', 'Will expose their own scandal to protect you', 'Used their influence to boost your career'] },
      '-3': { meet: M.neg2, loc: ['The storage room', 'The dark alley', 'The VIP lounge', 'The van', "{LI}'s home", "{LI}'s lair"],
        secret: [X.loved, 'Has been tracking your phone', 'Is about to dox you online', 'Has made a digital clone of you', X.knows, X.dev] },
      15: { meet: M.m15, loc: ['A private rooftop pool', 'A private concert hall', 'The beach under the stars', 'A castle', 'Your home', "{LI}'s home"],
        secret: ['Has written you into their will', 'Made a major sacrifice for your dream', "Feels uneasy when you aren't physically close", 'Fears they may not deserve your love', X.save, X.pain] }
    },
    dateEv: {
      act: ['Protect', 'Attack', 'Approach', 'Promise', 'Flee', 'Enjoy'],
      theme: ['Trust', 'Dreams', 'Love', 'Hate', 'Rumour', 'Popularity'],
      enc1: ['Fan(s)', 'Stalker', '{P}', 'Another LI', 'Robber', 'Paparazzi'],
      enc2: ['Animal(s)', 'Idol', 'Boss or manager', 'Another LI', 'Anti', 'No one']
    },
    scenOpt: { act: ['Protect', 'Attack', 'Resist', 'Challenge', 'Manipulate', 'Clash'], theme: ['Fame', 'Hope', 'Love', 'Hate', 'Wealth', 'Power'] },
    character: {
      goal: ['Collect', 'Find', 'Destroy', 'Expose', 'Prove', 'Restore'],
      focus: ['Fame', 'Status', 'Reputation', 'Popularity', 'Wealth', 'Art'],
      desc: ['Direct', 'Evasive', 'Hardworking', 'Chill', 'Powerful', 'Weak']
    }
  };
})();
