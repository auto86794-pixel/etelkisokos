# Ételkisokos 1.6 – Értsd, mit eszel.

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
- 131 tételhez bővebb technológiai magyarázat; a többi tételnél a címke szerinti szerepet kell ellenőrizni.
- Allergén-kulcsszavak keresése; külön kezelt tartalmazhat / nyomokban rész.
- Profil, saját E-szám kerülőlista, gyermek-színezék és PKU figyelmeztetés; JSON export/import.
- Legfeljebb 50 előzmény a böngésző helyi tárában.
- PWA-manifest és minden OCR-fájlt tartalmazó offline gyorsítótár.
- Kamerás és kézzel megadott vonalkód alapján működő Open Food Facts termékkeresés; vonalkódfotó felismerés is elérhető. A lekérdezéshez internet szükséges.

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

## 1.4 – Bővebb kisokos és pontosabb szövegértelmezés
- 339 hivatalos alapkód + az E500(ii) pontosított altípus: összesen 340 kereshető rekord.
- 131 részletes, technológiai szerepet magyarázó leírás, megnyitható hivatalos forráshivatkozásokkal. A szerep közérthető szerkesztői összefoglaló; a konkrét termékben betöltött funkciót a címke határozza meg. Az engedélyezési névjegyzék 2025-11-04-i pillanatképe nem frissült újabb jogállapotra.
- Ismert teljes nevek és felvett szinonimák felismerése: például citromsav, xantángumi, lecitin, szódabikarbóna. Az általános „módosított keményítő” megnevezésből nem talál ki egy konkrét kódot. A névfelismerés nem tetszőleges ragozott vagy hibás OCR-szöveg megértése.
- Találati bizonyíték: E-szám alapján / név alapján. A névvel megtalált anyag a kerülőlistába is beleszámít.
- A mentes állításokat és a támogatott tagadó szerkezeteket külön kezeli. A „tejmentes” nem lesz automatikusan tej-találat, de egy másik helyen megadott tejport vagy nyomokban jelölést nem rejt el.
- Tejsav és tejsavópor, glutamát és glutén elkülönítése. Laktózmentes tej mellett megmarad a tej-találat.
- Többsoros „nyomokban” mondatok és a mondat után következő összetevőlista külön kezelése.
- Új Névfelismerés példája gomb és Csak bővebb magyarázattal keresőszűrő.
- Megmaradt a világos könyvborító és a nagyított alsó felirat (asztalon 20 px, mobilon 18 px).

A szabályok nem teljes nyelvi vagy allergénértékelést valósítanak meg. Összetett tagadások, szokatlan megfogalmazás, nem támogatott szinonima, OCR-hiba vagy több oszlopból rossz sorrendben kiolvasott szöveg hibás eredményt adhat. A „mentes” panel a beolvasott állítást mutatja, nem igazolja azt. Az eredeti csomagolás továbbra is ellenőrzendő.

Frissítés: a ZIP etelkisokos mappájának teljes tartalmát másold az F:\etelkisokos mappába felülírással. A változat az elemzo.js új fájlt is tartalmazza. Utána Ctrl+F5, majd Git add/commit/push. Az új funkciók saját böngészőn belül működnek, nincs új API-kulcs vagy előfizetés.

## 1.5 – Vonalkód az első lépés
A menüben a Termék beolvasása nyitja az új folyamatot.
1. Kamera indítása → tartsd a teljes vonalkódot a képbe. A sikeres beolvasás leállítja a kamerát és elindítja a termékkeresést.
2. Nézd meg a termék nevét és a betöltött összetevőket. Az alkalmazás nem kezdi el automatikusan az egészségügyi vagy allergénértékelést; kézi ellenőrzés után az Összetevők áttekintése gombbal folytathatsz.
3. Hiányzó vagy hiányos terméknél Címkefotózással folytatom gomb jelenik meg. A korábbi helyi OCR és kézi szövegbevitel megmaradt.

