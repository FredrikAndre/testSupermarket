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
    $("<button>").addClass("btn btn-danger mr-3").attr('id', "toproducts").text("Tillbaka").appendTo(".paybtn");
    $("#toproducts").on('click', function() {
        window.history.back();
    });
    // Button checkout to "Thank you side"
    $("<button>").addClass("btn btn-success").attr('id', "checkoutdone").text("Betala").appendTo(".paybtn");
    $("#checkoutdone").on('click', function() {
        window.location.assign('../html/thankyou.html');
    }); 

});

function generateCheckout() {

let totalValue = 0;

$.each(cart, (i, product)=> {

    let myTR =  $("<tr>")
    .appendTo(".cartcontainer");

    $("<td>").text(product.title).appendTo(myTR);
    $("<td>").text(product.price + " kr").appendTo(myTR);
    $("<td>").text(product.quantity).appendTo(myTR);
    $("<td>").text(product.price * product.quantity + " kr").appendTo(myTR);
    totalValue += product.price * product.quantity;
    $("<td>").html('<i class="deletebtn fas fa-trash"></i>').appendTo(myTR)

    $(".deletebtn").click(function() {
        $(this).remove();
    });

    });
    
    $("<tr>").attr("id", "carttotalrow").appendTo(".cartcontainer");
    $("<th>").text("Total Summa").appendTo("#carttotalrow");
    $("<td>").appendTo("#carttotalrow");
    $("<td>").appendTo("#carttotalrow");
    $("<td>").text(totalValue + " kr").appendTo("#carttotalrow");


}
