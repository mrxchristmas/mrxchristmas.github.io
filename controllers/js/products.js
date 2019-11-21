
var domain = 'http://localhost:8080/oinkcup/';
var menu_hot_url = "pages/category/menu_hot/";
var menu_cold_url = "pages/category/menu_cold/";
var menu_espresso_url = "pages/category/menu_espresso/";
var menu_treats_url = "pages/category/menu_treats/";

var current_id_global = "";
function getCategory(url){
    var ret = "";
    if(url == (domain + menu_hot_url)){
        ret = "Hot Drinks";
    }else if(url == (domain + menu_cold_url)){
        ret = "Cold Drinks";
    }else if(url == (domain + menu_espresso_url)){
        ret = "Espresso";
    }else if(url == (domain + menu_treats_url)){
        ret = "Treats";
    }
    return ret;
}
var curTabCss = {
    'font-weight' : 'bold',
    'border-bottom' : '3px solid var(--c5)'
}




//Original Blend Coffee SM
var cof1sm = [
    ["Caffeine", "140mg"],
    ["Serving Size","286 mL"],
    ["Calories","3"],
    ["Fat","0g"],
    ["Saturated Fat","0g"],
    ["Trans Fat","0g"],
    ["Cholesterol","0mg"],
    ["Sodium","5mg"],
    ["Carbs","0g"],
    ["Fibre","0g"],
    ["Sugar","0g"],
    ["Protein","0.3g"],
    ["Vitamin A","0% DV"],
    ["Vitamin C","0% DV"],
    ["Calcium","0% DV"],
    ["Iron","0% DV"]
    ];