A vonalkód kézzel is beírható, illetve a Vonalkódot tartalmazó fotót választanék lehetőséggel képről is felismerhető. Az olvasó EAN-13, EAN-8, UPC-A és ITF kódot keres; a termékkeresés csak 8/12/13/14 számjegyű, ellenőrző számjeggyel validált GTIN-t fogad el. UPC-E és QR nem támogatott. Az elsődleges kamera hátsó kamera, de az eszköz/böngésző választása eltérhet. ZXing-alapú helyi olvasó; nem függ a böngésző BarcodeDetector támogatásától.

Kamera: HTTPS vagy localhost, böngészőengedély szükséges. Nem küldünk kameraképet külső elemzőnek. Csak a felismert vagy kézzel megadott vonalkód kerül az Open Food Facts-hoz. Az adatlapot az app nem tölti le újra automatikus ciklusban. Menüből kilépve, háttérbe helyezve vagy sikeres találatkor a kamerát leállítjuk; a régi hálózati válasz nem írhatja felül az új keresést.

Nem minden magyar termék van benne a közösségi adatbázisban. A receptúra és a régiós csomagolás eltérhet. Magyar összetevőt választunk elsőként, utána angolt, majd a rendelkezésre álló eredeti szöveget; nem magyar vagy ismeretlen nyelvnél külön figyelmeztetés és fotós továbblépés jelenik meg. Nincs automatikus fordítás, a helyi elemző nyelvi lefedettsége korlátozott.

Az offline kész jelzés a helyi funkciók és motorok betöltésére vonatkozik; a termékadatbázis lekérdezése továbbra is internetet igényel. Új API-kulcs vagy csomagtelepítés nem szükséges, a vonalkódolvasó is a ZIP része.

## 1.6 – Mentett termékek, kedvencek, összehasonlítás
A termék ellenőrzésekor a Mentés termékeimhez gombbal menthető az összetevőlista. Előtte a Kedvencként mentem jelölőnégyzet és a Saját megjegyzés mező is kitölthető. Mentéshez legalább 5 karakteres összetevőlista szükséges.

A Mentett termékek menüben név, vonalkód vagy megjegyzés szerint kereshetsz, illetve bekapcsolhatod a Csak a kedvenceim szűrőt. A csillag gomb a kedvenc jelölést váltja. A saját megjegyzés a termékkártyán szerkeszthető. Megnyitáskor az elmentett összetevőlista az aktuális profil szerint elemezhető, új adatbázis-lekérdezés nélkül. Ugyanazzal a vonalkóddal újramentve a meglévő termék frissül; a mentett termék megnyitása után a Mentés gomb szintén azt a bejegyzést frissíti. Új, másik kézi termékhez az Új termék kezdése gombot használd.

Két terméken kattints az Összehasonlításhoz gombra, majd felül az Összehasonlítás (2/2) gombra. A táblázatban a közvetlen összetevő- és nyomokban találatok, saját profil szerinti egyezések, kerülendő kódok, adalékanyagok, közös/eltérő felismert kódok, mentes állítások, megjegyzések és a teljes mentett szöveg vethetők össze. Mobilon a táblázat vízszintesen görgethető. Az összevetés nem egészségpontszám, nem rangsor és nem fogyaszthatósági minősítés.

A termékeket és megjegyzéseket ezen a készüléken, ebben a böngészőben tároljuk (etel-products-v1), legfeljebb 200 termékig. Nem kerülnek szerverre és nem szinkronizálódnak eszközök között. Böngészőadatok törlésekor vagy a böngésző tárhelyének eltávolításakor elveszhetnek. A profil exportálása nem exportálja a mentett termékeket. Tárhelyhiba esetén a program nem állítja, hogy a mentés sikerült. A termék törlése megerősítést kér és a termék megjegyzését is törli; az előzmények külön adatok.

Frissítés: a ZIP etelkisokos mappájának teljes tartalmát másold az F:\etelkisokos mappába felülírással, az új termekek.js fájllal együtt. A profil és a korábbi előzmények megmaradnak. Ctrl+F5, majd Git add/commit/push. A tesztekhez: npm test (nem igényel npm installt), vagy külön node tests.js és node tests-products.js.
