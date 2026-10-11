(() => {
  const C = RV.pt.common, M = C.meet, X = C.sec;
  const coincid = 'Uma série de coincidências junta vocês';
  RV.pt.settings.school = {
    id: 'school', name: 'Escola', pdf: 'Reincarnated as the Unlovable Villainess_School.pdf',
    blurb: 'Grêmio, clubes e corredores.', doom: 'excluída ou expulsa',
    names: ['Haruto', 'Ren', 'Sora', 'Kaito', 'Yuki', 'Daichi', 'Akira', 'Hikaru', 'Mio', 'Riku'],
    backgrounds: ['Bolsista', 'Aluna transferida', 'Herdeira', 'Filha da direção', 'Estrela mirim', 'Prodígio'],
    roles: ['Membro do grêmio', 'Líder de fã-clube', 'Gerente do clube esportivo', 'Monitora', 'Delinquente', 'Abelha-rainha'],
    relations: ['Irmãs', 'Trocadas na maternidade', 'Amizade de mão única', 'Vizinhas', 'Veterana e caloura', 'Rivais'],
    li: [
      ['É', ['Presidente ou membro do grêmio', 'Astro do esporte ou da música', 'Delinquente', 'Príncipe ou princesa da escola', 'Aluno de honra', 'Monitor(-chefe)']],
      ['Vem de', ['uma família comum', 'uma família rica', 'uma família de acadêmicos', 'uma família ou clã famoso', 'uma família poderosa', 'um lar desfeito']],
      ['Com', ['uma falha na sobrancelha', 'óculos', 'tatuagens', 'mechas no cabelo', 'caninos afiados', 'faixa de cabelo']],
      ['Jeito', ['Tsundere', 'Frio / Severo', 'Tímido / Acanhado', 'Gentil / Bondoso', 'Arrogante / Extravagante', 'Esquentado / Passional']],
      ['Fama', ['Respeitado', 'Amado', 'De confiança', 'Temido', 'Odiado', 'Invejado']],
      ['Com a Vilã', ['Amor não correspondido', 'Ex-amigos', 'Colegas de time ou clube', 'Rivalidade', 'Vizinhos', 'Amigos de família']],
      ['Com {P}', ['Amor à primeira vista', 'De inimigos a amantes', 'Amizade de infância', 'Namoro de fachada', 'Primeiro amor', 'Romance virtual secreto']]
    ],
    relLI: ['Irmãos', 'Primos', 'Amigos', 'Rivais', 'Colegas de time', 'Vivem batendo de frente'],
    be: {
      what: ['deserdada', 'expulsa', 'excluída por todos', 'humilhada', 'posta na lista negra', 'levada à falência'],
      because: [['se aproximou demais', 'de'], ['abandonou', ''], ['traiu', ''], ['sabotou', ''], ['julgou mal', ''], ['foi pega', 'por']],
      target: ['@1', '@2', '@3', '@P', 'a Escola', 'a Panelinha']
    },
    prot: {
      pers: ['Tímida e gentil', 'Descolada e intimidadora', 'Corajosa e ousada', 'Elegante e graciosa', 'Teimosa e impulsiva', 'Radiante e animada'],
      hobby: ['Artes visuais', 'Música', 'Esportes', 'Adivinhação', 'Cochilar', 'Observar pessoas'],
      feelVil: ['Amor', 'Admiração / Respeito', 'Preocupação / Ansiedade', 'Compaixão', 'Ciúme', 'Proteção'],
      feelLI: ['Admiração', 'Curiosidade', 'Encabulada', 'Platônico', 'Confusão', 'Confiança']
    },
    scen: [
      'Algo que a Vilã fez antes de você chegar volta para te assombrar.',
      'Você é obrigada a participar de uma competição em que a Vilã se inscreveu.',
      'As suas amigas e as de {P} têm uma briga enorme.',
      'Você e um pretendente ficam de castigo juntos depois da aula.',
      'Dia de portas abertas: cada turma ou clube monta uma barraca.',
      'Você é acusada de perder ou roubar o dinheiro da excursão.',
      'Um boato falso sobre você e um pretendente corre pela escola.',
      'Você tromba com um pretendente e vocês se beijam sem querer — o primeiro beijo dele.',
      'Seus pais são chamados à escola.',
      'Um pretendente compete em um evento entre escolas.',
      'Família e amigos da Vilã desconfiam: você não age como ela.',
      'Dia de esportes: você e um pretendente estão inscritos na corrida de três pernas.',
      'Numa caça ao tesouro, um pretendente leva você como o "tesouro" da pista dele.',
      'Você é acusada de colar em uma prova importante.',
      'Um aluno te acusa publicamente de bullying.',
      'Um pretendente te ameaça, culpando você pelo último acidente de {P}.',
      'Você passa uma semana em um acampamento de treino com {P}.',
      'Um pretendente está prestes a ser expulso.',
      'Fotos dos pretendentes são vendidas na escola por pequenas fortunas.',
      'Sob a árvore lendária das declarações, você vê {P} com um pretendente.'
    ],
    extra: [
      'Você tropeça na escada, e um pretendente te segura.',
      'Um pretendente mente dizendo que vocês namoram.',
      'As fãs de um pretendente partem para cima de você.',
      'O pretendente em quem você mais confia escolhe {P} como estrela de um evento.',
      'Dois pretendentes discutem feio por sua causa.',
      'Dia dos Namorados: um pretendente vem cobrar a parte dele de chocolate.',
      'Na peça da escola, você acaba substituindo {P} ou o par dela na cena do beijo.',
      'Sem dinheiro, você trabalha num café temático — e um pretendente aparece com os amigos.',
      'Você e um pretendente trocam de celular sem querer.',
      'Teste de coragem à noite, no bosque assombrado.',
      'Você vê um pretendente rejeitar a declaração de um colega.',
      'Você fica trancada no depósito da escola, sem celular.',
      'Pelo roteiro, os pais de um pretendente estão prestes a morrer em um acidente.',
      'Dois pretendentes fingem ser melhores amigos por causa de {P}.',
      'Um pretendente te arrasta para espionar o suposto encontro de outro com {P}.',
      'Você e um pretendente andam na mesma bicicleta.',
      '{P} decide fundar um clube e te convida, junto com os pretendentes.',
      'Um calouro se declara para você, e um pretendente sai antes de ouvir a resposta.',
      'Você acorda com febre na enfermaria: desmaiou, e um pretendente te carregou.',
      'Você briga com um pretendente: tentava ajudar {P}, mas ele acha que era sabotagem.'
    ],
    twists: {
      2: 'Você passa a ver, sobre a cabeça de cada pessoa, quantos estão apaixonados por ela.',
      3: 'Você é uma garota mágica.',
      6: 'Um personagem importante entra em coma.',
      7: ['Um pretendente é transferido de escola misteriosamente.', 'liOut'],
      8: ['{P} é transferida de escola misteriosamente.', 'penOut'],
      18: C.tw.notFirst,
      19: 'Um pretendente passa a ouvir os seus pensamentos sempre que está por perto.',
      20: 'Um pretendente ou {P} esteve o tempo todo se passando por outro gênero.'
    },
    dates: {
      1: { meet: [M.m1[0], M.m1[1], M.m1[2], M.m1[3], M.m1[4], coincid], loc: ['O terraço da escola', 'A biblioteca', 'O ginásio ou a quadra', 'O jardim', 'Uma sala de aula', 'O corredor'],
        secret: ['Fica sem graça com elogios', 'Não sabe fazer algo básico', 'Fala com bichos, plantas ou objetos com voz de bebê', 'É fã de algo que destoa da imagem', 'Suou por tudo aquilo que admiram nele', 'Chora com facilidade'] },
      3: { meet: [M.m3[0], M.m3[1], M.m3[2], M.m3[3], M.m3[4], coincid], loc: ['O terraço da escola', 'O fliperama', 'O boliche', 'O karaokê', 'Uma sala de aula', 'O shopping'],
        secret: ['Vive de fachada para esconder quem é', 'Sofre de síndrome do impostor', 'Abriu mão de algo importante', ['Tem um irmão secreto (novo pretendente com 3♥)', 'newLI3'], 'É responsável por um acidente grave', 'Não gosta do próprio papel ou origem'] },
      6: { meet: [M.m6[0], M.m6[1], M.m6[2], M.m6[3], '{LI} te faz ir', M.m6[5]], loc: ['O terraço da escola', 'A pista de patinação no gelo', 'A praia', 'O mercado de pulgas', 'A casa de shows', 'Um café'],
        secret: ['Mente sobre a família ou o passado', 'Guarda o motivo de alguém ter sido expulso, demitido ou transferido', 'A família passa por aperto financeiro', 'Está a ponto de desistir do sonho', 'Terá de ir embora depois da formatura', 'Está proibido de namorar'] },
      10: { meet: ['{LI} te convida', '{LI} te faz ir', '{LI} te surpreende', '{LI} te conduz até lá', 'Vocês simplesmente sabem', 'Você faz o convite'],
        loc: ['Sob a cerejeira', 'A capela da escola', 'O farol', 'O moinho da escola', 'A sua casa', 'A casa de {LI}'],
        secret: [X.game, X.reinc, 'Anda manipulando os eventos do jogo', 'Largou um mau hábito por sua causa', 'Conheceu a felicidade de verdade graças a você', 'A família quer ver vocês juntos'] },
      '-3': { meet: M.neg2, loc: ['O porão', 'O bosque', 'A ala abandonada', 'O laboratório', 'A cabana', 'A casa de {LI}'],
        secret: [X.loved, 'A Vilã perdeu lembranças antigas que tinha com {LI}', 'Só sente emoções fortes perto de você', 'Acha que o único jeito de te parar é te prender para sempre', X.knows, X.dev] },
      15: { meet: M.m15, loc: ['O parque de diversões', 'O jardim botânico', 'Sob os fogos de artifício', 'Um resort de águas termais', 'A sua casa', 'A casa de {LI}'],
        secret: ['Quer te pedir em casamento depois da formatura', 'Contrariou os próprios planos por você', 'Se emociona sempre que pensa em você', 'Torce para você saber o quanto é amada', X.save, X.pain] }
    },
    dateEv: {
      act: ['Proteger', 'Atacar', 'Aproximar', 'Prometer', 'Consolar', 'Aproveitar'],
      theme: ['Escola', 'Sonhos', 'Amor', 'Ódio', 'Boato', 'Segredos'],
      enc1: ['Colega(s) de turma', 'Bêbados', '{P}', 'Outro pretendente', 'Assaltante', 'Vendedor'],
      enc2: ['Professor', 'Alguém paquerador', 'Aluno de escola rival', 'Outro pretendente', 'Um bichinho', 'Ninguém']
    },
    scenOpt: { act: ['Proteger', 'Atacar', 'Resistir', 'Desafiar', 'Aprender', 'Confrontar'], theme: ['Amizade', 'Riqueza', 'Amor', 'Ódio', 'Orgulho', 'Conhecimento'] },
    character: {
      goal: ['Alcançar', 'Vencer', 'Provar', 'Escapar', 'Pertencer', 'Esquecer'],
      focus: ['Liberdade', 'Amor', 'Status', 'Popularidade', 'Sucesso', 'Conhecimento'],
      desc: ['Ambicioso', 'Satisfeito', 'Leal', 'Astuto', 'Pragmático', 'Romântico']
    },
    schoolOpt: {
      rep: ['Prestigiada / De elite', 'Competitiva / Impiedosa', 'Novinha em folha', 'Perigosa / Temida', 'Famosa / Glamourosa', 'Antiga / Decadente'],
      trait: ['Internato', 'Para ricos e famosos', 'Pequena e acolhedora', 'Escola particular', 'Virou mista há pouco', 'Hierarquia social rígida'],
      look: ['Moderna', 'Tradicional', 'Gótica', 'Vitoriana', 'Lúdica', 'Urbana']
    }
  };
})();
