import { renderProductCard } from './components/ProductCard.js';
import { renderSidebar } from './components/MenuItem.js';

export async function loadIPhones() {
    const container = document.getElementById('iphones-body__items');
    if (!container) return;

    // Call api
    async function getPhones() {
        const res = await fetch(`http://localhost:8000/products?brand=iPhone`);
        if (!res.ok) throw new Error('Failed to fetch Products');
        const data = res.json();

        return data;
    }
    const iphones = await getPhones();

    const html = `
                    <div class="phones-body__grid">
                              ${iphones
                                  .map((phone) => renderProductCard(phone))
                                  .join('')}
                    </div>
                    
          `;

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadIPhones();

    renderSidebar();
});
