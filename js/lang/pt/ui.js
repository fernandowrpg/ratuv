/* Textos da interface — português. As chaves precisam existir também em lang/en/ui.js. */
(() => {
  // Junta preposição + alvo fazendo a contração ("de" + "a Coroa" = "da Coroa")
  const join = (prep, obj) => {
    if (!prep) return obj;
    const m = /^(o|a|os|as) (.+)$/.exec(obj);
    const map = { de: { o: 'do', a: 'da', os: 'dos', as: 'das' }, por: { o: 'pelo', a: 'pela', os: 'pelos', as: 'pelas' } };
    return m && map[prep] ? map[prep][m[1]] + ' ' + m[2] : prep + ' ' + obj;
  };
  const pl = (n, a, b) => n === 1 ? a : b;

  RV.pt.ui = {
    htmlLang: 'pt-BR', appName: 'Vilã Detestável', language: 'Idioma',
    rank: ['Falha crítica', 'Falha', 'Sucesso', 'Sucesso crítico'],
    liN: n => `Pretendente ${n}`, liWord: 'Pretendente', vilFallback: 'A Vilã',
    dayOf: n => `Dia ${n}`, dayLower: n => `dia ${n}`, epilogue: 'Epílogo', epilogueLower: 'epílogo', prologue: 'Prólogo',
    timeline: n => `Linha do tempo ${n}`,
    be: (e, what, by, bc, tg) => `Você é <b>${e(what)}</b>${by ? ' ' + e(join('por', by)) : ''} porque ${e(bc[0])} ${e(join(bc[1], tg))}.`,
    pFeels: p => `${p} sente`,
    heartLine: (dl, name, now, hit) => `${dl > 0 ? '+' : '−'}${Math.abs(dl)} ♥ para ${name} (agora ${now})${hit.length ? ` — encontro de ${hit.join(' e ')} ♥ no próximo dia` : ''}.`,
    counterLog: (day, up, v) => `Contador do Final Ruim do dia ${day} ${up ? 'sobe' : 'desce'} para ${v}.`,
    counterIs: n => `contador ${n}`,
    counterWas: n => `O contador ainda estava em ${n}.`,
    none: { 'be-': 'Nenhum contador para reduzir.', 'be+': 'Nenhum Final Ruim em aberto para piorar.', 'h+': 'Ninguém disponível para ganhar ♥.', 'h-': 'Ninguém disponível para perder ♥.', either: 'Sem alvo para a falha.' },
    skipped: 'Efeito dispensado.',
    conv: (name, kind) => `${name} ${kind === 'crit' ? 'usa tudo o que tem por você: sucesso crítico' : 'vem em seu resgate: sucesso'}.`,

    /* tela inicial */
    homeKicker: 'Diário de jogo solo · app de fã, não oficial',
    lede: 'Você acordou dentro do otome game que adora — no corpo da vilã, condenada em todas as rotas. Sobreviva a 30 dias, desarme os Finais Ruins e, quem sabe, conquiste um coração.',
    continueBtn: (name, where) => `Continuar — ${name}, ${where}`,
    newGame: 'Nova partida', importSave: 'Importar partida salva', installApp: 'Instalar como app', install: 'Instalar', homeTitle: 'Tela inicial',
    credit: 'Jogo original de <b>Wym Lawson</b>. O app rola os dados, cuida dos contadores e guarda o seu diário neste aparelho. Os textos das tabelas aparecem resumidos: tenha o PDF do cenário por perto para ler os enunciados completos.',
    credit2: 'Jogo original: <b>Reincarnated as the Unlovable Villainess</b>, de Wym Lawson. App de fã, não oficial, para uso pessoal junto com o PDF.',
    confirmNew: 'Começar uma nova partida apaga a partida atual. Exporte o diário antes se quiser guardá-lo.', confirmNewYes: 'Apagar e começar',
    sure: 'Tem certeza?', oops: 'Não deu certo', cancel: 'Cancelar', back: 'Voltar', next: 'Continuar', add: 'Adicionar', gotIt: 'Entendi',
    badFile: 'Não consegui ler esse arquivo. Ele precisa ser uma partida exportada por este app.',

    /* criação */
    steps: ['Cenário', 'A Vilã', 'Elenco', 'Finais Ruins'], start: 'Começar o dia 1',
    whichGame: 'Em que jogo você reencarnou?', doom: s => `Destino previsto: ${s}.`,
    optRules: 'Regras opcionais', optRulesHint: 'Dá para mudar depois, na aba Extras.',
    extT: 'Corações estendidos', extS: 'O medidor vai de −3 a 15, com dois encontros a mais.',
    travelT: 'Viagem no tempo', travelS: 'Depois de um Final Ruim, volte a um dia anterior — com um preço.',
    scenTable: 'Tabela de cenários', scenOpts: { base: 'Principal', extra: 'Extras', both: 'Misturar as duas' },
    theVil: 'A Vilã', name: 'Nome', namePh: 'Como a Vilã se chama?', looks: 'Aparência', looksPh: 'Uma descrição física geral',
    background: 'Histórico', role: 'Papel', relWith: p => `Com ${p}`, rollOne: '⚄ sortear',
    loreLove: 'Lore e Love',
    loreLoveHint: 'Os dois somam 6. Lore é o que você sabe do mundo e do jogo; Love é paixão, charme e corte. Rolar <b>abaixo</b> do atributo é sucesso, <b>igual</b> é crítico.',
    protTitle: 'A Protagonista', personality: 'Personalidade', hobby: 'Hobby', feelsVil: 'Sente pela Vilã',
    reroll: '⚄ Rolar de novo', rerollAll: '⚄ Rolar todos de novo',
    lisTitle: 'Pretendentes', lisHint: 'Os três começam disputando a Protagonista — e com −1 ♥ por você.',
    besTitle: 'Seus Finais Ruins', besHint: 'Como fã do jogo, você conhece os seis de antemão. Se o dia chegar e o contador não estiver em 0, a partida acaba.',

    /* partida */
    tabs: { hoje: 'Hoje', elenco: 'Elenco', finais: 'Finais', diario: 'Diário', extras: 'Extras' },
    offstage: 'fora de cena', outOfGame: 'fora do jogo',
    tok: { die: 'Ajuda', succ: 'Resgate', crit: 'Tudo por você' },
    dateSoon: t => `encontro de ${t.join(' e ')} ♥`,
    noOpenBE: 'Nenhum Final Ruim em aberto.',

    twist: 'Reviravolta', fxNewBE: '⚄ Criar o novo Final Ruim', fxShiftHint: 'O deslocamento fica a seu critério:',
    allEarlier: 'Antecipar todos em 1 dia', allLater: 'Adiar todos em 1 dia',
    fxWhoOut: 'Quem sai de cena?', fxPenOut: p => `Tirar ${p} de cena`, addLI: 'Adicionar pretendente', openBEs: 'Abrir os Finais Ruins',
    nNewBE: (day, c, text) => `Novo Final Ruim no dia ${day}, contador ${c}: ${text}`,
    nShift: n => `Todos os Finais Ruins em aberto foram ${n < 0 ? 'antecipados' : 'adiados'} em 1 dia.`,
    nOut: name => `${name} saiu de cena. Na aba Finais você pode riscar ou alterar os Finais Ruins ligados a essa pessoa.`,

    dateKicker: 'Encontro · acontece antes de tudo', nToday: n => `${n} hoje`,
    dateTitle: (name, th) => `${name} chegou a ${th} ♥`,
    dateHint: 'Cada encontro acontece uma única vez e revela um segredo.',
    rollDate: '⚄ Rolar o encontro', how: 'Como', where: 'Onde', secret: 'Segredo',
    secretAdds: 'Esse segredo traz mais alguém para o jogo.', addLI3: 'Adicionar pretendente com 3 ♥',
    youMeet: 'aparece:', dateEvBtn: '⚄ Evento do encontro (opcional)',
    writeDate: 'Escreva o encontro', writeDatePh: 'O que acontece? Como o segredo vem à tona?',
    usedT: 'Meu papel ou histórico apareceu no encontro', usedS: '— soma +1',
    dateOutBtn: '⚄ Como foi o encontro?',
    dateRes: ['Não foi bem', 'Foi razoável', 'Uma delícia de encontro'],
    dateResText: (i, name) => [`${name} repensa essa relação.`, 'Nada de especial, nada de errado.', `Você vai aparecer nos sonhos de ${name} esta noite.`][i],
    reward: 'Recompensa', kept: 'Fica guardada até você usar.', keptRewards: 'Recompensas guardadas',
    newRolePh: 'Nome do novo Papel', noteIt: 'Anotar',
    attrTie: 'Lore e Love estão empatados. Qual sobe?', whichCrit: 'Qual número vira crítico também?', whichBE: 'Escolha o Final Ruim que deixa de existir:',
    attrMax: 'Seus atributos já estão no máximo.', attrUp: (a, v) => `${a} subiu para ${v}.`,
    newRole: r => `Novo Papel: ${r}.`, critNum: n => `O número ${n} agora também é sucesso crítico.`,
    beRemoved: t => `Final Ruim removido: ${t}`, noBEToRemove: 'Não há Final Ruim em aberto para remover.',
    leavesGame: name => `${name} sai do jogo ao fim deste encontro.`, finishDate: 'Concluir o encontro',

    beKicker: 'Final Ruim · antes da cena do dia', beTitle: n => pl(n, 'O dia marcado chegou', 'Os dias marcados chegaram'),
    beSafe: 'Contador em 0: você escapa.', beDoom: 'Contador acima de 0: não há como escapar.',
    beHint: 'Se um personagem envolvido saiu de cena, você pode riscar ou alterar o Final Ruim na aba Finais antes de continuar.',
    faceBE: 'Encarar o destino',

    sceneQ: 'O que o jogo reserva hoje?',
    sceneRollHint: { base: 'Role 1d20 na tabela de cenários.', extra: 'Role 1d20 na tabela de cenários extras.', both: 'Role 1d20: a tabela (principal ou extra) também é sorteada.' },
    rollScene: '⚄ Rolar a cena do dia', scenario: 'Cenário', extraTable: 'tabela extra',
    fullText: (n, sec) => `Enunciado completo: nº ${n} em “${sec}” do PDF.`,
    repeat: pos => `<b>Cena repetida:</b> a história anterior dá uma virada ${pos ? 'positiva' : 'negativa'}.`,
    noNotes: 'sem anotações', inspBtn: '⚄ Inspiração: ação + tema (opcional)',
    howResolve: 'Como você resolve?', loreSub: 'o que você sabe do jogo', loveSub: 'paixão, charme, corte',
    relT: 'Minha saída usa meu papel ou histórico', relS: '— +1 dado',
    helpT: name => `Ajuda de ${name}`, helpS: 'uso único — +1 dado',
    odds: (a, crits, noCF) => `Abaixo de ${a}: sucesso · igual a ${a}${crits.length ? ' ou ' + crits.join(', ') : ''}: crítico · acima: falha${noCF ? '' : ' · 6: falha crítica'}.`,
    chooseAttr: 'Escolha Lore ou Love.',
    rollN: n => `⚄ Rolar ${n}d6${n > 1 ? ' e ficar com o melhor' : ''}`,
    tokenUse: (kind, name) => `<b>${kind === 'crit' ? 'Tudo por você' : 'Resgate'} de ${name}</b> · vira ${kind === 'crit' ? 'sucesso crítico' : 'sucesso'} (uso único)`,
    effect: (rank, x) => 'Efeito: ' + ['um contador sobe 1, alguém perde 1 ♥ e vem uma Reviravolta', 'um contador sobe 1 ou alguém perde 1 ♥', `contador −${1 + x} e +1 ♥`, `contador −${2 + x} e +2 ♥`][rank] + '.',
    applyBtn: 'Aplicar o resultado', optTwist: '⚄ Rolar uma Reviravolta mesmo assim (opcional)',
    writeScene: 'Escreva a cena',
    writePh: ['Como o que você fez adiou o seu fim — ou tocou o coração de alguém?', 'Como o plano falhou, e como isso te deixou um passo mais perto do fim?'],
    endDay: 'Encerrar o dia', endLastDay: 'Encerrar o último dia',
    q: { 'be-': 'Qual contador de Final Ruim desce 1?', 'be+': 'Qual contador de Final Ruim sobe 1?', 'h+': 'Quem ganha +1 ♥?', 'h-': 'Quem perde 1 ♥?', either: 'Falha: escolha o preço — um contador sobe 1, ou alguém perde 1 ♥.' },
    waive: 'Abrir mão deste efeito',

    overKicker: day => `Final Ruim · dia ${day}`, overTitle: 'Você teve o mesmo fim da Vilã.',
    lastWords: 'Últimas palavras', lastWordsPh: 'Como acontece?',
    travelBack: 'Voltar no tempo', enableTravel: 'Ativar a regra de Viagem no tempo', exportDiary: 'Exportar o diário',

    epTitle: 'Você sobreviveu aos 30 dias.',
    epSum: (lo, lv, sum) => `Todos os Finais Ruins ficaram para trás. Lore ${lo} + Love ${lv} = ${sum}.`,
    eOne: n => `<b>Confissão.</b> ${n} chegou a 10 ♥: encerre com uma cena de confissão — ou recuse.`,
    eMany: n => `<b>Confissão, harém reverso ou poliamor.</b> ${n} chegaram a 10 ♥: escolha alguém, ou fique com todos e descreva a dinâmica entre vocês.`,
    eNone: '<b>Sem par romântico.</b> Ninguém chegou a 10 ♥. Termine com companheiros platônicos ou rivais, conforme os Corações de cada um.',
    eHome: '<b>Voltar para casa.</b> Lore + Love passa de 6: você pode abrir mão de tudo e voltar ao seu mundo, no seu corpo.',
    eBring: '<b>Levar alguém junto.</b> Lore + Love passa de 7: um pretendente com 10 ♥ pode atravessar com você.',
    eGod: '<b>Invencível.</b> Lore + Love passa de 10: nada neste mundo te ameaça. Você está a um passo de virar uma deusa aqui.',
    writeEnding: 'Escreva o seu final',

    /* elenco */
    pCrit: n => `Crítico também em ${n}`, pNoCF: 'Sem falha crítica', pDie: n => `+${n} dado em toda rolagem`, pBE: n => `−${n} contador extra por sucesso`,
    permanents: 'Permanentes', notes: 'Anotações', bringBack: 'Trazer de volta à cena', takeOut: 'Tirar de cena',
    liTravels: 'viaja no tempo com você', secrets: 'Segredos', backToGame: 'Devolver ao jogo', removeFromGame: 'Remover do jogo',

    /* finais ruins */
    beTabTitle: 'Finais Ruins', beTabHint: 'No dia marcado, antes da cena, o contador precisa estar em 0. Sucessos descem contadores; falhas sobem.',
    st: { open: '', avoided: 'evitado', struck: 'riscado', hit: 'aconteceu' },
    testRes: (a, b) => `Teste 2d6: ${a} e ${b} — ${a === b ? 'iguais, riscado' : 'diferentes, continua'}`,
    manual: 'Ajustes manuais', cMinus: 'contador −', cPlus: 'contador +', dMinus: 'dia −', dPlus: 'dia +',
    rerollOne: '⚄ rolar de novo', test2d6: '⚄ teste 2d6', strike: 'riscar', reopen: 'reabrir',
    beRule: 'Se alguém envolvido num Final Ruim morrer antes dele, você pode riscá-lo, trocar o personagem (rolar de novo) ou testar 2d6: dados iguais riscam.',
    newBE: '⚄ Novo Final Ruim',

    /* diário */
    diaryOf: name => `Diário de ${name}`, diaryHint: 'Tudo fica salvo neste aparelho. Você pode editar qualquer entrada.',
    exportMd: 'Exportar em Markdown', print: 'Imprimir / PDF', yourNotes: 'Suas anotações', mdFile: 'diario',
    jIntroTitle: name => `${name} desperta no otome game`,
    jIntro1: (s, bg, role, lo, lv) => `Cenário: ${s}. Histórico: ${bg}. Papel: ${role}. Lore ${lo} · Love ${lv}.`,
    jIntro2: (p, rel) => `Com ${p}: ${rel}.`,
    jBE: (day, c, t) => `Dia ${day} (contador ${c}): ${t}`,
    jDateTitle: (th, name) => `Encontro de ${th} ♥ com ${name}`,
    jDate1: (how, where) => `Como: ${how}. Onde: ${where}.`, jDate2: s => `Segredo: ${s}.`,
    jDate3: (dice, i) => `Como foi (${dice}): ${['não foi bem', 'foi razoável', 'foi uma delícia'][i]}.`,
    jReward: t => `Recompensa: ${t}`, jTwist: t => `Reviravolta: ${t}`,
    jAvoided: 'Final Ruim evitado', jHit: 'Final Ruim — fim de jogo',
    jScenTitle: (n, extra) => `Cenário ${n}${extra ? ' (extra)' : ''}`,
    jRepeat: (pos, dv) => `Cena repetida — virada ${pos ? 'positiva' : 'negativa'} (${dv}).`,
    jRoll: (attr, v, dice, rank) => `${attr} ${v} · dados ${dice} → ${rank}.`,
    jTravelTitle: (n, day) => `Viagem no tempo nº ${n}: de volta ao dia ${day}`,
    jTravel1: day => `Você partiu do dia ${day}. Lore, Love e recompensas permanentes vieram junto.`,
    jTravelComp: name => `${name} viajou com você, mantendo Corações e memórias.`, jTravelAlone: 'Ninguém viajou com você.',
    jTravelFx: t => `Efeito colateral: ${t}`,

    /* extras */
    deskTitle: 'Mesa de apoio', deskHint: s => `Tabelas opcionais do cenário ${s}. Nada aqui altera a partida.`, rollBtn: '⚄ Rolar',
    tools: { oracle: 'Oráculo: sim ou não?', scene: 'Cena: ação + tema', date: 'Encontro: ação + tema + quem aparece', char: 'Personagem: objetivo + foco + jeito', relLI: 'Relação entre dois pretendentes', name: 'Sobrenome', school: 'A escola: fama + traço + estética', free: 'Dados avulsos' },
    travelPrice: n => `Preço da viagem no tempo (${n} ${pl(n, 'viagem', 'viagens')})`, rerollEffect: '⚄ Rolar outro efeito',
    rulesTitle: 'Resumo das regras', rulesFoot: pdf => `Resumo para consulta rápida. O texto completo está em “${pdf}”.`,
    rules: [
      ['O dia', 'Cada dia segue a mesma ordem: primeiro os <b>Encontros</b> marcados, depois os <b>Finais Ruins</b> com data para hoje e, por fim, a <b>cena</b> sorteada em 1d20. São 30 dias.'],
      ['Resolver a cena', 'Escolha Lore ou Love e role 1d6 — mais um dado se a sua saída usa o seu Papel ou Histórico; fique com o melhor. <b>Abaixo</b> do atributo: sucesso (um contador −1 e +1 ♥). <b>Igual</b>: crítico (contador −2 e +2 ♥, divididos como quiser). <b>Acima</b>: falha (um contador +1 ou −1 ♥). <b>6</b>: falha crítica (contador +1, −1 ♥ e uma Reviravolta).'],
      ['Cena repetida', 'Se a mesma cena sair de novo, releia a entrada anterior e role 1d6: par, a história dá uma virada positiva; ímpar, negativa.'],
      ['Corações e encontros', 'Todo pretendente começa em −1 ♥. Ao chegar pela primeira vez a 1, 3, 6 e 10 ♥, há um Encontro no dia seguinte, com um segredo. No fim, 1d6 (+1 se o seu Papel ou Histórico apareceu) diz como foi. Cada Encontro só acontece uma vez.'],
      ['Recompensas', '1 ♥: um dado extra, uma vez. 3 ♥: transforma um resultado em sucesso, uma vez. 6 ♥: transforma em sucesso crítico, uma vez. 10 ♥: uma vantagem permanente, sorteada em 1d6.'],
      ['Finais Ruins', 'São seis, com dia e contador (2 a 7, do mais próximo ao mais distante). No dia marcado, só o contador em 0 te salva. Se alguém envolvido morrer antes, o Final Ruim pode ser riscado ou alterado.'],
      ['Epílogo', 'Sobrevivendo ao dia 30, o final depende dos Corações: confissão com quem tem 10 ♥, final com vários, ou companheiros e rivais. Lore + Love acima de 6, 7 e 10 abre saídas especiais.'],
      ['Regras opcionais', '<b>Viagem no tempo:</b> depois de um Final Ruim, volte a qualquer dia já vivido mantendo atributos e vantagens permanentes; 1d6 diz se alguém viaja junto, e a tabela de Viagem cobra um preço. <b>Corações estendidos:</b> medidor de −3 a 15, com um encontro de ódio (Reviravolta) e um de devoção (o pretendente sai do jogo e leva um Final Ruim).']
    ],
    saveTitle: 'Partida e app', exportSave: 'Exportar partida (.json)',
    langHint: 'Trocar o idioma muda a interface e as tabelas na hora. O que já está escrito no diário fica como foi escrito.',
    pwaOn: 'Você está usando o app instalado. Ele funciona sem internet.',
    pwaOff: 'No Chrome ou Edge, abra por http://localhost ou HTTPS e use “Instalar” (ou o ícone na barra de endereço) para ter o jogo como app, com janela própria e funcionando offline.',

    /* modais */
    addLITitle: 'Mais alguém entra no jogo', startHearts: 'Corações iniciais',
    travelText: 'Você volta com as memórias, Lore, Love e as recompensas permanentes. Corações, contadores e recompensas de uso único voltam a ser como eram na manhã do dia escolhido.',
    travelDay: n => `Voltar para a manhã do dia (1 a ${n})`, cross: '⚄ Atravessar',
    travel6: 'Um 6: alguém atravessa com você, mantendo Corações e memórias. Quem?',
    travelWith: name => `${name} atravessa com você.`, travelAlone: 'Você atravessa sozinha.', wakeDay: n => `Acordar no dia ${n}`
  };
})();
