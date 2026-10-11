# Unlovable Villainess · Vilã Detestável

Unofficial fan companion app for the solo journaling game **Reincarnated as the Unlovable Villainess**, by Wym Lawson. It rolls the dice, tracks Hearts and Bad Ending counters, runs the 30-day loop and keeps your journal — in **English** or **Português**, switchable at any time.

App de fã, não oficial, para o jogo solo de diário **Reincarnated as the Unlovable Villainess**, de Wym Lawson. Rola os dados, acompanha Corações e contadores de Finais Ruins, conduz os 30 dias e guarda o seu diário — em **inglês** ou **português**, com troca a qualquer momento.

> The game and its text belong to Wym Lawson. Table entries here are condensed summaries; you need the original PDFs for the full prompts.
> O jogo e seus textos pertencem a Wym Lawson. As tabelas aqui são resumos; os enunciados completos estão nos PDFs originais.

## What it covers / O que tem

- Five settings / cinco cenários: Fantasy, Idol, Paranormal, School, Wuxia
- Villainess, Protagonist, Love Interest and Bad Ending generators
- Daily flow: Dates → Bad Endings → d20 scene, with Lore/Love resolution, rewards and Plot Twists
- Optional rules: Extended Hearts (−3 to 15), Time Travel, Extra Scenarios, oracle and inspiration tables
- Journal with Markdown export, save export/import, everything stored locally in the browser
- Installable PWA that works offline

## Run it / Como rodar

No build step and no dependencies — it is plain HTML, CSS and JavaScript.

```bash
node serve.js
```

Then open <http://localhost:4173> in Chrome or Edge. On Windows you can double-click `iniciar.bat` instead.

Chrome only offers **Install** on `http://localhost` or HTTPS (not on `file://`). Once installed, the app opens in its own window and keeps working offline, with the server stopped.

Any static host works too, since every path is relative — GitHub Pages, for example: *Settings → Pages → Deploy from a branch → `main` / root*.

## Layout

```
index.html            entry point
css/style.css         styles, one accent theme per setting
js/app.js             rules engine and views
js/rv.js              language registry
js/lang/en|pt/ui.js   interface strings
js/lang/en|pt/*.js    shared tables and the five settings
sw.js                 offline cache (bump VERSION when publishing a change)
manifest.webmanifest  PWA manifest
tools/make-icons.js   regenerates the PNG icons
```

To add a language, copy `js/lang/en`, translate it, register it in `js/rv.js` and add the files to `index.html` and `sw.js`.
