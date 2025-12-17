// Mobile Menu Toggle
(function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const closeButton = document.querySelector('.sidebar-close');
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    if (!hamburger || !sidebar) return;

    function toggleMenu() {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu on close button click
    if (closeButton) {
        closeButton.addEventListener('click', function(e) {
            e.stopPropagation();
            closeMenu();
        });
    }

    // Close menu on overlay click
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            e.stopPropagation();
            closeMenu();
        });
    }

    // Close menu when clicking a link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeMenu();
        }
    });

    // Prevent sidebar from closing when clicking inside it
    sidebar.addEventListener('click', function(e) {
        e.stopPropagation();
    });
})();

