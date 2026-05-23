/* ---- service data (icons drawn per-service, replacing the repeated placeholder) ---- */
const services = [
  {t:'Neu- und Umbauten', d:'Wir sind Spezialisten für Neubauten und Sanierungen. Stabiler Unterbau für Langlebigkeit von Struktur und Farbe, Schutz vor Witterungseinflüssen und mechanischen Beschädigungen.',
   ic:'<path d="M4 28V13l12-9 12 9v15" /><path d="M11 28V18h10v10"/>'},
  {t:'Verputz', d:'Wir schaffen aus einem kahlen Rohbau ein wohliges Umfeld und sorgen für gesundes Raumklima. Mit dem richtigen Innenputz steigern wir die Energieeffizienz und schützen vor Feuchtigkeit.',
   ic:'<path d="M5 24h22"/><path d="M7 24c2-6 6-9 9-9s7 3 9 9"/><path d="M16 7v8"/>'},
  {t:'Renovationen', d:'Ob Neubau, Komplettsanierung oder Umbau: Wir haben alle Gewerke unter einem Dach, koordinieren und kontrollieren, sichern Termine und sparen Ihnen Zeit und Nerven.',
   ic:'<path d="M19 6l7 7-12 12-7 0 0-7z"/><path d="M16 9l7 7"/>'},
  {t:'Fassaden', d:'Die Fassadendämmung ist Königsdisziplin der Wärmedämmung und senkt den Energieverbrauch wie kaum eine andere Massnahme – abgestimmt auf die baulichen Gegebenheiten.',
   ic:'<rect x="6" y="5" width="20" height="22"/><path d="M11 5v22M21 5v22M6 12h20M6 19h20"/>'},
  {t:'Leichtbau', d:'Im Trockenbau realisieren wir individuelle Innenarchitekturkonzepte: Trennwände, Verschalungen, Verkleidungen, Isolierungen, Raum-in-Raum-Systeme, Decken und vieles mehr.',
   ic:'<rect x="5" y="6" width="22" height="20"/><path d="M5 13h22M16 6v20"/>'},
  {t:'Brandschutz VKF spez.', d:'Für jede Situation die optimale Brandschutzlösung – fachgerecht nach VKF-Vorgaben geplant und ausgeführt.',
   ic:'<path d="M16 4c2 5-3 6-3 11a5 5 0 0 0 10 0c0-3-2-4-2-7 3 2 5 5 5 9a10 10 0 0 1-20 0c0-7 6-9 10-13z"/>'},
  {t:'Malerei', d:'Saubere, präzise Malerarbeiten für innen und aussen – mit Liebe zur Farbe und Auge fürs Detail.',
   ic:'<rect x="6" y="5" width="16" height="9" rx="1"/><path d="M22 9h3v4h-7"/><path d="M16 14v5l-1 8h-2l-1-8v-5"/>'}
];
function svcIcon(p){return '<span class="svc-ic"><svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#0b5fb0" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">'+p+'</svg></span>'}

/* Home grid */
document.getElementById('svc-home').innerHTML = services.map((s,i)=>
  `<div class="svc"><span class="num">${String(i+1).padStart(2,'0')}</span>${svcIcon(s.ic)}<h3>${s.t}</h3><p>${s.d.split('.')[0]}.</p></div>`
).join('');

/* Services detail rows */
document.getElementById('svc-detail').innerHTML = services.map((s,i)=>
  `<div class="svc-row" data-reveal><div class="idx">${String(i+1).padStart(2,'0')}</div><div class="ic">${svcIcon(s.ic)}</div><div><h3>${s.t}</h3><p style="margin-top:12px">${s.d}</p></div></div>`
).join('');

/* Gallery tiles (textured placeholders, classic & photo-light) */
const gtitles=['Verputz Innenraum','Fassadensanierung','Trockenbau Decke','Renovation Praxis','Kalkputz Wohnraum','Treppenhaus','Aussendämmung','Malerarbeiten','Neubau Rohbau'];
document.getElementById('gallery-grid').innerHTML = gtitles.map((t,i)=>
  `<div class="gtile${i%4===0?' tall':''}" data-reveal><svg class="plaster-tex" width="100%" height="100%"><rect width="100%" height="100%" filter="url(#plaster)"/></svg><span class="gt">${t}</span></div>`
).join('');

/* ---- mobile menu ---- */
function toggleMenu(){
  const menu=document.getElementById('menu');
  const burger=document.querySelector('.burger');
  const header=document.querySelector('header');
  const top=Math.round(header.getBoundingClientRect().bottom);
  menu.style.top=top+'px';
  const open=menu.classList.toggle('open');
  burger.classList.toggle('x',open);
  burger.setAttribute('aria-expanded',open);
  burger.setAttribute('aria-label',open?'Menü schliessen':'Menü öffnen');
  document.body.style.overflow=open?'hidden':'';
}
function closeMenu(){
  const menu=document.getElementById('menu');
  const burger=document.querySelector('.burger');
  menu.classList.remove('open');
  burger.classList.remove('x');
  burger.setAttribute('aria-expanded','false');
  burger.setAttribute('aria-label','Menü öffnen');
  document.body.style.overflow='';
}

/* ---- routing ---- */
function go(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.navlink').forEach(a=>a.classList.toggle('active',a.dataset.nav===id));
  closeMenu();
  window.scrollTo({top:0,behavior:'instant'});
  setTimeout(revealScan,40);
}

/* close drawer if resized up to desktop */
window.addEventListener('resize',()=>{if(window.innerWidth>680)closeMenu()});

/* ---- scroll reveal ---- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
function revealScan(){document.querySelectorAll('.page.active [data-reveal]:not(.in)').forEach(el=>io.observe(el))}
revealScan();
/* safety net: never leave content hidden if IO is unsupported/blocked */
setTimeout(()=>document.querySelectorAll('[data-reveal]:not(.in)').forEach(el=>el.classList.add('in')),2600);
