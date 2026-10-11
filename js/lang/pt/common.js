/* Dados compartilhados entre todos os cenários.
   Os textos são resumos em português, escritos para o app; os enunciados
   completos estão nos PDFs do jogo original (Wym Lawson).
   {P} é trocado pelo nome da Protagonista. */


RV.pt.common = {
  oracle: ['Sim, e…', 'Sim', 'Sim, mas…', 'Não, mas…', 'Não', 'Não, e…'],

  // "Como vocês se encontram" — variações usadas pelas tabelas de Encontro
  meet: {
    m1: ['Vocês se esbarram por acaso', 'Vocês são forçados a ficar juntos', 'Você sabia que {LI} estaria lá', '{LI} te obriga a ir', 'Você obriga {LI} a ir', 'Armaram o encontro para vocês'],
    m3: ['Vocês se esbarram por acaso', '{LI} sabia que você estaria lá', 'Você sabia que {LI} estaria lá', 'Você faz o convite', '{LI} te obriga a ir', 'Armaram o encontro para vocês'],
    m6: ['{LI} te convida', '{LI} sabia que você estaria lá', 'Você sabia que {LI} estaria lá', 'Você faz o convite', '{LI} te obriga a ir', '{LI} te surpreende'],
    m10: ['{LI} te convida', '{LI} te obriga a ir', '{LI} te surpreende', '{LI} te conduz até lá', 'Você é sequestrada', 'Você faz o convite'],
    neg: ['{LI} te confronta', '{LI} te prende numa armadilha', '{LI} te agarra', '{LI} te persegue', 'Você é levada até {LI}', 'Você pisa no território de {LI}'],
    neg2: ['{LI} te confronta', '{LI} te encurrala', '{LI} te agarra', '{LI} te persegue', 'Você é levada até {LI}', 'Você é atraída até {LI}'],
    m15: ['Vocês combinaram', 'Você conduz {LI} até lá', '{LI} te convida', '{LI} te surpreende', 'Alguém a mando de {LI} te busca', 'Você faz o convite']
  },

  // Segredos que se repetem em todos os cenários
  sec: {
    game: 'Sabe que é personagem de um jogo',
    reinc: 'Também reencarnou neste jogo',
    loved: 'Já amou você',
    knows: 'Sabe que você não é a Vilã de verdade',
    dev: 'É quem desenvolveu o otome game',
    save: 'Reencarnou para tentar te salvar dos Finais Ruins',
    pain: 'Lembra da dor que te causou em todos os Finais Ruins'
  },

  // Reviravoltas (d20). null = definido por cenário. [texto, efeito] liga um atalho no app.
  twists: [
    'Um pretendente perde a memória; comportamento e relações mudam.',
    null,
    null,
    ['Surge um novo Final Ruim: contador 1d6, no dia 2d6 + dia atual.', 'newBE'],
    ['Todos os Finais Ruins se deslocam 1 dia.', 'shiftBE'],
    'Um personagem importante desaparece.',
    null,
    null,
    ['{P} vira mais uma pretendente.', 'newLIP'],
    ['Um personagem secundário vira pretendente.', 'newLI'],
    ['Alguém de outro otome game aparece e vira possível pretendente.', 'newLI'],
    'Uma pessoa da sua vida original aparece no jogo.',
    'Um pretendente percebe que existe um medidor de Corações.',
    '{P} descobre que é a Protagonista de um otome game.',
    'Você encontra pistas sinistras que explicam o comportamento da Vilã no jogo.',
    'A Vilã desperta e passa a dividir o corpo com você.',
    'Você descobre por que reencarnou como a Vilã.',
    null,
    null,
    null
  ],
  tw: {
    killedLI: ['Um pretendente é morto.', 'liOut'],
    killedP: ['{P} é morta.', 'penOut'],
    murderer: 'Você descobre que um pretendente matou a Vilã antes de você assumir o corpo.',
    notFirst: 'Você não foi a primeira: outra pessoa reencarnada já vivia como a Vilã antes de você.'
  },

  // Tabela de Viagem no Tempo (d20)
  travel: [
    'Fios negros te estrangulam: +1 fio a cada viagem. Com quatro fios, é a sua última viagem.',
    'A cada viagem, uma pessoa é apagada do mundo para sempre.',
    'Os rostos das pessoas ficam mais borrados a cada viagem.',
    'Você precisa cumprir uma tarefa específica, ou será destruída.',
    'Um ser superior passa a te caçar.',
    'Viajar no tempo deteriora o seu corpo.',
    'Você começa a esquecer a sua vida original.',
    'A linha do tempo se divide: existem duas de você ao mesmo tempo.',
    'Tudo parece seguir a linha anterior — menos os pequenos detalhes.',
    'Perto de um pretendente específico, você sente uma dor lancinante.',
    'O destino afasta um pretendente de você.',
    '{P} mantém as memórias.',
    'A personalidade de {P} se inverte, como se outro jogador a controlasse.',
    'As habilidades de {P} atingem de repente um nível extraordinário.',
    '{P} está sendo controlada por "você".',
    'Um personagem inédito aparece e se aproxima de {P}.',
    'Alguém que não é pretendente nem {P} dá sinais de viajar no tempo.',
    'Um pretendente é substituído por outro, novo.',
    'O pretendente secreto do otome game aparece (+1 pretendente).',
    'Um pretendente da continuação do jogo aparece (+1 pretendente).'
  ],

  // Recompensa permanente dos 10 Corações (d6)
  perks: [
    'Ganhe um Papel extra (fora da lista inicial), ligado a esse pretendente.',
    'Aumente em 1 o seu atributo mais baixo (máximo 5).',
    'Escolha mais um número que conta como sucesso crítico.',
    'A falha crítica sai do jogo: um 6 passa a ser falha comum (a Reviravolta fica opcional).',
    'Role sempre um dado a mais e fique com o melhor.',
    'Todo sucesso reduz 1 ponto extra de contador de Final Ruim.'
  ],
  rewards: {
    1: 'Ajuda: uma vez, role um dado a mais e fique com o melhor.',
    3: 'Resgate: uma vez, transforme um resultado em sucesso.',
    6: 'Tudo por você: uma vez, transforme um resultado em sucesso crítico.',
    10: 'Recompensa permanente (role 1d6).',
    '-3': 'O ódio transcende o jogo: role uma Reviravolta.',
    15: 'Amor além da vida: esse pretendente sai do jogo e você remove um Final Ruim.'
  },
  heartLabel: {
    '-3': 'Animosidade letal', '-1': 'Ódio, nojo, aversão', 1: 'Indiferença, neutralidade',
    3: 'Respeito, simpatia, cortesia', 6: 'Admiração, carinho, afeto', 10: 'Amor, paixão', 15: 'Devoção inabalável'
  },
  guide: 'Quem está envolvido? O que acontece? Como você reage — e como {P} e os pretendentes respondem?'
};
