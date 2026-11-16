"use strict";
// EU 1333/2008, 2025-11-04 consolidated snapshot. Names only, not a risk rating.
var ESZAM_NEVEK = {
  "E-100": "Kurkumin",
  "E-101": "Riboflavin",
  "E-102": "Tartrazin",
  "E-104": "Kinolinsárga",
  "E-110": "Sunset Yellow FCF/Narancssárga S",
  "E-120": "Kárminsav, kármin",
  "E-122": "Azorubin, karmazsin",
  "E-123": "Amarant",
  "E-124": "Ponceau 4R, Kosnilvörös A",
  "E-127": "Eritrozin",
  "E-129": "Alluravörös AC",
  "E-131": "Patentkék V",
  "E-132": "Indigotin, indigókármin",
  "E-133": "Brilliánskék FCF",
  "E-141": "Klorofillok és klorofillinek rézkomplexei",
  "E-142": "Zöld S",
  "E-151": "Brilliánsfekete PN",
  "E-155": "Barna HT",
  "E-163": "Antociánok",
  "E-180": "Litolrubin BK",
  "E-140": "Klorofillok és klorofillinek",
  "E-150a": "Karamell",
  "E-150b": "Szulfitos karamell",
  "E-150c": "Ammóniás karamell",
  "E-150d": "Szulfitos-ammóniás karamell",
  "E-153": "Növényi szén",
  "E-160a": "Karotinok",
  "E-160b(i)": "Annatto bixin",
  "E-160b(ii)": "Annatto norbixin",
  "E-160c": "Paprikakivonat, kapszantin, kapszorubin",
  "E-160d": "Likopin",
  "E-160e": "béta-apo-8'-Karotinal (C30)",
  "E-161b": "Lutein",
  "E-161g": "Kantaxantin ( *1 )",
  "E-162": "Céklavörös, betanin",
  "E-170": "Kalcium-karbonát",
  "E-171": "Titán-dioxid ( *2 )",
  "E-172": "Vas-oxidok és vas-hidroxidok",
  "E-173": "Alumínium",
  "E-174": "Ezüst",
  "E-175": "Arany",
  "E-420": "Szorbit",
  "E-421": "Mannit",
  "E-950": "Aceszulfám K",
  "E-951": "Aszpartám",
  "E-952": "Ciklamátok",
  "E-953": "Izomalt",
  "E-954": "Szacharinok",
  "E-955": "Szukralóz",
  "E-957": "Taumatin",
  "E-959": "Neoheszperidin DC",
  "E-960a": "Sztéviából származó szteviol-glikozidok",
  "E-960b": "Fermentáció útján nyert szteviol-glikozidok",
  "E-960c": "Enzimesen előállított szteviol-glikozidok",
  "E-960d": "Glikolizált szteviol-glikozidok",
  "E-961": "Neotám",
  "E-962": "Aszpartám-aceszulfámsó",
  "E-964": "Poliglucitszirup",
  "E-965": "Maltitok",
  "E-966": "Laktit",
  "E-967": "Xilit",
  "E-968": "Eritrit",
  "E-969": "Advantame",
  "E-200": "Szorbinsav",
  "E-202": "Kálium-szorbát",
  "E-210": "Benzoesav",
  "E-211": "Nátrium-benzoát",
  "E-212": "Kálium-benzoát",
  "E-213": "Kalcium-benzoát",
  "E-214": "Etil-p-hidroxi-benzoát",
  "E-215": "Nátrium-etil-p-hidroxi-benzoát",
  "E-218": "Metil-p-hidroxi-benzoát",
  "E-219": "Nátrium-metil-p-hidroxi-benzoát",
  "E-220": "Kén-dioxid",
  "E-221": "Nátrium-szulfit",
  "E-222": "Nátrium-hidrogén-szulfit",
  "E-223": "Nátrium-metabiszulfit",
  "E-224": "Kálium-metabiszulfit",
  "E-226": "Kalcium-szulfit",
  "E-227": "Kalcium-hidrogén-szulfit",
  "E-228": "Kálium-hidrogén-szulfit",
  "E-234": "Nizin",
  "E-235": "Natamicin",
  "E-239": "Hexametilén-tetramin",
  "E-242": "Dimetil-dikarbonát",
  "E-243": "Etil-lauroil-arginát",
  "E-246": "Glikolipidek",
  "E-249": "Kálium-nitrit",
  "E-250": "Nátrium-nitrit",
  "E-251": "Nátrium-nitrát",
  "E-252": "Kálium-nitrát",
  "E-260": "Ecetsav",
  "E-261": "Kálium-acetát",
  "E-262": "Nátrium-acetátok",
  "E-263": "Kalcium-acetát",
  "E-267": "Pufferolt ecet",
  "E-270": "Tejsav",
  "E-280": "Propionsav",
  "E-281": "Nátrium-propionát",
  "E-282": "Kalcium-propionát",
  "E-283": "Kálium-propionát",
  "E-284": "Bórsav",
  "E-285": "Nátrium-tetraborát (bórax)",
  "E-290": "Szén-dioxid",
  "E-296": "Almasav",
  "E-297": "Fumársav",
  "E-300": "Aszkorbinsav",
  "E-301": "Nátrium-aszkorbát",
  "E-302": "Kalcium-aszkorbát",
  "E-304": "Aszkorbinsav zsírsav-észterei",
  "E-306": "Tokoferolban gazdag kivonat",
  "E-307": "alfa-Tokoferol",
  "E-308": "gamma-Tokoferol",
  "E-309": "delta-Tokoferol",
  "E-310": "Propil-gallát",
  "E-315": "Eritroaszkorbinsav",
  "E-316": "Nátrium-eritroaszkorbát",
  "E-319": "terc-Butil-hidrokinon (TBHQ)",
  "E-320": "Butil-hidroxi-anizol (BHA)",
  "E-321": "Butil-hidroxi-toluol (BHT)",
  "E-322": "Lecitinek",
  "E-322a": "Zablecitin",
  "E-325": "Nátrium-laktát",
  "E-326": "Kálium-laktát",
  "E-327": "Kalcium-laktát",
  "E-330": "Citromsav",
  "E-331": "Nátrium-citrátok",
  "E-332": "Kálium-citrátok",
  "E-333": "Kalcium-citrátok",
  "E-334": "Borkősav (L(+)-)",
  "E-335": "Nátrium-tartarátok",
  "E-336": "Kálium-tartarátok",
  "E-337": "Nátrium-kálium-tartarát",
  "E-338": "Foszforsav",
  "E-339": "Nátrium-foszfátok",
  "E-340": "Kálium-foszfátok",
  "E-341": "Kalcium-foszfátok",
  "E-343": "Magnézium-foszfátok",
  "E-345(i)": "Trimagnézium-dicitrát",
  "E-350": "Nátrium-malátok",
  "E-351": "Kálium-malát",
  "E-352": "Kalcium-malátok",
  "E-353": "Metaborkősav",
  "E-354": "Kalcium-tartarát",
  "E-355": "Adipinsav",
  "E-356": "Nátrium-adipát",
  "E-357": "Kálium-adipát",
  "E-363": "Borostyánkősav",
  "E-380": "Triammónium-citrát",
  "E-385": "Kalcium-dinátrium-etilén-diamin-tetraacetát (kalcium-dinátrium-EDTA)",
  "E-392": "Rozmaringkivonatok",
  "E-400": "Alginsav",
  "E-401": "Nátrium-alginát",
  "E-402": "Kálium-alginát",
  "E-403": "Ammónium-alginát",
  "E-404": "Kalcium-alginát",
  "E-405": "Propán-1,2-diol-alginát",
  "E-406": "Agar",
  "E-407a": "Feldolgozott Euchema moszat",
  "E-407": "Karragén",
  "E-410": "Szentjánoskenyérliszt",
  "E-412": "Guargumi",
  "E-413": "Tragantmézga",
  "E-414": "Gumiarábikum (akácmézga)",
  "E-415": "Xantángumi",
  "E-416": "Karayagumi",
  "E-417": "Taramagliszt",
  "E-418": "Gellángumi",
  "E-422": "Glicerin",
  "E-423": "Oktenil-borostyánkősavval módosított gumiarábikum",
  "E-425": "Konjak",
  "E-426": "Szója-hemicellulóz",
  "E-427": "Kassziagumi",
  "E-431": "Polioxi-etilén-sztearát",
  "E-432": "Polioxi-etilén-szorbitan-monolaurát (poliszorbát 20)",
  "E-433": "Polioxi-etilén-szorbitan-monooleát (poliszorbát 80)",
  "E-434": "Polioxi-etilén-szorbitan-monopalmitát (poliszorbát 40)",
  "E-435": "Polioxi-etilén-szorbitan-monosztearát (poliszorbát 60)",
  "E-436": "Polioxi-etilén-szorbitan-trisztearát (poliszorbát 65)",
  "E-440": "Pektinek",
  "E-442": "Ammónium-foszfatidok",
  "E-444": "Szacharóz-acetát-izobutirát",
  "E-445": "Fagyanta glicerin-észterei",
  "E-450": "Difoszfátok",
  "E-451": "Trifoszfátok",
  "E-452": "Polifoszfátok",
  "E-456": "Kálium-poliaszpartát",
  "E-459": "béta-Ciklodextrin",
  "E-460": "Cellulóz",
  "E-461": "Metil-cellulóz",
  "E-462": "Etil-cellulóz",
  "E-463": "Hidroxipropil-cellulóz",
  "E-463a": "Alacsony szubsztitúciós fokú hidroxipropil-cellulóz (L-HPC)",
  "E-464": "Hidroxipropil-metil-cellulóz",
  "E-465": "Etil-metil-cellulóz",
  "E-466": "Nátrium-karboxi-metil-cellulóz, cellulózgumi",
  "E-468": "Térhálós nátrium-karboxi-metil-cellulóz, térhálós cellulózgumi",
  "E-469": "Enzimesen hidrolizált karboxi-metil-cellulóz, enzimesen hidrolizált cellulózgumi",
  "E-470a": "Zsírsavak nátrium-, kálium- és kalciumsói",
  "E-470b": "Zsírsavak magnéziumsói",
  "E-471": "Zsírsavak mono- és digliceridjei",
  "E-472a": "Zsírsavak mono- és digliceridjeinek ecetsav-észterei",
  "E-472b": "Zsírsavak mono- és digliceridjeinek tejsav-észterei",
  "E-472c": "Zsírsavak mono- és digliceridjeinek citromsav-észterei",
  "E-472d": "Zsírsavak mono- és digliceridjeinek borkősav-észterei",
  "E-472e": "Zsírsavak mono- és digliceridjeinek mono- és diacetil-borkősav-észterei",
  "E-472f": "Zsírsavak mono- és digliceridjeinek vegyes ecetsav- és borkősav-észterei",
  "E-473": "Zsírsavak szacharóz-észterei",
  "E-474": "Szaharózgliceridek",
  "E-475": "Zsírsavak poliglicerin-észterei",
  "E-476": "Poliglicerin-poliricinoleát",
  "E-477": "Zsírsavak propán-1,2-diol-észterei",
  "E-479b": "Hőkezeléssel oxidált szójaolaj zsírsavak mono- és digliceridjeivel reagáltatva",
  "E-481": "Nátrium-sztearoil-2-laktilát",
  "E-482": "Kalcium-sztearoil-2-laktilát",
  "E-491": "Szorbitan-monosztearát",
  "E-492": "Szorbitan-trisztearát",
  "E-493": "Szorbitan-monolaurát",
  "E-494": "Szorbitan-monooleát",
  "E-495": "Szorbitan-monopalmitát",
  "E-499": "Magas sztigmaszterin-tartalmú növényi szterinek",
  "E-500": "Nátrium-karbonátok",
  "E-501": "Kálium-karbonátok",
  "E-503": "Ammónium-karbonátok",
  "E-504": "Magnézium-karbonátok",
  "E-507": "Sósav",
  "E-508": "Kálium-klorid",
  "E-509": "Kalcium-klorid",
  "E-511": "Magnézium-klorid",
  "E-512": "Ón(II)-klorid",
  "E-513": "Kénsav",
  "E-514": "Nátrium-szulfátok",
  "E-515": "Kálium-szulfátok",
  "E-516": "Kalcium-szulfát",
  "E-517": "Ammónium-szulfát",
  "E-520": "Alumínium-szulfát",
  "E-521": "Alumínium-nátrium-szulfát",
  "E-522": "Alumínium-kálium-szulfát",
  "E-523": "Alumínium-ammónium-szulfát",
  "E-524": "Nátrium-hidroxid",
  "E-525": "Kálium-hidroxid",
  "E-526": "Kalcium-hidroxid",
  "E-527": "Ammónium-hidroxid",
  "E-528": "Magnézium-hidroxid",
  "E-529": "Kalcium-oxid",
  "E-530": "Magnézium-oxid",
  "E-534": "Vas-tartarát",
  "E-535": "Nátrium-vas(II)-cianid",
  "E-536": "Kálium-vas(II)-cianid",
  "E-538": "Kalcium-vas(II)-cianid",
  "E-541": "Savas nátrium-alumínium-foszfát",
  "E-551": "Szilícium-dioxid",
  "E-552": "Kalcium-szilikát",
  "E-553a": "Magnézium-szilikát",
  "E-553b": "Talkum",
  "E-554": "Nátrium-alumínium-szilikát",
  "E-555": "Kálium-alumínium-szilikát",
  "E-556": "Kalcium-alumínium-szilikát",
  "E-558": "Bentonit",
  "E-559": "Alumínium-szilikát (kaolin)",
  "E-570": "Zsírsavak",
  "E-574": "Glükonsav",
  "E-575": "Glükono-delta-lakton",
  "E-576": "Nátrium-glükonát",
  "E-577": "Kálium-glükonát",
  "E-578": "Kalcium-glükonát",
  "E-579": "Vas(II)-glükonát",
  "E-585": "Vas(II)-laktát",
  "E-586": "4-hexil-rezorcin",
  "E-620": "Glutaminsav",
  "E-621": "Nátrium-glutamát",
  "E-622": "Kálium-glutamát",
  "E-623": "Kalcium-diglutamát",
  "E-624": "Ammónium-glutamát",
  "E-625": "Magnézium-diglutamát",
  "E-626": "Guanilsav",
  "E-627": "Dinátrium-guanilát",
  "E-628": "Dikálium-guanilát",
  "E-629": "Kalcium-guanilát",
  "E-630": "Inozinsav",
  "E-631": "Dinátrium-inozinát",
  "E-632": "Dikálium-inozinát",
  "E-633": "Kalcium-inozinát",
  "E-634": "Kalcium-5'-ribonukleotidok",
  "E-635": "Dinátrium-5'-ribonukleotidok",
  "E-640": "Glicin és nátriumsója",
  "E-641": "L-leucin",
  "E-650": "Cink-acetát",
  "E-900": "Dimetil-polisziloxán",
  "E-901": "Fehér és sárga méhviasz",
  "E-902": "Kandelillaviasz",
  "E-903": "Karnaubaviasz",
  "E-904": "Sellak",
  "E-905": "Mikrokristályos viasz",
  "E-907": "Hidrogénezett poli-1-decén",
  "E-914": "Oxidált polietilén viasz",
  "E-920": "L-Cisztein",
  "E-927b": "Karbamid",
  "E-938": "Argon",
  "E-939": "Hélium",
  "E-941": "Nitrogén",
  "E-942": "Dinitrogén-oxid",
  "E-943a": "Bután",
  "E-943b": "Izobután",
  "E-944": "Propán",
  "E-948": "Oxigén",
  "E-949": "Hidrogén",
  "E-999": "Quillajakivonat",
  "E-1103": "Invertáz",
  "E-1105": "Lizozim",
  "E-1200": "Polidextróz",
  "E-1201": "Polivinilpirrolidon",
  "E-1202": "Polivinilpolipirrolidon",
  "E-1203": "Polivinil-alkohol (PVA)",
  "E-1204": "Pullulán",
  "E-1205": "Bázikus metakrilát-kopolimer",
  "E-1206": "Semleges metakrilát-kopolimer",
  "E-1207": "Anionos metakrilát-kopolimer",
  "E-1208": "Poli(vinil-pirrolidon)-vinil-acetát kopolimer",
  "E-1209": "Poli(vinil-alkohol)-poli(etilénglikol) ojtott kopolimer",
  "E-1210": "Karbomer",
  "E-1404": "Oxidált keményítő",
  "E-1410": "Monokeményítő-foszfát",
  "E-1412": "Dikeményítő-foszfát",
  "E-1413": "Foszforilezett dikeményítő-foszfát",
  "E-1414": "Acetilezett dikeményítő-foszfát",
  "E-1420": "Acetilezett keményítő",
  "E-1422": "Acetilezett dikeményítő-adipát",
  "E-1440": "Hidroxipropil-keményítő",
  "E-1442": "Hidroxipropil-dikeményítő-foszfát",
  "E-1450": "Keményítő-nátrium-oktenil-szukcinát",
  "E-1451": "Acetilezett oxidált keményítő",
  "E-1452": "Keményítő-alumínium-oktenil-szukcinát",
  "E-1505": "Trietil-citrát",
  "E-1517": "Gliceril-diacetát (diacetin)",
  "E-1518": "Gliceril-triacetát (triacetin)",
  "E-1519": "Benzil-alkohol",
  "E-1520": "Propán-1,2-diol (propilénglikol)",
  "E-1521": "Polietilénglikol"
};

