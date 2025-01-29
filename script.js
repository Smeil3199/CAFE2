let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";

    let totalPrice = 0; // Переменная для подсчёта общей суммы

    cart.forEach((cartItem) => {
        const li = document.createElement("li");
        li.textContent = `${cartItem.item} - ${cartItem.price} ₽`;
        cartItemsList.appendChild(li);
        totalPrice += cartItem.price; // Добавляем цену блюда в общую сумму
    });

    // Добавляем общую цену в корзину
    const totalPriceElement = document.getElementById("total-price");
    if (totalPriceElement) {
        totalPriceElement.textContent = `Общая сумма: ${totalPrice} ₽`;
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("Корзина пуста!");
    } else {
        alert("Ваш заказ оформлен!");
    }
}

function clearCart() {
    cart = [];
    updateCart();
    alert("Корзина очищена!");
}
