let cart =[];
let total = 0;
function addToCart(productName,price){
    cart.push({ name:productName,price});
    total+= price;
    updateCart()
}
function updateCart(){
    const cartitems =document.getElementById("cart-items");
    const cartTotal =document.getElementById("cart-item");
}
cartitems.innerHTML="";
cart.forEach((item) => {
    const li =document.createElement("li")
    li.textContent = `${item.name} - $${item.price}`; 
    cartItems.appendChild(li);
});
cartTotal.textContent=total.toFixed(2) ;

function checkout() {
    if (cart.length===0){
        alert("your cart is empty!");
    } else {
        alert(`Thank you for your purchase!Your total is $${total.toFixed(2)}`);
        cart = [];
        total = 0;
        updateCart();
    }
}

