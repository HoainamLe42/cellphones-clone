export function initBannerSlider() {
    const container = document.querySelector('.home-banner');
    if (!container) return;
    const wrapper = container.querySelector('.home-banner__wrapper');
    const slides = wrapper.querySelectorAll('img');

    let current = 0;
    let autoSlideInterval = null;

    function showSlide(index) {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        current = index;

        const offset = -current * 100;
        wrapper.style.transform = `translateX(${offset}%)`;
    }

    function autoSlide() {
        autoSlideInterval = setInterval(() => {
            showSlide(current + 1);
        }, 3000);
    }

    showSlide(0);
    // autoSlide();
}
