// Task 1: Create an Inventory Array of Product Objects

const inventory = [
{ name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
{ name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
{ name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
{ name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
{ name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
    ];
console.log(inventory); // Output: An array of 5 products

// Task 2: Create a Function to Display Product Details
function displayProductDetails(products,stock) {
products = inventory.name,inventory.price,inventory.quantity
stock = inventory.lowStockLevel
if (inventory.quantity >= inventory.lowStockLevel) {
    return "In Stock"; } 
   if (inventory.quantity <= inventory.lowStockLevel) {
    return "Low Stock"; }
    return products,stock
;
}; console.log(displayProductDetails(inventory[0],3))