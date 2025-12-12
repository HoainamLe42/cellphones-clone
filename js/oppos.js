import { getProductsByBrand } from '../services/api.js';
import { renderSidebar } from './components/MenuItem.js';
import { renderProductCard } from './components/ProductCard.js';
class OppoPage {
    constructor() {
        this.container = document.getElementById('oppo-body__items');
        this.init();
    }

    async init() {
        if (!this.container) return;
        this.showLoading();

        try {
            const phones = await getProductsByBrand('oppo');
            this.render(phones);
            console.log(phones);
        } catch (error) {
            this.showError(error);
        }
    }

    showLoading() {
        this.container.innerHTML = `
            <div class="loading">Đang tải sản phẩm OPPO...</div>
        `;
    }

    showError(error) {
        this.container.innerHTML = `
            <div class="error">
                Không thể tải sản phẩm. Vui lòng thử lại sau.<br>
                <small>${error.message}</small>
            </div>
        `;
    }

    render(phones) {
        if ((!phones !== phones.length) === 0) {
            this.container.innerHTML = `
                <p class="no-products">Hiện chưa có sản phẩm OPPO nào.</p>
            `;
        }

        const html = `
            <div class="phones-body__grid">
                ${phones.map((phone) => renderProductCard(phone)).join('')}
            </div>
        `;

        this.container.innerHTML = html;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new OppoPage();
    renderSidebar();
});
