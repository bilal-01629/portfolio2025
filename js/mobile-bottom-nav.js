// Mobile Bottom Navigation - Active State Handler
(function() {
    'use strict';
    
    // Get current page from URL
    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        
        if (filename === 'index.html' || filename === '' || path.endsWith('/')) {
            return 'home';
        } else if (filename === 'works.html') {
            return 'works';
        } else if (filename === 'contact.html') {
            return 'contact';
        }
        
        return null;
    }
    
    // Set active state on page load
    function setActiveState() {
        const currentPage = getCurrentPage();
        if (!currentPage) return;
        
        const navLinks = document.querySelectorAll('.mobile-bottom-nav-link');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('data-page');
            if (linkPage === currentPage) {
                link.classList.add('mobile-nav-active');
            } else {
                link.classList.remove('mobile-nav-active');
            }
        });
    }
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setActiveState);
    } else {
        setActiveState();
    }
})();