var ESZAM_LEIRASOK = {
  "E-100": [
    "Színezék",
    "Sárga színt ad az élelmiszereknek."
  ],
  "E-160a": [
    "Színezék",
    "Sárgás-narancsos szín kialakítására használják."
  ],
  "E-200": [
    "Tartósítószer",
    "Segíti az eltarthatóságot, például az élesztők és penészek szaporodásának gátlásával."
  ],
  "E-202": [
    "Tartósítószer",
    "A szorbinsav sója; az eltarthatóságot segíti."
  ],
  "E-211": [
    "Tartósítószer",
    "Mikroorganizmusok szaporodásának gátlására használják."
  ],
  "E-220": [
    "Tartósítószer, antioxidáns",
    "A szulfitok csoportjához kapcsolódó jelölés. Ellenőrizd a címke allergénjelölését."
  ],
  "E-250": [
    "Tartósítószer",
    "Egyes pácolt húskészítmények tartósításában és színének kialakításában használják."
  ],
  "E-300": [
    "Antioxidáns",
    "C-vitamin; adalékanyagként az oxidáció lassítására használják."
  ],
  "E-301": [
    "Antioxidáns",
    "Az aszkorbinsav sója; segít lassítani az oxidációt."
  ],
  "E-322": [
    "Emulgeálószer",
    "Segíti például a zsír és a víz keveredését. Eredete lehet szója vagy tojás is; a címkén jelölt forrást ellenőrizd."
  ],
  "E-330": [
    "Savanyúságot szabályozó anyag",
    "Az íz és a savasság beállítására használják."
  ],
  "E-331": [
    "Savanyúságot szabályozó anyag",
    "A citromsav sói; a savasság beállításában segítenek."
  ],
  "E-407": [
    "Sűrítőanyag, zselésítőanyag",
    "Az állag kialakítására és stabilizálására használják."
  ],
  "E-412": [
    "Sűrítőanyag",
    "Növényi eredetű anyag, amely sűrűbb állagot adhat."
  ],
  "E-415": [
    "Sűrítőanyag, stabilizátor",
    "Segít kialakítani és megőrizni a termék állagát."
  ],
  "E-440": [
    "Zselésítőanyag",
    "Gyakran lekvárok és gyümölcskészítmények zselésítésére használják."
  ],
  "E-471": [
    "Emulgeálószer",
    "Segít az összetevők egyenletes eloszlásában; eredete a kódból nem állapítható meg."
  ],
  "E-500": [
    "Térfogatnövelő szer",
    "Sütőipari termékek lazítására is használják."
  ],
  "E-621": [
    "Ízfokozó",
    "Az umami ízérzet erősítésére használják."
  ],
  "E-950": [
    "Édesítőszer",
    "Édes ízt ad az élelmiszernek."
  ],
  "E-951": [
    "Édesítőszer",
    "Fenilalanin-forrást tartalmaz; ellenőrizd a csomagolás külön figyelmeztetését."
  ],
  "E-955": [
    "Édesítőszer",
    "Édes íz kialakítására használják."
  ],
  "E-967": [
    "Édesítőszer",
    "Cukoralkohol, amelyet édesítésre használnak."
  ],
  "E-968": [
    "Édesítőszer",
    "Cukoralkohol, amelyet édesítésre használnak."
  ]
};
var ESZAM_INDEX = Object.fromEntries(Object.entries(ESZAM_NEVEK).map(([kod,nev])=>[kod,{kod,nev,funk:(ESZAM_LEIRASOK[kod]||["Adalékanyag"])[0],magy:(ESZAM_LEIRASOK[kod]||["","A pontos technológiai szerepet a csomagolás összetevőlistáján ellenőrizd. A jegyzékben szereplés nem jelent korlátlan felhasználhatóságot."])[1]}]));

