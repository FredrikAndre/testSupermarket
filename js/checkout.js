let cart = [];

$(function() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
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
    $("<button>").addClass("btn btn-danger mr-3").attr('id', "topreviouspage").text("Tillbaka").appendTo(".checkoutbtns");
    $("#topreviouspage").on('click', function() {
        window.history.back();
    });
    // Button checkout to "Thank you Page"
    $("<button>").addClass("btn btn-success").attr('id', "checkoutdone").text("Betala").appendTo(".checkoutbtns");
    $("#checkoutdone").on('click', clearCart);

});

function generateCheckout() {

localStorage.setItem("cart", JSON.stringify(cart));
$(".cartcontainer").html("");

let totalValue = 0;

$.each(cart, (i, product)=> {

    let myTR =  $("<tr>")
    .appendTo(".cartcontainer");
    let imagetd = $("<td>").addClass("imagetd").appendTo(myTR);
    $("<img>").addClass("checkoutImg").attr("src", product.photo).appendTo(imagetd);
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

function clearCart() {
    let firstName = $("#firstname").val();
    let lastName = $("#lastname").val();
    let email = $("#emailinp").val();
    let adress = $("#adressinp").val();

    if (cart == 0) {
        $("#errormessagecart").addClass("alert alert-warning").text("Din varukorg är tom. Du måste köpa minst en vara.");
        setTimeout(() => $('.alert').remove(), 4000);
    }
    else if (firstName === '' || lastName === '' || email === '' || adress === '') {
        $("#errormessageform").addClass("alert alert-warning").text("Vänligen fyll i alla fält.");
        setTimeout(() => $('.alert').remove(), 4000);
    } 
    else {
        localStorage.removeItem("cart");
        window.location.assign('../html/thankyou.html');
    }
}
