(() => {
  const C = RV.pt.common, M = C.meet, X = C.sec;
  RV.pt.settings.paranormal = {
    id: 'paranormal', name: 'Paranormal', pdf: 'Reincarnated as the Unlovable Villainess_Paranormal.pdf',
    blurb: 'Vampiros, lobisomens e caçadores na cidade.', doom: 'morta ou aprisionada',
    names: ['Adrian', 'Damon', 'Lucius', 'Raven', 'Elias', 'Viktor', 'Nyx', 'Caleb', 'Morgana', 'Asher'],
    backgrounds: ['Humana comum', 'Vampira', 'Lobisomem', 'Bruxa', 'Demônio', 'Anjo'],
    roles: ['Líder', 'Caçadora', 'Criminosa', 'Agente', 'Investigadora', 'Cultista'],
    relations: ['Irmãs', 'Primas', 'Amigas de infância', 'Colegas de trabalho', 'Lados opostos', 'Rivais'],
    li: [
      ['É', ['Anjo (caído)', 'Demônio / Diabo', 'Meio-humano', 'Lobisomem', 'Vampiro', 'Humano comum']],
      ['Atua como', ['Investigador', 'Agente especial', 'Exorcista / Caçador', 'Médico / Cientista', 'Criminoso / Assassino', 'Líder / Governante']],
      ['Com', ['uma cicatriz no rosto', 'sardas', 'tatuagens', 'heterocromia', 'partes não humanas', 'olheiras profundas']],
      ['Jeito', ['Tsundere', 'Kuudere', 'Yandere', 'Galanteador', 'Arrogante / Grosseiro', 'Alegre / Extrovertido']],
      ['Fama', ['Respeitado', 'Amado', 'De confiança', 'Temido', 'Odiado', 'Misterioso']],
      ['Com a Vilã', ['Amor não correspondido', 'Chefe e subordinado', 'Mentor e pupilo', 'Rivalidade', 'Lados opostos', 'Famílias em guerra']],
      ['Com {P}', ['Amor à primeira vista', 'De inimigos a amantes', 'Amizade de infância', 'Almas destinadas', 'Primeiro amor', 'Amor proibido']]
    ],
    relLI: ['Irmãos', 'Primos', 'Amigos', 'Rivais', 'Parceiros de trabalho', 'Inimigos'],
    be: {
      what: ['morta', 'executada', 'banida', 'torturada', 'aprisionada', 'caçada'],
      by: ['@1', '@2', '@3', '@P', 'o Clã', 'o Governo'],
      because: [['se aproximou demais', 'de'], ['abandonou', ''], ['foi enganada', 'por'], ['expôs', ''], ['traiu', ''], ['desafiou', '']],
      target: ['@1', '@2', '@3', '@P', 'os Sobrenaturais', 'as Regras']
    },
    prot: {
      pers: ['Curiosa e corajosa', 'Determinada e resoluta', 'Reservada e tímida', 'Amorosa e leal', 'Sarcástica e espirituosa', 'Ousada e briguenta'],
      hobby: ['Artes marciais', 'Bruxaria', 'Podcast', 'Ciência', 'Fotografia', 'Leitura'],
      feelVil: ['Amor', 'Admiração / Respeito', 'Preocupação / Ansiedade', 'Conflito interno', 'Ressentimento', 'Proteção'],
      feelLI: ['Admiração', 'Curiosidade / Empolgação', 'Irritação', 'Platônico', 'Medo / Ceticismo', 'Culpa']
    },
    scen: [
      'Chantageiam você com algo que a Vilã fez antes de você assumir o corpo.',
      'Cobram o andamento de um serviço para o qual a Vilã foi contratada.',
      'Uma amiga de {P} compra uma briga feia com você.',
      'Um pretendente precisa do seu sangue.',
      'Você se mete em um conflito entre grupos rivais.',
      'Um humano comum descobre a identidade de um pretendente.',
      'Um pretendente explode com você por algo que a Vilã fez.',
      'Você é obrigada a fazer um serviço em dupla com um pretendente.',
      'Você se infiltra disfarçada em uma missão.',
      'Dizem que dois clãs sobrenaturais preparam uma guerra total.',
      'Família e amigos da Vilã desconfiam: você não age como ela.',
      'Você é acusada de um crime atroz contra a sua própria espécie.',
      'Alguém — ou algo — anda invadindo o seu quarto sem você perceber.',
      'Alguém te usa para prejudicar {P}.',
      'Você presencia o romance entre {P} e um pretendente florescer.',
      '{P} te conta que gosta de um dos pretendentes.',
      '{P} ou um pretendente é transformado em outro ser sobrenatural.',
      'Um pretendente aparece à sua porta, sangrando, e pede abrigo por uma noite.',
      'Você sai ferida de um encontro sobrenatural.',
      'Você e um pretendente precisam dividir a mesma cama.'
    ],
    extra: [
      'Por sua causa, a relação entre dois pretendentes se inverteu.',
      'Um pretendente tenta usar o poder dele em você.',
      'Um pretendente tenta te matar.',
      'Em perigo, um pretendente escolhe {P} em vez de você.',
      'Você e um pretendente discutem feio por causa de {P}.',
      'Pelo roteiro, {P} será atacada — e um pretendente a salvaria.',
      'Mais um corpo aparece: um assassino em série caça a sua espécie.',
      'O antigo mestre da Vilã tenta te coagir e manipular.',
      'Um pretendente te acusa de imitar {P}.',
      'Alguém diz ter sido atacado por uma pessoa idêntica a você.',
      'Um pretendente flagra você em um momento aparentemente íntimo com outro.',
      'Você e um pretendente ficam presos um ao outro, a centímetros de distância.',
      'O roteiro exige que você traia um pretendente para a trama avançar.',
      '{P} é sequestrada, e tudo indica que foi você.',
      'Você ou outro personagem perde poderes sobrenaturais importantes.',
      'Quem impõe as leis do mundo sobrenatural está atrás de você.',
      'Seu bando, clã ou organização te rejeita.',
      'Você é promovida, e um pretendente não gosta nada disso.',
      'Um ataque que no roteiro era para {P} acerta você.',
      'Você assume a parte de {P} na trama e entra em uma missão secreta e perigosa.'
    ],
    twists: {
      2: 'O Sistema passa a te dar missões.',
      3: 'Uma nova Vilã é revelada e vira a sua maior rival amorosa.',
      7: C.tw.killedLI, 8: C.tw.killedP, 18: C.tw.murderer,
      19: 'Um amigo da sua vida original começa a te contatar através do jogo.',
      20: 'Você volta à vida original por um breve instante.'
    },
    dates: {
      1: { meet: M.m1, loc: ['O bosque', 'Uma igreja ou templo', 'Uma balada', 'Um café', 'Um beco escuro', 'O seu local de trabalho'],
        secret: ['Fica sem jeito com contato físico', 'Tem uma dieta estranha', 'Se perde com gírias e tecnologia modernas', 'Tem uma crença que destoa da imagem', 'Tem um tique quando mente', 'Rejeita as regras e a cultura da própria espécie'] },
      3: { meet: M.m3, loc: ['O submundo', 'Uma igreja ou templo', 'Uma balada', 'Um restaurante', 'Uma fábrica antiga', 'O seu local de trabalho'],
        secret: ['É bem mais novo do que você pensava', 'Precisa seguir um conjunto de regras', 'Não consegue cumprir o dever da sua espécie', ['São gêmeos fingindo ser um só (novo pretendente com 3♥)', 'newLI3'], 'Tem um lado sombrio assustador', 'Tem um filho secreto'] },
      6: { meet: M.m6, loc: ['O submundo', 'Um parque de diversões', 'Um veículo', 'Um hotel', 'Uma festa', 'O seu local de trabalho'],
        secret: ['Mente sobre a verdadeira identidade', 'Não tem lembranças da própria origem', 'Quebrou uma regra importante da espécie', 'Fez um pacto com uma força sombria por você', 'Está morrendo', 'Quer te transformar'] },
      10: { meet: M.m10, loc: ['Um baile', 'O teatro', 'Um festival', 'Um restaurante elegante', 'A sua casa', 'A casa de {LI}'],
        secret: [X.game, X.reinc, 'Está ligado a você pela vida toda', 'Quer que você dê fim a ele', 'Transformou-se por você', 'Destruiu a própria família ou clã por você'] },
      '-3': { meet: M.neg, loc: ['A sede', 'A mata fechada', 'A catacumba', 'O laboratório', 'A casa de {LI}', 'O covil de {LI}'],
        secret: [X.loved, 'Você já foi alguém importante para {LI}', 'Conhece uma fraqueza da Vilã que você ignora', 'Está prestes a fazer experimentos em você', X.knows, X.dev] },
      15: { meet: M.m15, loc: ['Uma galeria de arte ou museu', 'O terraço', 'Um jardim botânico', 'Um banquete em sua homenagem', 'A sua casa', 'A casa de {LI}'],
        secret: ['Teme estar destinado a te causar dor', 'Acha que o próprio amor é um fardo para você', 'Lançou um feitiço para unir vocês em todas as vidas', 'Faria qualquer coisa para provar que te ama', X.save, X.pain] }
    },
    dateEv: {
      act: ['Proteger', 'Atacar', 'Rejeitar', 'Desafiar', 'Esquecer', 'Compartilhar'],
      theme: ['Sonho', 'Confissão', 'Amor', 'Ódio', 'Memória', 'Segredo'],
      enc1: ['Fãs ou seguidores', 'Um executor das regras', '{P}', 'Outro pretendente', 'Caçadores', 'Cultistas'],
      enc2: ['Criatura ou monstro', 'Crianças', 'Seres sobrenaturais', 'Outro pretendente', 'Uma bruxa', 'Ninguém']
    },
    scenOpt: { act: ['Proteger', 'Atacar', 'Preservar', 'Desafiar', 'Aceitar', 'Seguir'], theme: ['Fé', 'Linhagem', 'Amor', 'Ódio', 'História', 'Ordem'] },
    character: {
      goal: ['Coletar', 'Tomar', 'Ferir', 'Cumprir', 'Provar', 'Proteger'],
      focus: ['Segredo', 'Poder', 'Amor', 'Família', 'Lealdade', 'Conhecimento'],
      desc: ['Seguro', 'Perigoso', 'Podre', 'Novo', 'Faminto', 'Saciado']
    }
  };
})();
