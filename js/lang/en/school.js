(() => {
  const C = RV.en.common, M = C.meet, X = C.sec;
  const coincid = 'A string of coincidences brings you together';
  RV.en.settings.school = {
    id: 'school', name: 'School', pdf: 'Reincarnated as the Unlovable Villainess_School.pdf',
    blurb: 'Student council, clubs and hallways.', doom: 'ostracized or expelled',
    names: ['Haruto', 'Ren', 'Sora', 'Kaito', 'Yuki', 'Daichi', 'Akira', 'Hikaru', 'Mio', 'Riku'],
    backgrounds: ['Scholarship student', 'Transfer student', 'Heiress', "Principal's child", 'Child star', 'Prodigy'],
    roles: ['Student council member', 'Fan club leader', 'Sports club manager', 'Prefect', 'Delinquent', 'Queen bee'],
    relations: ['Siblings', 'Switched at birth', 'One-sided friendship', 'Neighbours', 'Senior and junior', 'Rivals'],
    li: [
      ['Is', ['Student council president or member', 'Star athlete or musician', 'Delinquent', "The school's prince(ss)", 'Honours student', '(Head) prefect']],
      ['Comes from', ['an ordinary family', 'a wealthy family', 'an academic background', 'a famous family or clan', 'a powerful family', 'a broken home']],
      ['With', ['an eyebrow slit', 'glasses', 'tattoos', 'hair streaks', 'sharp canines', 'a headband']],
      ['Type', ['Tsundere', 'Cold / Stern', 'Shy / Timid', 'Gentle / Kind', 'Arrogant / Flamboyant', 'Hothead / Passionate']],
      ['Seen as', ['Respected', 'Loved', 'Trusted', 'Feared', 'Hated', 'Envied']],
      ['With the Villainess', ['Unrequited love', 'Ex-friends', 'Teammates or club-mates', 'Rivalry', 'Neighbours', 'Family friends']],
      ['With {P}', ['Love at first sight', 'Enemies to lovers', 'Childhood friends', 'Fake relationship', 'First love', 'Secret online romance']]
    ],
    relLI: ['Siblings', 'Cousins', 'Friends', 'Rivals', 'Teammates', 'Clashing'],
    be: {
      what: ['disowned', 'expelled', 'ostracized', 'humiliated', 'blacklisted', 'bankrupted'],
      because: ['gotten too close to', 'abandoned', 'betrayed', 'sabotaged', 'misjudged', 'been caught by'],
      target: ['@1', '@2', '@3', '@P', 'the School', 'the Clique']
    },
    prot: {
      pers: ['Shy and kind', 'Cool and intimidating', 'Brave and bold', 'Elegant and graceful', 'Stubborn and impulsive', 'Bright and bubbly'],
      hobby: ['Visual art', 'Music', 'Sports', 'Fortune telling', 'Napping', 'People watching'],
      feelVil: ['Loving', 'Admiring / Respectful', 'Concerned / Anxious', 'Sympathetic', 'Jealous', 'Protective'],
      feelLI: ['Admiration', 'Curiosity', 'Flustered', 'Platonic', 'Confused', 'Trusting']
    },
    scen: [
      'Something the Villainess did before you arrived comes back to haunt you.',
      'You are pushed into a competition or show the Villainess signed up for.',
      "Your friends and {P}'s friends get into a huge fight.",
      'You and an LI land in detention together.',
      'School open day: every class and club runs a stall.',
      "You are accused of losing or stealing the class's field trip money.",
      'A false rumour about you and an LI goes around the school.',
      'You crash into an LI and kiss by accident — it is their first kiss.',
      'Your parents are called in to school.',
      'An LI competes in an interschool event.',
      "The Villainess' family and friends grow suspicious: you don't act like her.",
      'Sports Day: you and an LI are signed up for the three-legged race.',
      'In a scavenger hunt, an LI claims you as the "treasure" for their prompt.',
      'You are accused of cheating on a major exam.',
      'A student publicly accuses you of bullying them.',
      "An LI threatens you, blaming you for {P}'s latest accident.",
      'You spend a week at a school training camp with {P}.',
      'An LI is about to be expelled.',
      'Photos of the LIs are being sold at school for big money.',
      "Under the school's legendary confession tree, you spot {P} with an LI."
    ],
    extra: [
      'You trip on the stairs, and an LI catches you.',
      'An LI lies and says the two of you are dating.',
      "An LI's fans come after you.",
      'The LI you trust most picks {P} to star in an important event.',
      'Two LIs argue fiercely because of you.',
      "Valentine's Day: an LI comes to claim their share of chocolate.",
      'In the school play, you end up replacing {P} or her co-lead in the kiss scene.',
      'Short on money, you work at a themed café — and an LI walks in with friends.',
      'You and an LI swap phones by accident.',
      'A night-time test of courage in the haunted woods.',
      "You see an LI turn down a classmate's confession.",
      'You are locked in the school storage room without your phone.',
      "By the script, an LI's parents are about to die in an accident.",
      'Two LIs pretend to be best friends because of {P}.',
      "An LI drags you along to spy on another LI's supposed date with {P}.",
      'You and an LI ride on the same bike.',
      '{P} decides to start a club and invites you along with the LIs.',
      'A junior confesses to you, and an LI leaves before hearing your answer.',
      'You wake with a fever in the sick room: you fainted, and an LI carried you there.',
      'You fight with an LI: you were helping {P}, but they think it was sabotage.'
    ],
    twists: {
      2: "You start seeing a number above everyone's head: how many people are in love with them.",
      3: 'You are a magical girl.',
      6: 'An important character falls into a coma.',
      7: ['An LI mysteriously transfers to another school.', 'liOut'],
      8: ['{P} mysteriously transfers to another school.', 'penOut'],
      18: C.tw.notFirst,
      19: 'An LI starts hearing your thoughts whenever you are close.',
      20: 'An LI or {P} has been crossdressing as another gender all along.'
    },
    dates: {
      1: { meet: [M.m1[0], M.m1[1], M.m1[2], M.m1[3], M.m1[4], coincid], loc: ['The school rooftop', 'The library', 'The gym or sports field', 'The garden', 'A classroom', 'The hallway'],
        secret: ['Gets shy when complimented', "Can't do some basic skill", 'Talks to pets, plants or objects in a baby voice', 'Is a fan of something that clashes with their image', 'Worked hard for everything people admire in them', 'Tears up easily'] },
      3: { meet: [M.m3[0], M.m3[1], M.m3[2], M.m3[3], M.m3[4], coincid], loc: ['The school rooftop', 'The arcade', 'The bowling alley', 'The karaoke box', 'A classroom', 'The mall'],
        secret: ['Always wears a facade to hide their real self', 'Has imposter syndrome', 'Gave up something important to them', ['Has a secret sibling (new LI at 3♥)', 'newLI3'], 'Is responsible for a serious accident', "Doesn't like their own role or background"] },
      6: { meet: [M.m6[0], M.m6[1], M.m6[2], M.m6[3], '{LI} talks you into it', M.m6[5]], loc: ['The school rooftop', 'The ice skating rink', 'The beach', 'The flea market', 'The live house', 'A café'],
        secret: ['Has been lying about their family or past', 'Knows why someone was expelled, fired or transferred', 'Their family is in financial trouble', 'Is on the verge of giving up their dream', 'Has to leave after graduation', 'Is forbidden to date'] },
      10: { meet: ['{LI} asks you out', '{LI} talks you into it', '{LI} surprises you', '{LI} leads you there', 'The two of you just know', 'You ask {LI} out'],
        loc: ['Under the sakura tree', "The school's church", 'The lighthouse', "The school's windmill", 'Your home', "{LI}'s home"],
        secret: [X.game, X.reinc, "Has been manipulating the game's events", 'Broke a bad habit because of you', 'Found true happiness because of you', 'Their family wants the two of you together'] },
      '-3': { meet: M.neg2, loc: ['The basement', 'The woods', 'The abandoned wing', 'The lab', 'The cabin', "{LI}'s home"],
        secret: [X.loved, 'The Villainess lost old memories she shared with {LI}', 'Only feels strong emotions around you', 'Thinks the only way to stop you is to keep you forever', X.knows, X.dev] },
      15: { meet: M.m15, loc: ['The theme park', 'The botanical garden', 'Under the fireworks', 'A hot-springs resort', 'Your home', "{LI}'s home"],
        secret: ['Wants to propose to you after graduation', 'Went against their own plans for you', 'Gets emotional whenever they think of you', 'Hopes you know how much they love you', X.save, X.pain] }
    },
    dateEv: {
      act: ['Protect', 'Attack', 'Approach', 'Promise', 'Comfort', 'Enjoy'],
      theme: ['School', 'Dreams', 'Love', 'Hate', 'Rumour', 'Secrets'],
      enc1: ['Classmate(s)', 'Drunkards', '{P}', 'Another LI', 'Robber', 'Salesperson'],
      enc2: ['Teacher', 'A flirty person', 'Rival school student', 'Another LI', 'A small animal', 'No one']
    },
    scenOpt: { act: ['Protect', 'Attack', 'Resist', 'Challenge', 'Learn', 'Clash'], theme: ['Friendship', 'Wealth', 'Love', 'Hate', 'Pride', 'Knowledge'] },
    character: {
      goal: ['Reach', 'Win', 'Prove', 'Escape', 'Belong', 'Forget'],
      focus: ['Freedom', 'Love', 'Status', 'Popularity', 'Success', 'Knowledge'],
      desc: ['Ambitious', 'Content', 'Loyal', 'Cunning', 'Pragmatic', 'Romantic']
    },
    schoolOpt: {
      rep: ['Prestigious / Elite', 'Competitive / Ruthless', 'Brand new', 'Dangerous / Feared', 'Famous / Glamorous', 'Old / Dying'],
      trait: ['Boarding school', 'For the affluent and famous', 'Small and intimate', 'Private school', 'Recently coed', 'Strict social hierarchy'],
      look: ['Modern', 'Traditional', 'Gothic', 'Victorian', 'Whimsical', 'Street / Urban']
    }
  };
})();
