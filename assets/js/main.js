// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .myprofile-text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .myprofile-text',
    rotateY: [-90, 0],
    duration: 2300,
    delay: (el, i) => 45 * i
  })
  .add({
    targets: '.ml10',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000
  });