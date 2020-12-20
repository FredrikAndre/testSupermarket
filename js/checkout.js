let cart = [];

$(function() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    generateCheckout();

    $(".navbar-brand").on('click', function() {
        window.location.assign('../index.html');
    });
    $("#home").on('click', function() { 
        window.location.assign('../index.html');
    });
    $("#products").on('click', function() {
        window.location.assign('../html/products.html');
    });
    $("#checkout").on('click', function() {
        window.location.assign('../html/cashregister.html');
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

    let myTR =  $("<tr>").appendTo(".cartcontainer");
    let imagetd = $("<td>").addClass("imagetd").appendTo(myTR);
    $("<img>").addClass("checkoutimg").attr("src", product.photo).appendTo(imagetd);
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
        $("#errormessagecart").show("fast").delay(2000).hide("fast");
    }
    else if (firstName === '' || lastName === '' || email === '' || adress === '') {
        $("#errormessageform").show("fast").delay(2000).hide("fast");
    } 
    else {
        localStorage.removeItem("cart");
        window.location.assign('../html/thankyou.html');
    }
}

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