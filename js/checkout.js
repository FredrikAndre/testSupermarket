let cart = [];

$(function() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);
    generateCheckout();

    $("#home").on('click', function() { // Öppnas samma fönster
        window.location.assign('../index.html');
    });
    $("#products").on('click', function() { // Öppnas samma fönster
        window.location.assign('../html/products.html');
    });

    $(".navbar-brand").on('click', function() {
        window.location.assign('../index.html');
    });
    // Button back to previous Page
    $("<button>").addClass("btn btn-danger mr-3").attr('id', "topreviouspage").text("Tillbaka").appendTo(".paybtn");
    $("#topreviouspage").on('click', function() {
        window.history.back();
    });
    // Button checkout to "Thank you Page"
    $("<button>").addClass("btn btn-success").attr('id', "checkoutdone").text("Betala").appendTo(".paybtn");
    $("#checkoutdone").on('click', function() {
        window.location.assign('../html/thankyou.html');
    }); 

});

function generateCheckout() {

localStorage.setItem("cart", JSON.stringify(cart));
$(".cartcontainer").html("");

let totalValue = 0;

$.each(cart, (i, product)=> {

    let myTR =  $("<tr>")
    .appendTo(".cartcontainer");

    $("<td>").text(product.title).appendTo(myTR);
    $("<td>").text(product.price + " kr").appendTo(myTR);

    let addButton = $("<i>").addClass("add fas fa-plus-square").on('click', () => { addToCart(i); });
    let decreaseButton = $("<i>").addClass("decrease fas fa-minus-square").on('click', () => { decreaseFromCart(i); });
    $("<td>").text(product.quantity).append(addButton).append(decreaseButton).appendTo(myTR);
    $("<td>").text(product.price * product.quantity + " kr").appendTo(myTR);

    let removeButton = $("<i>").addClass("delete fas fa-trash").on('click', () => { removeFromCart(i); });
    $("<td>").append(removeButton).appendTo(myTR);

    totalValue += product.price * product.quantity;

    });

    $("<tr>").attr("id", "carttotalrow").appendTo(".cartcontainer");
    $("<th>").text("Total Summa").appendTo("#carttotalrow");
    $("<td>").appendTo("#carttotalrow");
    $("<td>").appendTo("#carttotalrow");
    $("<td>").text(totalValue + " kr").appendTo("#carttotalrow");
    $("<td>").appendTo("#carttotalrow");

}

function removeFromCart(i) {
    cart.splice(i, 1);
    generateCheckout();
}

function addToCart(i) {
    cart[i].quantity++;
    generateCheckout();
}

function decreaseFromCart(i) {
    cart[i].quantity--;
    if (cart[i].quantity < 1) {
        removeFromCart(i);
    } 
    generateCheckout();
}