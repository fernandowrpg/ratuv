(() => {
  const C = RV.pt.common, M = C.meet, X = C.sec;
  RV.pt.settings.idol = {
    id: 'idol', name: 'Idol', pdf: 'Reincarnated as the Unlovable Villainess_Idol.pdf',
    blurb: 'Palcos, agências e fandoms.', doom: 'cancelada ou banida do meio',
    names: ['Jae', 'Ren', 'Haru', 'Kai', 'Min', 'Leo', 'Noah', 'Yuna', 'Rio', 'Sol'],
    backgrounds: ['Batalhadora sem recursos', 'Ex-estrela mirim', 'Nepo baby', 'Influenciadora digital', 'Estrangeira', 'Estrela de reality'],
    roles: ['Idol', 'Trainee', 'Assistente', 'Empresária', 'Fã', 'Anti'],
    relations: ['Amigas de infância', 'Anti e celebridade', 'Rivais', 'Colegas de trabalho', 'Veterana e novata', 'Obrigações contratuais'],
    li: [
      ['É', ['Idol', 'Trainee', 'Ex-idol', 'Ator / Cantor', 'Produtor / Empresário', 'Artista / Designer']],
      ['Origem', ['Gente do meio', 'Nepo baby', 'Atolado em dívidas', 'Venceu por conta própria', 'Um forasteiro', 'Da elite']],
      ['Com', ['estilo andrógino', 'dentes separados', 'tatuagens à mostra', 'caninos afiados', 'covinhas', 'uma pinta charmosa']],
      ['Jeito', ['Tsundere', 'Kuudere', 'Yandere', 'Engraçado / Bobo', 'Arrogante / Grosseiro', 'Alegre / Enérgico']],
      ['Fama', ['Respeitado', 'Amado', 'De confiança', 'Temido', 'Odiado', 'Caído em desgraça']],
      ['Com a Vilã', ['Amor não correspondido', 'Benfeitor', 'Rivalidade', 'Ex-namorados', 'Colegas de trabalho', 'Obrigações contratuais']],
      ['Com {P}', ['Amor à primeira vista', 'De inimigos a amantes', 'Amizade de infância', 'Namoro de fachada', 'Aliança secreta', 'Amor proibido']]
    ],
    relLI: ['Irmãos', 'Amigos', 'Colegas de trabalho', 'Rivais', 'Parceiros', 'Inimigos'],
    be: {
      what: ['cancelada', 'banida do meio', 'dispensada', 'exposta', 'levada à falência', 'apagada'],
      by: ['@1', '@2', '@3', '@P', 'a Agência', 'o Público'],
      because: [['se aproximou demais', 'de'], ['sabotou', ''], ['caiu numa armação', 'de'], ['conspirou', 'contra'], ['desobedeceu', ''], ['expôs', '']],
      target: ['@1', '@2', '@3', '@P', 'a Empresa', 'os Fãs e Antis']
    },
    prot: {
      pers: ['Radiante e solar', 'Ambiciosa e distante', 'Dedicada e humilde', 'Elegante e graciosa', 'Excêntrica e charmosa', 'Espirituosa e afiada'],
      hobby: ['Trilhas', 'Videogame', 'Crochê', 'Confeitaria', 'Horta e jardinagem', 'Jogos de tabuleiro'],
      feelVil: ['Adoração / Obsessão', 'Inveja', 'Medo / Cautela', 'Curiosidade', 'Pena / Decepção', 'Gratidão'],
      feelLI: ['Admiração de fã', 'Curiosidade / Empolgação', 'Indiferença / Apatia', 'Platônico', 'Medo / Intimidação', 'Decepção / Mágoa']
    },
    scen: [
      'Usam o passado problemático da Vilã para te chantagear a sair de um grupo.',
      'Um agiota aparece: a Vilã acumulou uma dívida enorme.',
      'Você está sendo cancelada na internet.',
      'Você é forçada a levar a culpa por um escândalo de {P} ou de um pretendente.',
      'Um objeto pessoal de um pretendente some, e a suspeita cai em você.',
      'Você descobre que a empresa maltrata a equipe ou os idols.',
      'Você é flagrada em uma situação comprometedora.',
      'Pelo roteiro, o passado de um pretendente está prestes a ser exposto.',
      'Um nome de peso do entretenimento te critica pelas atitudes da Vilã.',
      'Você é convidada para um reality show.',
      'Família e amigos da Vilã desconfiam: você não age como ela.',
      'Você tem um fã obsessivo.',
      'Chefe, produtor ou colega desmerece o seu trabalho em público.',
      'Um grupo de idols está se separando.',
      'Você presencia o romance entre {P} e um pretendente florescer.',
      '{P} acredita nos boatos de namoro entre você e um pretendente.',
      'Numa entrevista, fazem uma pergunta invasiva para te queimar.',
      'Você entra por engano no carro de um pretendente e ficam trancados.',
      'Doente, você desmaia em um evento ao qual não podia faltar.',
      'Você recebe uma carta ou pacote ameaçador de um fã.'
    ],
    extra: [
      'Um pretendente vira notícia por motivos ruins.',
      'Alguém se passa por você na internet.',
      'Vaza uma foto sua bem perto de um pretendente, com legenda de namoro.',
      'Um pretendente te alfineta em uma entrevista.',
      'Fãs começam a shippar você com um pretendente — teorias, fanfics e edits.',
      'Dois pretendentes travam uma treta bem pública.',
      'Um vídeo seu com {P} viraliza, e você sai mal nele.',
      'Alguém em quem você confia passa para o lado de {P}.',
      'Você sabe que um fã obcecado vai atacar {P} — e quem a salvaria na rota.',
      'Chega uma carta ameaçadora de um fã de um pretendente.',
      '{P} confessa sentir algo pelo pretendente com quem você tem mais Corações.',
      'Uma agência rival oferece tudo para te contratar, desde que você traia um pretendente.',
      'Um pretendente trava e não consegue se apresentar; só você pode ajudar.',
      'Dois pretendentes saem no braço, e tudo é filmado.',
      'Um pretendente entra em hiato.',
      'O ship de {P} com um pretendente vira o maior de todos.',
      'Um stalker invade a sua casa.',
      'Você e um pretendente fogem de paparazzi ou fãs.',
      'Dizem que uma música foi escrita sobre você.',
      'Você assume a parte de {P} na trama e ganha uma chance de mudar de vida.'
    ],
    twists: {
      2: 'Você troca de corpo com {P}.',
      3: '{P} tem um par secreto.',
      7: ['Um pretendente entra em coma.', 'liOut'],
      8: ['{P} entra em coma.', 'penOut'],
      18: C.tw.notFirst,
      19: 'Uma criança diz ser sua filha vinda do futuro para ajudar — sem contar quem é a outra pessoa.',
      20: 'Aparece alguém idêntico à Vilã.'
    },
    dates: {
      1: { meet: M.m1, loc: ['O terraço', 'A sala de ensaio', 'A empresa', 'O estúdio', 'O estacionamento', 'Uma loja de conveniência'],
        secret: ['Tem um hábito constrangedor que esconde', 'Detesta em si algo que os outros adoram', 'Cria coisas em segredo, mesmo sem talento', 'Acredita em tipo sanguíneo ou horóscopo', 'Esconde a identidade de alguém próximo', 'Não sabe algo que todo mundo sabe'] },
      3: { meet: M.m3, loc: ['O terraço', 'Uma feira noturna', 'O aeroporto', 'Um evento público', 'A academia', 'Uma loja de conveniência'],
        secret: ['É dono secreto da sua agência', 'É filho secreto de alguém poderoso, rico ou famoso', 'É seu amigo virtual de longa data', ['Tem um gêmeo idêntico perdido (novo pretendente com 3♥)', 'newLI3'], 'Trabalha com os antis', 'Alguém do passado o chantageia'] },
      6: { meet: M.m6, loc: ['O terraço', 'A beira do rio', 'A balada', 'Um fanmeeting', 'A sala de karaokê', 'Uma loja de conveniência'],
        secret: ['É espião (corporativo)', 'Tem laços com uma organização criminosa ou seita', 'Perdeu a capacidade de fazer algo em que era bom', 'Planeja expor a indústria inteira', 'É viciado em algo', 'Tem medo de se aproximar de você'] },
      10: { meet: ['{LI} te convida', '{LI} te obriga a ir', '{LI} te surpreende', '{LI} te conduz até lá', 'Você é enganada', 'Você faz o convite'],
        loc: ['O iate particular', 'A beira do lago', 'Um show', 'O estúdio particular de {LI}', 'A sua casa', 'A casa de {LI}'],
        secret: [X.game, X.reinc, 'Vai declarar o amor em público', 'Quer largar tudo para ficar com você', 'Vai expor o próprio escândalo para te proteger', 'Usou a influência para alavancar sua carreira'] },
      '-3': { meet: M.neg2, loc: ['O depósito', 'O beco escuro', 'A sala VIP', 'A van', 'A casa de {LI}', 'O covil de {LI}'],
        secret: [X.loved, 'Rastreia o seu celular', 'Vai vazar seus dados na internet', 'Criou um clone digital seu', X.knows, X.dev] },
      15: { meet: M.m15, loc: ['Uma piscina privativa no terraço', 'Uma sala de concertos particular', 'A praia sob as estrelas', 'Um castelo', 'A sua casa', 'A casa de {LI}'],
        secret: ['Incluiu você no testamento', 'Fez um grande sacrifício pelo seu sonho', 'Fica inquieto longe de você', 'Teme não merecer o seu amor', X.save, X.pain] }
    },
    dateEv: {
      act: ['Proteger', 'Atacar', 'Aproximar', 'Prometer', 'Fugir', 'Aproveitar'],
      theme: ['Confiança', 'Sonhos', 'Amor', 'Ódio', 'Boato', 'Popularidade'],
      enc1: ['Fã(s)', 'Stalker', '{P}', 'Outro pretendente', 'Assaltante', 'Paparazzi'],
      enc2: ['Animal(is)', 'Idol', 'Chefe ou empresário', 'Outro pretendente', 'Anti', 'Ninguém']
    },
    scenOpt: { act: ['Proteger', 'Atacar', 'Resistir', 'Desafiar', 'Manipular', 'Confrontar'], theme: ['Fama', 'Esperança', 'Amor', 'Ódio', 'Riqueza', 'Poder'] },
    character: {
      goal: ['Coletar', 'Encontrar', 'Destruir', 'Expor', 'Provar', 'Restaurar'],
      focus: ['Fama', 'Status', 'Reputação', 'Popularidade', 'Riqueza', 'Arte'],
      desc: ['Direto', 'Evasivo', 'Esforçado', 'Tranquilo', 'Poderoso', 'Fraco']
    }
  };
})();
