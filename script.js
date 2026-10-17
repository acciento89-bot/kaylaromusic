const translations = {
  en: {
    navMusic: 'Music', navAbout: 'About', navSocials: 'Socials', eyebrow: 'POLISH / GERMAN DANCE & PARTY', heroCopy: 'Catchy hooks, modern club production and high-energy party vibes.', listenDebut: 'Listen now', discover: 'New single details', scroll: 'SCROLL', debutSingle: 'DEBUT SINGLE', releaseCopy: 'A high-energy first chapter from KAYLARO — built for late nights, loud speakers and a hook that stays with you.', spotify: 'Spotify', appleMusic: 'Apple Music', allPlatforms: 'All platforms', officialVideo: 'Official Music Video', streamingNow: 'Available now on Spotify, Apple Music and more.', aboutLabel: 'ABOUT', aboutTitle: 'New music.<br>New energy.', aboutCopy: 'KAYLARO is a European dance artist blending Polish and German influences with catchy hooks, modern electronic production and high-energy party vibes.', aboutRelease: 'The debut single <strong>“Robisz To Specjalnie”</strong> is available now. Next: <strong>“Ona Mówi Aj Aj”</strong> on 23 October 2026.', follow: 'FOLLOW KAYLARO', coming: 'ONA MÓWI AJ AJ<br>COMING SOON.', listenTrack: 'Follow KAYLARO for the release', imprint: 'Imprint', privacy: 'Privacy', heroUpcoming: 'NEXT SINGLE · ONA MÓWI AJ AJ · 23 OCT 2026', upcomingLabel: 'NEXT RELEASE · 23 OCTOBER 2026', upcomingDate: '23 OCTOBER 2026 · COMING SOON', upcomingCopy: 'The next KAYLARO dance-pop single is coming. Digi-digi, Aj Aj! Catch the hook now and follow along for the release.', followRelease: 'Follow for the release', listenCurrent: 'Listen to the debut single', upcomingNote: 'Streaming links will be added when the single is released.'
  },
  de: {
    navMusic: 'Musik', navAbout: 'Über KAYLARO', navSocials: 'Socials', eyebrow: 'POLNISCH / DEUTSCH DANCE & PARTY', heroCopy: 'Eingängige Hooks, moderner Club-Sound und maximale Party-Energie.', listenDebut: 'Jetzt anhören', discover: 'Neue Single entdecken', scroll: 'SCROLL', debutSingle: 'DEBÜTSINGLE', releaseCopy: 'Das erste energiegeladene Kapitel von KAYLARO — für lange Nächte, laute Boxen und einen Hook, der im Kopf bleibt.', spotify: 'Spotify', appleMusic: 'Apple Music', allPlatforms: 'Alle Plattformen', officialVideo: 'Offizielles Musikvideo', streamingNow: 'Jetzt auf Spotify, Apple Music und weiteren Plattformen verfügbar.', aboutLabel: 'ÜBER KAYLARO', aboutTitle: 'Neue Musik.<br>Neue Energie.', aboutCopy: 'KAYLARO verbindet polnische und deutsche Einflüsse mit eingängigen Hooks, moderner elektronischer Produktion und energiegeladenem Dance- und Party-Sound.', aboutRelease: 'Die Debütsingle <strong>„Robisz To Specjalnie“</strong> ist jetzt verfügbar. Als Nächstes: <strong>„Ona Mówi Aj Aj“</strong> am 23. Oktober 2026.', follow: 'KAYLARO FOLGEN', coming: 'ONA MÓWI AJ AJ<br>AB 23. OKTOBER.', listenTrack: 'KAYLARO zum Release folgen', imprint: 'Impressum', privacy: 'Datenschutz', heroUpcoming: 'NÄCHSTE SINGLE · ONA MÓWI AJ AJ · 23.10.2026', upcomingLabel: 'NÄCHSTER RELEASE · 23. OKTOBER 2026', upcomingDate: '23. OKTOBER 2026 · BALD VERFÜGBAR', upcomingCopy: 'Die neue Dance-Pop-Single von KAYLARO kommt! Digi-digi, Aj Aj! Hör schon jetzt den Hook in den Socials und verpasse den Release nicht.', followRelease: 'Zum Release folgen', listenCurrent: 'Debütsingle anhören', upcomingNote: 'Streaming-Links werden ergänzt, sobald die Single veröffentlicht ist.'
  },
  pl: {
    navMusic: 'Muzyka', navAbout: 'O KAYLARO', navSocials: 'Social media', eyebrow: 'POLSKO / NIEMIECKI DANCE & PARTY', heroCopy: 'Chwytliwe refreny, nowoczesne klubowe brzmienie i maksimum imprezowej energii.', listenDebut: 'Słuchaj teraz', discover: 'Poznaj nowy singiel', scroll: 'DALEJ', debutSingle: 'DEBIUTANCKI SINGIEL', releaseCopy: 'Pierwszy energetyczny rozdział KAYLARO — na długie noce, głośne głośniki i refren, który zostaje w głowie.', spotify: 'Spotify', appleMusic: 'Apple Music', allPlatforms: 'Wszystkie platformy', officialVideo: 'Oficjalny teledysk', streamingNow: 'Dostępne teraz na Spotify, Apple Music i innych platformach.', aboutLabel: 'O KAYLARO', aboutTitle: 'Nowa muzyka.<br>Nowa energia.', aboutCopy: 'KAYLARO łączy polskie i niemieckie wpływy z chwytliwymi refrenami, nowoczesną produkcją elektroniczną oraz energetycznym brzmieniem dance i party.', aboutRelease: 'Debiutancki singiel <strong>„Robisz To Specjalnie”</strong> jest już dostępny. Następny: <strong>„Ona Mówi Aj Aj”</strong> – 23 października 2026.', follow: 'OBSERWUJ KAYLARO', coming: 'ONA MÓWI AJ AJ<br>JUŻ 23 PAŹDZIERNIKA.', listenTrack: 'Obserwuj KAYLARO przed premierą', imprint: 'Impressum', privacy: 'Prywatność', heroUpcoming: 'NOWY SINGIEL · ONA MÓWI AJ AJ · 23.10.2026', upcomingLabel: 'NOWA PREMIERA · 23 PAŹDZIERNIKA 2026', upcomingDate: '23 PAŹDZIERNIKA 2026 · JUŻ WKRÓTCE', upcomingCopy: 'Nadchodzi nowy taneczny singiel KAYLARO! Digi-digi, Aj Aj! Posłuchaj refrenu w social mediach i nie przegap premiery.', followRelease: 'Obserwuj przed premierą', listenCurrent: 'Posłuchaj debiutanckiego singla', upcomingNote: 'Linki do serwisów streamingowych pojawią się po premierze.'
  }
};

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll('[data-lang]').forEach(btn => btn.classList.toggle('is-active', btn.dataset.lang === lang));
  localStorage.setItem('kaylaro-lang', lang);
}

async function detectLanguage() {
  const saved = localStorage.getItem('kaylaro-lang');
  if (saved) return saved;
  try {
    const res = await fetch('https://api.country.is/', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data.country === 'DE') return 'de';
      if (data.country === 'PL') return 'pl';
      return 'en';
    }
  } catch (_) {}
  const browser = (navigator.language || 'en').toLowerCase();
  if (browser.startsWith('de')) return 'de';
  if (browser.startsWith('pl')) return 'pl';
  return 'en';
}

document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
detectLanguage().then(setLanguage);

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealItems.forEach((item) => observer.observe(item));
if (location.hash) requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ block: 'start' }));
