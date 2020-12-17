$(function() {

    $(".navbar-brand").on('click', function() {
        window.location.assign('../index.html'); 
    });
    $("#home").on('click', function() { // Öppnas samma fönster
        window.location.assign('../index.html');
    });
    $("#products").on('click', function() { // Öppnas samma fönster
        window.location.assign('../html/products.html');
    });
    $("#checkout").on('click', function() { // Öppnas samma fönster
        window.location.assign('../html/cashregister.html');
    });

    // Should be made into forloop with cart-items.
    $("<td>").html("Namn").appendTo(".checkoutitems");
    $("<td>").html("Antal").appendTo(".checkoutitems");
    $("<td>").html("Pris").appendTo(".checkoutitems");
 
});