#Create a functional e-commerce webshop with JQuery

-----------------------------------------

**Installation:**
Make new folder.
1. Run `git clone https://github.com/FredrikAndre/testSupermarket.git in terminal`
2. Start index.html

**Project Structures**
Projectfolder testSupermarket - index.html, .gitignore, README.md, gulpfile.js, jsconfig.json.
Use JQuery from their webpage, and also JQueryUI. 
We used bootstrap as layout. Link in from their webpage. 

- scss/ - Use SCSS for styling and responsivness. Subfolders for different pages and helpers like mixins. 
- css/ - Do not use, write all styles in SCSS folders. This is only for link in html folders. 
- html/ - All other pages than index goes here. 
- images/ - all images here, subfolders too
- js/ - All javascript files in here, inluding subpages to main. 
- jqueryUI - To use JQueryUI. 
- node_modules - To use GULP to minify scss. 
- jsconfig.json - To get VS code help with JQuery. 

**Website structure**
4-page Website using bootstrap, consisting of one main page: index, two sub-pages: product & cashregister, and one "thankyou" page only accesible
when customer click "betala" button on cashregister page.

**Global rules**
Navbar and footer is basically same on all pages, except index and product that have the shopping-cart added to navbar. 

***Main Page***
Navbar with shopping cart, Hero with text, Some chosen products, some more info/features and then footer.  

***Product Page***
Navbar with shopping cart, products and footer. 

***Cashregister Page***
Navbar, Checkout cart, form for customer information and footer.

***Thank You***
Navbar, Features inc ordernumber and footer. 

**SCSS**
Mobile-first, always. Use Media Query mixins for larger sizes. Own style for colors, images and features. 

**Javascript**
Use JQuery, not vanilla Javascript. Try to make pages as dynamically as possible. camelCase for any classnames, variables and functions. 

**GULP**
Use GULP to help minify the SCSS. Code is already gulpfile.js, use code `gulp`to start watch. 

-------------------------------------------

**Classes**
We named classes in html like this: `class ="errormessage"`with only small letters and no `-` in between to differentiate between us and bootstrap. In javascript, use `camelCase`. 

-------------------------------------------

**Contributors**
This project was made by Fredrik André, Erik Åström, Arash Raji.

-------------------------------------------

**Contributing**
To add additional features to the website, download site using `git pull origin master`, then
create your own branch using name: `git checkout -b feature/yourbranchnamehere`. Push to github using
git push, and add comment to README about your changes. Notice you have to be approved first by github-page owner to contribute. 
 
-------------------------------------------

*Comments:*

Add own comment here.