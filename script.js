document.addEventListener("DOMContentLoaded", function() {
    const addToCartButton = document.querySelector('.add-to-cart-button');
    addToCartButton.addEventListener('click', function() {
        alert('Product added to cart!');
    });
    const submenuItems = document.querySelectorAll('.relative.group');

    submenuItems.forEach((item) => {
        item.addEventListener('mouseenter', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
                submenu.style.opacity = '1';
                submenu.style.transform = 'translateY(0)';
            }
        });

        item.addEventListener('mouseleave', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
                submenu.style.opacity = '0';
                submenu.style.transform = 'translateY(-10px)';
            }
        });
    });

    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = document.querySelector('.newsletter-input');
        const userEmail = emailInput.value;
        alert(`Subscribed with email: ${userEmail}`);
        emailInput.value = '';
    });
});