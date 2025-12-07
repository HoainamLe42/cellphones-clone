import { renderSidebar } from './components/MenuItem.js';
import { renderProductCard } from './components/ProductCard.js';

export async function loadPhones() {
    const container = document.querySelector('.phones-body__items');
    if (!container) return;

    // Call api
    async function getPhones() {
        const res = await fetch(`http://localhost:8000/products`);
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

    container.addEventListener('click', (e) => {
        const card = e.target.closest('.feature__item');
        if (!card) return;

        const productId = card.dataset.id;
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadPhones();

    renderSidebar();
});
