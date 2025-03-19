// Function to enable/disable "Add to Cart" buttons
function enableAddToCartButtons() {
    const tableNumber = document.getElementById('table-number').value;
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    if (tableNumber) {
        addToCartButtons.forEach(button => {
            button.disabled = false; // Enable buttons if table number is selected
        });
    } else {
        addToCartButtons.forEach(button => {
            button.disabled = true; // Disable buttons if no table number is selected
        });
    }
}

// Function to update quantity
function updateQuantity(button, change) {
    const quantityElement = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity += change;

    // Ensure quantity doesn't go below 1
    if (quantity < 1) quantity = 1;

    quantityElement.textContent = quantity;
}

// Function to add item to cart
function addToCart(itemName, price) {
    const tableNumber = document.getElementById('table-number').value;

    // Check if table number is selected
    if (!tableNumber) {
        alert('Please select a table number before adding items to the cart.');
        return; // Exit the function if no table number is selected
    }

    const quantity = parseInt(event.target.parentElement.querySelector('.quantity').textContent);
    const totalPrice = price * quantity;

    // Create cart item object
    const cartItem = {
        tableNumber: tableNumber,
        name: itemName,
        price: price,
        quantity: quantity,
        total: totalPrice
    };

    // Add to cart (you can use localStorage or an array to store cart items)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${quantity} x ${itemName} added to cart for Table ${tableNumber} (Total: ₹${totalPrice})`);
}

// Disable "Add to Cart" buttons initially
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.disabled = true; // Disable buttons by default
    });
});