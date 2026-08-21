// Swap the poster for the animated loop once it has fully decoded, so the
// first paint is instant and the 10 MB loop never shows as a half-drawn frame.
(function () {
  var loop = document.getElementById('loop');
  var loading = document.getElementById('loading');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function reveal() {
    loop.classList.add('ready');
    if (loading) loading.classList.add('done');
  }

  if (reduced) {
    if (loading) loading.classList.add('done');
  } else if (loop.complete && loop.naturalWidth) {
    reveal();
  } else {
    loop.addEventListener('load', reveal);
    loop.addEventListener('error', function () {
      if (loading) loading.textContent = 'Loop unavailable — showing still frame';
    });
  }

  var fs = document.getElementById('fs');
  var stage = document.getElementById('plate');
  if (fs && stage && stage.requestFullscreen) {
    fs.addEventListener('click', function () {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        stage.requestFullscreen();
      }
    });
    document.addEventListener('fullscreenchange', function () {
      fs.textContent = document.fullscreenElement ? 'Exit fullscreen' : 'View fullscreen';
    });
  } else if (fs) {
    fs.hidden = true;
  }
})();
