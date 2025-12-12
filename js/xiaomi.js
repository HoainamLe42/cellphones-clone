import { getProductsByBrand } from '../services/api.js';
import { renderSidebar } from './components/MenuItem.js';
import { renderProductCard } from './components/ProductCard.js';

export async function loadXiaomi() {
    const container = document.getElementById('xiaomi-body__items');
    if (!container) return;

    // Call api
    async function getPhones() {
        const res = await fetch(`http://localhost:8000/products?brand=xiaomi`);
        if (!res.ok) throw new Error('Failed to fetch Products');
        const data = res.json();

        return data;
    }
    const phones = await getPhones();

    const html = `
                    <div class="phones-body__grid">
                              ${phones
                                  .map((phone) => renderProductCard(phone))
                                  .join('')}
                    </div>
                    
          `;

    container.innerHTML = html;
}

class XiaomiPage {
    constructor() {
        this.container = document.getElementById('xiaomi-body__items');
        this.init();
    }

    showLoading() {
        this.container.innerHTML = `
            <div class="loading">Đang tải sản phẩm...</div>
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

    async init() {
        if (!this.container) return;
        this.showLoading();

        try {
            const phones = await getProductsByBrand('xiaomi');
            console.log(phones);
        } catch (error) {
            this.showError(error);
        }
    }

    render(phones) {
        if (!phones || phones.length === 0) {
            this.container.innerHTML =
                '<div class="no-products">Không có sản phẩm nào.</div>';
            return;
        }

        const html = `
            <div class="phones-body__grid">
                ${phones.map((phone) => renderProductCard(phone)).join('')}
            </div>
        `;

        this.container.innerHTML = html;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    new XiaomiPage();
    renderSidebar();
});
