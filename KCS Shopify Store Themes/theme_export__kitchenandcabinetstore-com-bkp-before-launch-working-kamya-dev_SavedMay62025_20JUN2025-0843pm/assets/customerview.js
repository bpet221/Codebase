document.addEventListener('DOMContentLoaded', function () {
    // Minimum view count
    var minViews = 2;
    // Maximum view count
    var maxViews = 20;
    // Text to show after the view count number
    var text = 'people are viewing this product right now.';

    // Create the new element to display on the page
    var $viewCountElement = document.createElement('div');
    $viewCountElement.className = 'view-count shopify-customer-qty-display';
    $viewCountElement.innerText = Math.floor(Math.random() * (maxViews - minViews) + minViews) + ' ' + text;

    // Select only the first element with the class 'product__info-container'
    var $pickupOptions = document.querySelector('.product__info-container:first-child');

    // Check if the element is found
    if ($pickupOptions) {
        // Insert the view count element before the $pickupOptions element
        $pickupOptions.parentElement.insertBefore($viewCountElement, $pickupOptions);
    }
});