// 1.4: közérthető technológiai magyarázatok és ellenőrzött felismerési nevek.
var ESZAM_RESZLETEK = [
  {
    "kod": "E-100",
    "funk": "Színezék",
    "magy": "Sárga színt adhat az élelmiszernek. A kurkumin a kurkumában is előforduló színanyag.",
    "aliases": [
      "kurkumin",
      "curcumin"
    ]
  },
  {
    "kod": "E-101",
    "funk": "Színezék",
    "magy": "Sárgás színt adhat a terméknek; a riboflavin B2-vitamin néven is ismert.",
    "aliases": [
      "riboflavin",
      "riboflavinok"
    ]
  },
  {
    "kod": "E-102",
    "funk": "Színezék",
    "magy": "Sárga színt alakít ki. A gyermekek aktivitásával és figyelmével kapcsolatos külön címkejelölés hat érintett színezékének egyike.",
    "aliases": [
      "tartrazin",
      "tartrazine"
    ]
  },
  {
    "kod": "E-104",
    "funk": "Színezék",
    "magy": "Sárga szín kialakítására szolgál. A hat, gyermekekkel kapcsolatos külön címkefigyelmeztetéshez kötött színezék egyike; a címkét és a jogszabály kivételeit is ellenőrizni kell.",
    "aliases": [
      "kinolinsárga",
      "kinolin-sárga",
      "quinoline yellow"
    ]
  },
  {
    "kod": "E-110",
    "funk": "Színezék",
    "magy": "Narancssárga színt adhat. A gyermekek aktivitásával és figyelmével kapcsolatos külön címkefigyelmeztetéshez tartozó hat színezék egyike.",
    "aliases": [
      "narancssárga s",
      "sunset yellow fcf"
    ]
  },
  {
    "kod": "E-120",
    "funk": "Színezék",
    "magy": "Vörös színt adhat; rovareredetű színanyag. Az eredet és a személyes kerülőlista szempontjából is érdemes megnézni a jelölést.",
    "aliases": [
      "kármin",
      "kárminok",
      "kárminsav",
      "carminic acid",
      "carmine"
    ]
  },
  {
    "kod": "E-122",
    "funk": "Színezék",
    "magy": "Vörös szín kialakítására használják. A gyermekekkel kapcsolatos külön címkefigyelmeztetés hat érintett színezékének egyike.",
    "aliases": [
      "azorubin",
      "karmazsin",
      "karmozin",
      "carmoisine"
    ]
  },
  {
    "kod": "E-124",
    "funk": "Színezék",
    "magy": "Vörös színt adhat. A gyermekek aktivitásával és figyelmével kapcsolatos külön címkejelölés hat érintett színezékének egyike.",
    "aliases": [
      "ponceau 4r",
      "kosnilvörös a"
    ]
  },
  {
    "kod": "E-129",
    "funk": "Színezék",
    "magy": "Vörös színt adhat az élelmiszernek. A gyermekekkel kapcsolatos külön címkefigyelmeztetés hat érintett színezékének egyike.",
    "aliases": [
      "alluravörös ac",
      "allura red ac",
      "allura-vörös"
    ]
  },
  {
    "kod": "E-133",
    "funk": "Színezék",
    "magy": "Kék szín kialakítására használják. Nem tartozik a hat, gyermekek aktivitásával és figyelmével kapcsolatos külön címkefigyelmeztetésben felsorolt színezék közé.",
    "aliases": [
      "brillantkék fcf",
      "brilliant blue fcf"
    ]
  },
  {
    "kod": "E-140",
    "funk": "Színezék",
    "magy": "Zöld színt alakíthat ki a termékben. A klorofillok növényi zöld színanyagok.",
    "aliases": [
      "klorofillok",
      "klorofill",
      "chlorophylls"
    ]
  },
  {
    "kod": "E-150a",
    "funk": "Színezék",
    "magy": "Barna színt adó karamellszínezék. A karamellszín különböző előállítású típusait az a, b, c és d betű különbözteti meg.",
    "aliases": [
      "egyszerű karamell",
      "sima karamell"
    ]
  },
  {
    "kod": "E-150b",
    "funk": "Színezék",
    "magy": "Barna színt adó, szulfitos eljárással készített karamellszínezék. Az allergénjelölést az adott csomagoláson ellenőrizd.",
    "aliases": [
      "szulfitos karamell"
    ]
  },
  {
    "kod": "E-150c",
    "funk": "Színezék",
    "magy": "Barna szín kialakítására használják; ammóniás eljárással készített karamellszínezék.",
    "aliases": [
      "ammóniás karamell"
    ]
  },
  {
    "kod": "E-150d",
    "funk": "Színezék",
    "magy": "Barna színt adó, ammóniás-szulfitos eljárással készített karamellszínezék. Az allergénjelölést a csomagoláson ellenőrizd.",
    "aliases": [
      "ammóniás-szulfitos karamell"
    ]
  },
  {
    "kod": "E-153",
    "funk": "Színezék",
    "magy": "Fekete szín kialakítására szolgáló növényi szén.",
    "aliases": [
      "növényi szén",
      "vegetable carbon"
    ]
  },
  {
    "kod": "E-160a",
    "funk": "Színezék",
    "magy": "Sárgás-narancssárga színt adó karotinok. A kód több rokon színanyagot fog össze.",
    "aliases": [
      "karotinok",
      "béta-karotin",
      "beta-carotene"
    ]
  },
  {
    "kod": "E-160c",
    "funk": "Színezék",
    "magy": "Paprikából származó színanyagokkal narancsos-vöröses árnyalatot alakít ki.",
    "aliases": [
      "paprikakivonat",
      "paprika extract",
      "kapszantin"
    ]
  },
  {
    "kod": "E-160d",
    "funk": "Színezék",
    "magy": "Vörös színt adó likopin; a paradicsom jellegzetes színanyagai között is megtalálható.",
    "aliases": [
      "likopin",
      "lycopene"
    ]
  },
  {
    "kod": "E-162",
    "funk": "Színezék",
    "magy": "Céklából származó vörös színanyaggal színezi a terméket.",
    "aliases": [
      "céklavörös",
      "betanin",
      "beetroot red"
    ]
  },
  {
    "kod": "E-163",
    "funk": "Színezék",
    "magy": "Vöröses, lilás vagy kékes színt adó antociánok. A megjelenő árnyalatot az élelmiszer közege is befolyásolja.",
    "aliases": [
      "antociánok",
      "antocianinok",
      "anthocyanins"
    ]
  },
  {
    "kod": "E-170",
    "funk": "Színezék, savanyúságot szabályozó anyag",
    "magy": "Kalcium-karbonát; fehér szín kialakítására vagy a savasság beállítására is szolgálhat. A tényleges funkciót a címke adja meg.",
    "aliases": [
      "kalcium-karbonát",
      "calcium carbonate"
    ]
  },
  {
    "kod": "E-200",
    "funk": "Tartósítószer",
    "magy": "Az eltarthatóságot segíti, például élesztők és penészek szaporodásának gátlásával.",
    "aliases": [
      "szorbinsav",
      "sorbic acid"
    ]
  },
  {
    "kod": "E-202",
    "funk": "Tartósítószer",
    "magy": "A szorbinsav káliumsója. A mikroorganizmusok szaporodásának gátlásával segíti az eltarthatóságot.",
    "aliases": [
      "kálium-szorbát",
      "potassium sorbate"
    ]
  },
  {
    "kod": "E-210",
    "funk": "Tartósítószer",
    "magy": "Benzoesav; mikroorganizmusok szaporodásának gátlására használható. A használat feltételei élelmiszertípusonként eltérnek.",
    "aliases": [
      "benzoesav",
      "benzoic acid"
    ]
  },
  {
    "kod": "E-211",
    "funk": "Tartósítószer",
    "magy": "A benzoesav nátriumsója; a tartósítást segíti. A kód önmagában nem ad információt a felhasznált mennyiségről.",
    "aliases": [
      "nátrium-benzoát",
      "sodium benzoate"
    ]
  },
  {
    "kod": "E-212",
    "funk": "Tartósítószer",
    "magy": "A benzoesav káliumsója; az eltarthatóságot segítő tartósítószer.",
    "aliases": [
      "kálium-benzoát",
      "potassium benzoate"
    ]
  },
  {
    "kod": "E-213",
    "funk": "Tartósítószer",
    "magy": "A benzoesav kalciumsója; mikroorganizmusok szaporodásának gátlására használják.",
    "aliases": [
      "kalcium-benzoát",
      "calcium benzoate"
    ]
  },
  {
    "kod": "E-220",
    "funk": "Tartósítószer, antioxidáns",
    "magy": "Tartósításhoz és az oxidáció lassításához használható kén-dioxid. A szulfitokra vonatkozó allergénjelölést a teljes címkén ellenőrizd.",
    "aliases": [
      "kén-dioxid",
      "sulphur dioxide",
      "sulfur dioxide"
    ]
  },
  {
    "kod": "E-221",
    "funk": "Tartósítószer, antioxidáns",
    "magy": "Nátrium-szulfit; az eltarthatóság és az oxidáció elleni védelem érdekében használható. A szulfitjelölést ellenőrizd.",
    "aliases": [
      "nátrium-szulfit",
      "sodium sulphite",
      "sodium sulfite"
    ]
  },
  {
    "kod": "E-222",
    "funk": "Tartósítószer, antioxidáns",
    "magy": "Nátrium-hidrogén-szulfit; szulfitvegyület, amely tartósítást és az oxidáció lassítását szolgálhatja.",
    "aliases": [
      "nátrium-hidrogén-szulfit",
      "sodium hydrogen sulphite"
    ]
  },
  {
    "kod": "E-223",
    "funk": "Tartósítószer, antioxidáns",
    "magy": "Nátrium-metabiszulfit; a szulfitok közé tartozó anyag. A csomagolás allergénjelölését is nézd meg.",
    "aliases": [
      "nátrium-metabiszulfit",
      "sodium metabisulphite",
      "sodium metabisulfite"
    ]
  },
  {
    "kod": "E-224",
    "funk": "Tartósítószer, antioxidáns",
    "magy": "Kálium-metabiszulfit; tartósításra és az oxidáció lassítására használható szulfitvegyület.",
    "aliases": [
      "kálium-metabiszulfit",
      "potassium metabisulphite"
    ]
  },
  {
    "kod": "E-226",
    "funk": "Tartósítószer, antioxidáns",
    "magy": "Kalcium-szulfit; a szulfitok közé tartozó anyag. A személyes allergénbeállítással és a teljes címkével együtt értelmezd.",
    "aliases": [
      "kalcium-szulfit",
      "calcium sulphite"
    ]
  },
  {
    "kod": "E-227",
    "funk": "Tartósítószer, antioxidáns",
    "magy": "Kalcium-hidrogén-szulfit; tartósítást segítő szulfitvegyület. Ellenőrizd a szulfitokra vonatkozó jelölést.",
    "aliases": [
      "kalcium-hidrogén-szulfit",
      "calcium hydrogen sulphite"
    ]
  },
  {
    "kod": "E-228",
    "funk": "Tartósítószer, antioxidáns",
    "magy": "Kálium-hidrogén-szulfit; az eltarthatóságot és az oxidáció elleni védelmet segítheti. A szulfitjelölést ellenőrizd.",
    "aliases": [
      "kálium-hidrogén-szulfit",
      "potassium hydrogen sulphite"
    ]
  },
  {
    "kod": "E-234",
    "funk": "Tartósítószer",
    "magy": "Nizin; egyes baktériumok szaporodásának gátlására szolgáló anyag. Felhasználása terméktípushoz és feltételekhez kötött.",
    "aliases": [
      "nizin",
      "nisin"
    ]
  },
  {
    "kod": "E-235",
    "funk": "Tartósítószer",
    "magy": "Natamicin; gombák szaporodásának gátlására, meghatározott termékek felületi kezelésére használható.",
    "aliases": [
      "natamicin",
      "natamycin",
      "pimaricin"
    ]
  },
  {
    "kod": "E-249",
    "funk": "Tartósítószer",
    "magy": "Kálium-nitrit; meghatározott pácolt húskészítmények tartósításában és jellegzetes színének kialakításában használható. A felhasználás szabályozott.",
    "aliases": [
      "kálium-nitrit",
      "potassium nitrite"
    ]
  },
  {
    "kod": "E-250",
    "funk": "Tartósítószer",
    "magy": "Nátrium-nitrit; egyes pácolt húskészítmények tartósítását és színkialakítását szolgálja. A kód nem árulja el a termékben lévő mennyiséget.",
    "aliases": [
      "nátrium-nitrit",
      "sodium nitrite"
    ]
  },
  {
    "kod": "E-251",
    "funk": "Tartósítószer",
    "magy": "Nátrium-nitrát; meghatározott élelmiszerek tartósításában használható. Nem azonos az E250 nátrium-nitrittel.",
    "aliases": [
      "nátrium-nitrát",
      "sodium nitrate"
    ]
  },
  {
    "kod": "E-252",
    "funk": "Tartósítószer",
    "magy": "Kálium-nitrát; meghatározott termékek tartósítását segítheti. A nitrátok és nitritek külön kódokat kapnak.",
    "aliases": [
      "kálium-nitrát",
      "potassium nitrate"
    ]
  },
  {
    "kod": "E-260",
    "funk": "Savanyúságot szabályozó anyag, tartósítószer",
    "magy": "Ecetsav; az íz és a savasság beállítását, illetve a tartósítást szolgálhatja.",
    "aliases": [
      "ecetsav",
      "acetic acid"
    ]
  },
  {
    "kod": "E-261",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Kálium-acetát; az ecetsav káliumsója. A savasság beállításában használható.",
    "aliases": [
      "kálium-acetát",
      "potassium acetate"
    ]
  },
  {
    "kod": "E-262",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Nátrium-acetátok; az ecetsav sói. Savasságszabályozásra és egyes termékek tartósításának támogatására használhatók.",
    "aliases": [
      "nátrium-acetát",
      "nátrium-acetátok",
      "sodium acetates"
    ]
  },
  {
    "kod": "E-263",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Kalcium-acetát; az ecetsav kalciumsója. A termék savasságának beállítását szolgálhatja.",
    "aliases": [
      "kalcium-acetát",
      "calcium acetate"
    ]
  },
  {
    "kod": "E-270",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Tejsav; az íz és a savasság beállítására használják. A tejsav neve önmagában nem bizonyít tejösszetevőt vagy tejfehérjét.",
    "aliases": [
      "tejsav",
      "lactic acid"
    ]
  },
  {
    "kod": "E-280",
    "funk": "Tartósítószer",
    "magy": "Propionsav; a penészek szaporodásának gátlásával segítheti az eltarthatóságot.",
    "aliases": [
      "propionsav",
      "propionic acid"
    ]
  },
  {
    "kod": "E-281",
    "funk": "Tartósítószer",
    "magy": "Nátrium-propionát; a propionsav nátriumsója, az eltarthatóságot segítheti.",
    "aliases": [
      "nátrium-propionát",
      "sodium propionate"
    ]
  },
  {
    "kod": "E-282",
    "funk": "Tartósítószer",
    "magy": "Kalcium-propionát; a propionsav sója, a penészedés gátlására is használható.",
    "aliases": [
      "kalcium-propionát",
      "calcium propionate"
    ]
  },
  {
    "kod": "E-283",
    "funk": "Tartósítószer",
    "magy": "Kálium-propionát; a propionsav sója, tartósítószerként használható.",
    "aliases": [
      "kálium-propionát",
      "potassium propionate"
    ]
  },
  {
    "kod": "E-290",
    "funk": "Csomagológáz, szén-dioxid",
    "magy": "Gázként az italok szénsavasságának kialakítására vagy csomagolási célra is szolgálhat. A konkrét szerepet a termék jelölése adja meg.",
    "aliases": [
      "szén-dioxid",
      "carbon dioxide"
    ]
  },
  {
    "kod": "E-296",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Almasav; savanykás ízt és megfelelő savasságot alakíthat ki a termékben.",
    "aliases": [
      "almasav",
      "malic acid"
    ]
  },
  {
    "kod": "E-297",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Fumársav; a savasság és az íz beállítására használható.",
    "aliases": [
      "fumársav",
      "fumaric acid"
    ]
  },
  {
    "kod": "E-300",
    "funk": "Antioxidáns",
    "magy": "Aszkorbinsav, más néven C-vitamin. Adalékanyagként az oxidáció és az ezzel járó minőségváltozás lassítására használják.",
    "aliases": [
      "aszkorbinsav",
      "ascorbic acid"
    ]
  },
  {
    "kod": "E-301",
    "funk": "Antioxidáns",
    "magy": "Nátrium-aszkorbát; az aszkorbinsav nátriumsója. Segíti az oxidáció lassítását.",
    "aliases": [
      "nátrium-aszkorbát",
      "sodium ascorbate"
    ]
  },
  {
    "kod": "E-302",
    "funk": "Antioxidáns",
    "magy": "Kalcium-aszkorbát; az aszkorbinsav kalciumsója. Az oxidáció elleni védelmet szolgálja.",
    "aliases": [
      "kalcium-aszkorbát",
      "calcium ascorbate"
    ]
  },
  {
    "kod": "E-306",
    "funk": "Antioxidáns",
    "magy": "Tokoferolban gazdag kivonat; zsiradékok oxidációjának lassítására használható.",
    "aliases": [
      "tokoferolban gazdag kivonat",
      "tocopherol-rich extract"
    ]
  },
  {
    "kod": "E-307",
    "funk": "Antioxidáns",
    "magy": "Alfa-tokoferol; az E-vitamin-csoport egyik tagja. A termék oxidációjának lassítását szolgálhatja.",
    "aliases": [
      "alfa-tokoferol",
      "alpha-tocopherol"
    ]
  },
  {
    "kod": "E-315",
    "funk": "Antioxidáns",
    "magy": "Eritorbinsav; az oxidáció lassítására használt anyag, többek között egyes húskészítményeknél.",
    "aliases": [
      "eritorbinsav",
      "erythorbic acid"
    ]
  },
  {
    "kod": "E-316",
    "funk": "Antioxidáns",
    "magy": "Nátrium-eritorbát; az eritorbinsav sója. Az oxidáció lassítását szolgálhatja.",
    "aliases": [
      "nátrium-eritorbát",
      "sodium erythorbate"
    ]
  },
  {
    "kod": "E-322",
    "funk": "Emulgeálószer",
    "magy": "Lecitinek; segítik például a zsír és a víz egyenletes keveredését. Lehet szója-, tojás- vagy más eredetű; az allergént a megadott forrásból kell megállapítani.",
    "aliases": [
      "lecitin",
      "lecitinek",
      "szójalecitin",
      "napraforgólecitin",
      "lecithin",
      "lecithins"
    ]
  },
  {
    "kod": "E-325",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Nátrium-laktát; a tejsav sója. A savasság és a termék tulajdonságainak beállítását szolgálhatja. A laktát név önmagában nem jelenti tejfehérje jelenlétét.",
    "aliases": [
      "nátrium-laktát",
      "sodium lactate"
    ]
  },
  {
    "kod": "E-326",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Kálium-laktát; a tejsav káliumsója. A savasság szabályozásában használható.",
    "aliases": [
      "kálium-laktát",
      "potassium lactate"
    ]
  },
  {
    "kod": "E-327",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Kalcium-laktát; a tejsav kalciumsója. A laktát megnevezésből nem következik önmagában tejallergén jelenléte.",
    "aliases": [
      "kalcium-laktát",
      "calcium lactate"
    ]
  },
  {
    "kod": "E-330",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Citromsav; savanykás ízt és megfelelő savasságot alakít ki. A név vagy E-szám az anyagot azonosítja, nem a hozzáadott mennyiséget.",
    "aliases": [
      "citromsav",
      "citric acid"
    ]
  },
  {
    "kod": "E-331",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Nátrium-citrátok; a citromsav sói. A savasság beállításában és a termék állagának kialakításában is szerepet kaphatnak.",
    "aliases": [
      "nátrium-citrát",
      "nátrium-citrátok",
      "sodium citrates"
    ]
  },
  {
    "kod": "E-332",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Kálium-citrátok; a citromsav káliumsói. A savasság szabályozására használhatók.",
    "aliases": [
      "kálium-citrát",
      "kálium-citrátok",
      "potassium citrates"
    ]
  },
  {
    "kod": "E-333",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Kalcium-citrátok; a citromsav kalciumsói. A termékben betöltött szerepet a címke szerinti funkcióval együtt értelmezd.",
    "aliases": [
      "kalcium-citrát",
      "kalcium-citrátok",
      "calcium citrates"
    ]
  },
  {
    "kod": "E-334",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Borkősav; a savasság és az íz beállítására használt sav.",
    "aliases": [
      "borkősav",
      "tartaric acid"
    ]
  },
  {
    "kod": "E-338",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Foszforsav; savanykás ízt és megfelelő savasságot alakíthat ki. A kódból a termék foszfortartalma nem számítható ki.",
    "aliases": [
      "foszforsav",
      "phosphoric acid"
    ]
  },
  {
    "kod": "E-339",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Nátrium-foszfátok; többek között savasságszabályozásra és a termék tulajdonságainak beállítására szolgálhatnak.",
    "aliases": [
      "nátrium-foszfát",
      "nátrium-foszfátok",
      "sodium phosphates"
    ]
  },
  {
    "kod": "E-340",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Kálium-foszfátok; a foszforsav sói. Pontos technológiai szerepüket a termék címkéje mutatja meg.",
    "aliases": [
      "kálium-foszfát",
      "kálium-foszfátok",
      "potassium phosphates"
    ]
  },
  {
    "kod": "E-341",
    "funk": "Savanyúságot szabályozó anyag",
    "magy": "Kalcium-foszfátok; savasságszabályozásban és más technológiai feladatokban használhatók. A kód nem önmagában táplálkozási ajánlás.",
    "aliases": [
      "kalcium-foszfát",
      "kalcium-foszfátok",
      "calcium phosphates"
    ]
  },
  {
    "kod": "E-406",
    "funk": "Zselésítőanyag",
    "magy": "Agar; algákból nyert anyag, amellyel zselés állagot lehet kialakítani.",
    "aliases": [
      "agar",
      "agar-agar"
    ]
  },
  {
    "kod": "E-407",
    "funk": "Sűrítőanyag, zselésítőanyag",
    "magy": "Karragén; algákból nyert anyag, amely az állagot és a stabilitást segítheti.",
    "aliases": [
      "karragén",
      "carrageenan"
    ]
  },
  {
    "kod": "E-410",
    "funk": "Sűrítőanyag",
    "magy": "Szentjánoskenyérmag-liszt; a termék sűrítését és állagának stabilizálását szolgálhatja.",
    "aliases": [
      "szentjánoskenyérmag-liszt",
      "locust bean gum"
    ]
  },
  {
    "kod": "E-412",
    "funk": "Sűrítőanyag",
    "magy": "Guargumi; sűrűbb állagot alakít ki és segíthet a termék szerkezetének megőrzésében.",
    "aliases": [
      "guargumi",
      "guar gum"
    ]
  },
  {
    "kod": "E-414",
    "funk": "Sűrítőanyag, stabilizátor",
    "magy": "Gumiarábikum; akáciagumiként is ismert, a termék állagát és egyenletes szerkezetét segítheti.",
    "aliases": [
      "gumiarábikum",
      "gumiarábik",
      "akáciagumi",
      "gum arabic",
      "acacia gum"
    ]
  },
  {
    "kod": "E-415",
    "funk": "Sűrítőanyag",
    "magy": "Xantángumi; kis mennyiségben is sűrítheti a terméket és segítheti az állag megtartását.",
    "aliases": [
      "xantángumi",
      "xantán",
      "xanthan gum"
    ]
  },
  {
    "kod": "E-420",
    "funk": "Édesítőszer, nedvesítőszer",
    "magy": "Szorbit; cukoralkohol, amely édesítésre és a nedvesség megtartására is szolgálhat. A konkrét szerepet a címkén ellenőrizd.",
    "aliases": [
      "szorbit",
      "szorbitok",
      "sorbitol"
    ]
  },
  {
    "kod": "E-421",
    "funk": "Édesítőszer",
    "magy": "Mannit; a cukoralkoholok közé tartozó édesítőszer.",
    "aliases": [
      "mannit",
      "mannitol"
    ]
  },
  {
    "kod": "E-440",
    "funk": "Zselésítőanyag",
    "magy": "Pektinek; növényi eredetű anyagok, amelyek zselés állagot alakíthatnak ki, például gyümölcskészítményekben.",
    "aliases": [
      "pektin",
      "pektinek",
      "pectin",
      "pectins"
    ]
  },
  {
    "kod": "E-450",
    "funk": "Stabilizátor, térfogatnövelő szer",
    "magy": "Difoszfátok; a termék típusától függően az állag beállításában vagy a tészta lazításában is szerepet kaphatnak.",
    "aliases": [
      "difoszfátok",
      "diphosphates"
    ]
  },
  {
    "kod": "E-451",
    "funk": "Stabilizátor",
    "magy": "Trifoszfátok; a termék szerkezetének, vízmegkötésének és egyenletes állagának kialakítását szolgálhatják.",
    "aliases": [
      "trifoszfátok",
      "triphosphates"
    ]
  },
  {
    "kod": "E-452",
    "funk": "Stabilizátor",
    "magy": "Polifoszfátok; az állag és egyes fizikai tulajdonságok fenntartására használhatók. A kód nem mutatja meg a mennyiséget.",
    "aliases": [
      "polifoszfátok",
      "polyphosphates"
    ]
  },
  {
    "kod": "E-460",
    "funk": "Tömegnövelő szer, stabilizátor",
    "magy": "Cellulóz; növényi sejtfalakban is előforduló anyag. A termék tömegét, szerkezetét vagy állagát alakíthatja.",
    "aliases": [
      "cellulóz",
      "cellulose"
    ]
  },
  {
    "kod": "E-466",
    "funk": "Sűrítőanyag",
    "magy": "Karboxi-metil-cellulóz, illetve cellulózgumi; a termék sűrítésében és stabilizálásában használható.",
    "aliases": [
      "karboxi-metil-cellulóz",
      "cellulózgumi",
      "cellulose gum"
    ]
  },
  {
    "kod": "E-471",
    "funk": "Emulgeálószer",
    "magy": "Zsírsavak mono- és digliceridjei; segítik a nehezen keveredő összetevők egyenletes eloszlását. Növényi vagy állati eredet a kódból nem dönthető el.",
    "aliases": [
      "zsírsavak mono- és digliceridjei",
      "mono- és digliceridek"
    ]
  },
  {
    "kod": "E-500",
    "funk": "Térfogatnövelő szer",
    "magy": "Nátrium-karbonátok; tészták lazítására és savasságszabályozásra is használhatók. Az alcsoport és a címkén megadott név pontosíthatja az anyagot.",
    "aliases": [
      "nátrium-karbonátok",
      "sodium carbonates"
    ]
  },
  {
    "kod": "E-500(ii)",
    "funk": "Térfogatnövelő szer",
    "magy": "Nátrium-hidrogén-karbonát, közismert nevén szódabikarbóna. Megfelelő körülmények között gázt fejlesztve lazítja a tésztát.",
    "aliases": [
      "szódabikarbóna",
      "nátrium-hidrogén-karbonát",
      "nátrium-bikarbonát",
      "sodium bicarbonate"
    ]
  },
  {
    "kod": "E-501",
    "funk": "Térfogatnövelő szer",
    "magy": "Kálium-karbonátok; a tészta lazításában és a savasság beállításában használhatók.",
    "aliases": [
      "kálium-karbonátok",
      "potassium carbonates"
    ]
  },
  {
    "kod": "E-503",
    "funk": "Térfogatnövelő szer",
    "magy": "Ammónium-karbonátok; sütéskor gázt fejlesztenek, ezzel segíthetik a tészta lazítását.",
    "aliases": [
      "ammónium-karbonátok",
      "ammonium carbonates"
    ]
  },
  {
    "kod": "E-508",
    "funk": "Szilárdítóanyag",
    "magy": "Kálium-klorid; a termék fizikai tulajdonságainak beállítására is használható. Nem azonos a nátrium-kloriddal, azaz az étkezési sóval.",
    "aliases": [
      "kálium-klorid",
      "potassium chloride"
    ]
  },
  {
    "kod": "E-509",
    "funk": "Szilárdítóanyag",
    "magy": "Kalcium-klorid; segíthet egyes élelmiszerek szilárd állagának kialakításában vagy megtartásában.",
    "aliases": [
      "kalcium-klorid",
      "calcium chloride"
    ]
  },
  {
    "kod": "E-551",
    "funk": "Csomósodást gátló anyag",
    "magy": "Szilícium-dioxid; porok és szemcsés termékek összetapadását csökkentheti.",
    "aliases": [
      "szilícium-dioxid",
      "silicon dioxide"
    ]
  },
  {
    "kod": "E-621",
    "funk": "Ízfokozó",
    "magy": "Mononátrium-glutamát; az umami ízérzetet erősíti. A glutamát nem azonos a gluténnel; neve önmagában nem jelent gluténtartalmat.",
    "aliases": [
      "mononátrium-glutamát",
      "nátrium-glutamát",
      "monosodium glutamate",
      "msg"
    ]
  },
  {
    "kod": "E-627",
    "funk": "Ízfokozó",
    "magy": "Dinátrium-guanilát; az élelmiszer ízérzetének fokozására használják.",
    "aliases": [
      "dinátrium-guanilát",
      "disodium guanylate"
    ]
  },
  {
    "kod": "E-631",
    "funk": "Ízfokozó",
    "magy": "Dinátrium-inozinát; az umami jellegű ízérzet erősítésére használható.",
    "aliases": [
      "dinátrium-inozinát",
      "disodium inosinate"
    ]
  },
  {
    "kod": "E-635",
    "funk": "Ízfokozó",
    "magy": "Dinátrium-ribonukleotidok; ízfokozó anyagok keverékét jelölő kód.",
    "aliases": [
      "dinátrium-ribonukleotidok",
      "dinátrium-5-ribonukleotidok"
    ]
  },
  {
    "kod": "E-900",
    "funk": "Habzásgátló",
    "magy": "Dimetil-polisziloxán; az élelmiszer előállításakor keletkező hab kialakulását vagy fennmaradását csökkentheti.",
    "aliases": [
      "dimetil-polisziloxán",
      "polidimetil-sziloxán",
      "dimethyl polysiloxane"
    ]
  },
  {
    "kod": "E-901",
    "funk": "Fényezőanyag",
    "magy": "Méhviasz; védő vagy fényes bevonatot alakíthat ki. Állati eredetű anyag, amit a személyes kerülőlistánál figyelembe lehet venni.",
    "aliases": [
      "méhviasz",
      "beeswax"
    ]
  },
  {
    "kod": "E-903",
    "funk": "Fényezőanyag",
    "magy": "Karnaubaviasz; növényi viasz, amellyel fényes vagy védő bevonat alakítható ki.",
    "aliases": [
      "karnaubaviasz",
      "carnauba wax"
    ]
  },
  {
    "kod": "E-904",
    "funk": "Fényezőanyag",
    "magy": "Sellak; rovareredetű gyantából készülő bevonóanyag. A termék fényes felületének kialakítására használható.",
    "aliases": [
      "sellak",
      "shellac"
    ]
  },
  {
    "kod": "E-920",
    "funk": "Lisztkezelőszer",
    "magy": "L-cisztein; a tészta feldolgozhatóságát alakíthatja. Az eredet a kódból önmagában nem állapítható meg.",
    "aliases": [
      "l-cisztein",
      "l-cysteine"
    ]
  },
  {
    "kod": "E-941",
    "funk": "Csomagológáz",
    "magy": "Nitrogén; a csomagolás légterének kialakítására használható gáz.",
    "aliases": [
      "nitrogén",
      "nitrogen"
    ]
  },
  {
    "kod": "E-942",
    "funk": "Hajtógáz",
    "magy": "Dinitrogén-oxid; például habosított termékek adagolásának hajtógáza lehet.",
    "aliases": [
      "dinitrogén-oxid",
      "nitrous oxide"
    ]
  },
  {
    "kod": "E-950",
    "funk": "Édesítőszer",
    "magy": "Aceszulfám-K; édes ízt ad a terméknek. Az édesítőszer jelenlétéből önmagában nem számítható ki a termék energiatartalma.",
    "aliases": [
      "aceszulfám-k",
      "aceszulfám kálium",
      "acesulfame k"
    ]
  },
  {
    "kod": "E-951",
    "funk": "Édesítőszer",
    "magy": "Aszpartám; fenilalanin-forrás. PKU-beállítás esetén a program külön címkeellenőrzési figyelmeztetést mutat.",
    "aliases": [
      "aszpartám",
      "aspartame"
    ]
  },
  {
    "kod": "E-952",
    "funk": "Édesítőszer",
    "magy": "Ciklaminsav és sói; édes íz kialakítására szolgáló édesítőszerek.",
    "aliases": [
      "ciklaminsav",
      "ciklamátok",
      "cyclamic acid"
    ]
  },
  {
    "kod": "E-953",
    "funk": "Édesítőszer",
    "magy": "Izomalt; a cukoralkoholok közé tartozó édesítőszer. Az elfogyasztott mennyiség és az egyéni tolerancia is számít.",
    "aliases": [
      "izomalt",
      "isomalt"
    ]
  },
  {
    "kod": "E-954",
    "funk": "Édesítőszer",
    "magy": "Szacharin és sói; édes íz kialakítására használhatók.",
    "aliases": [
      "szacharin",
      "saccharin"
    ]
  },
  {
    "kod": "E-955",
    "funk": "Édesítőszer",
    "magy": "Szukralóz; édes ízt adhat az élelmiszernek. A kód az anyagot azonosítja, nem az egész termék tápértékét.",
    "aliases": [
      "szukralóz",
      "sucralose"
    ]
  },
  {
    "kod": "E-957",
    "funk": "Édesítőszer",
    "magy": "Taumatin; édes íz kialakítására használt fehérje.",
    "aliases": [
      "taumatin",
      "thaumatin"
    ]
  },
  {
    "kod": "E-959",
    "funk": "Édesítőszer",
    "magy": "Neoheszperidin DC; édes íz kialakítására használható anyag.",
    "aliases": [
      "neoheszperidin dc",
      "neohesperidin dc"
    ]
  },
  {
    "kod": "E-960a",
    "funk": "Édesítőszer",
    "magy": "Szteviol-glikozidok szteviából; édes íz kialakítására használhatók. Az E960 betűs alcsoportjai az előállítás módját is megkülönböztetik.",
    "aliases": [
      "szteviol-glikozidok szteviából",
      "steviol glycosides from stevia"
    ]
  },
  {
    "kod": "E-961",
    "funk": "Édesítőszer",
    "magy": "Neotám; édes íz kialakítására használt anyag. Nem kap automatikusan PKU-jelzést pusztán az aszpartámmal való kémiai rokonság miatt.",
    "aliases": [
      "neotám",
      "neotame"
    ]
  },
  {
    "kod": "E-962",
    "funk": "Édesítőszer",
    "magy": "Aszpartám-aceszulfám só; aszpartámot is tartalmazó édesítőszer. A fenilalaninra vonatkozó címkejelölést ellenőrizd.",
    "aliases": [
      "aszpartám-aceszulfám só",
      "salt of aspartame-acesulfame"
    ]
  },
  {
    "kod": "E-965",
    "funk": "Édesítőszer",
    "magy": "Maltit; cukoralkohol, amelyet édesítésre használnak. A termék címkéjén lévő külön figyelmeztetéseket is nézd meg.",
    "aliases": [
      "maltit",
      "maltitol"
    ]
  },
  {
    "kod": "E-966",
    "funk": "Édesítőszer",
    "magy": "Laktit; a cukoralkoholok közé tartozó édesítőszer. A neve önmagában nem tejfehérje-jelölés.",
    "aliases": [
      "laktit",
      "lactitol"
    ]
  },
  {
    "kod": "E-967",
    "funk": "Édesítőszer",
    "magy": "Xilit; cukoralkohol, amely édes ízt ad a terméknek. A nyírfacukor elnevezés is erre az anyagra utalhat.",
    "aliases": [
      "xilit",
      "xilitol",
      "nyírfacukor",
      "xylitol"
    ]
  },
  {
    "kod": "E-968",
    "funk": "Édesítőszer",
    "magy": "Eritrit; a cukoralkoholok közé tartozó édesítőszer. A konkrét mennyiséget az E-szám nem mutatja meg.",
    "aliases": [
      "eritrit",
      "erythritol"
    ]
  },
  {
    "kod": "E-1105",
    "funk": "Tartósítószer",
    "magy": "Lizozim; enzim, amely tartósításra használható. Tojásból származó eredet esetén az allergénforrást is figyelembe kell venni; ellenőrizd a címkét.",
    "aliases": [
      "lizozim",
      "lysozyme"
    ]
  },
  {
    "kod": "E-1200",
    "funk": "Tömegnövelő szer",
    "magy": "Polidextróz; a termék tömegének és állagának kialakításában használható anyag.",
    "aliases": [
      "polidextróz",
      "polydextrose"
    ]
  },
  {
    "kod": "E-1404",
    "funk": "Módosított keményítő",
    "magy": "Oxidált keményítő; a termék sűrítését és szerkezetének kialakítását segítheti.",
    "aliases": [
      "oxidált keményítő",
      "oxidised starch"
    ]
  },
  {
    "kod": "E-1412",
    "funk": "Módosított keményítő",
    "magy": "Dikeményítő-foszfát; a megfelelő állag kialakítását és fenntartását szolgálhatja.",
    "aliases": [
      "dikeményítő-foszfát",
      "distarch phosphate"
    ]
  },
  {
    "kod": "E-1414",
    "funk": "Módosított keményítő",
    "magy": "Acetilezett dikeményítő-foszfát; sűrítő és állagkialakító feladatot láthat el.",
    "aliases": [
      "acetilezett dikeményítő-foszfát",
      "acetylated distarch phosphate"
    ]
  },
  {
    "kod": "E-1420",
    "funk": "Módosított keményítő",
    "magy": "Acetilezett keményítő; a termék állagának és sűrűségének beállítására használható.",
    "aliases": [
      "acetilezett keményítő",
      "acetylated starch"
    ]
  },
  {
    "kod": "E-1422",
    "funk": "Módosított keményítő",
    "magy": "Acetilezett dikeményítő-adipát; a termék állagát és stabilitását alakíthatja.",
    "aliases": [
      "acetilezett dikeményítő-adipát",
      "acetylated distarch adipate"
    ]
  },
  {
    "kod": "E-1442",
    "funk": "Módosított keményítő",
    "magy": "Hidroxipropil-dikeményítő-foszfát; sűrítésre és állagkialakításra használható.",
    "aliases": [
      "hidroxipropil-dikeményítő-foszfát",
      "hydroxypropyl distarch phosphate"
    ]
  },
  {
    "kod": "E-1450",
    "funk": "Módosított keményítő",
    "magy": "Keményítő-nátrium-oktenil-szukcinát; a termék szerkezetének és a keverék egyenletességének kialakítását segítheti.",
    "aliases": [
      "keményítő-nátrium-oktenil-szukcinát",
      "starch sodium octenyl succinate"
    ]
  }
];
var ESZAM_FORRASOK={nev:{cim:'Uniós névjegyzék · 2025-11-04',url:'https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:02008R1333-20251104'},szerep:{cim:'Technológiai szerepek · 1333/2008 I. melléklet',url:'https://eur-lex.europa.eu/eli/reg/2008/1333/oj/eng'},anyag:{cim:'Anyagazonosítás · 231/2012 specifikációk',url:'https://eur-lex.europa.eu/eli/reg/2012/231/oj/eng'}};
ESZAM_RESZLETEK.forEach(d=>{if(!ESZAM_INDEX[d.kod]&&d.kod==='E-500(ii)')ESZAM_INDEX[d.kod]={kod:d.kod,nev:'Nátrium-hidrogén-karbonát'};if(!ESZAM_INDEX[d.kod])throw Error('Ismeretlen leíráskód: '+d.kod);Object.assign(ESZAM_INDEX[d.kod],{funk:d.funk,magy:d.magy,aliases:d.aliases,reszletes:true,forrasok:[ESZAM_FORRASOK.nev,ESZAM_FORRASOK.szerep,ESZAM_FORRASOK.anyag]})});
Object.values(ESZAM_INDEX).forEach(e=>{if(!e.forrasok)e.forrasok=[ESZAM_FORRASOK.nev];if(!e.aliases)e.aliases=[]});

// A jogszabályi szerkesztési lábjegyzet nem része az anyag nevének.
Object.values(ESZAM_INDEX).forEach(e=>{e.nev=e.nev.replace(/\(\s*\*\d+\s*\)/g,"").trim()});
