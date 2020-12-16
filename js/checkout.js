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

    $("<button>").addClass("btn btn-danger mr-3").attr('id', "toproducts").text("Tillbaka").appendTo(".paybtn");
    $("#toproducts").on('click', function() {
        window.location.assign('../html/products.html');
    });
    // Button checkout to "Thank you side"
    $("<button>").addClass("btn btn-success").attr('id', "checkoutdone").text("Betala").appendTo(".paybtn");
    $("#checkoutdone").on('click', function() {
        window.location.assign('../html/thankyou.html');
    }); 

});

function generateCheckout() {

let totalValue = 0;

$.each(cart, (i, product)=>{

    let myTR =  $("<tr>")
    .appendTo(".cartcontainer");

    $("<td>").text(product.title).appendTo(myTR);
    $("<td>").text(product.price + " kr").appendTo(myTR);
    $("<td>").text(product.quantity).appendTo(myTR);
    $("<td>").text(product.price * product.quantity + " kr").appendTo(myTR);
    totalValue += product.price * product.quantity;
    });

    $("<tr>").attr("id", "cartTotalRow").appendTo(".cartcontainer");
    $("<th>").text("Total").appendTo("#cartTotalRow");
    $("<td>").text("-").appendTo("#cartTotalRow");
    $("<td>").text("-").appendTo("#cartTotalRow");
    $("<td>").text(totalValue + " kr").appendTo("#cartTotalRow");

}
 