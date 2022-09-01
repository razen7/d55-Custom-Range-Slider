function moveSlider(event) {
    let sliderBarEl = document.getElementById('slider-bar');

    const mouseX = event.pageX;
    let sliderBarWidth = 400; //px
    const sliderElX = sliderBarEl.offsetLeft;
    const sliderPos = mouseX - sliderElX;

    let sliderXPercent = Math.round(sliderPos / sliderBarWidth * 100);
    if (sliderXPercent > 100) {
        sliderXPercent = 100;
    }
    if (sliderXPercent < 0) {
        sliderXPercent = 0;
    }
    let sliderEl = document.getElementById('slider');
    sliderEl.style.left = sliderXPercent + '%';
    document.getElementById('slider-value').innerHTML = sliderXPercent;
}