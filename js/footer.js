// Common Footer Loader
(function() {
    // Function to load footer into all pages
    function loadFooter() {
        fetch('./footer.html')
            .then(response => response.text())
            .then(data => {
                // Insert footer before closing body tag
                const footerPlaceholder = document.getElementById('footer-placeholder');
                if (footerPlaceholder) {
                    footerPlaceholder.innerHTML = data;
                } else {
                    // Fallback: insert before closing body tag
                    const body = document.body;
                    const footerDiv = document.createElement('div');
                    footerDiv.innerHTML = data;
                    body.appendChild(footerDiv.firstElementChild);
                }
            })
            .catch(error => {
                console.error('Error loading footer:', error);
            });
    }

    // Load footer when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadFooter);
    } else {
        loadFooter();
    }
})();

