import { renderFooter } from '../views/renderFooter.js';
import { renderHeader } from '../views/renderHeader.js';

export const LayoutController = {
    init() {
        renderHeader();
        renderFooter();
    },
};