//Original Blend Coffee MD
var cof1md = [
["Caffeine", "205mg"],
["Serving Size", "425 mL"],
["Calories", "4"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "10mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "0.5g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Original Blend Coffee LG
var cof1lg = [
["Caffeine", "270mg"],
["Serving Size", "563 mL"],
["Calories", "5"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "10mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "1g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "2% DV"],
["Iron", "0% DV"]
];
//Original Blend Coffee XL
var cof1xl = [
["Caffeine", "330mg"],
["Serving Size", "678 mL"],
["Calories", "5"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "15mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "1g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "2% DV"],
["Iron", "0% DV"]
];
//Dark Roast Coffee SM
var cof2sm = [
["Caffeine", "130mg"],
["Serving Size", "286 mL"],
["Calories", "3"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "5mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "0.3g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Dark Roast Coffee MD
var cof2md = [
["Caffeine", "195mg"],
["Serving Size", "425 mL"],
["Calories", "4"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "10mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "0.5g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Dark Roast Coffee LG
var cof2lg = [
["Caffeine", "260mg"],
["Serving Size", "563 mL"],
["Calories", "5"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "10mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "1g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "2% DV"],
["Iron", "0% DV"]
];
//Dark Roast Coffee XL
var cof2xl = [
["Caffeine", "315mg"],
["Serving Size", "678 mL"],
["Calories", "5"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "15mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "1g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "2% DV"],
["Iron", "0% DV"]
];
//Decaffeinated Coffee SM
var cof3sm = [
["Caffeine", "6mg"],
["Serving Size", "286 mL"],
["Calories", "3"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "5mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "0.3g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Decaffeinated Coffee MD
var cof3md = [
["Caffeine", "9mg"],
["Serving Size", "425 mL"],
["Calories", "4"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "10mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "0.5g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Decaffeinated Coffee LG
var cof3lg = [
["Caffeine", "12mg"],
["Serving Size", "563 mL"],
["Calories", "5"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "10mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "1g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "2% DV"],
["Iron", "0% DV"]
];
//Decaffeinated Coffee XL
var cof3xl = [
["Caffeine", "15mg"],
["Serving Size", "678 mL"],
["Calories", "5"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "15mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "1g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "2% DV"],
["Iron", "0% DV"]
];
//Bagged Tea SM
var teasm = [
["Caffeine", "0mg"],
["Serving Size", "286 mL"],
["Calories", "0"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "5mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "0g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Bagged Tea MD
var teamd = [
["Caffeine", "0mg"],
["Serving Size", "425 mL"],
["Calories", "0"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "10mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "0g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Bagged Tea LG
var tealg = [
["Caffeine", "0mg"],
["Serving Size", "563 mL"],
["Calories", "0"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "10mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "0g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Bagged Tea XL
var teaxl = [
["Caffeine", "0mg"],
["Serving Size", "678 mL"],
["Calories", "0"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "15mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "0g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Tea Latte
var tla = [
["Caffeine", "0mg"],
["Serving Size", "281 mL"],
["Calories", "150"],
["Fat", "6g"],
["Saturated Fat", "3.5g"],
["Trans Fat", "0.1g"],
["Cholesterol", "20mg"],
["Sodium", "135mg"],
["Carbs", "13g"],
["Fibre", "0g"],
["Sugar", "13g"],
["Protein", "10g"],
["Vitamin A", "11.24% DV"],
["Vitamin C", "0% DV"],
["Calcium", "33.72% DV"],
["Iron", "0% DV"]
];
//Iced Coffee SM
var icfsm = [
["Caffeine", "60mg"],
["Serving Size", "380 mL"],
["Calories", "120"],
["Fat", "7g"],
["Saturated Fat", "4g"],
["Trans Fat", "0.3g"],
["Cholesterol", "25mg"],
["Sodium", "60mg"],
["Carbs", "12g"],
["Fibre", "0g"],
["Sugar", "8g"],
["Protein", "1g"],
["Vitamin A", "6% DV"],
["Vitamin C", "0% DV"],
["Calcium", "6% DV"],
["Iron", "0% DV"]
];
//Iced Coffee MD
var icfmd = [
["Caffeine", "130mg"],
["Serving Size", "515 mL"],
["Calories", "160"],
["Fat", "7g"],
["Saturated Fat", "4g"],
["Trans Fat", "0.3g"],
["Cholesterol", "25mg"],
["Sodium", "90mg"],
["Carbs", "22g"],
["Fibre", "0g"],
["Sugar", "13g"],
["Protein", "2g"],
["Vitamin A", "6% DV"],
["Vitamin C", "0% DV"],
["Calcium", "6% DV"],
["Iron", "0% DV"]
];

//Iced Coffee LG
var icflg = [
["Caffeine", "160mg"],
["Serving Size", "648 mL"],
["Calories", "260"],
["Fat", "11g"],
["Saturated Fat", "7g"],
["Trans Fat", "0.4g"],
["Cholesterol", "45mg"],
["Sodium", "135mg"],
["Carbs", "33g"],
["Fibre", "0g"],
["Sugar", "21g"],
["Protein", "3g"],
["Vitamin A", "8% DV"],
["Vitamin C", "0% DV"],
["Calcium", "10% DV"],
["Iron", "0% DV"]
];
//Flavored Iced Coffee SM
var ficfsm = [
["Caffeine", "65mg"],
["Serving Size", "380 mL"],
["Calories", "160"],
["Fat", "7g"],
["Saturated Fat", "4.5g"],
["Trans Fat", "0.3g"],
["Cholesterol", "25mg"],
["Sodium", "75mg"],
["Carbs", "21g"],
["Fibre", "0g"],
["Sugar", "13g"],
["Protein", "2g"],
["Vitamin A", "6% DV"],
["Vitamin C", "0% DV"],
["Calcium", "6% DV"],
["Iron", "6% DV"]
];
//Flavored Iced Coffee MD
var ficfmd = [
["Caffeine", "135mg"],
["Serving Size", "515 mL"],
["Calories", "220"],
["Fat", "7g"],
["Saturated Fat", "4.5g"],
["Trans Fat", "0.3g"],
["Cholesterol", "25mg"],
["Sodium", "110mg"],
["Carbs", "35g"],
["Fibre", "1g"],
["Sugar", "22g"],
["Protein", "2g"],
["Vitamin A", "6% DV"],
["Vitamin C", "0% DV"],
["Calcium", "6% DV"],
["Iron", "8% DV"]
];
//Flavored Iced Coffee LG
var ficflg = [
["Caffeine", "165mg"],
["Serving Size", "648 mL"],
["Calories", "330"],
["Fat", "12g"],
["Saturated Fat", "7g"],
["Trans Fat", "0.4g"],
["Cholesterol", "45mg"],
["Sodium", "160mg"],
["Carbs", "50g"],
["Fibre", "1g"],
["Sugar", "31g"],
["Protein", "3g"],
["Vitamin A", "8% DV"],
["Vitamin C", "0% DV"],
["Calcium", "10% DV"],
["Iron", "10% DV"]
];
//Flavored Frappe SM
var frpsm = [
["Caffeine", "95mg"],
["Serving Size", "380 mL"],
["Calories", "290"],
["Fat", "11g"],
["Saturated Fat", "7g"],
["Trans Fat", "0.4g"],
["Cholesterol", "45mg"],
["Sodium", "60mg"],
["Carbs", "42g"],
["Fibre", "0g"],
["Sugar", "38g"],
["Protein", "2g"],
["Vitamin A", "8% DV"],
["Vitamin C", "0% DV"],
["Calcium", "10% DV"],
["Iron", "6% DV"]
];
//Flavored Frappe MD
var frpmd = [
["Caffeine", "125mg"],
["Serving Size", "515 mL"],
["Calories", "410"],
["Fat", "16g"],
["Saturated Fat", "10g"],
["Trans Fat", "0.5g"],
["Cholesterol", "60mg"],
["Sodium", "90mg"],
["Carbs", "61g"],
["Fibre", "1g"],
["Sugar", "56g"],
["Protein", "3g"],
["Vitamin A", "10% DV"],
["Vitamin C", "0% DV"],
["Calcium", "15% DV"],
["Iron", "10% DV"]
];
//Flavored Frappe LG
var frplg = [
["Caffeine", "155mg"],
["Serving Size", "648 mL"],
["Calories", "540"],
["Fat", "21g"],
["Saturated Fat", "13g"],
["Trans Fat", "1g"],
["Cholesterol", "80mg"],
["Sodium", "115mg"],
["Carbs", "80g"],
["Fibre", "1g"],
["Sugar", "73g"],
["Protein", "5g"],
["Vitamin A", "15% DV"],
["Vitamin C", "0% DV"],
["Calcium", "20% DV"],
["Iron", "10% DV"]
];
//Slushie SM
var slhsm = [
["Caffeine", "0mg"],
["Serving Size", "380 mL"],
["Calories", "110"],
["Fat", "0.1g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "10mg"],
["Carbs", "27g"],
["Fibre", "0g"],
["Sugar", "26g"],
["Protein", "0g"],
["Vitamin A", "0% DV"],
["Vitamin C", "2% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Slushie MD
var slhmd = [
["Caffeine", "0mg"],
["Serving Size", "515 mL"],
["Calories", "160"],
["Fat", "0.1g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "15mg"],
["Carbs", "40g"],
["Fibre", "0g"],
["Sugar", "37g"],
["Protein", "0g"],
["Vitamin A", "0% DV"],
["Vitamin C", "2% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Slushie LG
var slhlg = [
["Caffeine", "0mg"],
["Serving Size", "648 mL"],
["Calories", "210"],
["Fat", "0.2g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "20mg"],
["Carbs", "52g"],
["Fibre", "0g"],
["Sugar", "49g"],
["Protein", "0g"],
["Vitamin A", "0% DV"],
["Vitamin C", "2% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Refrigirated Drinks
var rfg = [
["Caffeine", "0mg"],
["Serving Size", "473 mL"],
["Calories", "144"],
["Fat", "0g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "14mg"],
["Carbs", "36g"],
["Fibre", "0g"],
["Sugar", "36g"],
["Protein", "0g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Latte
var lat = [
["Caffeine", "205mg"],
["Serving Size", "425 mL"],
["Calories", "150"],
["Fat", "6g"],
["Saturated Fat", "3.5g"],
["Trans Fat", "0.1g"],
["Cholesterol", "20mg"],
["Sodium", "140mg"],
["Carbs", "13g"],
["Fibre", "0g"],
["Sugar", "13g"],
["Protein", "10g"],
["Vitamin A", "10% DV"],
["Vitamin C", "0% DV"],
["Calcium", "35% DV"],
["Iron", "0% DV"]
];
//Flavored Latte
var flat = [
["Caffeine", "215mg"],
["Serving Size", "425 mL"],
["Calories", "240"],
["Fat", "6g"],
["Saturated Fat", "3.5g"],
["Trans Fat", "0.1g"],
["Cholesterol", "20mg"],
["Sodium", "390mg"],
["Carbs", "37g"],
["Fibre", "1g"],
["Sugar", "35g"],
["Protein", "11g"],
["Vitamin A", "10% DV"],
["Vitamin C", "0% DV"],
["Calcium", "35% DV"],
["Iron", "10% DV"]
];
//Cappuccino
var cpn = [
["Caffeine", "205mg"],
["Serving Size", "425 mL"],
["Calories", "120"],
["Fat", "4.5g"],
["Saturated Fat", "3g"],
["Trans Fat", "0.1g"],
["Cholesterol", "20mg"],
["Sodium", "120mg"],
["Carbs", "11g"],
["Fibre", "0g"],
["Sugar", "11g"],
["Protein", "8g"],
["Vitamin A", "10% DV"],
["Vitamin C", "0% DV"],
["Calcium", "30% DV"],
["Iron", "0% DV"]
];
//Flavored Cappuccino
var fcpn = [
["Caffeine", "215mg"],
["Serving Size", "425 mL"],
["Calories", "240"],
["Fat", "6g"],
["Saturated Fat", "3.5g"],
["Trans Fat", "0.1g"],
["Cholesterol", "20mg"],
["Sodium", "390mg"],
["Carbs", "37g"],
["Fibre", "1g"],
["Sugar", "35g"],
["Protein", "11g"],
["Vitamin A", "10% DV"],
["Vitamin C", "0% DV"],
["Calcium", "35% DV"],
["Iron", "10% DV"]
];
//Americano
var amn = [
["Caffeine", "205mg"],
["Serving Size", "425 mL"],
["Calories", "1"],
["Fat", "0.1g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "15mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "0.1g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
//Iced Latte
var ilt = [
["Caffeine", "205mg"],
["Serving Size", "515 mL"],
["Calories", "100"],
["Fat", "4g"],
["Saturated Fat", "2.5g"],
["Trans Fat", "0.1g"],
["Cholesterol", "15mg"],
["Sodium", "100mg"],
["Carbs", "9g"],
["Fibre", "0g"],
["Sugar", "9g"],
["Protein", "7g"],
["Vitamin A", "8% DV"],
["Vitamin C", "0% DV"],
["Calcium", "25% DV"],
["Iron", "0% DV"]
];
//Flavored Iced Latte
var filt = [
["Caffeine", "215mg"],
["Serving Size", "425 mL"],
["Calories", "270"],
["Fat", "7g"],
["Saturated Fat", "4g"],
["Trans Fat", "0.1g"],
["Cholesterol", "25mg"],
["Sodium", "180mg"],
["Carbs", "41g"],
["Fibre", "0g"],
["Sugar", "38g"],
["Protein", "11g"],
["Vitamin A", "10% DV"],
["Vitamin C", "0% DV"],
["Calcium", "35% DV"],
["Iron", "0% DV"]
];
//Espresso Single Shot
var esp1 = [
["Caffeine", "125mg"],
["Serving Size", "30 mL"],
["Calories", "1"],
["Fat", "0.1g"],
["Saturated Fat", "0g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "4mg"],
["Carbs", "0g"],
["Fibre", "0g"],
["Sugar", "0g"],
["Protein", "0g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "0% DV"],
["Iron", "0% DV"]
];
var esp2 = [
    ["Caffeine", "225mg"],
    ["Serving Size", "60 mL"],
    ["Calories", "2"],
    ["Fat", "0.2g"],
    ["Saturated Fat", "0g"],
    ["Trans Fat", "0g"],
    ["Cholesterol", "0mg"],
    ["Sodium", "6mg"],
    ["Carbs", "0g"],
    ["Fibre", "0g"],
    ["Sugar", "0g"],
    ["Protein", "0g"],
    ["Vitamin A", "0% DV"],
    ["Vitamin C", "0% DV"],
    ["Calcium", "0% DV"],
    ["Iron", "0% DV"]
];
//Boston Cream
var dnt1 = [
["Caffeine", "205mg"],
["Serving Size", "81 g"],
["Calories", "220"],
["Fat", "6g"],
["Saturated Fat", "2.5g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "250mg"],
["Carbs", "37g"],
["Fibre", "1g"],
["Sugar", "15g"],
["Protein", "5g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "2% DV"],
["Iron", "10% DV"]
];
//Chocolate Dip
var dnt2 = [
["Caffeine", "205mg"],
["Serving Size", "64 g"],
["Calories", "200"],
["Fat", "6g"],
["Saturated Fat", "2.5g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "210mg"],
["Carbs", "34g"],
["Fibre", "1g"],
["Sugar", "13g"],
["Protein", "4g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "2% DV"],
["Iron", "10% DV"]
];
//Vanilla Monster
var dnt3 = [
["Caffeine", "205mg"],
["Serving Size", "73 g"],
["Calories", "250"],
["Fat", "6g"],
["Saturated Fat", "2.5g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "210mg"],
["Carbs", "44g"],
["Fibre", "1g"],
["Sugar", "22g"],
["Protein", "4g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "2% DV"],
["Iron", "10% DV"]
];
//Strawberry Dip
var dnt4 = [
["Caffeine", "205mg"],
["Serving Size", "64 g"],
["Calories", "200"],
["Fat", "6g"],
["Saturated Fat", "2.5g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "210mg"],
["Carbs", "34g"],
["Fibre", "1g"],
["Sugar", "13g"],
["Protein", "4g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "2% DV"],
["Iron", "10% DV"]
];
//Oinky Momo
var dnt5 = [
["Caffeine", "205mg"],
["Serving Size", "105 g"],
["Calories", "330"],
["Fat", "14g"],
["Saturated Fat", "3.5g"],
["Trans Fat", "0g"],
["Cholesterol", "0mg"],
["Sodium", "250mg"],
["Carbs", "37g"],
["Fibre", "1g"],
["Sugar", "15g"],
["Protein", "5g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "2% DV"],
["Iron", "10% DV"]
];
//Pecan Banana
var mfn1 = [
["Caffeine", "205mg"],
["Serving Size", "115 g"],
["Calories", "350"],
["Fat", "11g"],
["Saturated Fat", "1.5g"],
["Trans Fat", "0.1g"],
["Cholesterol", "30mg"],
["Sodium", "400mg"],
["Carbs", "60g"],
["Fibre", "5g"],
["Sugar", "27g"],
["Protein", "6g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "4% DV"],
["Iron", "20% DV"]
];
//Carrot Cake
var mfn2 = [
["Caffeine", "205mg"],
["Serving Size", "115 g"],
["Calories", "350"],
["Fat", "13g"],
["Saturated Fat", "2.5g"],
["Trans Fat", "0.2g"],
["Cholesterol", "30mg"],
["Sodium", "360mg"],
["Carbs", "53g"],
["Fibre", "2g"],
["Sugar", "27g"],
["Protein", "5g"],
["Vitamin A", "45% DV"],
["Vitamin C", "4% DV"],
["Calcium", "10% DV"],
["Iron", "15% DV"]
];
//Blueberry
var mfn3 = [
["Caffeine", "205mg"], //0
["Serving Size", "115 g"], //1
["Calories", "340"], //2
["Fat", "11g"], //3
["Saturated Fat", "2g"], //4
["Trans Fat", "0.1g"], //5
["Cholesterol", "30mg"], //6
["Sodium", "430mg"], //7
["Carbs", "57g"], //8
["Fibre", "2g"], //9
["Sugar", "25g"], //10
["Protein", "5g"], //11
["Vitamin A", "0% DV"], //12
["Vitamin C", "0% DV"], //13
["Calcium", "2% DV"], //14
["Iron", "15% DV"] //15
];
//Chocolate Chip
var mfn4 = [
["Caffeine", "205mg"],
["Serving Size", "115 g"],
["Calories", "420"],
["Fat", "16g"],
["Saturated Fat", "4.5g"],
["Trans Fat", "0.1g"],
["Cholesterol", "35mg"],
["Sodium", "330mg"],
["Carbs", "66g"],
["Fibre", "2g"],
["Sugar", "35g"],
["Protein", "6g"],
["Vitamin A", "0% DV"],
["Vitamin C", "0% DV"],
["Calcium", "4% DV"],
["Iron", "30% DV"]
];
//Strawberry Cream
var mfn5 = [
["Caffeine", "205mg"],
["Serving Size", "122 g"],
["Calories", "340"],
["Fat", "10g"],
["Saturated Fat", "1.5g"],
["Trans Fat", "0.1g"],
["Cholesterol", "30mg"],
["Sodium", "470mg"],
["Carbs", "58g"],
["Fibre", "2g"],
["Sugar", "25g"],
["Protein", "5g"],
["Vitamin A", "0% DV"],
["Vitamin C", "6% DV"],
["Calcium", "6% DV"],
["Iron", "15% DV"]
];

function getProductInfo(curid){
    var ret;
    if(curid == 'COF1'){
        ret = cof1sm;
    }else if(curid == 'COF2'){
        ret = cof2sm;
    }else if(curid == 'COF3'){
        ret = cof3sm;
    }else if(curid.match(/^TEA.*$/)){
        ret = teasm;
    }else if(curid.match(/^TLA.*$/)){
        ret = tla;
    }else if(curid.match(/^TLA.*$/)){
        ret = tla;
    }else if(curid.match(/^FRP.*$/)){
        ret = frpsm;
    }else if(curid.match(/^ICF.*$/) && curid != 'ICF1'){
        ret = ficfsm;
    }else if(curid == "ICF1"){
        ret = icfsm;
    }else if(curid.match(/^SLH.*$/)){
        ret = slhsm;
    }else if(curid.match(/^RFG.*$/)){
        ret = rfg;
    }else if(curid.match(/^LAT.*$/) && curid != "LAT1"){
        ret = flat;
    }else if(curid == "LAT1"){
        ret = lat;
    }else if(curid.match(/^CPN.*$/) && curid != "CPN1"){
        ret = fcpn;
    }else if(curid == "CPN1"){
        ret = cpn;
    }else if(curid.match(/^AMN.*$/)){
        ret = amn;
    }else if(curid.match(/^ILT.*$/) && curid != "ILT1"){
        ret = filt;
    }else if(curid == "ILT1"){
        ret = ilt;
    }else if(curid == "DNT1"){
        ret = dnt1;
    }else if(curid == "DNT2"){
        ret = dnt2;
    }else if(curid == "DNT3"){
        ret = dnt3;
    }else if(curid == "DNT4"){
        ret = dnt4;
    }else if(curid == "DNT5"){
        ret = dnt5;
    }else if(curid == "MFN1"){
        ret = mfn1;
    }else if(curid == "MFN2"){
        ret = mfn2;
    }else if(curid == "MFN3"){
        ret = mfn3;
    }else if(curid == "MFN4"){
        ret = mfn4;
    }else if(curid == "MFN5"){
        ret = mfn5;
    }else if(curid == "ESP"){
        ret = esp1;
    }

    return ret;
}
function getProductSizes(curid){
    var ret;
    if(curid.match(/^COF.*$/)){
        ret = ['sm','md','lg','xl'];
    }else if(curid.match(/^TEA.*$/)){
        ret = ['sm','md','lg','xl'];
    }if(curid.match(/^TLA.*$/)){
        ret = ['md'];
    }if(curid.match(/^FRP.*$/)){
        ret = ['sm','md','lg'];
    }if(curid.match(/^ICF.*$/)){
        ret = ['sm','md','lg'];
    }if(curid.match(/^SLH.*$/)){
        ret = ['sm','md','lg'];
    }if(curid.match(/^RFG.*$/)){
        ret = ['md'];
    }if(curid.match(/^LAT.*$/)){
        ret = ['md'];
    }if(curid.match(/^CPN.*$/)){
        ret = ['md'];
    }if(curid.match(/^AMN.*$/)){
        ret = ['md'];
    }if(curid.match(/^ILT.*$/)){
        ret = ['md'];
    }if(curid.match(/^ILT.*$/)){
        ret = ['md'];
    }if(curid.match(/^ESP.*$/)){
        ret = ['sm', 'md'];
    }if(curid.match(/^DNT.*$/)){
        ret = [];
    }if(curid.match(/^MFN.*$/)){
        ret = [];
    }

    return ret;
}
function showProdSize(curid, size){
    // alert(curid);
    if(curid == "ESP"){
        $('#prod_size_sm').show();
        $('#prod_size_md').show();
        $('#prod_size_sm').text("1x");
        $('#prod_size_md').text("2x");
    }else{
        $('#prod_select_size').show();
        $('#prod_size_sm').text("SM");
        $('#prod_size_md').text("MD");
        if(size == 'sm'){
            $('#prod_size_sm').show();
        }else if(size == 'md'){
            $('#prod_size_md').show();
        }else if(size == 'lg'){
            $('#prod_size_lg').show();
        }else if(size == 'xl'){
            $('#prod_size_xl').show();
        }
    }
    
}
function hideProdSize(){
    $('#prod_size_sm').hide();
    $('#prod_size_md').hide();
    $('#prod_size_lg').hide();
    $('#prod_size_xl').hide();
}
function getProductInfoBySize(curid){
    var ret;
    if(curid == "COF1"){
        ret = [cof1sm, cof1md,cof1lg,cof1xl];
    }else if(curid == "COF2"){
        ret = [cof2sm, cof2md,cof2lg,cof2xl];
    }else if(curid == "COF3"){
        ret = [cof3sm, cof3md,cof3lg,cof3xl];
    }else if(curid.match(/^TEA.*$/)){
        ret = [teasm,teamd,tealg,teaxl];
    }if(curid.match(/^TLA.*$/)){
        ret = [tla];
    }if(curid.match(/^FRP.*$/)){
        ret = [frpsm, frpmd, frplg];
    }if(curid.match(/^ICF.*$/)){
        ret = [icfsm, icfmd, icflg];
    }if(curid.match(/^SLH.*$/)){
        ret = [slhsm, slhmd, slhlg];
    }if(curid.match(/^RFG.*$/)){
        ret = [rfg];
    }if(curid.match(/^LAT.*$/)){
        ret = [lat];
    }if(curid.match(/^CPN.*$/)){
        ret = [cpn];
    }if(curid.match(/^AMN.*$/)){
        ret = [amn];
    }if(curid.match(/^ILT.*$/)){
        ret = [ilt];
    }if(curid.match(/^ESP.*$/)){
        ret = [esp1, esp2];
    }if(curid.match(/^DNT.*$/)){
        ret = [];
    }if(curid.match(/^MFN.*$/)){
        ret = [];
    }
    return ret;
}
function showProductInfo(ss){
    // alert('test');
    for(var i = 0; i < ss.length; i++) {
        var xx = ss[i];
        var id0 = "#x" + i + "_0";
        var id1 = "#x" + i + "_1";
        $(id0).text(xx[0]);
        $(id1).text(xx[1]);
    }
}
function hideIrrelevantCust(curid){
    if(curid.match(/^DNT.*$/) || curid.match(/^MFN.*$/) || curid.match(/^RFG.*$/)){
        $('#prod_select_size').hide();
        $('#prod_select_condiments').hide();
        $('#prod_select_flavorshot').hide();
        $('#prod_select_whippedtopping').hide();
    }
    
}




var selSizeCss = {
    'background-color' : 'var(--c5)',
    'color' : 'var(--c1)'
};
var unselSizeCss = {
    'background-color' : 'var(--c1)',
    'color' : 'var(--c5)'
};
function setSelSizeCss(size){
    if(size == 'sm'){
        $('#prod_size_sm').css(selSizeCss);
        $('#prod_size_md').css(unselSizeCss);
        $('#prod_size_lg').css(unselSizeCss);
        $('#prod_size_xl').css(unselSizeCss);
    }
    if(size == 'md'){
        $('#prod_size_sm').css(unselSizeCss);
        $('#prod_size_md').css(selSizeCss);
        $('#prod_size_lg').css(unselSizeCss);
        $('#prod_size_xl').css(unselSizeCss);
    }
    if(size == 'lg'){
        $('#prod_size_sm').css(unselSizeCss);
        $('#prod_size_md').css(unselSizeCss);
        $('#prod_size_lg').css(selSizeCss);
        $('#prod_size_xl').css(unselSizeCss);
    }
    if(size == 'xl'){
        $('#prod_size_sm').css(unselSizeCss);
        $('#prod_size_md').css(unselSizeCss);
        $('#prod_size_lg').css(unselSizeCss);
        $('#prod_size_xl').css(selSizeCss);
    }
}
function setDefaultSizeCss(){
    $('#prod_size_sm').css(unselSizeCss);
    $('#prod_size_md').css(unselSizeCss);
    $('#prod_size_lg').css(unselSizeCss);
    $('#prod_size_xl').css(unselSizeCss);
}

$("#prod_size_sm").click(function () {
    var curIdSizes = getProductInfoBySize(current_id_global);
    showProductInfo(curIdSizes[0]);
    setSelSizeCss('sm');
    localStorage.setItem('cursize', 'sm');
});
$("#prod_size_md").click(function () {
    var curIdSizes = getProductInfoBySize(current_id_global);
    showProductInfo(curIdSizes[1]);
    setSelSizeCss('md');
    localStorage.setItem('cursize', 'md');
});
$("#prod_size_lg").click(function () {
    var curIdSizes = getProductInfoBySize(current_id_global);
    showProductInfo(curIdSizes[2]);
    setSelSizeCss('lg');
    localStorage.setItem('cursize', 'lg');
});
$("#prod_size_xl").click(function () {
    var curIdSizes = getProductInfoBySize(current_id_global);
    showProductInfo(curIdSizes[3]);
    setSelSizeCss('xl');
    localStorage.setItem('cursize', 'xl');
});

var sugar = 0;
var sweetener = 0;
var cream = 0;
var milk = 0;
var vanilla = 0;
var caramel = 0;
var mocha = 0;
var vanillawc = 0;
var chocolatewc = 0;

function setCondDefaultValue(){
    $("#cond_sugar").val('0');
    $("#cond_sweetener").val('0');
    $("#cond_cream").val('0');
    $("#cond_milk").val('0');
    $("#cond_vanilla").val('0');
    $("#cond_caramel").val('0');
    $("#cond_mocha").val('0');
    $("#cond_vanillawc").val('0');
    $("#cond_chocolatewc").val('0');
    
    localStorage.setItem('cursize', '');
    localStorage.setItem('sugar', '0');
    localStorage.setItem('sweetener', '0');
    localStorage.setItem('cream', '0');
    localStorage.setItem('milk', '0');
    localStorage.setItem('vanilla', '0');
    localStorage.setItem('caramel', '0');
    localStorage.setItem('mocha', '0');
    localStorage.setItem('vanillawc', '0');
    localStorage.setItem('chocolatewc', '0');
}
function updateCondValue(){
    localStorage.setItem('sugar', $("#cond_sugar").val());
    localStorage.setItem('sweetener', $("#cond_sweetener").val());
    localStorage.setItem('cream', $("#cond_cream").val());
    localStorage.setItem('milk', $("#cond_milk").val());
    localStorage.setItem('vanilla', $("#cond_vanilla").val());
    localStorage.setItem('caramel', $("#cond_caramel").val());
    localStorage.setItem('mocha', $("#cond_mocha").val());
    localStorage.setItem('vanillawc', $("#cond_vanillawc").val());
    localStorage.setItem('chocolatewc', $("#cond_chocolatewc").val());
}

function setSugarVal(x){
    var cur = $("#cond_sugar").val();
    if(x == 1){
        if(cur < 10){
            sugar += 1;
        }
    }else if(x == -1){
        if(cur > 0){
            sugar -= 1;
        }
    }
    localStorage.setItem('sugar', sugar);
    $("#cond_sugar").val(sugar);
}
function setSweetenerVal(x){
    var cur = $("#cond_sweetener").val();
    if(x == 1){
        if(cur < 10){
            sweetener += 1;
        }
    }else if(x == -1){
        if(cur > 0){
            sweetener -= 1;
        }
    }
    localStorage.setItem('sweetener', sweetener);
    $("#cond_sweetener").val(sweetener);
}
function setCreamVal(x){
    var cur = $("#cond_cream").val();
    if(x == 1){
        if(cur < 10){
            cream += 1;
        }
    }else if(x == -1){
        if(cur > 0){
            cream -= 1;
        }
    }
    localStorage.setItem('cream', cream);
    $("#cond_cream").val(cream);
}
function setMilkVal(x){
    var cur = $("#cond_milk").val();
    if(x == 1){
        if(cur < 10){
            milk += 1;
        }
    }else if(x == -1){
        if(cur > 0){
            milk -= 1;
        }
    }
    localStorage.setItem('milk', milk);
    $("#cond_milk").val(milk);
}
function setVanillaVal(x){
    var cur = $("#cond_vanilla").val();
    if(x == 1){
        if(cur < 10){
            vanilla += 1;
        }
    }else if(x == -1){
        if(cur > 0){
            vanilla -= 1;
        }
    }
    localStorage.setItem('vanilla', vanilla);
    $("#cond_vanilla").val(vanilla);
}
function setCaramelVal(x){
    var cur = $("#cond_caramel").val();
    if(x == 1){
        if(cur < 10){
            caramel += 1;
        }
    }else if(x == -1){
        if(cur > 0){
            caramel -= 1;
        }
    }
    localStorage.setItem('caramel', caramel);
    $("#cond_caramel").val(caramel);
}
function setMochaVal(x){
    var cur = $("#cond_mocha").val();
    if(x == 1){
        if(cur < 10){
            mocha += 1;
        }
    }else if(x == -1){
        if(cur > 0){
            mocha -= 1;
        }
    }
    localStorage.setItem('mocha', mocha);
    $("#cond_mocha").val(mocha);
}
function setVanillawcVal(x){
    var cur = $("#cond_vanillawc").val();
    if(x == 1){
        if(cur < 10){
            vanillawc += 1;
        }
    }else if(x == -1){
        if(cur > 0){
            vanillawc -= 1;
        }
    }
    localStorage.setItem('vanillawc', vanillawc);
    $("#cond_vanillawc").val(vanillawc);
}
function setChocolatewcVal(x){
    var cur = $("#cond_chocolatewc").val();
    if(x == 1){
        if(cur < 10){
            chocolatewc += 1;
        }
    }else if(x == -1){
        if(cur > 0){
            chocolatewc -= 1;
        }
    }
    localStorage.setItem('chocolatewc', chocolatewc);
    $("#cond_chocolatewc").val(chocolatewc);
}

$("#cond_sugar_add").click(function () {
    setSugarVal(1);
    updateCondValue();
});
$("#cond_sugar_remove").click(function () {
    setSugarVal(-1);
    updateCondValue();
});
$("#cond_sweetener_add").click(function () {
    setSweetenerVal(1);
    updateCondValue();
});
$("#cond_sweetener_remove").click(function () {
    setSweetenerVal(-1);
    updateCondValue();
});
$("#cond_cream_add").click(function () {
    setCreamVal(1);
    updateCondValue();
});
$("#cond_cream_remove").click(function () {
    setCreamVal(-1);
    updateCondValue();
});
$("#cond_milk_add").click(function () {
    setMilkVal(1);
    updateCondValue();
});
$("#cond_milk_remove").click(function () {
    setMilkVal(-1);
    updateCondValue();
});
$("#cond_vanilla_add").click(function () {
    setVanillaVal(1);
    updateCondValue();
});
$("#cond_vanilla_remove").click(function () {
    setVanillaVal(-1);
    updateCondValue();
});
$("#cond_caramel_add").click(function () {
    setCaramelVal(1);
    updateCondValue();
});
$("#cond_caramel_remove").click(function () {
    setCaramelVal(-1);
    updateCondValue();
});
$("#cond_mocha_add").click(function () {
    setMochaVal(1);
    updateCondValue();
});
$("#cond_mocha_remove").click(function () {
    setMochaVal(-1);
    updateCondValue();
});
$("#cond_vanillawc_add").click(function () {
    setVanillawcVal(1);
    updateCondValue();
});
$("#cond_vanillawc_remove").click(function () {
    setVanillawcVal(-1);
    updateCondValue();
});
$("#cond_chocolatewc_add").click(function () {
    setChocolatewcVal(1);
    updateCondValue();
});
$("#cond_chocolatewc_remove").click(function () {
    setChocolatewcVal(-1);
    updateCondValue();
});


$(document).ready(function(){
    var curid = localStorage.getItem("curid");
    var curcat = localStorage.getItem("curcat");
    var curName = localStorage.getItem("curName");
    var curImg = localStorage.getItem("curImg");
    current_id_global = curid;
    $('#category_name').text(getCategory(curcat));
    $('#product_name').css(curTabCss);
    $('#product_name').text(curName);
    $('#prod_curName').text(curName);
    $('#prod_curImg').attr('src', curImg);
    var ss = getProductInfo(curid);
    // alert(ss);
    showProductInfo(ss);
    var sz = getProductSizes(curid);
    hideProdSize();
    for(var i = 0; i < sz.length; i++) {
        showProdSize(curid, sz[i]);
    }
    hideIrrelevantCust(curid);
    setCondDefaultValue();
    setDefaultSizeCss();
});


$('#favorites').click(function(){
    // curTabSetCss('favorites');
    localStorage.setItem('prev_Category', $('#category_name').attr('name'));
    location.href = domain + '/pages/favorites/';
});
$('#previous').click(function(){
    // curTabSetCss('previous');
    localStorage.setItem('prev_Category', $('#category_name').attr('name'));
    location.href = domain + '/pages/previous_orders/';
});
$('#category_name').click(function(){
    // curTabSetCss('previous');
    location.href = localStorage.getItem('curcat');
    // alert();
})

function showReport(message){
    $('#report_message').text(message);
    $('#reports').show();
    var i = 0;
    var x = setInterval(function(){
        if(i == 1){
            clearInterval(x);
            $('#reports').hide();
        }
        i++;
    }, 1000);
}

function isSizeSelected(){
    if(localStorage.getItem('cursize') == ''){
        showReport('Please Select a Size! :)');
        return false;
    }
    return true;
}

$("#products_submit").click(function () {
    // alert(localStorage.getItem('cursize'));
    if(isSizeSelected()){
        alert(localStorage.getItem('chocolatewc'));
    }
});
