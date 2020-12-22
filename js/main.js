class Foods {
    constructor(title, company, info, price, photo) {
        this.title = title;
        this.company = company;
        this.info = info;
        this.price = price;
        this.photo = photo;
    }
}

let f1 = new Foods("Kycklingfilé", "Kronfågel", "Färsk kycklingfilé. ca 900 gram/förpackning.", 99, "./images/cards/chickenbreast.jpg");
let f2 = new Foods("Ägg", "Kronägg", "Ekologiska ägg från frigående höns med tillgång till utevistelse. 15st/förpackning.", 35, "./images/cards/eggs.jpg");
let f3 = new Foods("Köttfärs", "Garant", "Svensk köttfärs. 500 gram/förpackning.", 59, "./images/cards/mincedbeef.jpg");
let f4 = new Foods("Brioche", "Eget Bageri", "Mjuka och färskbakade briochebröd. Pris per st.", 5, "./images/cards/brioche.jpg")

let food = [f1, f2, f3, f4];

let cart = [];

$(function() {
    $(".cartbutton").on('click', () => {
        $("#cartdiv").toggle();
        generateCartDropDown();
    });

    cart = JSON.parse(localStorage.getItem('cart')) || [];

    $(".navbar-brand").on('click', function() {
        window.location.assign('index.html');
    });
    $("#home").on('click', function() { 
        window.location.assign('index.html');
    });
    $("#products").on('click', function() {
        window.location.assign('html/products.html');
    });
    $("#checkout").on('click', function() {
        window.location.assign('html/cashregister.html');
    });

    //Jumbotron
    $("<h1>").addClass("display-4").text("Välkommen till Supermarket!").appendTo(".jumbotron");
    $("<p>").addClass("lead pb-3").text("Supermarket! är din mathandel på nätet. Vi har Sveriges bredaste utbud av mat och dryck, till de lägsta priserna.").appendTo(".jumbotron");
    $("<p>").text("Vi levererar över hela Sverige, senast dagen efter beställning. I vissa områden kan du även få leverans samma dag!").appendTo(".jumbotron");
    $("<p>").text("Just nu har vi fyllt lagret med massor av härligheter till jul. Passa på att handla för hela julbordet, smidigt och enkelt.").appendTo(".jumbotron");

    //Dividertext
    $("<div>").addClass("weektext col mb-1 mt-3 text-center").appendTo(".divider");
    $("<h5>").text("Veckans Utvalda Produkter").appendTo(".weektext");

    //Startpage Cards
    $.each(food, (i, items) => {
    let colDiv = $("<div>").addClass("col mb-4").appendTo(".feature");
    let cardDiv = $("<div>").addClass("card h-100").appendTo(colDiv);
    let imgDiv = $("<div>").addClass("image").appendTo(cardDiv);
    let textDiv = $("<div>").addClass("card-body").appendTo(cardDiv);
    let footerDiv = $("<div>").addClass("card-footer d-flex flex-column").appendTo(cardDiv);
    $("<img>").attr("src", items.photo).appendTo(imgDiv);
    $("<h5>").html(items.title).appendTo(textDiv);
    $("<h6>").html(items.company).appendTo(textDiv);
    $("<p>").html(items.info).appendTo(textDiv);
    $("<p>").html("Denna vecka:" + " " + items.price + " " + "kr").appendTo(footerDiv);
    }); 

    $('.feature').on('click', function() {
        window.location.assign('html/products.html');
    });

    // Featurehero
    $("<h2>").text("Här hittar du hela vårat sortiment").appendTo(".containertext");
    $('.containertext').on('click', function() {
        window.location.assign('html/products.html');
    });

    //Featureinfo
    $("<i>").addClass("fas fa-exclamation-circle").html("<h6>")
    .text(" På grund av Covid-19 kommer chauffören lämna varorna utanför eran dörr. Ni får ett sms direkt när varorna finns att hämta.").appendTo(".infotext");

    countCart();
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
    dialogClass: "newsletterdialog"
});

$("#newsletterbtn").on('click', function() {
    let newsLetterInput = $("#newsletter").val();
    if (newsLetterInput < 2) {
        $("#erroremail").show("fast").delay(3000).hide("fast");
    } else {
    dialog.dialog("open");
    $("#newsletter").val('');
    }  
});

// Shopping Cart 
function generateCartDropDown(){
    localStorage.setItem("cart", JSON.stringify(cart));
    $("#cartdiv").html("");

    let totalValue = 0;

    $("<table>").addClass("table").appendTo("#cartdiv");
    $("<thead>").appendTo("table");
    let myTR = $("<tr>").appendTo("thead");
    $("<th>").attr("scope", "col").text("").appendTo(myTR);
    $("<th>").attr("scope", "col").text("Vara").appendTo(myTR);
    $("<th>").attr("scope", "col").text("Antal").appendTo(myTR);
    $("<th>").attr("scope", "col").text("Pris").appendTo(myTR);
    $("<tbody>").attr("id", "carttablebody").appendTo("table");

    $.each(cart, (i, items) => {
        let myCartRow =  $("<tr>").appendTo("#carttablebody");
        let cartImgtd = $("<td>").appendTo(myCartRow);
        $("<img>").addClass("cartimg").attr("src", items.photo.replace('../', './')).appendTo(cartImgtd);
        $("<td>").text(items.title).appendTo(myCartRow);

        let addButton = $("<i>").addClass("add fas fa-plus-square").on('click', () => { addToCart(i); });
        let decreaseButton = $("<i>").addClass("decrease fas fa-minus-square").on('click', () => { decreaseFromCart(i); });

        $("<td>").text(items.quantity).append(addButton).append(decreaseButton).appendTo(myCartRow);
        $("<td>").text(items.price * items.quantity + " kr").appendTo(myCartRow);
       
        totalValue += items.price * items.quantity;

    });

    $("<tr>").attr("id", "carttotalrow").appendTo("#carttablebody");
    $("<th>").text("Totalt").appendTo("#carttotalrow");
    $("<td>").appendTo("#carttotalrow");
    $("<td>").appendTo("#carttotalrow");
    $("<td>").text(totalValue + " kr").appendTo("#carttotalrow");
    $("<a>").text("Till Kassan").attr("href", "html/cashregister.html").appendTo("#cartdiv");

}

function countCart(){
    $("#qtybadge").empty();
    totalItems = 0;
    $.each(cart, (i, cartIndex)=> {
    totalItems += cartIndex.quantity
    })

  $("<div>").text(totalItems).appendTo("#qtybadge");
}

function removeFromCart(i) {
    cart.splice(i, 1);
    countCart();
}

function addToCart(i) {
    cart[i].quantity++;
    countCart();
    generateCartDropDown();
}

function decreaseFromCart(i) {
    cart[i].quantity--;
    if (cart[i].quantity < 1) {
        removeFromCart(i);
    } 
    countCart();
    generateCartDropDown();
}