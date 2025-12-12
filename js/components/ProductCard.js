export function renderProductCard(product) {
    return ` 
              <div class="feature__item" data-id='${product.id}'>
                  <a href="chi-tiet.html?id=${product.id}">
                      <div class="feature__item__top">
                          <span>Trả góp 0%</span>
                          <span>1%</span>
                      </div>
                      <div class="feature__item__image">
                          <img
                              src="${product.thumbnail}"
                              alt=""
                          />
                      </div>

                      <div class="feature__content">
                          <img
                              src="../assets/icons/1759205461232_san_hang.webp"
                              alt=""
                          />
                          <h4>${product.title}</h4>
                          <span class="feature__price--sale">37.790.000 đ</span>
                          <span class="feature__price">37.790.000 đ</span>
                      </div>
                      <div class="feature__bottom">
                          <p>
                              Ưu đãi lên đến
                              <b style="color: red;font-weight: 400;">5,5tr</b>
                          </p>
                          <p style="margin-top: 6px">
                              Trả góp
                              <b>30: 0đ trả trước, 0 lãi, 0 phí</b>
                          </p>
                      </div>
                  </a>
              </div>
          `;
}
