const product = {
  name: "Laptop",
  basePrice: 45000,
  discountPercent: 10,
  taxRate: 18,
  stockStatus: "in_stock",
};

// calculate discounted price
function calculateDiscountedPrice(price, discount) {
  return price - (price * discount) / 100;
}

// calculate tax amount
function calculateTax(price, taxRate) {
  return (price * taxRate) / 100;
}

// calculate final price (discountedPrice + tax)
function calculateFinalPrice(price, discount, taxRate) {
  const discountedPrice = calculateDiscountedPrice(price, discount);
  const tax = calculateTax(discountedPrice, taxRate);
  return discountedPrice + tax;
}

// free shipping available or not
function isFreeShipping(finalPrice) {
  if (finalPrice >= 500) {
    return "Free Shipping";
  } else {
    return "Shipping: Rs.49";
  }
}

// find out stock status
function getStockMessage(status) {
  if (status === "in_stock") {
    return "In Stock";
  } else if (status === "limited") {
    return "Limited Stock";
  } else if (status === "out_of_stock") {
    return "Out of Stock";
  } else {
    return "Invalid Stock Status";
  }
}

// discounted price
const discountedPrice = calculateDiscountedPrice(
  product.basePrice,
  product.discountPercent,
);

// tax amount
const taxAmount = calculateTax(discountedPrice, product.taxRate);

// final price
const finalPrice = calculateFinalPrice(
  product.basePrice,
  product.discountPercent,
  product.taxRate,
);

// shipping message
const shippingMessage = isFreeShipping(finalPrice);

// stock status
const stockMessage = getStockMessage(product.stockStatus);

console.log("Product Name:", product.name);
console.log("Base Price: Rs.", product.basePrice);
console.log("Discount:", product.discountPercent + "%");
console.log("Discounted Price: Rs.", discountedPrice);
console.log("Tax Rate:", product.taxRate + "%");
console.log("Tax Amount: Rs.", taxAmount);
console.log("Final Price: Rs.", finalPrice);
console.log("Shipping:", shippingMessage);
console.log("Stock Status:", stockMessage);


// in the final stages i had lot of logical errors ,but i fix it with the help of chatgpt ,i understand every logic working inside this code, but i just want to know what you recoment like try to rectifying myself without any help and push those codes with error(if i cant fix it) or push the best version i can (with external help).