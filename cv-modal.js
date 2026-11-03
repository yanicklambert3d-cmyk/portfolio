document.addEventListener('DOMContentLoaded', function () {
  var viewer = document.querySelector('#cv-viewer iframe');
  var en = document.getElementById('cv-lang-en');
  var pt = document.getElementById('cv-lang-pt');
  var printButton = document.getElementById('cv-print');
  var openButton = document.getElementById('cv-open-page');
  var xr = document.getElementById('cv-type-xr');
  var ux = document.getElementById('cv-type-ux');
  var selectedType = 'xr';
  if (!viewer || !en || !pt) return;
  function selectLanguage(language) {
    var prefix = selectedType === 'ux' ? 'cv-' : 'cv-xr-';
    viewer.src = prefix + language + '.html';
    viewer.dataset.cvLanguage = language;
    en.classList.toggle('active', language === 'en');
    pt.classList.toggle('active', language === 'pt');
    en.setAttribute('aria-pressed', language === 'en' ? 'true' : 'false');
    pt.setAttribute('aria-pressed', language === 'pt' ? 'true' : 'false');
  }
  en.addEventListener('click', function () { selectLanguage('en'); });
  pt.addEventListener('click', function () { selectLanguage('pt'); });
  function selectType(type) {
    selectedType = type;
    [xr, ux].forEach(function (button) {
      if (!button) return;
      var active = button === (type === 'xr' ? xr : ux);
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    selectLanguage(viewer.dataset.cvLanguage || 'en');
  }
  if (xr) xr.addEventListener('click', function () { selectType('xr'); });
  if (ux) ux.addEventListener('click', function () { selectType('ux'); });
  if (openButton) openButton.addEventListener('click', function () { window.open(viewer.src, '_blank', 'noopener'); });
  if (printButton) printButton.addEventListener('click', function () {
    try { viewer.contentWindow.focus(); viewer.contentWindow.print(); }
    catch (error) { window.open(viewer.src, '_blank', 'noopener'); }
  });
  selectLanguage('en');
});
