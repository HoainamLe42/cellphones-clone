export function renderHeader() {
    const header = document.getElementById('header');

    header.innerHTML = `
           <!-- TOP -->
            <div class="container">
                <div class="header__top">
                    <div class="header__top--left">COntent left</div>
                    <div class="header__top--right">
                        <a href="#!">Cửa hàng gần bạn</a>
                        <a href="#!">Tra cứu đơn hàng</a>
                        <a href="#!">1900 1560</a>
                    </div>
                </div>
            </div>

            <!-- BOTTOM -->
            <div class="container">
                <div class="header__bottom">
                    <a href="#!" class="logo">cellphone</a>
                    <button>
                        <i class="fa-solid fa-bars"></i>
                        Danh mục
                        <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <button>
                        <i class="fa-solid fa-location-dot"></i>
                        Hồ Chí Minh
                        <i class="fa-solid fa-angle-down"></i>
                    </button>
                    <div class="header__search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Bạn muốn mua gì hôm nay?"
                        />
                    </div>

                    <button class="header__cart">
                        Giỏ hàng
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>

                    <button>
                        Đăng nhập
                        <i class="fa-regular fa-circle-user"></i>
                    </button>
                </div>
            </div>
          `;
}
