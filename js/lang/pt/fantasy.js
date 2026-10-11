(() => {
  const C = RV.pt.common, M = C.meet, X = C.sec;
  RV.pt.settings.fantasy = {
    id: 'fantasy', name: 'Fantasia', pdf: 'Reincarnated as the Unlovable Villainess.pdf',
    blurb: 'Cortes, magia e bailes de máscaras.', doom: 'morta ou aprisionada',
    names: ['Cassian', 'Lucien', 'Rowan', 'Dorian', 'Evander', 'Silas', 'Alaric', 'Theron', 'Isolde', 'Seraphine'],
    backgrounds: ['Princesa', 'Duquesa', 'Herdeira', 'Protegida da realeza', 'Alta sacerdotisa', 'Dama de companhia da princesa'],
    roles: ['Maga', 'Herborista', 'Espadachim', 'Caçadora', 'Ladina', 'Estrategista'],
    relations: ['Irmãs', 'Primas', 'Amigas de infância', 'Conhecidas', 'Patroa e criada', 'Rivais'],
    li: [
      ['É', ['Príncipe ou princesa (de outro reino)', 'Cavaleiro / General', 'Mercador / Ladrão', 'Pirata / Assassino', 'Nobre', 'Mago / Clérigo']],
      ['Com', ['uma cicatriz no rosto', 'orelhas e cauda de animal', 'um par de óculos', 'uma máscara', 'um tapa-olho', 'uma pinta charmosa']],
      ['Jeito', ['Tsundere', 'Kuudere', 'Yandere', 'Galanteador', 'Arrogante / Grosseiro', 'Alegre / Extrovertido']],
      ['Fama', ['Amado', 'Odiado', 'De confiança', 'Temido', 'Respeitado', 'Misterioso']],
      ['Com a Vilã', ['Amor não correspondido', 'Noivado', 'Agressor e vítima', 'Rivalidade', 'Afeto fingido', 'Manipulação']],
      ['Com {P}', ['Amor à primeira vista', 'Segunda chance', 'Amizade de infância', 'Amor proibido', 'De inimigos a amantes', 'Casamento arranjado']]
    ],
    be: {
      what: ['morta', 'executada', 'exilada', 'incriminada', 'aprisionada', 'capturada'],
      by: ['@1', '@2', '@3', '@P', 'a Multidão', 'a Coroa'],
      because: [['se aproximou demais', 'de'], ['mentiu ou enganou', ''], ['foi enganada', 'por'], ['nunca ajudou', ''], ['maltratou ou traiu', ''], ['enfureceu', '']],
      target: ['@1', '@2', '@3', '@P', 'o Povo', 'a Coroa']
    },
    prot: {
      pers: ['Gentil e bondosa', 'Alegre e positiva', 'Tímida e acanhada', 'Ativa e corajosa', 'Impulsiva e assertiva', 'Observadora e quieta'],
      hobby: ['Desenho e pintura', 'Música', 'Escrita', 'Culinária', 'Equitação', 'Caça'],
      feelVil: ['Medo / Desconfiança', 'Admiração / Respeito', 'Amor', 'Tristeza / Compaixão', 'Esperança', 'Proteção'],
      feelLI: ['Admiração', 'Paixão', 'Irritação', 'Medo / Ceticismo', 'Amizade', 'Anseio']
    },
    scen: [
      'Um escândalo antigo da Vilã vem à tona e você é acusada de vilania.',
      'Alguém vem cobrar uma dívida que a Vilã deixou antes de você chegar.',
      'Uma lacaia da Vilã comprou briga com {P} em seu nome.',
      'Uma pessoa influente te critica duramente.',
      'Você é a anfitriã de um evento importante.',
      'Um pretendente zomba de você em público.',
      'Você é flagrada em uma situação comprometedora.',
      'Você é convocada a comparecer diante da corte real.',
      'Chega um convite para um baile de máscaras.',
      'Correm boatos de guerra com um reino vizinho. O que o jogo dizia sobre ela?',
      'Família e amigos da Vilã desconfiam: você não age como ela.',
      'Um boato escandaloso liga você a um dos pretendentes.',
      'Uma figura suspeita alega em público ser seu pai ou mãe de sangue.',
      'Alguém te menospreza por causa da sua relação ruim com {P}.',
      'Você presencia o romance entre {P} e um pretendente florescer.',
      '{P} te conta que não tem interesse em um dos pretendentes.',
      'Alguém da realeza te convida para uma caçada.',
      'Um pretendente ferido entra no seu quarto à noite, fugindo de algo.',
      'Muito doente, você precisa aparecer em um evento importante.',
      'Um pretendente adoece.'
    ],
    extra: [
      'Você é arrastada para um conflito entre dois pretendentes.',
      'Uma transformação estranha deixa uma marca permanente em um pretendente.',
      'Um pretendente te fere — acidente ou de propósito?',
      'Você e {P} são sequestradas juntas.',
      '{P} briga com um pretendente por sua causa.',
      'Pelo roteiro, um pretendente está prestes a sofrer um atentado.',
      'Você toma o lugar de {P}, sabendo da trama perigosa que a aguardava.',
      'A família da Vilã tenta te coagir e manipular para ajudá-los.',
      'Você se fere gravemente protegendo {P} ou um pretendente.',
      'Um pretendente te dá um presente indesejado.',
      'Um pretendente flagra você em um momento aparentemente íntimo com outro.',
      'Alguém tenta te chantagear.',
      'O roteiro exige que você machuque a protagonista para a trama avançar.',
      'Tentam assassinar {P}, e todas as provas apontam para você.',
      'A corte recebe provas da sua traição.',
      'Surge uma profecia sobre você.',
      'Dizem que um dragão ronda as profundezas da Floresta Sombria.',
      'Monstros atacam — e o verdadeiro alvo é você.',
      'Um pretendente desconfia dos motivos por trás da sua mudança.',
      'Você assume a parte de {P} na trama e descobre os segredos sombrios da família real.'
    ],
    twists: {
      2: 'A magia para de funcionar.',
      3: 'Uma organização secreta, nunca mencionada, é revelada.',
      7: C.tw.killedLI, 8: C.tw.killedP, 18: C.tw.murderer,
      19: 'Quem desenvolveu o jogo começa a falar com você nos sonhos.',
      20: 'Quem desenvolveu o jogo manipula os pretendentes para odiarem você e amarem {P}.'
    },
    dates: {
      1: { meet: M.m1, loc: ['A Floresta Sombria', 'O castelo', 'Uma taverna local', 'O beco escuro', 'Um leilão', 'Um café'],
        secret: ['Tem um medo que não combina com a fama', 'Tem uma comida favorita surpreendente', 'Tem um talento, hobby ou interesse inesperado', 'Detesta uma atividade, tradição ou costume comum', 'Coleciona algo incomum', 'Tem um bichinho de estimação secreto'] },
      3: { meet: M.m3, loc: ['A Floresta Sombria', 'O castelo', 'Um mercado local', 'O Distrito das Sombras', 'Um leilão ilegal', 'Um restaurante'],
        secret: ['É bem mais velho do que aparenta', 'Apoia um grupo de resistência', 'Odeia profundamente a família real atual', ['São gêmeos fingindo ser um só (novo pretendente com 3♥)', 'newLI3'], 'Tem um lado sombrio assustador', 'A personalidade real é o oposto da fama'] },
      6: { meet: M.m6, loc: ['A Floresta Sombria', 'O baile', 'Um festival', 'O Distrito das Sombras', 'A masmorra ou prisão', 'Uma sala reservada'],
        secret: ['Mente sobre a verdadeira identidade', 'Tem um passado trágico', 'Cometeu um crime terrível', 'Não entende o amor, ou não consegue amar', 'Tem linhagem real, divina ou monstruosa', 'Tem um plano capaz de mudar tudo'] },
      10: { meet: M.m10, loc: ['A Floresta Sombria', 'O baile', 'Um festival', 'Um restaurante elegante', 'A sua casa', 'A casa de {LI}'],
        secret: [X.game, X.reinc, 'Cometeu um crime imperdoável por você', 'Foi quem armou contra você', 'Largaria tudo só por você', 'Fez um grande sacrifício por você'] },
      '-3': { meet: M.neg, loc: ['A Floresta Sombria', 'A torre alta', 'Cemitério ou cripta', 'Uma gaiola dourada', 'A casa de {LI}', 'O esconderijo de {LI}'],
        secret: [X.loved, 'Já admirou você', 'Alguém próximo de você é {LI} disfarçado', 'Quer te transformar em uma boneca', X.knows, X.dev] },
      15: { meet: M.m15, loc: ['À beira do lago ou do mar', 'Nas costas de um dragão', 'Um baile em sua homenagem', 'Um banquete em sua homenagem', 'A sua casa', 'A casa de {LI}'],
        secret: ['Acha que não merece o seu amor', 'Fica inquieto por te amar demais', 'Desmoronaria se você fosse embora', 'Destruiria o mundo por você', X.save, X.pain] }
    },
    dateEv: {
      act: ['Proteger', 'Atacar', 'Resistir', 'Desafiar', 'Celebrar', 'Aproveitar'],
      theme: ['Aventura', 'Confissão', 'Amor', 'Ódio', 'Segredo', 'Tesouro'],
      enc1: ['Nobre(s)', 'Alguém da realeza', '{P}', 'Outro pretendente', 'O Alto Mago', 'Uma figura religiosa'],
      enc2: ['Criatura ou monstro', 'Um assassino', 'A turba', 'Outro pretendente', 'Bandidos', 'Ninguém']
    },
    scenOpt: { act: ['Proteger', 'Atacar', 'Resistir', 'Desafiar', 'Manipular', 'Confrontar'], theme: ['Aventura', 'Verdade', 'Amor', 'Ódio', 'Vingança', 'Orgulho'] },
    character: {
      goal: ['Coletar', 'Tomar', 'Ferir', 'Cumprir', 'Provar', 'Proteger'],
      focus: ['Item', 'Poder', 'Amor', 'Família', 'Riqueza', 'Conhecimento'],
      desc: ['Positivo', 'Negativo', 'Simples', 'Extravagante', 'Vingativo', 'Clemente']
    },
    lastName: {
      stem: ['A cor da sua camisa', 'Sua fruta favorita', 'Seu animal favorito', 'O mês do seu aniversário', 'Sua pedra preciosa favorita', 'Sua flor favorita'],
      suffix: ['+ton', '+shire', '+moore', '+ville', '+sky', '+berg']
    }
  };
})();
