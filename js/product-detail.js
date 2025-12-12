import { renderSidebar } from './components/MenuItem.js';
import { getProductById } from '../services/api.js';
import { formatPrice } from './utils.js';

class ProductDetail {
    constructor() {
        this.container = document.querySelector('.product-detail');
        this.init();
    }

    getProductId() {
        return new URLSearchParams(window.location.search).get('id');
    }

    showLoading() {
        this.container.innerHTML =
            '<p class="loading">Đang tải chi tiết sản phẩm...</p>';
    }

    selectColor() {
        this.container.addEventListener('click', (e) => {
            const colorItem = e.target.closest('.items-view img');
            if (!colorItem) return;

            const newSrc = colorItem.src;

            const mainImage = this.container.querySelector(
                '.media .image__wrapper img',
            );

            mainImage.src = newSrc;

            const colorItems =
                this.container.querySelectorAll('.items-view img');

            colorItems.forEach((item) => {
                item.classList.remove('active');

                if (item.src === mainImage.src) {
                    item.classList.add('active');
                }
            });
        });
    }

    async init() {
        if (!this.container) return;
        this.showLoading();

        const productId = this.getProductId();

        try {
            const product = await getProductById(productId);
            this.render(product);
            this.selectColor();
            console.log(product);
        } catch (error) {
            this.container.innerHTML =
                '<p class="error">Không tìm thấy sản phẩm.</p>';
            console.error(error);
        }
    }

    render(data) {
        if (!data) {
            return `<div class="container"><div class="error">Không tìm thấy sản phẩm.</div></div>`;
        }

        const html = `
               <div class="container">
                <h2 class="product-detail__name">
                    ${data.title}
                </h2>

                <div class="product-detail__grid">
                    <!-- Media -->
                    <div class="media__wrapper">
                        <div class="media">
                            <div class="image__wrapper">
                                <button class="button-prev">
                                    <i class="fa-solid fa-chevron-left"></i>
                                </button>
                                <button class="button-next">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                                <img
                                    src="${data.thumbnail}"
                                    alt=""
                                />
                            </div>

                            <div class="items-view">
                            ${data.images
                                .map(
                                    (color) =>
                                        `<img
                                    class=""
                                    src="${color}"
                                    alt=""/>`,
                                )
                                .join('')}
                            </div>
                        </div>

                        <div class="box-desc">
                            <div class="box-desc__wrapper">
                                <h3>Thông tin sản phẩm</h3>

                                <div class="box-desc__group">
                                    <i class="fa-solid fa-box-open"></i>
                                    <div>
                                        <p>
                                            Máy mới nguyên seal 100%, chính hãng
                                            Apple Việt Nam
                                        </p>
                                        <p>
                                            Di Động Việt là đại lý uỷ quyền
                                            chính thức của Apple Việt Nam
                                        </p>
                                        <p>
                                            <b>Bộ sản phẩm:</b> Thân máy, Hộp,
                                            Cáp, Cây lấy sim, Sách hướng dẫn,
                                            Túi giấy cao cấp Di Động Việt
                                        </p>
                                    </div>
                                </div>
                                <div class="box-desc__group">
                                    <i class="fa-solid fa-shield"></i>
                                    <div>
                                        <p>
                                            Độc quyền tại Di Động Việt: Bảo hành
                                            Hư lỗi - Đổi mới trong vòng 33 ngày.
                                            Bảo hành chính hãng 12 tháng.
                                        </p>
                                        <a href="#!"> (Xem chi tiết)</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="content">
                        <ul class="select-gb">
                            <li class="active">256GB</li>
                            <li>512GB</li>
                            <li>1TB</li>
                        </ul>
                        <ul class="select-color">
                            <li class="active">Cam Vũ Trụ</li>
                            <li>Xanh Đậm</li>
                            <li>Bạc</li>
                        </ul>

                        <p style="font-size: 15px; margin: 8px 0">Giá bán từ</p>
                        <span class="price">${formatPrice(
                            data.sale_price,
                        )}</span>
                        <span class="price-current">${formatPrice(
                            data.price,
                        )}</span>

                        <a class="button-buynow" href="checkout.html">
                            MUA NGAY
                            <p>Giao tận nơi hoặc tại cửa hàng</p>
                        </a>

                        <div class="button-group">
                            <button>
                                TRẢ GÓP 0% QUA THẺ
                                <p>Visa, MasterCard, JCB, Amax</p>
                            </button>
                            <button>
                                TRẢ GÓP 0%
                                <p>Visa, MasterCard, JCB, Amax</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section id="similar-product"></section>
        `;

        this.container.innerHTML = html;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ProductDetail();
    renderSidebar();
});
