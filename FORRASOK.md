# Források és adatjavítások

Összeállítás: 2026-11-16. Az adatbázis névjegyzékének jogszabályi pillanatképe: 2025-11-04. Nem állítjuk, hogy ez a 2026-11-16-án hatályos teljes engedélyezési állapot.

- Hivatalos magyar uniós kódok és nevek: az 1333/2008/EK rendelet II. mellékletének B. része, 2025-11-04-i egységes szerkezet: https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:02008R1333-20251104
- Aktuális engedélyek és felhasználási feltételek: https://food.ec.europa.eu/food-safety/food-improvement-agents/additives/database_en
- Általános háttér és technológiai szerepek: https://www.efsa.europa.eu/en/topics/topic/food-additives
- Aspartám és PKU: https://www.efsa.europa.eu/en/topics/topic/aspartame
- Gyermekkori aktivitás és figyelem címkefigyelmeztetése: 1333/2008/EK rendelet V. melléklete; hat kód: E102, E104, E110, E122, E124, E129. A jogszabály kivételeket is tartalmaz, ezért az app a címke ellenőrzését kéri. E133 nincs ezen a hatos listán.
- Online termékadatok: https://world.openfoodfacts.org/ – közösségi adat, az aktuális csomagolással ellenőrizendő. A program nem tárol tartós helyi termékadatbázis-másolatot.
- OCR: https://github.com/naptha/tesseract.js ; https://github.com/naptha/tesseract.js-core ; magyar modell: https://tessdata.projectnaptha.com/4.0.0/hun.traineddata.gz ; angol modell: rendszerből csomagolt Tesseract modell. A modellek és az OCR-motorok licenceit a vendor/ocr mappa tartalmazza.

## Az átküldött adatbázishoz képest
A hibás sorokat nem egészségügyi adatként tettük közzé: helyettük a hivatalos magyar névjegyzék kód–név párosait használtuk. A saját, általános „biztonságos / kerülendő” minősítéseket eltávolítottuk. E249: kálium-nitrit; E250: nátrium-nitrit. E999: Quillajakivonat. A hivatalos lista neve és az alkalmazás rövid technológiai magyarázata külön adatmező. A glutamát és a glutén nem azonos; a hibás „glutérzékeny” megfeleltetés nem került az appba. PKU esetében nincs automatikus figyelmeztetés neotámra vagy advantámra pusztán az aszpartámmal való kémiai rokonság alapján.

Nincs általános automatikus „vesebeteg / asztmás / ADHD / terhes” fogyaszthatósági ítélet. Ilyen összefüggést a csomag nem tud egy fotóból vagy E-számból megállapítani. Egyéni kerülendő kódok beállíthatók, az allergéncsoportok pedig kulcsszavas keresést vezérelnek.
