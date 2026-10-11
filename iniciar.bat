@echo off
rem Sobe o servidor local e abre o jogo no Chrome (necessario para instalar como app).
cd /d "%~dp0"
start "Vila Detestavel - servidor (feche para encerrar)" /min node serve.js
timeout /t 1 /nobreak >nul
start "" chrome "http://localhost:4173" 2>nul || start "" "http://localhost:4173"
