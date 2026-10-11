(() => {
  'use strict';
  const RV = window.RV;
  const KEY = 'rv.save.v2', LKEY = 'rv.lang';
  const LAST_DAY = 30;
  const app = document.getElementById('app');

  let S = null;   // partida em andamento / game in progress
  let W = null;   // assistente de criação / setup wizard
  let lang, L, C; // idioma atual, textos da interface e dados comuns
  const ui = { tab: 'hoje', modal: null, fresh: false, home: true, tools: {} };

  /* ---------- utilidades ---------- */
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const d = n => Math.floor(Math.random() * n) + 1;
  const cur = () => S || W;
  const cfg = () => RV[lang].settings[cur().setting];
  const pname = () => (cur() && cur().prot.name) || 'Penelope';
  const txt = t => Array.isArray(t) ? t[0] : t;
  const fxOf = t => Array.isArray(t) ? t[1] : null;
  const P = t => String(txt(t)).replaceAll('{P}', pname());
  const T = t => esc(P(t));
  const sub = (t, li) => P(t).replaceAll('{LI}', li.name);
  const clone = o => JSON.parse(JSON.stringify(o));

  function setLang(l) {
    lang = RV[l] && RV[l].ui ? l : 'en';
    L = RV[lang].ui; C = RV[lang].common;
    document.documentElement.lang = L.htmlLang;
    document.title = L.appName;
    try { localStorage.setItem(LKEY, lang); } catch (e) { /* sem armazenamento */ }
  }
  function setPath(root, path, val) {
    const ks = path.split('.');
    let o = root;
    for (let i = 0; i < ks.length - 1; i++) { if (o == null) return; o = o[ks[i]]; }
    if (o != null) o[ks[ks.length - 1]] = val;
  }

  const btn = (label, a, data = {}, cls = '', dis = false) =>
    `<button type="button" class="btn ${cls}" data-a="${a}"${Object.entries(data).map(([k, v]) => ` data-${k}="${esc(v)}"`).join('')}${dis ? ' disabled' : ''}>${label}</button>`;
  const die = (v, cls = '') => `<span class="die ${cls}${ui.fresh ? ' fresh' : ''}">${v}</span>`;

  /* ---------- persistência ---------- */
  let saveTimer = null;
  function save() { if (!S) return; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* cheio ou bloqueado */ } }
  function saveSoon() { clearTimeout(saveTimer); saveTimer = setTimeout(save, 400); }
  const validSave = o => o && o.v === 2 && RV.order.includes(o.setting) && o.vil && Array.isArray(o.lis) && Array.isArray(o.bes);
  function load() { try { const o = JSON.parse(localStorage.getItem(KEY)); return validSave(o) ? o : null; } catch (e) { return null; } }
  function download(name, text, type) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type }));
    a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  /* ---------- regras: apoio ---------- */
  const hmin = () => S.opts.ext ? -3 : -1;
  const hmax = () => S.opts.ext ? 15 : 10;
  const ths = () => S.opts.ext ? [-3, 1, 3, 6, 10, 15] : [1, 3, 6, 10];
  const liBy = id => S.lis.find(l => l.id === id);
  const active = l => l && !l.removed && !l.out;
  const openBEs = () => S.bes.filter(b => b.st === 'open').sort((a, b) => a.day - b.day || a.id - b.id);
  const dueBEs = () => openBEs().filter(b => b.day <= S.day);
  const twists = () => { const o = cfg().twists || {}; return C.twists.map((t, i) => o[i + 1] ?? t); };
  const scenText = (tbl, n) => cfg()[tbl === 'extra' ? 'extra' : 'scen'][n - 1];
  const attrName = k => k === 'lore' ? 'Lore' : 'Love';
  const roleList = () => { const s = cfg(), v = S.vil; return [s.roles[v.role], ...v.roles, s.backgrounds[v.bg]].join(' · '); };

  function mood(h) {
    const k = h <= -3 ? '-3' : h < 1 ? '-1' : h < 3 ? 1 : h < 6 ? 3 : h < 10 ? 6 : h < 15 ? 10 : 15;
    return C.heartLabel[k];
  }
  function ref(v) {
    if (v[0] !== '@') return v;
    if (v === '@P') return pname();
    const l = cur().lis[+v[1] - 1];
    return l && l.name ? l.name : L.liN(v[1]);
  }
  function beHTML(be) {
    const s = cfg().be;
    return L.be(esc, s.what[be.w], s.by ? ref(s.by[be.b]) : null, s.because[be.c], ref(s.target[be.t]));
  }
  const bePlain = be => beHTML(be).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

  function rollBE() { const s = cfg().be; return { w: d(6) - 1, b: s.by ? d(6) - 1 : null, c: d(6) - 1, t: d(6) - 1 }; }
  function genBEs() {
    const out = []; let day = d(6) + d(6);
    for (let i = 0; i < 6; i++) { if (i) day += d(6); out.push({ ...rollBE(), day: Math.min(LAST_DAY, day), counter: 2 + i }); }
    return out;
  }
  function rollLI(taken) {
    const s = cfg(), pool = s.names.filter(n => !taken.includes(n));
    return { name: pool.length ? pool[d(pool.length) - 1] : '', t: s.li.map(c => d(c[1].length) - 1), pf: d(6) - 1 };
  }
  const liTraits = l => [...cfg().li.map((c, i) => [c[0], c[1][l.t[i]]]), [L.pFeels(pname()), cfg().prot.feelLI[l.pf]]];
  const secretText = (li, sc) => sub(cfg().dates[sc.th].secret[sc.s], li);

  function addHearts(li, delta) {
    const old = li.hearts;
    li.hearts = Math.max(hmin(), Math.min(hmax(), old + delta));
    const hit = [];
    for (const th of ths()) {
      const crossed = th < 0 ? (li.hearts <= th && old > th) : (li.hearts >= th && old < th);
      if (crossed && !li.done.includes(th) && !S.pendingDates.some(p => p.li === li.id && p.th === th)) {
        S.pendingDates.push({ li: li.id, th, from: S.day }); hit.push(th);
      }
    }
    return hit;
  }
  const heartLine = (li, delta) => { const hit = addHearts(li, delta); return L.heartLine(delta, li.name, li.hearts, hit); };
  function journal(e) { S.journal.push({ id: S.nid++, day: S.day, tl: S.tl, lines: [], text: '', ...e }); }

  /* ---------- fluxo do dia ---------- */
  function snapshot() { const { snaps, journal: j, ...rest } = S; S.snaps[S.day] = JSON.stringify(rest); }

  function beginDay() {
    snapshot();
    const due = S.pendingDates.filter(p => p.from < S.day && active(liBy(p.li)))
      .sort((a, b) => liBy(a.li).name.localeCompare(liBy(b.li).name) || a.th - b.th);
    S.cur = { dates: due.map(p => ({ li: p.li, th: p.th })), date: null, beDone: false, sc: null };
    advance();
  }
  function advance() {
    const c = S.cur;
    if (c.dates.length) {
      S.phase = 'date';
      if (!c.date) c.date = { ...c.dates[0], roll: null, ev: null, used: false, out: null, rw: null, text: '' };
    } else if (!c.beDone && S.day <= LAST_DAY && dueBEs().length) S.phase = 'be';
    else if (S.day > LAST_DAY) { S.phase = 'epilogue'; if (c.epText == null) c.epText = ''; }
    else S.phase = 'scene';
    save();
  }

  function judge(v, attr) {
    if (v === attr || S.perks.critNums.includes(v)) return 3;
    if (v < attr) return 2;
    if (v === 6 && !S.perks.noCritFail) return 0;
    return 1;
  }
  const optBE = up => openBEs().filter(b => up || b.counter > 0);
  const optLI = delta => S.lis.filter(l => active(l) && (delta > 0 ? l.hearts < hmax() : l.hearts > hmin()));
  function hasOptions(q) {
    if (q === 'be-') return optBE(false).length > 0;
    if (q === 'be+') return optBE(true).length > 0;
    if (q === 'h+') return optLI(1).length > 0;
    if (q === 'h-') return optLI(-1).length > 0;
    return optBE(true).length > 0 || optLI(-1).length > 0;
  }
  function pump() {
    const sc = S.cur.sc;
    while (sc.queue.length && !hasOptions(sc.queue[0])) { sc.log.push(L.none[sc.queue[0]]); sc.queue.shift(); }
  }
  function newTwistBE() {
    const be = { id: S.nid++, ...rollBE(), day: Math.min(LAST_DAY, d(6) + d(6) + S.day), counter: d(6), st: 'open' };
    S.bes.push(be); return be;
  }
  function curTwist() { const c = S.cur; return S.phase === 'date' ? (c.date && c.date.rw && c.date.rw.twist) : (c.sc && c.sc.twist); }

  /* ---------- viagem no tempo ---------- */
  function doTravel(day, compId) {
    const old = S, snap = JSON.parse(old.snaps[day]);
    const snaps = {};
    for (const k in old.snaps) if (+k < day) snaps[k] = old.snaps[k];
    S = { ...snap, snaps, journal: old.journal, perks: old.perks, travel: old.travel, opts: old.opts, nid: old.nid, tl: (old.tl || 0) + 1 };
    S.vil.lore = old.vil.lore; S.vil.love = old.vil.love; S.vil.roles = old.vil.roles;
    S.travel.n++;
    if (!S.travel.effect) S.travel.effect = d(20);
    S.travel.comp = compId || null;
    let compName = '';
    if (compId) {
      const o = old.lis.find(l => l.id === compId), n = S.lis.find(l => l.id === compId);
      if (o) {
        compName = o.name;
        if (n) { n.hearts = o.hearts; n.done = o.done.slice(); n.secrets = clone(o.secrets); }
        else S.lis.push(clone(o));
        S.pendingDates = S.pendingDates.filter(p => p.li !== compId);
      }
    }
    S.day = day;
    journal({ kind: 'travel', title: L.jTravelTitle(S.travel.n, day), lines: [
      L.jTravel1(old.day), compName ? L.jTravelComp(compName) : L.jTravelAlone, L.jTravelFx(P(C.travel[S.travel.effect - 1]))
    ] });
    ui.tab = 'hoje';
    beginDay();
  }

  /* ---------- criação da partida ---------- */
  function newWizard() {
    W = { step: 0, setting: 'fantasy', opts: { ext: false, travel: false, scen: 'base' },
      vil: { name: '', desc: '', bg: null, role: null, rel: null, lore: 3 },
      prot: { name: 'Penelope' }, lis: [], bes: [] };
    rerollWorld();
  }
  function rerollWorld() {
    W.vil.bg = W.vil.role = W.vil.rel = null;
    Object.assign(W.prot, { pers: d(6) - 1, hobby: d(6) - 1, feelVil: d(6) - 1 });
    W.lis = [];
    for (let i = 0; i < 3; i++) W.lis.push(rollLI(W.lis.map(l => l.name)));
    W.bes = genBEs();
  }
  function startGame() {
    const v = W.vil;
    S = {
      v: 2, setting: W.setting, opts: { ...W.opts }, nid: 1, tl: 0,
      vil: { name: v.name.trim() || L.vilFallback, desc: v.desc.trim(), bg: v.bg ?? d(6) - 1, role: v.role ?? d(6) - 1, roles: [], rel: v.rel ?? d(6) - 1, lore: v.lore, love: 6 - v.lore },
      prot: { name: W.prot.name.trim() || 'Penelope', pers: W.prot.pers, hobby: W.prot.hobby, feelVil: W.prot.feelVil, out: false, notes: '' },
      lis: [], bes: [], tokens: [], perks: { critNums: [], noCritFail: false, extraDie: 0, extraBE: 0 },
      pendingDates: [], day: 1, phase: '', cur: null, hist: {}, journal: [], snaps: {}, travel: { n: 0, effect: null, comp: null }
    };
    W.lis.forEach((l, i) => S.lis.push({ id: S.nid++, name: l.name.trim() || L.liN(i + 1), t: l.t, pf: l.pf, hearts: -1, done: [], out: false, removed: false, notes: '', secrets: [] }));
    W.bes.forEach(b => S.bes.push({ id: S.nid++, w: b.w, b: b.b, c: b.c, t: b.t, day: b.day, counter: b.counter, st: 'open' }));
    W = null; ui.home = false; ui.tab = 'hoje';
    const s = cfg();
    journal({ day: 0, kind: 'intro', title: L.jIntroTitle(S.vil.name), lines: [
      L.jIntro1(s.name, s.backgrounds[S.vil.bg], s.roles[S.vil.role], S.vil.lore, S.vil.love),
      L.jIntro2(S.prot.name, s.relations[S.vil.rel]),
      ...S.bes.map(b => L.jBE(b.day, b.counter, bePlain(b)))
    ], text: S.vil.desc });
    beginDay();
  }

  /* ================================================================
     AÇÕES / ACTIONS
     ================================================================ */
  const A = {
    tab: ds => { ui.tab = ds.t; window.scrollTo(0, 0); },
    home: () => { ui.home = true; },
    continue: () => { ui.home = false; ui.tab = 'hoje'; },
    lang: ds => setLang(ds.l),
    newGame: () => { if (S) ui.modal = { type: 'confirm', msg: L.confirmNew, yes: 'newGameYes', label: L.confirmNewYes }; else newWizard(); },
    newGameYes: () => { S = null; try { localStorage.removeItem(KEY); } catch (e) { } ui.modal = null; newWizard(); },
    closeModal: () => { ui.modal = null; },
    install: async () => { if (!ui.installEvt) return; ui.installEvt.prompt(); try { await ui.installEvt.userChoice; } catch (e) { } ui.installEvt = null; document.body.classList.remove('can-install'); },
    exportSave: () => download(`villainess-save-day${S.day}.json`, JSON.stringify(S), 'application/json'),
    importSave: () => document.getElementById('importFile').click(),
    exportMd: () => download(`${L.mdFile}-${S.vil.name.replace(/[^\p{L}\p{N}]+/gu, '-').toLowerCase()}.md`, journalMd(), 'text/markdown'),
    print: () => setTimeout(() => window.print(), 50),

    /* assistente */
    wSetting: ds => { W.setting = ds.id; rerollWorld(); },
    wOpt: ds => { W.opts[ds.k] = !W.opts[ds.k]; },
    wScen: ds => { W.opts.scen = ds.v; },
    wNext: () => { W.step++; window.scrollTo(0, 0); },
    wBack: () => { if (W.step === 0) { W = null; ui.home = true; } else W.step--; window.scrollTo(0, 0); },
    wPick: ds => { W.vil[ds.f] = +ds.i; },
    wRoll: ds => { W.vil[ds.f] = d(6) - 1; },
    wLore: ds => { W.vil.lore = +ds.n; },
    wLI: ds => { const i = +ds.i; W.lis[i] = rollLI(W.lis.filter((_, k) => k !== i).map(l => l.name)); },
    wProt: () => { Object.assign(W.prot, { pers: d(6) - 1, hobby: d(6) - 1, feelVil: d(6) - 1 }); },
    wBE: () => { W.bes = genBEs(); },
    wStart: () => startGame(),

    /* encontros */
    dateRoll: () => { S.cur.date.roll = { m: d(6), l: d(6), s: d(6) }; ui.fresh = true; },
    dateEv: () => { S.cur.date.ev = { a: d(6), t: d(6), col: d(6), e: d(6) }; ui.fresh = true; },
    dateUsed: () => { S.cur.date.used = !S.cur.date.used; },
    dateOut: () => {
      const dt = S.cur.date, li = liBy(dt.li), v = d(6);
      dt.out = { die: v, total: v + (dt.used ? 1 : 0) };
      const kind = { 1: 'die', 3: 'succ', 6: 'crit' }[dt.th];
      dt.rw = {};
      if (kind) S.tokens.push({ id: S.nid++, li: li.id, kind, used: false });
      else if (dt.th === 10) {
        const p = d(6); dt.rw.perk = p;
        if (p === 1) dt.rw.need = 'role';
        else if (p === 2) {
          const v2 = S.vil;
          if (Math.min(v2.lore, v2.love) >= 5) dt.rw.note = L.attrMax;
          else if (v2.lore === v2.love) dt.rw.need = 'attr';
          else { const k = v2.lore < v2.love ? 'lore' : 'love'; v2[k]++; dt.rw.note = L.attrUp(attrName(k), v2[k]); }
        }
        else if (p === 3) dt.rw.need = 'num';
        else if (p === 4) S.perks.noCritFail = true;
        else if (p === 5) S.perks.extraDie++;
        else S.perks.extraBE++;
      }
      else if (dt.th === -3) dt.rw.twist = { n: d(20) };
      else if (dt.th === 15) { if (openBEs().length) dt.rw.need = 'be'; else dt.rw.note = L.noBEToRemove; }
      ui.fresh = true;
    },
    perkRole: () => { const rw = S.cur.date.rw, r = (rw.val || '').trim(); if (!r) return; S.vil.roles.push(r); rw.need = null; rw.note = L.newRole(r); },
    perkAttr: ds => { const rw = S.cur.date.rw; S.vil[ds.k]++; rw.need = null; rw.note = L.attrUp(attrName(ds.k), S.vil[ds.k]); },
    perkNum: ds => { const rw = S.cur.date.rw; S.perks.critNums.push(+ds.n); rw.need = null; rw.note = L.critNum(ds.n); },
    perkBE: ds => { const rw = S.cur.date.rw, be = S.bes.find(b => b.id === +ds.id); be.st = 'struck'; rw.need = null; rw.note = L.beRemoved(bePlain(be)); },
    dateDone: () => {
      const c = S.cur, dt = c.date, li = liBy(dt.li), tb = cfg().dates[dt.th];
      const sc = { th: dt.th, s: dt.roll.s - 1 }, o = dt.out.total;
      li.done.push(dt.th); li.secrets.push(sc);
      S.pendingDates = S.pendingDates.filter(p => !(p.li === li.id && p.th === dt.th));
      const lines = [
        L.jDate1(sub(tb.meet[dt.roll.m - 1], li), sub(tb.loc[dt.roll.l - 1], li)),
        L.jDate2(secretText(li, sc)),
        L.jDate3(dt.out.die + (dt.used ? '+1' : ''), o <= 2 ? 0 : o <= 4 ? 1 : 2),
        L.jReward(dt.rw.note || (dt.th === 10 ? C.perks[dt.rw.perk - 1] : C.rewards[dt.th]))
      ];
      if (dt.rw.twist) lines.push(L.jTwist(P(twists()[dt.rw.twist.n - 1])));
      journal({ kind: 'date', title: L.jDateTitle(dt.th, li.name), lines, text: dt.text });
      if (dt.th === 15) li.removed = true;
      c.dates.shift(); c.date = null; advance(); window.scrollTo(0, 0);
    },

    /* finais ruins do dia */
    faceBE: () => {
      const c = S.cur; let hit = null;
      for (const be of dueBEs()) {
        if (be.counter <= 0) { be.st = 'avoided'; journal({ kind: 'be', title: L.jAvoided, lines: [bePlain(be)] }); }
        else if (!hit) hit = be;
      }
      if (hit) { hit.st = 'hit'; c.over = hit.id; c.overText = ''; S.phase = 'over'; journal({ kind: 'be', title: L.jHit, lines: [bePlain(hit), L.counterWas(hit.counter)] }); }
      else { c.beDone = true; advance(); }
    },

    /* cena */
    sceneRoll: () => {
      const tbl = S.opts.scen === 'both' ? (d(2) === 1 ? 'base' : 'extra') : S.opts.scen, n = d(20);
      const prev = S.hist[tbl + ':' + n];
      S.cur.sc = { tbl, n, rep: prev && prev.length ? d(6) : null, insp: null, attr: null, rel: false, help: [], dice: null, best: 0, rank: null, conv: null, applied: false, queue: [], log: [], twist: null, text: '' };
      ui.fresh = true;
    },
    insp: () => { S.cur.sc.insp = { a: d(6), t: d(6) }; ui.fresh = true; },
    attr: ds => { S.cur.sc.attr = ds.k; },
    rel: () => { S.cur.sc.rel = !S.cur.sc.rel; },
    help: ds => { const sc = S.cur.sc, id = +ds.id, i = sc.help.indexOf(id); if (i < 0) sc.help.push(id); else sc.help.splice(i, 1); },
    diceRoll: () => {
      const sc = S.cur.sc; if (!sc.attr) return;
      const n = 1 + (sc.rel ? 1 : 0) + S.perks.extraDie + sc.help.length, a = S.vil[sc.attr];
      sc.dice = Array.from({ length: n }, () => d(6));
      const ranks = sc.dice.map(v => judge(v, a));
      sc.rank = Math.max(...ranks); sc.best = ranks.indexOf(sc.rank);
      sc.help.forEach(id => { const t = S.tokens.find(x => x.id === id); if (t) t.used = true; });
      ui.fresh = true;
    },
    useToken: ds => {
      const sc = S.cur.sc, t = S.tokens.find(x => x.id === +ds.id); if (!t || t.used) return;
      t.used = true; sc.rank = t.kind === 'crit' ? 3 : 2;
      sc.conv = L.conv(liBy(t.li).name, t.kind);
    },
    apply: () => {
      const sc = S.cur.sc, x = S.perks.extraBE;
      sc.applied = true;
      if (sc.rank === 3) sc.queue = [...Array(2 + x).fill('be-'), 'h+', 'h+'];
      else if (sc.rank === 2) sc.queue = [...Array(1 + x).fill('be-'), 'h+'];
      else if (sc.rank === 1) sc.queue = ['either'];
      else { sc.queue = ['be+', 'h-']; sc.twist = { n: d(20) }; ui.fresh = true; }
      pump();
    },
    optTwist: () => { S.cur.sc.twist = { n: d(20) }; ui.fresh = true; },
    choose: ds => {
      const sc = S.cur.sc, q = sc.queue[0], id = +ds.id;
      if (ds.k === 'be') {
        const be = S.bes.find(b => b.id === id), up = q !== 'be-';
        be.counter = Math.max(0, be.counter + (up ? 1 : -1));
        sc.log.push(L.counterLog(be.day, up, be.counter));
      } else sc.log.push(heartLine(liBy(id), q === 'h+' ? 1 : -1));
      sc.queue.shift(); pump();
    },
    skip: () => { const sc = S.cur.sc; sc.log.push(L.skipped); sc.queue.shift(); pump(); },
    endDay: () => {
      const sc = S.cur.sc, key = sc.tbl + ':' + sc.n, lines = [];
      if (sc.rep) lines.push(L.jRepeat(sc.rep % 2 === 0, sc.rep));
      lines.push(L.jRoll(attrName(sc.attr), S.vil[sc.attr], sc.dice.join(', '), L.rank[sc.rank]));
      if (sc.conv) lines.push(sc.conv);
      lines.push(...sc.log);
      if (sc.twist) lines.push(L.jTwist(P(twists()[sc.twist.n - 1])) + (sc.twist.note ? ' ' + sc.twist.note : ''));
      journal({ kind: 'scene', title: L.jScenTitle(sc.n, sc.tbl === 'extra'), prompt: P(scenText(sc.tbl, sc.n)), lines, text: sc.text });
      (S.hist[key] = S.hist[key] || []).push({ day: S.day, rank: sc.rank, text: sc.text.slice(0, 280) });
      S.day++; beginDay(); window.scrollTo(0, 0);
    },

    /* efeitos de reviravolta */
    fxNewBE: () => { const tw = curTwist(), be = newTwistBE(); tw.done = true; tw.note = L.nNewBE(be.day, be.counter, bePlain(be)); ui.fresh = true; },
    fxShift: ds => { const tw = curTwist(), n = +ds.d; openBEs().forEach(b => { b.day = Math.max(1, Math.min(LAST_DAY, b.day + n)); }); tw.done = true; tw.note = L.nShift(n); },
    fxLiOut: ds => { const tw = curTwist(), li = liBy(+ds.id); li.out = true; tw.done = true; tw.note = L.nOut(li.name); },
    fxPenOut: () => { const tw = curTwist(); S.prot.out = true; tw.done = true; tw.note = L.nOut(S.prot.name); },

    /* elenco */
    addLI: ds => { const w = rollLI(S.lis.map(l => l.name)); ui.modal = { type: 'addLI', name: ds.p ? S.prot.name : w.name, t: w.t, pf: w.pf, hearts: ds.h ? +ds.h : -1 }; },
    addLIRoll: () => { const w = rollLI(S.lis.map(l => l.name)); Object.assign(ui.modal, { t: w.t, pf: w.pf }); },
    addLIH: ds => { ui.modal.hearts = +ds.h; },
    addLIOk: () => {
      const m = ui.modal, h = m.hearts;
      S.lis.push({ id: S.nid++, name: (m.name || '').trim() || L.liN(S.lis.length + 1), t: m.t, pf: m.pf, hearts: h, done: ths().filter(t => t > 0 && t <= h), out: false, removed: false, notes: '', secrets: [] });
      ui.modal = null;
    },
    liHeart: ds => { addHearts(liBy(+ds.id), +ds.n); },
    liOut: ds => { const l = liBy(+ds.id); l.out = !l.out; },
    liRemove: ds => { const l = liBy(+ds.id); l.removed = !l.removed; },
    protOut: () => { S.prot.out = !S.prot.out; },

    /* finais ruins: ajustes manuais */
    beC: ds => { const b = S.bes.find(x => x.id === +ds.id); b.counter = Math.max(0, b.counter + +ds.n); },
    beD: ds => { const b = S.bes.find(x => x.id === +ds.id); b.day = Math.max(1, Math.min(LAST_DAY, b.day + +ds.n)); },
    beStrike: ds => { const b = S.bes.find(x => x.id === +ds.id); b.st = b.st === 'open' ? 'struck' : 'open'; },
    beReroll: ds => { const b = S.bes.find(x => x.id === +ds.id); Object.assign(b, rollBE()); },
    beTest: ds => { const b = S.bes.find(x => x.id === +ds.id), a = d(6), c = d(6); b.test = [a, c]; if (a === c) b.st = 'struck'; },
    beAdd: () => { newTwistBE(); },
    beShift: ds => { openBEs().forEach(b => { b.day = Math.max(1, Math.min(LAST_DAY, b.day + +ds.n)); }); },

    /* fim de jogo e viagem no tempo */
    travelOpen: () => { ui.modal = { type: 'travel', day: Math.max(1, S.day - 1), step: 1 }; },
    travelGo: () => {
      const m = ui.modal, day = Math.max(1, Math.min(S.day, Math.round(+m.day) || 1));
      m.day = day; m.roll = d(6); ui.fresh = true;
      const comp = S.travel.comp && liBy(S.travel.comp);
      if (comp) { m.comp = m.roll % 2 === 0 ? comp.id : null; m.step = 3; }
      else if (m.roll === 6 && S.lis.some(l => !l.removed)) m.step = 2;
      else { m.comp = null; m.step = 3; }
    },
    travelPick: ds => { ui.modal.comp = +ds.id; ui.modal.step = 3; },
    travelDo: () => { const m = ui.modal; ui.modal = null; doTravel(m.day, m.comp); },
    travelReroll: () => { S.travel.effect = d(20); ui.fresh = true; },
    opt: ds => { S.opts[ds.k] = !S.opts[ds.k]; },
    optScen: ds => { S.opts.scen = ds.v; },

    /* ferramentas */
    tOracle: () => { ui.tools.oracle = d(6); ui.fresh = true; },
    tScene: () => { ui.tools.scene = [d(6), d(6)]; ui.fresh = true; },
    tDate: () => { ui.tools.date = [d(6), d(6), d(6), d(6)]; ui.fresh = true; },
    tChar: () => { ui.tools.char = [d(6), d(6), d(6)]; ui.fresh = true; },
    tName: () => { ui.tools.name = [d(6), d(6)]; ui.fresh = true; },
    tSchool: () => { ui.tools.school = [d(6), d(6), d(6)]; ui.fresh = true; },
    tRelLI: () => { ui.tools.relLI = d(6); ui.fresh = true; },
    tDice: ds => { ui.tools.free = { k: ds.k, v: ds.k === '2d6' ? [d(6), d(6)] : [d(+ds.k.slice(1))] }; ui.fresh = true; }
  };

  /* ================================================================
     TELAS / VIEWS
     ================================================================ */
  const crest = `<svg class="crest" viewBox="0 0 120 120" aria-hidden="true"><path class="crown" d="M38 30 34 8l15 12L60 4l11 16L86 8l-4 22z"/><path class="heart" d="M60 108C24 82 12 62 12 46c0-13 10-23 23-23 10 0 19 6 25 15 6-9 15-15 25-15 13 0 23 10 23 23 0 16-12 36-48 62z"/></svg>`;
  const langPicker = () => `<div class="langs" role="group" aria-label="${L.language}">${RV.langs.map(([k, n]) => `<button type="button" class="chip${lang === k ? ' on' : ''}" data-a="lang" data-l="${k}" lang="${k}">${n}</button>`).join('')}</div>`;
  const scenChips = (a, val) => `<div class="chips">${['base', 'extra', 'both'].map(v => `<button type="button" class="chip${val === v ? ' on' : ''}" data-a="${a}" data-v="${v}">${L.scenOpts[v]}</button>`).join('')}</div>`;
  const toggle = (on, a, data, title, small) => `<button type="button" class="toggle${on ? ' on' : ''}" data-a="${a}"${Object.entries(data).map(([k, v]) => ` data-${k}="${esc(v)}"`).join('')} aria-pressed="${!!on}"><b>${title}</b><small>${small}</small></button>`;

  function viewHome() {
    return `<main class="home">
      ${langPicker()}
      ${crest}
      <p class="kicker">${L.homeKicker}</p>
      <h1>Reincarnated as the <em>Unlovable Villainess</em></h1>
      <p class="lede">${L.lede}</p>
      <div class="actions">
        ${S ? btn(esc(L.continueBtn(S.vil.name, S.phase === 'epilogue' ? L.epilogueLower : L.dayLower(Math.min(S.day, LAST_DAY)))), 'continue', {}, 'primary big') : ''}
        ${btn(L.newGame, 'newGame', {}, S ? 'big' : 'primary big')}
        ${btn(L.importSave, 'importSave', {}, 'ghost')}
        ${btn(L.installApp, 'install', {}, 'ghost install')}
      </div>
      <p class="credit">${L.credit}</p>
    </main>`;
  }

  /* ----- assistente ----- */
  function viewSetup() {
    const body = [setupSetting, setupVil, setupCast, setupBE][W.step]();
    return `<main class="page setup">
      <ol class="steps">${L.steps.map((s, i) => `<li class="${i === W.step ? 'on' : i < W.step ? 'done' : ''}"><span>${i + 1}</span>${s}</li>`).join('')}</ol>
      ${body}
      <div class="wnav">${btn(W.step ? L.back : L.cancel, 'wBack', {}, 'ghost')}${W.step < 3 ? btn(L.next, 'wNext', {}, 'primary') : btn(L.start, 'wStart', {}, 'primary')}</div>
    </main>`;
  }
  function setupSetting() {
    const o = W.opts;
    return `<section class="card"><h2>${L.whichGame}</h2>
      <div class="settings">${RV.order.map(id => { const s = RV[lang].settings[id]; return `<button type="button" class="setting s-${id}${W.setting === id ? ' on' : ''}" data-a="wSetting" data-id="${id}"><b>${s.name}</b><span>${s.blurb}</span><small>${L.doom(s.doom)}</small></button>`; }).join('')}</div>
    </section>
    <section class="card"><h2>${L.optRules}</h2><p class="muted">${L.optRulesHint}</p>
      <div class="toggles">${toggle(o.ext, 'wOpt', { k: 'ext' }, L.extT, L.extS)}${toggle(o.travel, 'wOpt', { k: 'travel' }, L.travelT, L.travelS)}</div>
      <p class="label">${L.scenTable}</p>${scenChips('wScen', o.scen)}
    </section>`;
  }
  function setupVil() {
    const s = cfg(), v = W.vil;
    const picker = (f, label, list) => `<p class="label">${label} ${btn(L.rollOne, 'wRoll', { f }, 'tiny')}</p>
      <div class="chips">${list.map((x, i) => `<button type="button" class="chip${v[f] === i ? ' on' : ''}" data-a="wPick" data-f="${f}" data-i="${i}">${esc(x)}</button>`).join('')}</div>`;
    return `<section class="card"><h2>${L.theVil}</h2>
      <label class="field"><span>${L.name}</span><input type="text" data-bind="vil.name" value="${esc(v.name)}" placeholder="${L.namePh}" maxlength="60"></label>
      <label class="field"><span>${L.looks}</span><textarea data-bind="vil.desc" rows="2" placeholder="${L.looksPh}">${esc(v.desc)}</textarea></label>
      ${picker('bg', L.background, s.backgrounds)}
      ${picker('role', L.role, s.roles)}
      ${picker('rel', esc(L.relWith(pname())), s.relations)}
    </section>
    <section class="card"><h2>${L.loreLove}</h2>
      <p class="muted">${L.loreLoveHint}</p>
      <div class="split">
        <div class="stat"><b>Lore</b><div class="chips">${[1, 2, 3, 4, 5].map(n => `<button type="button" class="chip num${v.lore === n ? ' on' : ''}" data-a="wLore" data-n="${n}">${n}</button>`).join('')}</div></div>
        <div class="stat"><b>Love</b><div class="bignum">${6 - v.lore}</div></div>
      </div>
    </section>`;
  }
  const traitsHTML = tr => `<dl class="traits">${tr.map(([k, x]) => `<div><dt>${T(k)}</dt><dd>${esc(x)}</dd></div>`).join('')}</dl>`;
  const protTraits = p => { const s = cfg().prot; return [[L.personality, s.pers[p.pers]], [L.hobby, s.hobby[p.hobby]], [L.feelsVil, s.feelVil[p.feelVil]]]; };
  function setupCast() {
    const p = W.prot;
    return `<section class="card"><h2>${L.protTitle}</h2>
      <label class="field"><span>${L.name}</span><input type="text" data-bind="prot.name" value="${esc(p.name)}" maxlength="40"></label>
      ${traitsHTML(protTraits(p))}
      ${btn(L.reroll, 'wProt', {}, 'small')}
    </section>
    <section class="card"><h2>${L.lisTitle}</h2><p class="muted">${L.lisHint}</p>
      <div class="grid3">${W.lis.map((l, i) => `<article class="mini">
        <label class="field"><span>${L.liN(i + 1)}</span><input type="text" data-bind="lis.${i}.name" value="${esc(l.name)}" maxlength="40"></label>
        ${traitsHTML(liTraits(l))}
        ${btn(L.reroll, 'wLI', { i }, 'small')}
      </article>`).join('')}</div>
    </section>`;
  }
  function setupBE() {
    return `<section class="card"><h2>${L.besTitle}</h2>
      <p class="muted">${L.besHint}</p>
      <ol class="belist">${W.bes.map(b => `<li><span class="beday">${L.dayOf(b.day)}</span><span class="becount">${b.counter}</span><p>${beHTML(b)}</p></li>`).join('')}</ol>
      ${btn(L.rerollAll, 'wBE', {}, 'small')}
    </section>`;
  }

  /* ----- partida ----- */
  function viewGame() {
    const body = { hoje: viewToday, elenco: viewCast, finais: viewBEs, diario: viewJournal, extras: viewExtras }[ui.tab]();
    const dayLabel = S.phase === 'epilogue' ? L.epilogue : `${L.dayOf(Math.min(S.day, LAST_DAY))}<small>/${LAST_DAY}</small>`;
    return `<header class="top">
      <button type="button" class="brand" data-a="home" title="${L.homeTitle}">♛<span> ${L.appName}</span></button>
      <div class="daybox"><b>${dayLabel}</b><span>${esc(cfg().name)}</span></div>
      ${btn(L.install, 'install', {}, 'small install')}
    </header>
    <nav class="tabs">${Object.entries(L.tabs).map(([k, l]) => `<button type="button" class="tab${ui.tab === k ? ' on' : ''}" data-a="tab" data-t="${k}">${l}</button>`).join('')}</nav>
    <main class="page">${body}</main>`;
  }

  function heartBar(li) {
    const mn = hmin(), span = hmax() - mn, pos = v => ((v - mn) / span * 100).toFixed(1);
    return `<div class="hbar" role="img" aria-label="♥ ${li.hearts}"><div class="hfill" style="width:${pos(li.hearts)}%"></div>${ths().filter(t => t > 0).map(t => `<i class="${li.done.includes(t) ? 'done' : ''}" style="left:${pos(t)}%"></i>`).join('')}</div>`;
  }
  function statusStrip() {
    const lis = S.lis.filter(l => !l.removed), bes = openBEs();
    return `<section class="status">
      <div class="st-lis">${lis.map(l => {
        const tk = S.tokens.filter(t => t.li === l.id && !t.used), pd = S.pendingDates.filter(p => p.li === l.id);
        return `<div class="st-li${l.out ? ' out' : ''}"><div class="row"><b>${esc(l.name)}</b><span class="hnum">♥ ${l.hearts}</span></div>${heartBar(l)}
          <small>${l.out ? L.offstage : esc(mood(l.hearts))}${tk.map(t => ` · <em>${L.tok[t.kind]}</em>`).join('')}${pd.length ? ` · <em class="soon">${L.dateSoon(pd.map(p => p.th))}</em>` : ''}</small></div>`;
      }).join('')}</div>
      <div class="st-bes">${bes.length ? bes.map(b => {
        const left = b.day - S.day, cls = b.counter === 0 ? 'safe' : left <= 3 ? 'danger' : '';
        return `<div class="st-be ${cls}" title="${esc(bePlain(b))}"><span class="becount">${b.counter}</span><span><b>${L.dayOf(b.day)}</b><small>${esc(cfg().be.what[b.w])}</small></span></div>`;
      }).join('') : `<p class="muted">${L.noOpenBE}</p>`}</div>
    </section>`;
  }

  function viewToday() {
    const v = { date: viewDate, be: viewBEPhase, scene: viewScene, over: viewOver, epilogue: viewEpilogue }[S.phase];
    const banner = S.travel.n ? `<p class="banner">${L.timeline(S.travel.n + 1)} · ${T(C.travel[S.travel.effect - 1])}</p>` : '';
    return statusStrip() + banner + v();
  }

  function twistHTML(tw) {
    const t = twists()[tw.n - 1], f = fxOf(t);
    let h = `<div class="twist"><p class="kicker">${L.twist} ${die(tw.n, 'd20')}</p><p class="big">${T(t)}</p>`;
    if (tw.done) h += `<p class="note">${esc(tw.note)}</p>`;
    else if (f === 'newBE') h += btn(L.fxNewBE, 'fxNewBE', {}, 'small');
    else if (f === 'shiftBE') h += `<p class="muted">${L.fxShiftHint}</p><div class="opts">${btn(L.allEarlier, 'fxShift', { d: -1 }, 'small')}${btn(L.allLater, 'fxShift', { d: 1 }, 'small')}</div>`;
    else if (f === 'liOut') h += `<p class="muted">${L.fxWhoOut}</p><div class="opts">${S.lis.filter(active).map(l => btn(esc(l.name), 'fxLiOut', { id: l.id }, 'small')).join('')}</div>`;
    else if (f === 'penOut') h += btn(esc(L.fxPenOut(S.prot.name)), 'fxPenOut', {}, 'small');
    else if (f === 'newLI' || f === 'newLIP') h += btn(L.addLI, 'addLI', f === 'newLIP' ? { p: 1 } : {}, 'small');
    else if (f === 'rerollBE') h += btn(L.openBEs, 'tab', { t: 'finais' }, 'small');
    return h + '</div>';
  }

  function viewDate() {
    const c = S.cur, dt = c.date, li = liBy(dt.li), tb = cfg().dates[dt.th], sb = t => esc(sub(t, li));
    let h = `<section class="card phase date"><p class="kicker">${L.dateKicker}${c.dates.length > 1 ? ` · ${L.nToday(c.dates.length)}` : ''}</p>
      <h2>${esc(L.dateTitle(li.name, dt.th))}</h2>
      <p class="muted">${esc(C.heartLabel[dt.th])}. ${L.dateHint}</p>`;
    if (!dt.roll) return h + btn(L.rollDate, 'dateRoll', {}, 'primary') + '</section>';
    const sec = tb.secret[dt.roll.s - 1];
    h += `<dl class="rolled">
      <div><dt>${die(dt.roll.m)} ${L.how}</dt><dd>${sb(tb.meet[dt.roll.m - 1])}</dd></div>
      <div><dt>${die(dt.roll.l)} ${L.where}</dt><dd>${sb(tb.loc[dt.roll.l - 1])}</dd></div>
      <div><dt>${die(dt.roll.s)} ${L.secret}</dt><dd>${sb(sec)}</dd></div></dl>`;
    if (fxOf(sec) === 'newLI3') h += `<p class="note">${L.secretAdds} ${btn(L.addLI3, 'addLI', { h: 3 }, 'tiny')}</p>`;
    if (dt.ev) {
      const e = cfg().dateEv;
      h += `<p class="insp">${die(dt.ev.a)} ${esc(e.act[dt.ev.a - 1])} · ${die(dt.ev.t)} ${esc(e.theme[dt.ev.t - 1])} · ${die(dt.ev.e)} ${L.youMeet} ${T((dt.ev.col <= 3 ? e.enc1 : e.enc2)[dt.ev.e - 1])}</p>`;
    } else h += btn(L.dateEvBtn, 'dateEv', {}, 'tiny ghost');
    h += `<label class="field"><span>${L.writeDate}</span><textarea data-bind="cur.date.text" rows="6" placeholder="${L.writeDatePh}">${esc(dt.text)}</textarea></label>`;
    if (!dt.out) return h + toggle(dt.used, 'dateUsed', {}, L.usedT, `${esc(roleList())} ${L.usedS}`) + btn(L.dateOutBtn, 'dateOut', {}, 'primary') + '</section>';
    const o = dt.out.total, i = o <= 2 ? 0 : o <= 4 ? 1 : 2, rw = dt.rw;
    h += `<div class="result r${i + 1}"><div class="dice">${die(dt.out.die, 'best')}${dt.used ? '<span class="plus">+1</span>' : ''}</div>
      <h3>${L.dateRes[i]}</h3><p>${esc(L.dateResText(i, li.name))}</p></div>
      <div class="reward"><p class="kicker">${L.reward}</p>`;
    if (dt.th === 10) h += `<p>${die(rw.perk)} ${esc(C.perks[rw.perk - 1])}</p>`;
    else h += `<p>${esc(C.rewards[dt.th])}${[1, 3, 6].includes(dt.th) ? ` <span class="muted">${L.kept}</span>` : ''}</p>`;
    if (rw.need === 'role') h += `<div class="inline"><input type="text" data-bind="cur.date.rw.val" value="${esc(rw.val || '')}" placeholder="${L.newRolePh}" maxlength="40">${btn(L.noteIt, 'perkRole', {}, 'small')}</div>`;
    if (rw.need === 'attr') h += `<p class="muted">${L.attrTie}</p><div class="opts">${btn('Lore', 'perkAttr', { k: 'lore' }, 'small')}${btn('Love', 'perkAttr', { k: 'love' }, 'small')}</div>`;
    if (rw.need === 'num') h += `<p class="muted">${L.whichCrit}</p><div class="opts">${[1, 2, 3, 4, 5, 6].filter(n => !S.perks.critNums.includes(n)).map(n => btn(n, 'perkNum', { n }, 'small num')).join('')}</div>`;
    if (rw.need === 'be') h += `<p class="muted">${L.whichBE}</p><div class="opts col">${openBEs().map(b => btn(`<b>${L.dayOf(b.day)}</b> · ${L.counterIs(b.counter)} · ${beHTML(b)}`, 'perkBE', { id: b.id }, 'opt')).join('')}</div>`;
    if (rw.note) h += `<p class="note">${esc(rw.note)}</p>`;
    if (rw.twist) h += twistHTML(rw.twist);
    if (dt.th === 15) h += `<p class="muted">${esc(L.leavesGame(li.name))}</p>`;
    return h + `</div>${btn(L.finishDate, 'dateDone', {}, 'primary', !!rw.need)}</section>`;
  }

  function viewBEPhase() {
    const due = dueBEs();
    return `<section class="card phase be"><p class="kicker">${L.beKicker}</p>
      <h2>${L.beTitle(due.length)}</h2>
      <ol class="belist">${due.map(b => `<li class="${b.counter === 0 ? 'safe' : 'danger'}"><span class="becount">${b.counter}</span><p>${beHTML(b)}<small>${b.counter === 0 ? L.beSafe : L.beDoom}</small></p></li>`).join('')}</ol>
      <p class="muted">${L.beHint}</p>
      ${btn(L.faceBE, 'faceBE', {}, 'primary')}</section>`;
  }

  function viewScene() {
    const sc = S.cur.sc;
    if (!sc) return `<section class="card phase scene"><p class="kicker">${L.dayOf(S.day)}</p><h2>${L.sceneQ}</h2>
      <p class="muted">${L.sceneRollHint[S.opts.scen]}</p>${btn(L.rollScene, 'sceneRoll', {}, 'primary')}</section>`;
    const a = sc.attr ? S.vil[sc.attr] : null;
    let h = `<section class="card phase scene"><p class="kicker">${L.dayOf(S.day)} · ${L.scenario} ${die(sc.n, 'd20')}${sc.tbl === 'extra' ? ` · ${L.extraTable}` : ''}</p>
      <h2 class="prompt">${T(scenText(sc.tbl, sc.n))}</h2>
      <p class="guide">${T(C.guide)}</p>
      <p class="pdf">${L.fullText(sc.n, sc.tbl === 'extra' ? 'Extra Scenarios' : 'Scenarios')}</p>`;
    if (sc.rep) {
      const prev = S.hist[sc.tbl + ':' + sc.n], last = prev[prev.length - 1], pos = sc.rep % 2 === 0;
      h += `<div class="repeat ${pos ? 'pos' : 'neg'}"><p>${die(sc.rep)} ${L.repeat(pos)}</p>
        <blockquote><small>${L.dayOf(last.day)} · ${L.rank[last.rank]}</small>${esc(last.text) || `<i>${L.noNotes}</i>`}</blockquote></div>`;
    }
    if (sc.insp) { const o = cfg().scenOpt; h += `<p class="insp">${die(sc.insp.a)} ${esc(o.act[sc.insp.a - 1])} · ${die(sc.insp.t)} ${esc(o.theme[sc.insp.t - 1])}</p>`; }
    else if (!sc.dice) h += btn(L.inspBtn, 'insp', {}, 'tiny ghost');

    if (!sc.dice) {
      const helps = S.tokens.filter(t => t.kind === 'die' && !t.used);
      const n = 1 + (sc.rel ? 1 : 0) + S.perks.extraDie + sc.help.length;
      const at = (k, sb) => `<button type="button" class="attr${sc.attr === k ? ' on' : ''}" data-a="attr" data-k="${k}"><b>${attrName(k)}</b><span>${S.vil[k]}</span><small>${sb}</small></button>`;
      return h + `<p class="label">${L.howResolve}</p>
        <div class="attrs">${at('lore', L.loreSub)}${at('love', L.loveSub)}</div>
        ${toggle(sc.rel, 'rel', {}, L.relT, `${esc(roleList())} ${L.relS}`)}
        ${helps.map(t => toggle(sc.help.includes(t.id), 'help', { id: t.id }, esc(L.helpT(liBy(t.li).name)), L.helpS)).join('')}
        <p class="muted">${a ? L.odds(a, S.perks.critNums, S.perks.noCritFail) : L.chooseAttr}</p>
        ${btn(L.rollN(n), 'diceRoll', {}, 'primary', !sc.attr)}</section>`;
    }

    h += `<div class="result r${sc.rank}"><div class="dice">${sc.dice.map((v, i) => die(v, i === sc.best ? 'best' : 'dim')).join('')}</div>
      <h3>${L.rank[sc.rank]}</h3><p>${attrName(sc.attr)} ${a}${sc.conv ? ' · ' + esc(sc.conv) : ''}</p></div>`;
    if (!sc.applied) {
      const tk = S.tokens.filter(t => !t.used && ((t.kind === 'succ' && sc.rank < 2) || (t.kind === 'crit' && sc.rank < 3)));
      if (tk.length) h += `<div class="opts col">${tk.map(t => btn(L.tokenUse(t.kind, esc(liBy(t.li).name)), 'useToken', { id: t.id }, 'opt')).join('')}</div>`;
      return h + `<p class="muted">${L.effect(sc.rank, S.perks.extraBE)}</p>${btn(L.applyBtn, 'apply', {}, 'primary')}</section>`;
    }
    if (sc.log.length) h += `<ul class="log">${sc.log.map(l => `<li>${esc(l)}</li>`).join('')}</ul>`;
    if (sc.queue.length) return h + choiceHTML(sc) + '</section>';
    if (sc.twist) h += twistHTML(sc.twist);
    else if (sc.rank === 1 && S.perks.noCritFail && sc.dice[sc.best] === 6) h += btn(L.optTwist, 'optTwist', {}, 'tiny ghost');
    return h + `<label class="field"><span>${L.writeScene}</span><textarea data-bind="cur.sc.text" rows="8" placeholder="${L.writePh[sc.rank >= 2 ? 0 : 1]}">${esc(sc.text)}</textarea></label>
      ${btn(S.day >= LAST_DAY ? L.endLastDay : L.endDay, 'endDay', {}, 'primary')}</section>`;
  }
  function choiceHTML(sc) {
    const q = sc.queue[0], same = sc.queue.filter(x => x === q).length;
    const beBtns = up => optBE(up).map(b => btn(`<b>${L.dayOf(b.day)}</b> · ${L.counterIs(b.counter)} → ${Math.max(0, b.counter + (up ? 1 : -1))} · ${beHTML(b)}`, 'choose', { k: 'be', id: b.id }, 'opt')).join('');
    const liBtns = dl => optLI(dl).map(l => btn(`<b>${esc(l.name)}</b> · ♥ ${l.hearts} → ${l.hearts + dl}`, 'choose', { k: 'li', id: l.id }, 'opt')).join('');
    const opts = q === 'be-' ? beBtns(false) : q === 'be+' ? beBtns(true) : q === 'h+' ? liBtns(1) : q === 'h-' ? liBtns(-1) : beBtns(true) + liBtns(-1);
    return `<div class="choice"><p class="label">${L.q[q]}${same > 1 ? ` <small>(×${same})</small>` : ''}</p><div class="opts col">${opts}</div>${q === 'be-' || q === 'h+' ? btn(L.waive, 'skip', {}, 'tiny ghost') : ''}</div>`;
  }

  function viewOver() {
    const c = S.cur, be = S.bes.find(b => b.id === c.over);
    return `<section class="card phase over"><p class="kicker">${L.overKicker(S.day)}</p>
      <h2>${L.overTitle}</h2>
      <p class="big">${beHTML(be)}</p><p class="muted">${L.counterWas(be.counter)}</p>
      <label class="field"><span>${L.lastWords}</span><textarea data-bind="cur.overText" rows="5" placeholder="${L.lastWordsPh}">${esc(c.overText || '')}</textarea></label>
      <div class="actions">
        ${S.opts.travel ? btn(L.travelBack, 'travelOpen', {}, 'primary') : btn(L.enableTravel, 'opt', { k: 'travel' })}
        ${btn(L.exportDiary, 'exportMd')}${btn(L.newGame, 'newGame', {}, 'ghost')}
      </div></section>`;
  }

  function viewEpilogue() {
    const c = S.cur, lis = S.lis.filter(l => !l.removed), top = lis.filter(l => !l.out && l.hearts >= 10), sum = S.vil.lore + S.vil.love;
    const names = esc(top.map(l => l.name).join(', ')), o = [];
    if (top.length === 1) o.push(L.eOne(names));
    if (top.length > 1) o.push(L.eMany(names));
    if (!top.length) o.push(L.eNone);
    if (sum > 6) o.push(L.eHome);
    if (sum > 7 && top.length) o.push(L.eBring);
    if (sum > 10) o.push(L.eGod);
    return `<section class="card phase epilogue"><p class="kicker">${L.epilogue}</p><h2>${L.epTitle}</h2>
      <p class="muted">${L.epSum(S.vil.lore, S.vil.love, sum)}</p>
      <ul class="endings">${o.map(x => `<li>${x}</li>`).join('')}</ul>
      <dl class="traits">${lis.map(l => `<div><dt>${esc(l.name)}</dt><dd>♥ ${l.hearts} — ${esc(mood(l.hearts))}${l.out ? ` (${L.offstage})` : ''}</dd></div>`).join('')}</dl>
      <label class="field"><span>${L.writeEnding}</span><textarea data-bind="cur.epText" rows="10">${esc(c.epText || '')}</textarea></label>
      <div class="actions">${btn(L.exportDiary, 'exportMd', {}, 'primary')}${btn(L.newGame, 'newGame', {}, 'ghost')}</div></section>`;
  }

  /* ----- elenco ----- */
  function viewCast() {
    const s = cfg(), v = S.vil, p = S.prot, pk = S.perks, perks = [];
    if (pk.critNums.length) perks.push(L.pCrit(pk.critNums.join(', ')));
    if (pk.noCritFail) perks.push(L.pNoCF);
    if (pk.extraDie) perks.push(L.pDie(pk.extraDie));
    if (pk.extraBE) perks.push(L.pBE(pk.extraBE));
    return `<section class="card"><p class="kicker">${L.theVil}</p><h2>${esc(v.name)}</h2>${v.desc ? `<p class="muted">${esc(v.desc)}</p>` : ''}
      <div class="split"><div class="stat"><b>Lore</b><div class="bignum">${v.lore}</div></div><div class="stat"><b>Love</b><div class="bignum">${v.love}</div></div></div>
      ${traitsHTML([[L.background, s.backgrounds[v.bg]], [L.role, [s.roles[v.role], ...v.roles].join(' · ')], [L.relWith(p.name), s.relations[v.rel]], ...(perks.length ? [[L.permanents, perks.join(' · ')]] : [])])}
    </section>
    <section class="card${p.out ? ' faded' : ''}"><p class="kicker">${L.protTitle}${p.out ? ` · ${L.offstage}` : ''}</p>
      <label class="field"><span>${L.name}</span><input type="text" data-bind="prot.name" value="${esc(p.name)}" maxlength="40"></label>
      ${traitsHTML(protTraits(p))}
      <label class="field"><span>${L.notes}</span><textarea data-bind="prot.notes" rows="2">${esc(p.notes)}</textarea></label>
      ${btn(p.out ? L.bringBack : L.takeOut, 'protOut', {}, 'tiny ghost')}
    </section>
    ${S.lis.map((l, i) => {
      const tk = S.tokens.filter(t => t.li === l.id && !t.used);
      return `<section class="card licard${l.removed || l.out ? ' faded' : ''}"><p class="kicker">${L.liWord}${l.removed ? ` · ${L.outOfGame}` : l.out ? ` · ${L.offstage}` : ''}${S.travel.comp === l.id ? ` · ${L.liTravels}` : ''}</p>
      <label class="field"><span>${L.name}</span><input type="text" data-bind="lis.${i}.name" value="${esc(l.name)}" maxlength="40"></label>
      <div class="hrow">${btn('−', 'liHeart', { id: l.id, n: -1 }, 'round')}<div class="hmid"><div class="row"><b>♥ ${l.hearts}</b><span>${esc(mood(l.hearts))}</span></div>${heartBar(l)}</div>${btn('+', 'liHeart', { id: l.id, n: 1 }, 'round')}</div>
      ${traitsHTML(liTraits(l))}
      ${l.secrets.length ? `<p class="label">${L.secrets}</p><ul class="log">${l.secrets.map(x => `<li>${x.th} ♥ — ${esc(secretText(l, x))}</li>`).join('')}</ul>` : ''}
      ${tk.length ? `<p class="label">${L.keptRewards}</p><ul class="log">${tk.map(t => `<li>${esc(C.rewards[{ die: 1, succ: 3, crit: 6 }[t.kind]])}</li>`).join('')}</ul>` : ''}
      <label class="field"><span>${L.notes}</span><textarea data-bind="lis.${i}.notes" rows="2">${esc(l.notes)}</textarea></label>
      <div class="opts">${btn(l.out ? L.bringBack : L.takeOut, 'liOut', { id: l.id }, 'tiny ghost')}${btn(l.removed ? L.backToGame : L.removeFromGame, 'liRemove', { id: l.id }, 'tiny ghost')}</div>
    </section>`; }).join('')}
    <div class="actions">${btn(L.addLI, 'addLI')}</div>`;
  }

  /* ----- finais ruins ----- */
  function viewBEs() {
    const list = S.bes.slice().sort((a, b) => (a.st !== 'open') - (b.st !== 'open') || a.day - b.day);
    return `<section class="card"><h2>${L.beTabTitle}</h2>
      <p class="muted">${L.beTabHint}</p>
      <ol class="belist full">${list.map(b => `<li class="${b.st !== 'open' ? 'closed' : b.counter === 0 ? 'safe' : b.day - S.day <= 3 ? 'danger' : ''}">
        <span class="beday">${L.dayOf(b.day)}</span><span class="becount">${b.counter}</span>
        <p>${beHTML(b)}${L.st[b.st] ? `<small>${L.st[b.st]}</small>` : ''}${b.test ? `<small>${L.testRes(b.test[0], b.test[1])}</small>` : ''}</p>
        <details><summary>${L.manual}</summary><div class="opts">
          ${btn(L.cMinus, 'beC', { id: b.id, n: -1 }, 'tiny')}${btn(L.cPlus, 'beC', { id: b.id, n: 1 }, 'tiny')}
          ${btn(L.dMinus, 'beD', { id: b.id, n: -1 }, 'tiny')}${btn(L.dPlus, 'beD', { id: b.id, n: 1 }, 'tiny')}
          ${btn(L.rerollOne, 'beReroll', { id: b.id }, 'tiny')}${btn(L.test2d6, 'beTest', { id: b.id }, 'tiny')}
          ${btn(b.st === 'open' ? L.strike : L.reopen, 'beStrike', { id: b.id }, 'tiny')}
        </div></details></li>`).join('')}</ol>
      <p class="muted">${L.beRule}</p>
      <div class="opts">${btn(L.newBE, 'beAdd', {}, 'small')}${btn(L.allEarlier, 'beShift', { n: -1 }, 'small ghost')}${btn(L.allLater, 'beShift', { n: 1 }, 'small ghost')}</div>
    </section>`;
  }

  /* ----- diário ----- */
  const entryHead = e => (e.day ? L.dayOf(e.day) : L.prologue) + (e.tl ? ` · ${L.timeline(e.tl + 1)}` : '');
  function viewJournal() {
    const idx = S.journal.map((e, i) => [e, i]).reverse();
    return `<section class="card noprint"><h2>${esc(L.diaryOf(S.vil.name))}</h2>
      <p class="muted">${L.diaryHint}</p>
      <div class="opts">${btn(L.exportMd, 'exportMd', {}, 'small')}${btn(L.print, 'print', {}, 'small ghost')}</div></section>
    ${idx.map(([e, i]) => `<article class="card entry k-${e.kind}">
      <p class="kicker">${entryHead(e)}</p><h3>${esc(e.title)}</h3>
      ${e.prompt ? `<p class="prompt sm">${esc(e.prompt)}</p>` : ''}
      ${e.lines.length ? `<ul class="log">${e.lines.map(l => `<li>${esc(l)}</li>`).join('')}</ul>` : ''}
      <textarea data-bind="journal.${i}.text" rows="${Math.max(3, Math.ceil((e.text || '').length / 70))}" placeholder="${L.yourNotes}">${esc(e.text)}</textarea>
    </article>`).join('')}`;
  }
  function journalMd() {
    let md = `# ${L.diaryOf(S.vil.name)}\n\n*Reincarnated as the Unlovable Villainess* (Wym Lawson) — ${cfg().name}\n\n`, last = null;
    for (const e of S.journal) {
      const head = entryHead(e);
      if (head !== last) { md += `## ${head}\n\n`; last = head; }
      md += `### ${e.title}\n\n`;
      if (e.prompt) md += `> ${e.prompt}\n\n`;
      if (e.lines.length) md += e.lines.map(l => `- ${l}`).join('\n') + '\n\n';
      if (e.text && e.text.trim()) md += e.text.trim() + '\n\n';
    }
    const c = S.cur || {};
    if (S.phase === 'over' && c.overText) md += `## ${L.lastWords}\n\n${c.overText.trim()}\n\n`;
    if (S.phase === 'epilogue' && c.epText) md += `## ${L.epilogue}\n\n${c.epText.trim()}\n\n`;
    return md;
  }

  /* ----- extras ----- */
  function viewExtras() {
    const s = cfg(), t = ui.tools, o = S.opts;
    const tool = (title, a, out) => `<div class="tool"><div class="row"><b>${title}</b>${btn(L.rollBtn, a, {}, 'tiny')}</div>${out ? `<p class="out">${out}</p>` : ''}</div>`;
    const pair = (v, arr) => `${die(v)} ${T(arr[v - 1])}`;
    let tools = tool(L.tools.oracle, 'tOracle', t.oracle && pair(t.oracle, C.oracle))
      + tool(L.tools.scene, 'tScene', t.scene && pair(t.scene[0], s.scenOpt.act) + ' · ' + pair(t.scene[1], s.scenOpt.theme))
      + tool(L.tools.date, 'tDate', t.date && pair(t.date[0], s.dateEv.act) + ' · ' + pair(t.date[1], s.dateEv.theme) + ' · ' + pair(t.date[3], t.date[2] <= 3 ? s.dateEv.enc1 : s.dateEv.enc2))
      + tool(L.tools.char, 'tChar', t.char && pair(t.char[0], s.character.goal) + ' · ' + pair(t.char[1], s.character.focus) + ' · ' + pair(t.char[2], s.character.desc));
    if (s.relLI) tools += tool(L.tools.relLI, 'tRelLI', t.relLI && pair(t.relLI, s.relLI));
    if (s.lastName) tools += tool(L.tools.name, 'tName', t.name && pair(t.name[0], s.lastName.stem) + ' · ' + pair(t.name[1], s.lastName.suffix));
    if (s.schoolOpt) tools += tool(L.tools.school, 'tSchool', t.school && pair(t.school[0], s.schoolOpt.rep) + ' · ' + pair(t.school[1], s.schoolOpt.trait) + ' · ' + pair(t.school[2], s.schoolOpt.look));
    tools += `<div class="tool"><div class="row"><b>${L.tools.free}</b><span>${['d6', '2d6', 'd20'].map(k => btn(k, 'tDice', { k }, 'tiny')).join(' ')}</span></div>${t.free ? `<p class="out">${t.free.v.map(v => die(v, t.free.k === 'd20' ? 'd20' : '')).join(' ')}${t.free.v.length > 1 ? ' = ' + t.free.v.reduce((x, y) => x + y, 0) : ''}</p>` : ''}</div>`;
    const standalone = window.matchMedia('(display-mode: standalone)').matches;
    return `<section class="card"><h2>${L.deskTitle}</h2><p class="muted">${L.deskHint(esc(s.name))}</p>${tools}</section>
    <section class="card"><h2>${L.optRules}</h2>
      <div class="toggles">${toggle(o.ext, 'opt', { k: 'ext' }, L.extT, L.extS)}${toggle(o.travel, 'opt', { k: 'travel' }, L.travelT, L.travelS)}</div>
      <p class="label">${L.scenTable}</p>${scenChips('optScen', o.scen)}
      ${S.travel.n ? `<p class="label">${L.travelPrice(S.travel.n)}</p><p>${die(S.travel.effect, 'd20')} ${T(C.travel[S.travel.effect - 1])}</p>${btn(L.rerollEffect, 'travelReroll', {}, 'tiny ghost')}` : ''}
    </section>
    <section class="card"><h2>${L.rulesTitle}</h2>${L.rules.map(([h, b]) => `<details><summary>${h}</summary><p>${b}</p></details>`).join('')}
      <p class="muted">${L.rulesFoot(esc(s.pdf))}</p></section>
    <section class="card"><h2>${L.saveTitle}</h2>
      <p class="label">${L.language}</p>${langPicker()}
      <p class="muted">${L.langHint}</p>
      <div class="opts">${btn(L.exportSave, 'exportSave', {}, 'small')}${btn(L.importSave, 'importSave', {}, 'small ghost')}${btn(L.newGame, 'newGame', {}, 'small ghost')}</div>
      <p class="muted">${standalone ? L.pwaOn : L.pwaOff}</p>
      ${btn(L.installApp, 'install', {}, 'small install')}
      <p class="credit">${L.credit2}</p>
    </section>`;
  }

  /* ----- modais ----- */
  function viewModal() {
    const m = ui.modal; if (!m) return '';
    let body = '';
    if (m.type === 'confirm') body = `<h2>${m.title || L.sure}</h2><p>${esc(m.msg)}</p><div class="actions">${m.yes === 'closeModal' ? '' : btn(L.cancel, 'closeModal', {}, 'ghost')}${btn(esc(m.label), m.yes, {}, 'primary')}</div>`;
    if (m.type === 'addLI') {
      const hs = S.opts.ext ? [-3, -1, 1, 3, 6] : [-1, 1, 3, 6];
      body = `<h2>${L.addLITitle}</h2>
        <label class="field"><span>${L.name}</span><input type="text" data-bind="@name" value="${esc(m.name)}" maxlength="40"></label>
        ${traitsHTML(liTraits(m))}
        ${btn(L.reroll, 'addLIRoll', {}, 'tiny')}
        <p class="label">${L.startHearts}</p><div class="chips">${hs.map(h => `<button type="button" class="chip num${m.hearts === h ? ' on' : ''}" data-a="addLIH" data-h="${h}">${h}</button>`).join('')}</div>
        <div class="actions">${btn(L.cancel, 'closeModal', {}, 'ghost')}${btn(L.add, 'addLIOk', {}, 'primary')}</div>`;
    }
    if (m.type === 'travel') {
      body = `<h2>${L.travelBack}</h2>`;
      if (m.step === 1) body += `<p>${L.travelText}</p>
        <label class="field"><span>${L.travelDay(S.day)}</span><input type="number" min="1" max="${S.day}" data-bind="@day" value="${m.day}"></label>
        <div class="actions">${btn(L.cancel, 'closeModal', {}, 'ghost')}${btn(L.cross, 'travelGo', {}, 'primary')}</div>`;
      else {
        const comp = m.comp && liBy(m.comp);
        body += `<p>${die(m.roll)} ${m.step === 2 ? L.travel6 : comp ? esc(L.travelWith(comp.name)) : L.travelAlone}</p>`;
        if (m.step === 2) body += `<div class="opts col">${S.lis.filter(l => !l.removed).map(l => btn(`<b>${esc(l.name)}</b> · ♥ ${l.hearts}`, 'travelPick', { id: l.id }, 'opt')).join('')}</div>`;
        else body += `<div class="actions">${btn(L.wakeDay(m.day), 'travelDo', {}, 'primary')}</div>`;
      }
    }
    return `<div class="backdrop" data-a="closeModal"></div><div class="modal" role="dialog" aria-modal="true">${body}</div>`;
  }

  /* ================================================================
     RENDERIZAÇÃO E EVENTOS
     ================================================================ */
  function render() {
    document.documentElement.dataset.setting = (W || S || { setting: 'fantasy' }).setting;
    const h = W ? viewSetup() : S && !ui.home ? viewGame() : viewHome();
    app.innerHTML = h + viewModal() + '<input type="file" id="importFile" accept="application/json,.json" hidden>';
    ui.fresh = false;
  }

  app.addEventListener('click', e => {
    const el = e.target.closest('[data-a]');
    if (!el || el.disabled) return;
    const fn = A[el.dataset.a];
    if (!fn) return;
    fn(el.dataset, el);
    save();
    render();
  });
  app.addEventListener('input', e => {
    const el = e.target.closest('[data-bind]');
    if (!el) return;
    const path = el.dataset.bind, val = el.type === 'number' ? +el.value : el.value;
    if (path[0] === '@') setPath(ui.modal, path.slice(1), val);
    else { setPath(cur(), path, val); saveSoon(); }
  });
  app.addEventListener('change', e => {
    if (e.target.id !== 'importFile' || !e.target.files[0]) return;
    const rd = new FileReader();
    rd.onload = () => {
      try {
        const o = JSON.parse(rd.result);
        if (!validSave(o)) throw new Error('format');
        S = o; W = null; ui.home = false; ui.tab = 'hoje'; ui.modal = null; save();
      } catch (err) { ui.modal = { type: 'confirm', title: L.oops, msg: L.badFile, yes: 'closeModal', label: L.gotIt }; }
      render();
    };
    rd.readAsText(e.target.files[0]);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && ui.modal) { ui.modal = null; render(); } });
  window.addEventListener('beforeunload', save);
  window.addEventListener('pagehide', save);

  /* ---------- instalação como app (PWA) ---------- */
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); ui.installEvt = e; document.body.classList.add('can-install'); });
  window.addEventListener('appinstalled', () => { ui.installEvt = null; document.body.classList.remove('can-install'); });
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => { }); });
  }

  let stored = null;
  try { stored = localStorage.getItem(LKEY); } catch (e) { /* sem armazenamento */ }
  setLang(stored || ((navigator.language || 'en').toLowerCase().startsWith('pt') ? 'pt' : 'en'));
  S = load();
  render();
})();
