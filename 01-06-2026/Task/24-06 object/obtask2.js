// Task 2: E-Commerce Product
var product = 
{
    productId : 12345,
    productName : 'Scorpio',
    price : '₹ 14.53 - 18.27 Lakh',
    stock : 27,
    productInfo : function()
    {
        console.log(`productId is ${this.productId}, productName is ${this.productName}, price is ${this.price}, stock ${this.stock}`);
        
    }
};
product.productInfo();


// 1. Display product details.
console.log(product);

// 2. Change the price.
product.price = '₹ 18.93 Lakh';
console.log(product);

// 3. Add a property `category`.
product.category = 'Scorpio S11';
console.log(product);


// 4. Remove the `stock` property.
delete product.stock;
console.log(product);


// 5. Create a method `productInfo()` that displays all product information.

product.productInfo();
