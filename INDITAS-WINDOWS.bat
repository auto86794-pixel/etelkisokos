@echo off
cd /d "%~dp0"
echo Nyisd meg: http://localhost:8080
py -m http.server 8080
pause
