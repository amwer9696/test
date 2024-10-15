// script.js

// مصفوفة لتخزين المنتجات
let products = [];

// دالة لإضافة منتج جديد
function addProduct() {
    const productName = document.getElementById("product-name").value;
    const productPrice = document.getElementById("product-price").value;
    const productQuantity = document.getElementById("product-quantity").value;

    if (productName && productPrice && productQuantity) {
        const product = {
            name: productName,
            price: parseFloat(productPrice),
            quantity: parseInt(productQuantity)
        };
        products.push(product);
        displayProducts();
        clearInputs();
    } else {
        alert("يرجى ملء جميع الحقول!");
    }
}

// دالة لعرض المنتجات
function displayProducts() {
    const productTable = document.getElementById("product-table");
    productTable.innerHTML = ""; // مسح الجدول

    products.forEach((product, index) => {
        const row = productTable.insertRow();
        row.insertCell(0).innerText = index + 1;
        row.insertCell(1).innerText = product.name;
        row.insertCell(2).innerText = product.price.toFixed(2);
        row.insertCell(3).innerText = product.quantity;
    });
}

// دالة لمسح الحقول بعد الإدخال
function clearInputs() {
    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-quantity").value = "";
}
