$(function() {

    $("#home").on('click', function() { // Öppnas samma fönster
        window.location.assign('../index.html');
    });
    $("#products").on('click', function() { // Öppnas samma fönster
        window.location.assign('../html/products.html');
    });
    $("#checkout").on('click', function() { // Öppnas samma fönster
        window.location.assign('../html/cashregister.html');
    });

    $(".navbar-brand").on('click', function() {
        window.location.assign('../index.html');
    });
 
});