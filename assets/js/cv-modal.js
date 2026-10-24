document.addEventListener('DOMContentLoaded', function () {
  var viewer = document.querySelector('#cv-viewer iframe');
  var en = document.getElementById('cv-lang-en');
  var pt = document.getElementById('cv-lang-pt');
  var printButton = document.getElementById('cv-print');
  var openButton = document.getElementById('cv-open-page');
  if (!viewer || !en || !pt) return;
  function selectLanguage(language) {
    viewer.src = language === 'pt' ? 'cv-pt.html' : 'cv-en.html';
    viewer.dataset.cvLanguage = language;
    en.classList.toggle('active', language === 'en');
    pt.classList.toggle('active', language === 'pt');
    en.setAttribute('aria-pressed', language === 'en' ? 'true' : 'false');
    pt.setAttribute('aria-pressed', language === 'pt' ? 'true' : 'false');
  }
  en.addEventListener('click', function () { selectLanguage('en'); });
  pt.addEventListener('click', function () { selectLanguage('pt'); });
  if (openButton) openButton.addEventListener('click', function () { window.open(viewer.src, '_blank', 'noopener'); });
  if (printButton) printButton.addEventListener('click', function () {
    try { viewer.contentWindow.focus(); viewer.contentWindow.print(); }
    catch (error) { window.open(viewer.src, '_blank', 'noopener'); }
  });
  selectLanguage('en');
});