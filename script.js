const translations = {
  en: {
    navMusic: 'Music', navAbout: 'About', navSocials: 'Socials', eyebrow: 'POLISH / GERMAN DANCE & PARTY', heroCopy: 'Catchy hooks, modern club production and high-energy party vibes.', listenDebut: 'Stream new single', discover: 'Explore new single', scroll: 'SCROLL', debutSingle: 'DEBUT SINGLE', releaseCopy: 'A high-energy first chapter from KAYLARO — built for late nights, loud speakers and a hook that stays with you.', spotify: 'Spotify', appleMusic: 'Apple Music', allPlatforms: 'All platforms', officialVideo: 'Official Music Video', streamingNow: 'Available now on Spotify, Apple Music and more.', aboutLabel: 'ABOUT', aboutTitle: 'New music.<br>New energy.', aboutCopy: 'KAYLARO is a European dance artist blending Polish and German influences with catchy hooks, modern electronic production and high-energy party vibes.', aboutRelease: 'The new single <strong>“Ona Mówi Aj Aj”</strong> is out now alongside the debut <strong>“Robisz To Specjalnie”</strong>.', follow: 'FOLLOW KAYLARO', coming: 'ONA MÓWI AJ AJ<br>OUT NOW.', listenTrack: 'Stream Ona Mówi Aj Aj', imprint: 'Imprint', privacy: 'Privacy', heroUpcoming: 'OUT NOW · ONA MÓWI AJ AJ · 23 OCT 2026', upcomingLabel: 'NEW SINGLE · OUT NOW', upcomingDate: '23 OCTOBER 2026 · OUT NOW', upcomingCopy: 'The wait is over! Digi Digi… Aj Aj! Stream the new KAYLARO dance-pop single now.', followRelease: 'Stream new single', listenCurrent: 'Listen to the debut single', upcomingNote: 'Now streaming on Spotify, Apple Music, YouTube Music and more.'
  },
  de: {
    navMusic: 'Musik', navAbout: 'Über KAYLARO', navSocials: 'Socials', eyebrow: 'POLNISCH / DEUTSCH DANCE & PARTY', heroCopy: 'Eingängige Hooks, moderner Club-Sound und maximale Party-Energie.', listenDebut: 'Neue Single streamen', discover: 'Neue Single entdecken', scroll: 'SCROLL', debutSingle: 'DEBÜTSINGLE', releaseCopy: 'Das erste energiegeladene Kapitel von KAYLARO — für lange Nächte, laute Boxen und einen Hook, der im Kopf bleibt.', spotify: 'Spotify', appleMusic: 'Apple Music', allPlatforms: 'Alle Plattformen', officialVideo: 'Offizielles Musikvideo', streamingNow: 'Jetzt auf Spotify, Apple Music und weiteren Plattformen verfügbar.', aboutLabel: 'ÜBER KAYLARO', aboutTitle: 'Neue Musik.<br>Neue Energie.', aboutCopy: 'KAYLARO verbindet polnische und deutsche Einflüsse mit eingängigen Hooks, moderner elektronischer Produktion und energiegeladenem Dance- und Party-Sound.', aboutRelease: 'Die neue Single <strong>„Ona Mówi Aj Aj“</strong> ist jetzt verfügbar, ebenso die Debütsingle <strong>„Robisz To Specjalnie“</strong>.', follow: 'KAYLARO FOLGEN', coming: 'ONA MÓWI AJ AJ<br>JETZT ANHÖREN.', listenTrack: 'Ona Mówi Aj Aj streamen', imprint: 'Impressum', privacy: 'Datenschutz', heroUpcoming: 'OUT NOW · ONA MÓWI AJ AJ · 23.10.2026', upcomingLabel: 'NEUE SINGLE · JETZT VERFÜGBAR', upcomingDate: '23. OKTOBER 2026 · OUT NOW', upcomingCopy: 'Es ist soweit! Digi Digi… Aj Aj! Streame die neue Dance-Pop-Single von KAYLARO jetzt.', followRelease: 'Neue Single streamen', listenCurrent: 'Debütsingle anhören', upcomingNote: 'Jetzt auf Spotify, Apple Music, YouTube Music und weiteren Plattformen.'
  },
  pl: {
    navMusic: 'Muzyka', navAbout: 'O KAYLARO', navSocials: 'Social media', eyebrow: 'POLSKO / NIEMIECKI DANCE & PARTY', heroCopy: 'Chwytliwe refreny, nowoczesne klubowe brzmienie i maksimum imprezowej energii.', listenDebut: 'Słuchaj nowego singla', discover: 'Poznaj nowy singiel', scroll: 'DALEJ', debutSingle: 'DEBIUTANCKI SINGIEL', releaseCopy: 'Pierwszy energetyczny rozdział KAYLARO — na długie noce, głośne głośniki i refren, który zostaje w głowie.', spotify: 'Spotify', appleMusic: 'Apple Music', allPlatforms: 'Wszystkie platformy', officialVideo: 'Oficjalny teledysk', streamingNow: 'Dostępne teraz na Spotify, Apple Music i innych platformach.', aboutLabel: 'O KAYLARO', aboutTitle: 'Nowa muzyka.<br>Nowa energia.', aboutCopy: 'KAYLARO łączy polskie i niemieckie wpływy z chwytliwymi refrenami, nowoczesną produkcją elektroniczną oraz energetycznym brzmieniem dance i party.', aboutRelease: 'Nowy singiel <strong>„Ona Mówi Aj Aj”</strong> jest już dostępny, tak samo jak debiutancki <strong>„Robisz To Specjalnie”</strong>.', follow: 'OBSERWUJ KAYLARO', coming: 'ONA MÓWI AJ AJ<br>JUŻ JEST!', listenTrack: 'Słuchaj Ona Mówi Aj Aj', imprint: 'Impressum', privacy: 'Prywatność', heroUpcoming: 'JUŻ JEST · ONA MÓWI AJ AJ · 23.10.2026', upcomingLabel: 'NOWY SINGIEL · JUŻ DOSTĘPNY', upcomingDate: '23 PAŹDZIERNIKA 2026 · JUŻ JEST', upcomingCopy: 'Koniec czekania! Digi Digi… Aj Aj! Nowy singiel KAYLARO jest już dostępny – słuchaj teraz.', followRelease: 'Słuchaj nowego singla', listenCurrent: 'Posłuchaj debiutanckiego singla', upcomingNote: 'Słuchaj teraz na Spotify, Apple Music, YouTube Music i innych platformach.'
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
