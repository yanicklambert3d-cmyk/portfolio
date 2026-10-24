document.addEventListener('DOMContentLoaded', function () {
  var timeline = document.querySelector('.career-timeline');
  var container = document.querySelector('.career-timeline-container');
  if (!timeline || !container || container.querySelector('.career-edge-cue')) return;
  var leftCue = document.createElement('span');
  var rightCue = document.createElement('span');
  leftCue.className = 'career-edge-cue career-edge-cue--left';
  rightCue.className = 'career-edge-cue career-edge-cue--right';
  leftCue.setAttribute('aria-hidden', 'true');
  rightCue.setAttribute('aria-hidden', 'true');
  container.appendChild(leftCue);
  container.appendChild(rightCue);
  function placeCareerCues() {
    var top = timeline.offsetTop;
    var left = timeline.offsetLeft;
    var width = timeline.offsetWidth;
    var height = timeline.offsetHeight;
    leftCue.style.top = top + 'px'; leftCue.style.left = left + 'px'; leftCue.style.height = height + 'px';
    rightCue.style.top = top + 'px'; rightCue.style.left = Math.max(left, left + width - 82) + 'px'; rightCue.style.height = height + 'px';
  }
  window.addEventListener('resize', placeCareerCues);
  requestAnimationFrame(function () { requestAnimationFrame(placeCareerCues); });
});