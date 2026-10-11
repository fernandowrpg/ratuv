(() => {
  const C = RV.pt.common, M = C.meet, X = C.sec;
  RV.pt.settings.wuxia = {
    id: 'wuxia', name: 'Wuxia', pdf: 'Reincarnated as the Unlovable Villainess_Wuxia.pdf',
    blurb: 'Seitas, espadas e honra no mundo marcial.', doom: 'morta ou aprisionada',
    names: ['Li Wei', 'Shen Yu', 'Bai Lian', 'Mo Chen', 'Xiao Feng', 'Yun Zhi', 'Han Jue', 'Lan Ming', 'Su Yin', 'Gu Ye'],
    backgrounds: ['Líder de seita', 'Herdeira de uma seita', 'Família de artes marciais', 'Nobreza', 'Filha de camponeses', 'Xiake errante'],
    roles: ['Lutadora', 'Envenenadora', 'Curandeira', 'Engenhoqueira', 'Guarda de comboio', 'Trapaceira'],
    relations: ['Irmãs', 'Irmãs juradas', 'Amigas de infância', 'Irmãs marciais', 'Mestra e discípula', 'Obrigações contratuais'],
    li: [
      ['É', ['Líder de seita', 'Guarda / Assassino', 'Médico / Envenenador', 'Artista marcial / Xiake', 'Oficial da lei', 'Discípulo']],
      ['Vem de', ['uma família comum', 'uma família real ou nobre', 'uma família de generais', 'uma família de artes marciais', 'uma família de eruditos', 'uma família de mercadores']],
      ['Com', ['uma cicatriz no rosto', 'uma venda nos olhos', 'uma tatuagem no rosto', 'um véu', 'uma marca de nascença', 'uma pinta charmosa']],
      ['Jeito', ['Tsundere', 'Kuudere', 'Yandere', 'Refinado / Suave', 'Arrogante / Grosseiro', 'Vivaz / Brincalhão']],
      ['Fama', ['Respeitado', 'Amado', 'De confiança', 'Temido', 'Odiado', 'Misterioso']],
      ['Com a Vilã', ['Amor não correspondido', 'Derrotado por ela', 'Rivais', 'Rixa de sangue', 'Mestre e discípulo', 'Irmãos marciais']],
      ['Com {P}', ['Amor à primeira vista', 'De inimigos a amantes', 'Amizade de infância', 'Namoro de fachada', 'Amor e ódio', 'Amor proibido']]
    ],
    relLI: ['Irmãos', 'Irmãos jurados', 'Amigos', 'Rivais', 'Parceiros', 'Inimigos'],
    be: {
      what: ['morta', 'executada', 'aprisionada', 'capturada', 'torturada', 'privada de todas as artes marciais'],
      by: ['@1', '@2', '@3', '@P', 'a Seita', 'a Corte'],
      because: [['se aproximou demais', 'de'], ['abandonou', ''], ['caiu numa armação', 'de'], ['conspirou', 'contra'], ['traiu', ''], ['desafiou', '']],
      target: ['@1', '@2', '@3', '@P', 'os Aliados', 'a Seita rival']
    },
    prot: {
      pers: ['Honesta e sincera', 'Fria e distante', 'Teimosa e orgulhosa', 'Inocente e ingênua', 'Calorosa e gentil', 'Tímida e medrosa'],
      hobby: ['Estudar pergaminhos antigos', 'Aventura', 'Artes marciais', 'Xadrez', 'Degustação de chá', 'Forjar armas'],
      feelVil: ['Carinho / Dependência', 'Admiração / Respeito', 'Medo / Repulsa', 'Conflito interno', 'Culpa', 'Lealdade'],
      feelLI: ['Admiração / Devoção', 'Curiosidade / Empolgação', 'Ressentimento / Culpa', 'Platônico', 'Medo / Ceticismo', 'Carinho / Pena']
    },
    scen: [
      'Usam os crimes passados da Vilã para te forçar a largar um pretendente.',
      'Alguém vem quitar uma dívida com a Vilã — e o pagamento é um problema.',
      'Um pretendente pede para treinar com você uma arte marcial em dupla.',
      'Você precisa escolher entre a lealdade e a própria pele.',
      'Em perigo, você só consegue salvar um de dois pretendentes.',
      'Uma vítima da Vilã te acusa diante do governador ou da realeza.',
      'Você é flagrada em uma situação comprometedora.',
      'Pelo roteiro, a terra natal de um pretendente está prestes a ser massacrada.',
      'Um figurão do mundo marcial te ignora em público e exalta {P}.',
      'O torneio de artes marciais vai começar.',
      'Família e amigos da Vilã desconfiam: você não age como ela.',
      'Você participa de um torneio marcial cujo prêmio é um casamento.',
      'Você e um pretendente caem de um penhasco.',
      'Perdidos no ermo sob chuva, o pretendente adoece e esfria depressa.',
      'Você presencia o romance entre {P} e um pretendente florescer.',
      '{P} acha que um dos pretendentes gosta de você.',
      'A energia interna de um pretendente se descontrola e põe {P} em perigo.',
      'Você é obrigada a se esconder no quarto de um pretendente.',
      'Num momento crítico, você fraqueja e perde o controle do corpo.',
      'Um pretendente é acometido por um veneno do amor.'
    ],
    extra: [
      'Dois pretendentes duelam.',
      'A corte exige que você entregue alguém importante para você.',
      'Um pretendente é procurado pela corte, com recompensa.',
      'Uma peça encenada na cidade retrata você como vilã.',
      'Por causa de um pretendente, você se aproxima de {P}.',
      'Pelo roteiro, um pretendente correrá perigo e {P} se aproximaria dele ao salvá-lo.',
      'Quem deveria virar seguidor fiel de {P} se declara para você.',
      'Alguém importante para a Vilã a abandona para apoiar {P}.',
      'Você encontra a fera mítica que {P} doma no jogo.',
      'Chega uma carta de desafio.',
      'Você fica presa em um sonho e não consegue acordar.',
      'Você obtém uma máscara de pele humana.',
      'O roteiro exige que você traia a sua seita ou o seu país.',
      '{P} é envenenada, e todas as provas apontam para você.',
      'Um pretendente atinge seus pontos de pressão e te deixa imóvel.',
      'Um pretendente volta de uma guerra mudado para sempre.',
      'Sua seita ou organização te expulsa.',
      'Você parte para o confronto físico com um pretendente.',
      'Alguém do mundo marcial decreta a sua morte.',
      'Você assume a parte de {P} na trama e recebe o pergaminho de uma técnica lendária.'
    ],
    twists: {
      2: 'Você consegue trocar de corpo com um pretendente.',
      3: ['Você vê de relance um Final Ruim diferente do roteiro: role de novo ao menos um aspecto de um Final Ruim.', 'rerollBE'],
      7: C.tw.killedLI, 8: C.tw.killedP, 18: C.tw.murderer,
      19: 'Você recebe um objeto da sua vida original.',
      20: 'Dormindo, você consegue conversar com o seu eu da vida original.'
    },
    dates: {
      1: { meet: M.m1, loc: ['A estação de posta', 'O bambuzal', 'Uma arena', 'Uma estalagem', 'Um bordel', 'Um templo'],
        secret: ['Carrega um emblema que comprova quem é', 'Usa uma técnica que contradiz a imagem', 'Cumpre um ritual específico depois de matar', 'Tem um círculo social inesperado', 'Esconde a identidade de alguém próximo', 'Passou por um treinamento estranho'] },
      3: { meet: M.m3, loc: ['Uma ruína antiga', 'O bambuzal', 'O salão de treino', 'Um mercado', 'Um bordel', 'O cofre das escrituras'],
        secret: ['Não consegue usar a técnica que é sua marca', 'Controla uma seita maligna', 'Tem laços com o lado inimigo', ['Tem um guarda pessoal que serve de sósia (novo pretendente com 3♥)', 'newLI3'], 'É o misterioso mestre sem nome', 'Usa uma arma, item ou técnica amaldiçoada'] },
      6: { meet: M.m6, loc: ['A beira de um penhasco', 'O bambuzal', 'A caverna aquática', 'Uma casa de ópera', 'Uma vila na montanha', 'O salão do tesouro'],
        secret: ['Sempre usou uma máscara de pele humana', 'Sempre esteve infiltrado em missão secreta', 'Está à beira da loucura', 'É um impostor que matou o verdadeiro logo no início', 'Vive preso em ilusões ligadas a você', 'Tem um motivo para fugir de compromissos'] },
      10: { meet: M.m10, loc: ['Uma casa-barco luxuosa', 'A beira do lago', 'Um festival', 'O pomar de pessegueiros em flor', 'A sua casa', 'A casa de {LI}'],
        secret: [X.game, X.reinc, 'Vai sacrificar o bem maior por você', 'Quer viver recluso com você', 'Traiu alguém próximo ou a seita por você', 'Forjou a própria morte para ficar com você'] },
      '-3': { meet: M.neg, loc: ['A cripta', 'A Floresta do Miasma', 'O Lago de Sangue', 'Uma aldeia vazia', 'A casa de {LI}', 'O covil de {LI}'],
        secret: [X.loved, 'Lembra de uma promessa sua que você esqueceu', 'Achou alguém para ocupar o seu lugar', 'Tem um profundo complexo de inferioridade diante de você', X.knows, X.dev] },
      15: { meet: M.m15, loc: ['Um lago ao luar', 'Um mar de flores', 'Uma jangada no lago', 'A arena de casamento', 'A sua casa', 'A casa de {LI}'],
        secret: ['Quer formar uma família com você', 'Ficará ao seu lado aconteça o que acontecer', 'Passa a você todas as técnicas antes de perder as próprias', 'Usa medidas extremas para te manter para sempre', X.save, X.pain] }
    },
    dateEv: {
      act: ['Proteger', 'Atacar', 'Aproximar', 'Desafiar', 'Receber', 'Aproveitar'],
      theme: ['Confiança', 'Confissão', 'Amor', 'Ódio', 'Boato', 'Arma'],
      enc1: ['Um assassino', 'Um oficial da lei', '{P}', 'Outro pretendente', 'Ladrões', 'Um artista marcial'],
      enc2: ['Uma fera', 'O lado oposto', 'Um inimigo', 'Outro pretendente', 'Um trapaceiro', 'Ninguém']
    },
    scenOpt: { act: ['Proteger', 'Atacar', 'Resistir', 'Desafiar', 'Manipular', 'Confrontar'], theme: ['Herança', 'Bem maior', 'Amor', 'Ódio', 'Sentimento', 'Futuro'] },
    character: {
      goal: ['Coletar', 'Tomar', 'Ferir', 'Cumprir', 'Provar', 'Proteger'],
      focus: ['Lealdade', 'Status', 'Amor', 'Família', 'Riqueza', 'Artes marciais'],
      desc: ['Tradicional', 'Heterodoxo', 'Pomposo', 'Humilde', 'Agressivo', 'Gentil']
    }
  };
})();
