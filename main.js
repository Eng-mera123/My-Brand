// 1. Data: Array of product objects
const products = [
    { id: 1, name: "Smart Watch", price: 500, img: "https://i.pinimg.com/1200x/47/05/e5/4705e5417f3dbfeb4fce1940e28ca704.jpg" },
    { id: 2, name: "Wireless Headphones", price: 300, img: "https://i.pinimg.com/736x/a8/33/7f/a8337f50ffaf22a9f4c350ed63362ec8.jpg" },
    { id: 3, name: "Mechanical Keyboard", price: 200, img: "https://i.pinimg.com/1200x/4e/6c/63/4e6c63237bc30d9d5cb79351e0e493f2.jpg" },
    { id: 4, name: "Gaming Mouse", price: 150, img: "https://i.pinimg.com/736x/bb/31/c2/bb31c26fcffdf72b62c5895e96d42b7a.jpg" },
];

const container = document.querySelector('.products-container');
const cartCountElement = document.getElementById('cart-count');

// 2. Initialize Cart from Local Storage (or set to 0 if empty)
let cartCount = localStorage.getItem('myCartCount') ? parseInt(localStorage.getItem('myCartCount')) : 0;
cartCountElement.innerText = cartCount;

/**
 * 3. OOP Approach: Function to render products
 * Dynamically creates HTML cards for each product in the array
 */
function displayProducts() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

/**
 * 4. Logic: Add to Cart & Local Storage update
 */
function addToCart() {
    // Increment count
    cartCount++;
    
    // Update the UI
    cartCountElement.innerText = cartCount;
    
    // Save to Local Storage (Persistence)
    localStorage.setItem('myCartCount', cartCount);
    
    console.log("Item added. Total items in storage:", localStorage.getItem('myCartCount'));
}

// Run the display function
displayProducts();