import { renderSidebar } from '../../components/MenuItem.js';

export const Components = {
    async header() {
        await loadPartial('partials/header.html', 'header-container');
    },
    async footer() {
        await loadPartial('partials/footer.html', 'footer-container');
    },
    async sidebar() {
        renderSidebar();
    },
};
