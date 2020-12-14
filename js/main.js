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
let f4 = new Foods("Briochefralla", "Eget Bageri", "Mjuka och färskbakade briochebröd. Pris per st.", 5, "./images/cards/brioche.jpg")

let food = [f1, f2, f3, f4];

$(function() {

    //Navbar
    $("#products").on('click', function() { // Öppnas samma fönster
        window.location.assign('html/products.html');
    });
    $("#checkout").on('click', function() { // Öppnas samma fönster
        window.location.assign('html/cashregister.html');
    });

    $(".navbar-brand").on('click', function() {
        window.location.assign('index.html');
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
    $("<i>").addClass("fas fa-exclamation-circle").html("<h6>").text(" På grund av Covid-19 kommer chauffören lämna varorna utanför eran dörr. Ni får ett sms direkt när varorna finns att hämta.").appendTo(".infotext");
    
});
