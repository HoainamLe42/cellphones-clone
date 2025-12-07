import { renderProductCard } from '../components/ProductCard.js';

export async function loadSimilarProduct() {
    const container = document.getElementById('similar-product');
    if (!container) return;

    // Show loading UI
    container.innerHTML =
        '<div class="container"><p>Đang tải iPhone gợi ý...</p></div>';

    // Call api
    async function getProducts() {
        const res = await fetch(`http://localhost:8000/products?_limit=5`);
        if (!res.ok) throw new Error('Failed to fetch Products');
        const data = res.json();

        return data;
    }

    const products = await getProducts();
    console.log('Check Data: ', products);

    // Show data to UI
    const html = `
          <div class="container">
                    <div id="feature__wrapper" class="feature__wrapper">
                              <div class="feature__top">
                                        <h2 class="feature__top__title">
                                                  iPhone Cũ Giá Tốt
                                        </h2>

                              <ul class="feature__top__category">
                                <li>
                                    <a href="#!">iPhone 17 Series</a>
                                </li>
                                <li>
                                    <a href="#!">iPhone Air</a>
                                </li>
                                <li>
                                    <a href="#!">iPhone 16 Series</a>
                                </li>
                                <li>
                                    <a href="#!">iPhone 15 Series</a>
                                </li>
                                <li>
                                    <a href="#!">Xem tất cả</a>
                                </li>
                              </ul>
                              </div>
                               <div id="feature__list" class="feature__list">
                                       ${products
                                           .map((product) =>
                                               renderProductCard(product),
                                           )
                                           .join('')}
                               </div>
                    </div>
          </div>
          `;

    // Return
    container.innerHTML = html;
}
