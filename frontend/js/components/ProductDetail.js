import { formatPrice } from '../utils.js';

export default class ProductDetail {
    constructor() {
        this.productId = this.getProductId();
        this.product = null;
        this.container = document.querySelector('.product-detail');
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

    getProductId() {
        return new URLSearchParams(window.location.search).get('id');
    }

    async fetchProduct() {
        if (!this.productId) {
            this.product = null;
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:8000/products?id=${Number(this.productId)}`,
            );
            if (!response.ok) throw new Error('Product not found');
            const data = await response.json();
            this.product = data[0];
            console.log(this.product);
        } catch (error) {
            this.product = null;
            console.error(error);
        }
    }

    render() {
        if (!this.container) return;
        if (!this.product) {
            return `<div class="container"><div class="error">Product not found.</div></div>`;
        }

        this.container.innerHTML = `
               <div class="container">
                <h2 class="product-detail__name">
                    ${this.product.name}
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
                                    src="${this.product.image}"
                                    alt=""
                                />
                            </div>

                            <div class="items-view">
                            ${this.product.colors
                                .map(
                                    (color) =>
                                        `<img
                                    class=""
                                    src="${color.image}"
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
                            this.product.sale_price,
                        )}</span>
                        <span class="price-current">${formatPrice(
                            this.product.price,
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
    }

    async init() {
        await this.fetchProduct();
        this.render();
        this.selectColor();
    }
}
