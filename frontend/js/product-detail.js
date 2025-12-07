import { renderSidebar } from './components/MenuItem.js';
import ProductDetail from './components/ProductDetail.js';

document.addEventListener('DOMContentLoaded', () => {
    const page = new ProductDetail();
    page.init();

    renderSidebar();
});
