const BASE_URL = 'https://dummyjson.com/products/category/smartphones';

export async function getProductsByBrand(brand) {
    const res = await fetch(`${BASE_URL}`);
    if (!res.ok) throw new Error('Không tải được sản phẩm');
    const data = await res.json();
    return data.products.filter(
        (product) => product.brand.toLowerCase() === brand.toLowerCase(),
    );
}

export async function getAllProducts() {
    const res = await fetch(`${BASE_URL}`);
    if (!res.ok) throw new Error('Không tải được sản phẩm');
    const data = await res.json();
    return data.products;
}
export async function getProductById(id) {
    const res = await fetch(`${BASE_URL}`);
    if (!res.ok) throw new Error('Không tải được sản phẩm');

    const data = await res.json();
    return data.products.filter((product) => product.id === Number(id))[0];
}
