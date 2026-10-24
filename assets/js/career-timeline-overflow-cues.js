document.addEventListener('DOMContentLoaded', function () {
  var timeline = document.querySelector('.career-timeline');
  if (!timeline) return;
  function updateCareerOverflowCues() {
    var desktop = window.matchMedia('(min-width: 768px)').matches;
    var max = Math.max(0, timeline.scrollWidth - timeline.clientWidth);
    timeline.classList.toggle('can-scroll-left', desktop && timeline.scrollLeft > 4);
    timeline.classList.toggle('can-scroll-right', desktop && timeline.scrollLeft < max - 4);
  }
  timeline.addEventListener('scroll', updateCareerOverflowCues, { passive: true });
  window.addEventListener('resize', updateCareerOverflowCues);
  requestAnimationFrame(function () { requestAnimationFrame(updateCareerOverflowCues); });
});