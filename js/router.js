// import { renderSidebar } from '../components/MenuItem.js';
// import { CategoryGrid } from '../components/CategoryGrid.js';
// import { loadSamsungSection } from './sections/home-samsung.js';
// import { loadIphoneSection } from './sections/home-iphone.js';
// import { loadIphoneUsedSection } from './sections/home-iphone-used.js';
// import { initBannerSlider } from './components/BannerSlider.js';
// import { initSlider } from './components/Slider.js';

// export const Router = (() => {
//     // Cấu hình các route
//     const routes = {
//         '/': { page: 'pages/home.html', header: true, footer: true },
//         '/dien-thoai': {
//             page: 'pages/dien-thoai.html',
//             header: true,
//             footer: true,
//         },
//         '/contact': { page: 'pages/contact.html', header: true, footer: true },
//         '/product-detail': {
//             page: 'pages/product-detail.html',
//             header: true,
//             footer: true,
//         },
//         // Dien thoai
//         '/dien-thoai-iphone': {
//             page: 'pages/dien-thoai-iphone.html',
//             header: true,
//             footer: true,
//         },
//         '/samsung': {
//             page: 'pages/samsung.html',
//             header: true,
//             footer: true,
//         },
//         '/xiaomi': {
//             page: 'pages/xiaomi.html',
//             header: true,
//             footer: true,
//         },
//         '/oppo': {
//             page: 'pages/oppo.html',
//             header: true,
//             footer: true,
//         },

//         // 404
//         404: { page: 'pages/404.html', header: true, footer: true },
//     };

//     const headerContainer = document.getElementById('header');
//     const footerContainer = document.getElementById('footer');

//     const loadContent = async (url, container) => {
//         try {
//             const res = await fetch(url);
//             if (!res.ok) throw new Error();
//             const html = await res.text();
//             container.innerHTML = html;
//         } catch (error) {
//             container.innerHTML = '<h2>Không tải được nội dung</h2>';
//         }
//     };

//     // Render header/footer
//     const renderLayout = (hasHeader, hasFooter) => {
//         if (hasHeader) {
//             loadContent('partials/header.html', headerContainer);
//         } else {
//             headerContainer.innerHTML = '';
//         }

//         if (hasFooter) {
//             loadContent('partials/footer.html', footerContainer);
//         } else {
//             footerContainer.innerHTML = '';
//         }
//     };

//     async function loadPage() {
//         const app = document.getElementById('app');
//         console.log('dd');
//         try {
//             const res = await fetch(`pages/${page}.html`);
//             if (!res.ok) throw new Error('Page not found');

//             const html = await res.text();
//             app.innerHTML = html;
//             console.log(page);
//         } catch (error) {
//             app.innerHTML = routes[404];
//         }
//     }

//     // Handle Nav
//     const navigate = async () => {
//         // let path = window.location.pathname.replace('/frontend/', '') || '/';
//         // if (path !== '/') path = path.replace(/\/$/, '');
//         // const route = routes[path] || routes[404];
//         // console.log(route);
//         // console.log(path);
//         const hash = window.location.hash;
//         console.log(hash);
//         const path = window.location.pathname;
//         console.log(path);

//         loadPage();

//         // if (path === '/') {
//         //     await loadContent(route.page, mainContainer);
//         //     renderSidebar();

//         //     const grid = new CategoryGrid('category__list');
//         //     grid.render();

//         //     // Load Section
//         //     loadSamsungSection();
//         //     loadIphoneSection();
//         //     loadIphoneUsedSection();

//         //     // Slider
//         //     initSlider();
//         //     initBannerSlider();
//         // }
//         // if (path === '/dien-thoai') {
//         // }

//         await loadContent(route.page, mainContainer);
//         // Load main page

//         // Render Layout if has
//         renderLayout(route.header, route.footer);
//     };

//     // Render layout

//     return {
//         init: () => {
//             navigate();
//         },
//     };
// })();

export async function loadPage(page) {
    const app = document.getElementById('app');

    try {
        const res = await fetch(`pages/${page}.html`);
        if (!res.ok) throw new Error('Page not found');

        const html = await res.text();
        app.innerHTML = html;

        console.log('Okk');
        console.log(page);
    } catch (error) {
        app.innerHTML = `<h1>404 - Page Not Found</h1>`;
    }
}

export function router() {
    const path = window.location.pathname;
    
    console.log(path);

    // loadPage('samsung');
}
