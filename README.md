# Ételkisokos 1.3 – Értsd, mit eszel.

Teljes, önálló statikus webapp. Nem szükséges npm-telepítés vagy API-kulcs.

## Indítás Windows alatt
1. Bontsd ki a teljes ZIP-et egy mappába.
2. Ha van Python a gépeden, indítsd az INDITAS-WINDOWS.bat fájlt.
3. Nyisd meg: http://localhost:8080

Más rendszeren: a mappában `python3 -m http.server 8080`.
Dupla kattintással a szöveges mód használható; kamera, nyelvi modellek és telepíthetőség miatt a helyi szerver javasolt.

## Vercel / saját domain
Importáld a teljes mappát Gitből. Framework: Other; Build Command: üres; Output Directory: a projekt gyökere (`.`). Nincs build-lépés és környezeti változó. Ez a csomag önálló app, nem másik Next.js projektbe másolandó felülíró javítás.
A saját domain a tárhelyen kapcsolható be. Az etelkisokos.hu regisztrációját ez a ZIP nem végzi el.

## Funkciók
- Élő hátsó kamera és képfeltöltés; magyar + angol helyi OCR.
- Felismert szöveg javítása elemzés előtt.
- 3 és 4 számjegyes E-kódok, betű- és római számos altípusok; ismétlődések szűrése.
- 339 kód és név a hivatalos magyar uniós jegyzék 2025-11-04-i állapotából.
- 24 gyakori tételhez bővebb technológiai magyarázat; a többi tételnél a címke szerinti szerepet kell ellenőrizni.
- Allergén-kulcsszavak keresése; külön kezelt tartalmazhat / nyomokban rész.
- Profil, saját E-szám kerülőlista, gyermek-színezék és PKU figyelmeztetés; JSON export/import.
- Legfeljebb 50 előzmény a böngésző helyi tárában.
- PWA-manifest és minden OCR-fájlt tartalmazó offline gyorsítótár.
- Külön, internetet igénylő Open Food Facts vonalkódszámos keresés. Nem kamerás vonalkódolvasó.

## Offline és adatkezelés
A szöveges elemzés és a helyi OCR internet nélkül is működik, ha a helyi szerver elérhető vagy a böngésző az összes fájlt gyorsítótárazta. Telefonon első alkalommal HTTPS-en, internetkapcsolattal nyisd meg; várd meg az „Offline használatra kész” jelzést. Az offline tárolás böngészőfüggő, törölhető. A telepítés gombja a böngésző menüjében jelenhet meg.
A fotó a böngészőben kerül feldolgozásra; nem küldjük elemző szervernek. Profil és előzmény ugyanabban a böngészőben marad. A profil exportált fájlja személyes beállításokat tartalmaz; kezeld ennek megfelelően. Az online termékkereséskor a megadott vonalkód és a hálózati kérés az Open Food Facts szolgáltatáshoz kerül. Külső forráshivatkozás megnyitásához internet kell. Nincs analitika, reklám vagy követőkód.

## A jelzések jelentése
Piros: a saját kerülőlistádon szereplő kód. Sárga: bekapcsolt külön címkefigyelmeztetés vagy felismert allergén-egyezés. A zöld pipa a megadott keresésekben nem talált ütközést; nem „biztonságos” vagy „fogyasztható” tanúsítvány.
A szóalapú allergénkeresés tévedhet, például tagadás, szokatlan összetett név vagy OCR-hiba esetén. Az E-szám önmagában nem adja meg az allergénforrást, dózist vagy a termék egészségügyi minőségét. Az adatbázis időponthoz kötött; nem valós idejű engedélyezési ellenőrzés. Nincs betegségek szerinti étrendi ajánlórendszer.

## Ellenőrzés és fejlesztés
`node tests.js`: parser, profilvalidálás, tiltólista, gyermekfigyelmeztetés, XSS-karakterek és kötelező offline fájlok.
A fő fájlok: index.html, app.js, eszamok.js, profil.js. vendor/ocr: verzióhoz rögzített Tesseract.js 7.0.0, WASM motorok és hun+eng nyelvi modellek. A csomag ezeket helyben használja, nem CDN-ről.

## Baglyos arculat – 1.2
A választott 3-as logó alapján kis méretre egyszerűsített, átlátszó hátterű SVG bagoly került a fejlécbe és a kezdőoldali borítóba. Új appikonok és favicon. A frissítés a teljes korábbi csomagot tartalmazza. Bontsd ki, és az etelkisokos mappa teljes tartalmát másold a meglévő F:\etelkisokos mappába felülírással. A profilt és az előzményeket ez nem törli. Indítás után Ctrl+F5; ha a régi ikon marad, zárd be és nyisd meg újra az appot. A már telepített app ikonjának frissülése böngészőfüggő.

## 1.3 – Könyvborítós nyitóképernyő
Az 1-es, világos természetközeli borító nyitja az alkalmazást. A képen látható belépőgomb mögött valódi HTML-gomb működik, billentyűzettel és képernyőolvasóval is elérhető. A mintasorszám a megjelenítésből ki van takarva. A Borító megnyitása gombbal visszaléphetsz. Új, alapcímről indított látogatáskor megjelenik; közvetlen funkciólink esetén az adott oldal nyílik. A borító az offline csomag része.
Felülírás után Ctrl+F5. A borító a kép méretarányát megőrzi; nagy képernyőn könyvformátumú panel, mobilon a kijelzőhöz illesztett nézet.
