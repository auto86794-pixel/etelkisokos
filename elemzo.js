/* Ételkisokos 1.4: helyi szövegelemző. Nem fogyaszthatósági minősítés. */
(function(root){'use strict';
const normalize=s=>String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[–—‐‑]/g,'-');
const escapeRe=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const groups=[
 ['Gluténtartalmú gabonák',/^(?:buza[a-z]*|tonkoly[a-z]*|rozs(?:liszt|pehely|kenyer|malata|szem|t|bol)?|arpa[a-z]*|zab(?:liszt|pehely|korpa|ital|tej|szem|ot|bol)?|gluten(?:t|nal|bol)?|malata[a-z]*)$/],
 ['Tej',/^(?:tej[a-z]*|vaj[a-z]*|sajt[a-z]*|tejszin[a-z]*|joghurt[a-z]*|kefir[a-z]*|kazein[a-z]*|kazeinat[a-z]*|savo[a-z]*|laktoz(?:t|bol|zal)?|lactose|milk|whey|butter|casein)$/],
 ['Tojás',/^(?:tojas[a-z]*|ovalbumin[a-z]*|ovomukoid[a-z]*|egg|eggs)$/],
 ['Földimogyoró',/^(?:foldimogyoro[a-z]*|peanut[a-z]*)$/],
 ['Diófélék',/^(?:dio(?:t|val|bol|bel|olaj|felek|feleket|fele|s|k|orlemeny|darab[a-z]*)?|mandula[a-z]*|mogyoro[a-z]*|kesudio[a-z]*|pisztacia[a-z]*|pekandio[a-z]*|brazil(?:dio)?[a-z]*|paradio[a-z]*|makadamia[a-z]*|walnut[a-z]*|almond[a-z]*|hazelnut[a-z]*|cashew[a-z]*|pistachio[a-z]*)$/],
 ['Szója',/^(?:szoja[a-z]*|soy|soya|soybean[a-z]*)$/],
 ['Hal',/^(?:hal(?:ak|at|bol|ban|hus|husbol|olaj[a-z]*|liszt[a-z]*|feherje[a-z]*|kivonat[a-z]*)?|lazac[a-z]*|tonhal[a-z]*|szardinia[a-z]*|szardella[a-z]*|tokehal[a-z]*|fish|salmon|tuna|anchov[a-z]*)$/],
 ['Rákfélék',/^(?:rak(?:ot|bol|fele[a-z]*|hus[a-z]*|kivonat[a-z]*)?|garnela[a-z]*|homar[a-z]*|shrimp[a-z]*|prawn[a-z]*|crab[a-z]*)$/],
 ['Puhatestűek',/^(?:kagylo[a-z]*|tintahal[a-z]*|polip[a-z]*|csiga(?:t|hus[a-z]*)?|mussel[a-z]*|squid[a-z]*|oyster[a-z]*)$/],
 ['Zeller',/^(?:zeller[a-z]*|celery|celeriac)$/],
 ['Mustár',/^(?:mustar[a-z]*|mustard)$/],
 ['Szezámmag',/^(?:szezam[a-z]*|tahini|sesame)$/],
 ['Csillagfürt',/^(?:csillagfurt[a-z]*|lupin[a-z]*)$/],
 ['Kén-dioxid és szulfitok',/^(?:szulfit[a-z]*|szulfitok[a-z]*|metabiszulfit[a-z]*|sulphite[a-z]*|sulfite[a-z]*|sulphur|sulfur)$/]
];
const exceptions=/^(?:tejsav(?:at|val|ban|bol|as[a-z]*)?|vajbab[a-z]*|vajretek[a-z]*|vajsav[a-z]*|glutamat[a-z]*|dioxid[a-z]*|halal|halmaz[a-z]*|rakott[a-z]*|raklap[a-z]*)$/;
function classify(text){const t=normalize(text).replace(/\bkakao\s+vaj\b/g,'kakaovaj');const out=[];const tokens=t.match(/[a-z]+/g)||[];groups.forEach(([name,re],i)=>{if(tokens.some(token=>!token.includes('mentes')&&!exceptions.test(token)&&re.test(token)))out.push(i)});if((/\bken\s*-?\s*dioxid\b/.test(t)||/\be\s*-?\s*22[0-46-8](?![a-z0-9])/.test(t))&&!out.includes(13))out.push(13);return out.sort((a,b)=>a-b)}
function blank(s){return ' '.repeat(s.length)}
function maskClaims(input){let text=input;const claims=[];function remember(m){claims.push(m.trim());return blank(m)}
 text=text.replace(/\be\s*-?\s*\d{3,4}[a-z]?(?:\([ivx]+\))?\s*-?\s*(?:mentes|nelkul)\b/g,remember);
 text=text.replace(/\b[a-z]+\s*-\s*(?:es|vagy)\s+[a-z]+(?:\s*-\s*)?mentes[a-z]*\b/g,remember);
 text=text.replace(/\b[a-z]+(?:\s*-\s*)?mentes[a-z]*\b/g,remember);
 text=text.replace(/\b(?:milk|dairy|lactose|gluten|egg|soy|peanut)\s*[- ]\s*free\b/g,remember);
 // Negation applies only inside the current clause. The caller splits at sentences and contrast words first.
 text=text.replace(/\b[a-z]+(?:\s*(?:,|es|vagy)\s*[a-z]+)*\s+nem\s+tartalmaz(?:hat)?\b/g,remember);
 text=text.replace(/\b(?:nem\s+tartalmaz|nem\s+tartalmazhat|nem\s+tartalmaznak|mentes\s+az?\s+|free\s+from\s+|does\s+not\s+contain\s+)[^:;.!?\n]*/g,remember);
 text=text.replace(/\b[a-z]+(?:\s*(?:,|es|vagy)\s*[a-z]+)*\s+nelkul\b/g,remember);
 return{text,claims}}
function prepare(text){return normalize(text).replace(/\n+/g,' ').replace(/\b(?:de|azonban|viszont|but|however)\b/g,';').replace(/\b(osszetevok|ingredients)\s*:/g,';$1:')}
function allergenInspect(raw){const found=new Set(),trace=new Set(),claims=[],notes=[];let hasLactoseFree=false,hasGlutenFree=false;const clauses=prepare(raw).split(/[;.!?\n]+/).map(s=>s.trim()).filter(Boolean);
 for(const clause of clauses){if(/\blaktoz\s*-?\s*mentes|\blactose[- ]free/.test(clause))hasLactoseFree=true;if(/\bgluten\s*-?\s*mentes|\bgluten[- ]free/.test(clause))hasGlutenFree=true;
  const masked=maskClaims(clause);claims.push(...masked.claims);const t=masked.text;
  const m=/\bnyomokban\b|\b(?:tartalmazhat|tartalmazhatnak|may\s+contain)\b/.exec(t);
  if(m){if(/^nyomokban$/.test(m[0])||/^may\s+contain$/.test(m[0])){classify(t.slice(0,m.index)).forEach(i=>found.add(i));classify(t.slice(m.index)).forEach(i=>trace.add(i))}
   else{ // Hungarian precautionary sentence can place the verb after the allergens.
    const marker=t.lastIndexOf(':',m.index),start=marker>=0?marker+1:0;
    classify(t.slice(0,start)).forEach(i=>found.add(i));classify(t.slice(start)).forEach(i=>trace.add(i));
   }
  }else classify(t).forEach(i=>found.add(i));
 }
 if(claims.length)notes.push('Mentes vagy tagadó állítást is olvastunk. Ezeket elkülönítettük az összetevő-találatoktól; a program nem igazolja a mentességet.');
 if(hasLactoseFree&&(found.has(1)||trace.has(1)))notes.push('Laktózmentes jelölés mellett tejre utaló összetevő is szerepel. A laktózmentes nem jelent tejfehérjementest.');
 if(hasGlutenFree&&found.has(0))notes.push('Gluténmentes jelölés mellett gabonára utaló összetevőt is olvastunk. Például a gluténmentes búzakeményítő továbbra is búzaeredetű; a teljes jelölést ellenőrizd.');
 return{found:[...found].sort((a,b)=>a-b),trace:[...trace].sort((a,b)=>a-b),claims:[...new Set(claims)],notes}}
const suffix='(?:at|et|ot|t|val|vel|tal|tel|bol|bol)?';
function nameCandidates(raw,index){const text=prepare(raw).split(/([;.!?\n]+)/).map(s=>maskClaims(s).text).join('').replace(/\s*-\s*/g,'-').replace(/\s+/g,' ');const candidates=[];
 for(const e of Object.values(index)){const names=[e.nev,...(e.aliases||[])];for(const alias of new Set(names)){if(e.kod==='E-150a'&&normalize(alias)==='karamell'&&!/szinezek\s*:?\s*$/.test(text.slice(0,text.indexOf('karamell'))))continue;const a=normalize(alias).replace(/\s*-\s*/g,'-').replace(/\s+/g,' ').trim();if(a.length<3)continue;
  const re=new RegExp('(^|[^a-z0-9])('+escapeRe(a)+suffix+')(?=$|[^a-z0-9])','g');let m;
  while((m=re.exec(text))){const start=m.index+m[1].length;const end=start+m[2].length;const tail=text.slice(end,end+28);if(/^\s*-?\s*(?:mentes|nelkul)/.test(tail))continue;if(/sav$/.test(a)&&/^\s*-?\s*eszter/.test(tail))continue;
   const before=text.slice(Math.max(0,start-35),start);if(/(?:nem tartalmaz|does not contain|free from)\s*$/.test(before))continue;
   candidates.push({code:e.kod.replace('E-','E').toUpperCase(),start,end,label:alias,kind:'name'});
  }
 }}
 // A longer chemical name wins over a shorter name contained within it, e.g. aspartame-acesulfame salt.
 return candidates.filter(c=>!candidates.some(other=>other.start<=c.start&&other.end>=c.end&&(other.end-other.start)>(c.end-c.start)))}
function analyze(raw,index){index=index||root.ESZAM_INDEX||{};const r=allergenInspect(raw),hits=[];const text=prepare(raw).split(/([;.!?]+)/).map(s=>maskClaims(s).text).join('');const re=/\be\s*[-–]?\s*\d{3,4}[a-z]?(?:\s*\([ivx]+\))?(?![a-z0-9])/g;let m;
 while((m=re.exec(text))){hits.push({code:m[0].toUpperCase().replace(/[\s–-]/g,''),kind:'code',label:m[0].toUpperCase(),start:m.index,end:m.index+m[0].length})}
 hits.push(...nameCandidates(raw,index));hits.sort((a,b)=>a.start-b.start||(a.kind==='code'?-1:1));const codes=[],evidence={};
 for(const hit of hits){if(!evidence[hit.code]){codes.push(hit.code);evidence[hit.code]=[]}if(!evidence[hit.code].some(x=>x.kind===hit.kind&&normalize(x.label)===normalize(hit.label)))evidence[hit.code].push({kind:hit.kind,label:hit.label})}

 return{...r,codes,evidence}}
const api={normalize,allergens:groups.map(([name])=>[name,[]]),analyze,allergenInspect,nameCandidates};root.EtelElemzo=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
