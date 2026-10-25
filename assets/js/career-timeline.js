document.addEventListener('DOMContentLoaded', function () {
  var timeline = document.querySelector('.career-timeline');
  if (!timeline) return;
  function centreLatestRole() {
    var items = timeline.querySelectorAll('.career-milestone');
    var last = items[items.length - 1];
    if (!last || window.matchMedia('(max-width: 767.98px)').matches) return;
    timeline.scrollLeft = last.offsetLeft + last.offsetWidth / 2 - timeline.clientWidth / 2;
  }
  var dragging = false;
  var startX = 0;
  var startScroll = 0;
  timeline.addEventListener('pointerdown', function (event) {
    if (event.pointerType !== 'mouse' || event.button !== 0 || window.matchMedia('(max-width: 767.98px)').matches) return;
    if (event.target.closest('a,button,input,select,textarea')) return;
    dragging = true;
    startX = event.clientX;
    startScroll = timeline.scrollLeft;
    timeline.classList.add('is-dragging');
    timeline.setPointerCapture(event.pointerId);
  });
  timeline.addEventListener('pointermove', function (event) {
    if (!dragging) return;
    timeline.scrollLeft = startScroll - (event.clientX - startX);
  });
  function stopDragging() { dragging = false; timeline.classList.remove('is-dragging'); }
  timeline.addEventListener('pointerup', stopDragging);
  timeline.addEventListener('pointercancel', stopDragging);
  timeline.addEventListener('lostpointercapture', stopDragging);
  window.addEventListener('load', centreLatestRole, { once: true });
  window.addEventListener('resize', centreLatestRole);
  requestAnimationFrame(function () { requestAnimationFrame(centreLatestRole); });
});