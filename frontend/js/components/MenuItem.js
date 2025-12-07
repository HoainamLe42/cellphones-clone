export async function renderSidebar() {
    const container = document.getElementById('sidebar');
    if (!container) return;

    let menuData = [];

    // Load data
    try {
        const res = await fetch('./data/menu.json');
        menuData = await res.json();
    } catch (error) {
        console.error('Lỗi load menu:', error);
        menuData = [];
    }

    const menuList = container.querySelector('.sidebar-list');

    menuData.forEach((cat) => {
        const li = document.createElement('li');
        li.className = 'sidebar__item';

        if (cat.hasMegaMenu) {
            li.innerHTML = `
                              <a href='${cat.url}'>
                                  <span>
                                            <i class='${cat.icon}'></i>
                                            ${cat.name}
                                  </span>
                                  <i class="fa-solid fa-angle-right"></i>
                              </a>

                              <!-- Mega menu -->
                              <div id="mega-menu" class="mega-menu">
                                        <div class="mega-content">
                                            <!-- Column 1 -->
                                            <div class="menu-brand">
                                                <h3>Thương hiệu</h3>
                                                <div class="menu-brand__list">
                                                  ${cat.brands
                                                      .map(
                                                          (brand) => `
                                                            <a href="${brand.url}">${brand.name}</a>
                                                            `,
                                                      )
                                                      .join('')}
                                                </div>
                                            </div>

                                            <!-- Column 2 -->
                                            <div>
                                                <h3>Dòng sản phẩm HOT</h3>
                                                <div class='menu-hot-lines'>
                                                  ${cat?.hot_lines
                                                      ?.map(
                                                          (item) => `
                                                             <a href="${item.url}">${item.name}</a>
                                                            `,
                                                      )
                                                      .join('')}
                                                </div>
                                            </div>

                                            <!-- Column 3 -->
                                            <div>
                                                <h3>Sản phẩm giá sốc</h3>
                                                <div class='menu-promo'>
                                                   <a href='#!' class='menu-promo__item'>
                                                            <img src='./assets/images/phones/galaxy-s23ultra-black.webp' alt=''>
                                                            <div class='menu-promo__info'>
                                                                <h4>iPad A16</h4>
                                                                <span>36.000.000d</span>
                                                            </div>
                                                   <a/>
                                                   <a href='#!' class='menu-promo__item'>
                                                            <img src='./assets/images/phones/galaxy-s23ultra-black.webp' alt=''>
                                                            <div class='menu-promo__info'>
                                                                <h4>iPad A16</h4>
                                                                <span>36.000.000d</span>
                                                            </div>
                                                   <a/>
                                                </div>
                                            </div>
                                        </div>
                              </div>`;
        } else {
            li.innerHTML = `
                              <a href="${cat.url}" class='sidebar__item--url'>
                                        <span>
                                                  <i class="fa-solid fa-mobile-screen"></i>
                                                  ${cat.name}
                                        </span>
                                        <i class="fa-solid fa-angle-right"></i>
                               </a>
                               `;
        }

        menuList.appendChild(li);
    });

    container.appendChild(menuList);
}
