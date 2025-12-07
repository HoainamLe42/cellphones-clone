// document.addEventListener('DOMContentLoaded', async () => {
//     const grid = new CategoryGrid('category__list');
//     grid.render();
//     LayoutController.init();
//     await loadIphoneSection();
//     await loadSamsungSection();
//     await loadIphoneUsedSection();

import { initBannerSlider } from './components/BannerSlider.js';
import { CategoryGrid } from './components/CategoryGrid.js';
import { renderSidebar } from './components/MenuItem.js';
import { initSlider } from './components/Slider.js';
import { loadIphoneSection } from './sections/home-iphone.js';
import { loadSamsungSection } from './sections/home-samsung.js';
import { loadIphoneUsedSection } from './sections/home-iphone-used.js';

//     // detail
//     await loadSimilarProduct();

//     const menu = createMenu({ containerId: 'sidebar' });
//     menu.init();

//     // SLides
//     initSlider();
//     initBannerSlider();

//     // Phones Page
//     loadPhones();
//     loadIPhones();
//     loadSamsung();
//     loadXiaomi();
//     loadOppo();

//     renderBreadcrumb();
// });

document.addEventListener('DOMContentLoaded', async () => {
    const grid = new CategoryGrid('category__list');
    grid.render();

    renderSidebar();

    // SLides
    initSlider();
    initBannerSlider();

    await loadIphoneSection();
    await loadSamsungSection();
    await loadIphoneUsedSection();
});

window.addEventListener('hashchange', () => {});
window.addEventListener('load', () => {});
