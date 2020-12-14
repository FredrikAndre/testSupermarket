$(function() {

    $("#home").on('click', function() { // Öppnas samma fönster
        window.location.assign('../index.html');
    });
    $("#products").on('click', function() { // Öppnas samma fönster
        window.location.assign('../html/products.html');
    });

    $(".navbar-brand").on('click', function() {
        window.location.assign('../index.html');
    });

    // Button checkout to "Thank you side"
    $("<button>").addClass("btn btn-warning").attr('id', "checkoutdone").text("Betala").appendTo(".paybtn");
    $("#checkoutdone").on('click', function() {
        window.location.assign('../html/thankyou.html');
    });

    
});