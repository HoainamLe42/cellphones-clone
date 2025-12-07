import { productCategories } from '../../data/productCategories.js';

export class CategoryGrid {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) throw new Error(`#${containerId} not found`);
    }

    createCard(item) {
        const a = document.createElement('a');
        a.href = item.url;
        a.className = 'category__item';

        a.innerHTML = `
                   <div>
                             <img
                                          src="${item.image}"
                                          alt="${item.name}"
                              />
                   </div>
                     <span>${item.name}</span>
              `;

        return a;
    }

    render() {
        const fragment = document.createDocumentFragment();

        productCategories.forEach((item) =>
            fragment.appendChild(this.createCard(item)),
        );

        this.container.appendChild(fragment);
    }
}
