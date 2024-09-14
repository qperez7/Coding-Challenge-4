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
const  Laptop = [{ item: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 }];

function displayProductDetails(product) {
    const status = product.quantity <= product.lowStockLevel ? "Low Stock" : "In Stock"
    return `${Laptop.item} is ${status}`
}
console.log(displayProductDetails(Laptop)); // Output: Gives laptop stock status
console.log(Laptop); // Gives the name,quanitity, price

// Task 3: Create a Function to Update Product Stock After Sales
function updateStock(currentQuantity,unitsSold) {
    return currentQuantity - unitsSold;
}
let unitsSold = 7
let newQuantity = updateStock(10,7);
console.log(newQuantity); // Output: New quantity is 3
const update = newQuantity >= Laptop.lowStockLevel ? "In Stock": "Low Stock"
console.log(update) //Output: Laptop Stock Status after update: Low Stock

//Task 4: Create a Function to Check Low Stock Products
function checkLowStock(inventory) {
inventory.forEach(inventory => {if(inventory.quantity < inventory.lowStockLevel) {console.log(`${inventory.name} is low`)}})
};
console.log(checkLowStock(inventory)); //Output : I am unsure why its undefined

//Task 5: Create a Function to Calculate Total Inventory Value
 const inventoryValue = function(inventory) {
    return inventory.reduce((sum,cv) => {
        return sum + (cv.price * cv.quantity)
    },0)}
    console.log(inventoryValue(inventory)) // Output: Total returned is $21050
