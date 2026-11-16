# Ellenőrzés – 2026-11-16

Sikeres: JavaScript szintaxis; profil validálása és hibás importadat elutasítása; E-szám normalizálás és ismétlődésszűrés; 3/4 számjegyes és római számos altípusok; saját kerülőlista összesítése; E133 kihagyása a hat gyermekfigyelmeztetéses színezék közül; HTML-karakterek kódolása; 339 név és helyi fájlok jelenléte.

Sikeres böngészős ellenőrzés: profil megnyitása, kerülőlista mentése, offline gyorsítótár kész állapotának megjelenése, helyi WASM + magyar és angol modell betöltése, tesztképről E330 / E322 / E1105 felismerése. A tesztkép mesterséges, éles szöveges kép volt; ez nem általános pontossági mérés.

Node környezetben ugyanazon helyi nyelvi modellekkel külön OCR-futtatás is sikeres.

Nem ellenőrzött: valódi telefon kamerája és PWA-telepítés; repülő üzemmódos teljes folyamat; aktuális külső termékkeresési szolgáltatás. A reszponzív CSS elkészült, de fizikai mobilteszt még szükséges. Az app csak helyi csomagként készült el, a meglévő privát webcímet ez a ZIP nem frissíti automatikusan.

## 1.2 arculati frissítés
A 3-as baglyos terv alapján egyszerűsített SVG jel került a fejlécbe, a profilgombba és a kezdőoldali borítóba. Új SVG favicon, 32 px-es PNG favicon, valamint 192 és 512 px-es appikon. A rajzolt ikon 512 px-es renderét vizuálisan ellenőriztük. A service worker verziója 1.2-re frissült, az új eszközök az offline csomag részei. A funkcionális ellenőrzések újra sikeresek.

## 1.3 könyvborító
A kiválasztott világos borító külön nyitóképernyőként került be. Böngészőben ellenőrizve: belépés az appba, visszatérés a borítóhoz, középre igazított teljes kép. A funkcionális tesztek és a borító navigációjának ellenőrzése sikeres. Új fájlok az offline gyorsítótárban. Fizikai telefonos megjelenés külön még ellenőrizendő.

## 1.4 – Bővebb kisokos és névfelismerés
Sikeres JavaScript-szintaxisellenőrzés és regressziós teszt: új elemzo.js; 131 részletes leírás; név/E-kód ismétlődés; magyar és felvett angol elnevezések; E500(ii) altípus; névből felismert anyag saját kerülőlistás jelzése; mentes állítások, előre és hátra tagadott mondatok támogatott esetei; nyomokban jelölések többsoros változata; tejsav és tejsavópor; glutamát és glutén; földimogyoró és diófélék; szulfitkódok; XSS-karakterek; a borító és a belépés; az összes offline fájl jelenléte.

Sikeres böngészős folyamat: új Névfelismerés példája gomb → áttekintés → három anyag név alapján felismerve (citromsav, xantángumi, napraforgólecitin). A tejmentes állítás nem lett közvetlen tej-találat, de a nyomokban tejet jelzés megmaradt. Kisokosban szódabikarbóna keresés → E500(ii) találat → forráshivatkozások megnyitása a kártyán. Offline kész állapot látható volt. A böngészős ellenőrzés után a megjelenített bizonyítékok kis-/nagybetűtől független ismétlődésszűrését külön regressziós teszt igazolta.

A fizikai telefonkamera és repülő üzemmódos teljes folyamat továbbra sincs ebben a kiadásban külön ellenőrizve. Az algoritmus szabályalapú; nem általános természetesnyelv-megértés vagy allergénmentességi vizsgálat. Az E-szám névjegyzék jogszabályi időállapota továbbra is 2025-11-04; a bővítés technológiai magyarázatokat és felismerési neveket adott hozzá.

## 1.5 – Vonalkódos termékkeresés
Sikeres: GTIN-hossz és ellenőrző számjegy; kézi bevitel normalizálása; magyar összetevők elsőbbsége; angol nyelv felismerése; találat, nem talált és hiányos termék kezelése; 404, hálózati hiba és elavult válasz kizárása; korábbi termékadatok ürítése új kereséskor; fotós továbblépés; korábbi 1.4-es elemző és borító regressziós ellenőrzései; helyi offline fájlok jelenléte.

Valódi böngészős ellenőrzés: a csomagolt ZXing motor egy külön generált, éles EAN-13 tesztképről helyesen olvasta ki a 3017620422003 kódot. Az új appfelületen ugyanezzel a kézzel megadott kóddal az éles Open Food Facts adatbázis terméket és összetevőlistát adott. A termék neve, a forrás, a nem magyar nyelvre vonatkozó figyelmeztetés és az összetevők szerkeszthetően megjelentek. A Címkefotózással folytatom gomb megnyitotta a helyi OCR-es címkeeszközöket. Offline kész állapot látható volt.

Az élő telefonkamera nincs fizikailag ellenőrizve. A kameraengedély, fókusz, megvilágítás és az eszköz választása valós eszközön tesztelendő. Az éles termékadatbázisban nem minden magyar termék található meg; a teszt egyetlen ismert termékkel igazolta a lekérdezés működését, nem általános adatminőségi mérés. Az offline jelzés nem jelenti az online termékkeresés offline elérhetőségét.

## 1.6 – mentett termékek és összehasonlítás
- Automatizált tesztek: mentés, visszatöltés, kedvencek, megjegyzések, keresés, két termék összevetése, aktuális profil szerinti újraértékelés.
- Ellenőrizve: ismételt vonalkódos mentés frissítése, 200 termékes korlát, hibás tárolt adatok és tárhelyhiba kezelése, felhasználói szöveg biztonságos megjelenítése.
- Böngészőben végigpróbálva: két termék rögzítése, kedvenc és megjegyzés mentése, új adatlap ürítése, kijelölés és összehasonlító táblázat.
- A mentett termékek csak az adott böngészőben tárolódnak; nincs eszközök közötti szinkron. A profil exportja nem tartalmazza őket.
- Az összehasonlítás a mentett szövegből felismert adatokat mutatja, nem egészségügyi rangsor.
