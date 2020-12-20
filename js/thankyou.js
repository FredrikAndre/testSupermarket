let randomOrderNr = Math.round(Math.exp(Math.random()*Math.log(10000000-0+1)))+0;

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
    $("<span>").text("#" + randomOrderNr).appendTo(".ordernumber")

});

//Newsletter 
let dialog = $("#dialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
        Ok: function() {
            $(this).dialog("close");
        }
    },
    dialogClass: "myClass"
});

$("#newsletterbtn").on('click', function() {
    let newsLetterInput = $("#newsletter").val();
    if (newsLetterInput < 2) {
        $("#erroremail").show("fast").delay(3000).hide("fast");
    } else {
    dialog.dialog("open");
    }  
});