function initSlider() {
  var slider = tns({
    container: ".section-card-wrapper",
    items: 3,
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
