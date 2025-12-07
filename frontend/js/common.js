// Toggle sidebar
const headerMenuBtn = document.getElementById('header-menu');
const sidebar = document.querySelector('#sidebar');
const overlay = document.querySelector('.overlay');

headerMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (document.body.classList.contains('has-sidebar-menu')) {
        overlay.classList.toggle('active');
        sidebar.classList.toggle('active');
    }

    if (document.body.classList.contains('has-dropdown-menu')) {
        sidebar.classList.toggle('sidebar-toggle');
        sidebar.classList.toggle('hidden');
        overlay.classList.toggle('active');
    }
});

// Remove sidebar on overlay click
overlay.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);

    if (document.body.classList.contains('has-sidebar-menu')) {
        overlay.classList.remove('active');
        sidebar.classList.remove('active');
    }

    if (document.body.classList.contains('has-dropdown-menu')) {
        sidebar.classList.toggle('sidebar-toggle');
        overlay.classList.remove('active');
        sidebar.classList.toggle('hidden');
    }
});

// Remove sidebar on ESC key press
window.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key !== 'Escape') return;

    if (document.body.classList.contains('has-sidebar-menu')) {
        overlay.classList.remove('active');
        sidebar.classList.remove('active');
    }

    if (document.body.classList.contains('has-dropdown-menu')) {
        sidebar.classList.toggle('sidebar-toggle');
        overlay.classList.remove('active');
        sidebar.classList.toggle('hidden');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll to top button
window.addEventListener('load', () => {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    scrollToTopBtn.addEventListener('click', scrollToTop);
});

// Show/hide scroll to top button on scroll
window.addEventListener('scroll', () => {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

export function handleProductClick(productId) {
    window.location.href = `chi-tiet.html?id=${productId}`;
}
