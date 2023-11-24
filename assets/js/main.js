function initSlider() {
  var slider = tns({
    container: ".section-card-wrapper",
    items: 3,
    loop: false,
    speed: 400,
    nav: false,
    prevButton: ".btn-left",
    nextButton: ".btn-right",
  });
}

function initSlider2() {
  var slider = tns({
    container: ".section-clients-wrapper",
    items: 1,
    controls: true,
    loop: false,
    speed: 400,
    nav: true,
    controlsText: [
      '<span><img style="width: 24px" src="./assets/img/arrow.svg" alt="" /></span>',
      '<span><img style="width: 24px" src="./assets/img/arrow2.svg" alt="" /></span>',
    ],
  });
}

window.onload = (event) => {
  initSlider();
  initSlider2();
};
