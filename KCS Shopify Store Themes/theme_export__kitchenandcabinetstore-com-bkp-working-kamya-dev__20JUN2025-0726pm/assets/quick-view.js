document.addEventListener("DOMContentLoaded", function () {
  // Open Quick View
  document.querySelectorAll('.quick-view-button').forEach(button => {
    button.addEventListener('click', function () {
      const productHandle = this.dataset.productHandle;
      const url = `/products/${productHandle}/?section_id=main-product-sample`;
      console.log('Fetching URL:', url); // Debug log

      fetch(url)
        .then(response => response.text())
        .then(html => {
          console.log('Fetched HTML:', html); // Debug log
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const quickViewProduct = doc.querySelector('#quick-view-product');
          if (quickViewProduct) {
            const quickViewContent = quickViewProduct.innerHTML;
            document.getElementById('quick-view-popup-content').innerHTML = quickViewContent;
            document.getElementById('quick-view-popup').style.display = 'block';

            // Reinitialize Dawn's JavaScript logic for the loaded content
            reinitializeDawnScripts();
          } else {
            console.error('Element #quick-view-product not found in fetched HTML'); // Debug log
            document.getElementById('quick-view-popup-content').innerHTML = '<p>Product details could not be loaded.</p>';
          }
        })
        .catch(error => console.error('Error fetching quick view product:', error));
    });
  });

  // Close Quick View
  document.querySelector('.quick-view-popup__close').addEventListener('click', function () {
    document.getElementById('quick-view-popup').style.display = 'none';
  });

  // Function to reinitialize Dawn's JavaScript logic
  function reinitializeDawnScripts() {
    // Reinitialize pickup availability (if present in the section)
    if (window.pickUpAvailability) {
      const pickUpAvailabilityElements = document.querySelectorAll('[data-pickup-availability]');
      pickUpAvailabilityElements.forEach(el => {
        window.pickUpAvailability.fetchAvailability(el);
      });
    }

    // Reinitialize variant selection
    document.querySelectorAll('[data-variant-selector]').forEach(selector => {
      new window.VariantSelects(selector);
    });

    // Reinitialize other Dawn features as needed
    document.querySelectorAll('[data-quantity-input]').forEach(input => {
      new window.QuantityInput(input);
    });
  }
});
