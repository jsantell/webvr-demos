/**
 * Due to <a-animation> components only being able to listen and animate their parents, this
 * proxies our <a-cursor>'s animation events to trigger other components that should animate
 * when the main animation trigger fires.
 */
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var $cursor = $('#cursor');
var $auxCursorAnimations = Array.prototype.slice.call($$('.aux-cursor-animation'));

$cursor.addEventListener('fusing', function () {
  $auxCursorAnimations.forEach(function ($animation) {
    $animation.emit('cursor-animation-start');
  });
});

$cursor.addEventListener('mouseleave', function () {
  $auxCursorAnimations.forEach(function ($animation) {
    $animation.emit('cursor-animation-end');
  });
});
