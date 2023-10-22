function initSlider() {
  var slider = tns({
    container: ".info-card-wrapper",
    items: 2,
    controls: true,
    loop: false,
    speed: 400,
    nav: false,
    controls: true,
    prevButton: ".btn-left",
    nextButton: ".btn-right",
  });
}

window.onload = (event) => {
  initSlider();
};
