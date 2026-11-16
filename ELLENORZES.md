# Ellenőrzés – 2026-11-16

Sikeres: JavaScript szintaxis; profil validálása és hibás importadat elutasítása; E-szám normalizálás és ismétlődésszűrés; 3/4 számjegyes és római számos altípusok; saját kerülőlista összesítése; E133 kihagyása a hat gyermekfigyelmeztetéses színezék közül; HTML-karakterek kódolása; 339 név és helyi fájlok jelenléte.

Sikeres böngészős ellenőrzés: profil megnyitása, kerülőlista mentése, offline gyorsítótár kész állapotának megjelenése, helyi WASM + magyar és angol modell betöltése, tesztképről E330 / E322 / E1105 felismerése. A tesztkép mesterséges, éles szöveges kép volt; ez nem általános pontossági mérés.

Node környezetben ugyanazon helyi nyelvi modellekkel külön OCR-futtatás is sikeres.

Nem ellenőrzött: valódi telefon kamerája és PWA-telepítés; repülő üzemmódos teljes folyamat; aktuális külső termékkeresési szolgáltatás. A reszponzív CSS elkészült, de fizikai mobilteszt még szükséges. Az app csak helyi csomagként készült el, a meglévő privát webcímet ez a ZIP nem frissíti automatikusan.

## 1.2 arculati frissítés
A 3-as baglyos terv alapján egyszerűsített SVG jel került a fejlécbe, a profilgombba és a kezdőoldali borítóba. Új SVG favicon, 32 px-es PNG favicon, valamint 192 és 512 px-es appikon. A rajzolt ikon 512 px-es renderét vizuálisan ellenőriztük. A service worker verziója 1.2-re frissült, az új eszközök az offline csomag részei. A funkcionális ellenőrzések újra sikeresek.

## 1.3 könyvborító
A kiválasztott világos borító külön nyitóképernyőként került be. Böngészőben ellenőrizve: belépés az appba, visszatérés a borítóhoz, középre igazított teljes kép. A funkcionális tesztek és a borító navigációjának ellenőrzése sikeres. Új fájlok az offline gyorsítótárban. Fizikai telefonos megjelenés külön még ellenőrizendő.
