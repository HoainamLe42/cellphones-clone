export function initSlider() {
    const container = document.querySelector('.slideshow__content');
    const wrapper = container.querySelector('.slideshow__content--wrapper');
    const slides = wrapper.querySelectorAll('img');
    let current = 0;
    let autoSlideInterval = null;

    function showSlide(index) {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        current = index;

        const offset = -index * 100;
        wrapper.style.transform = `translateX(${offset}%)`;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            showSlide(current + 1);
        }, 3000);
    }

    container.querySelector('.prev').onclick = () => {
        showSlide(current - 1);
    };
    container.querySelector('.next').onclick = () => {
        showSlide(current + 1);
    };

    showSlide(0);
    // startAutoSlide();
}
