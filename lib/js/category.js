var domain = 'http://localhost:8080/oinkcup/';

var coffee = [
    ['Original Blend Coffee', 'lib/images/static/menu_coffee.png' , 'COF1'],
    ['Dark Roasted Coffee','lib/images/static/menu_coffee.png', 'COF2'],
    ['Decaffeinated Coffee', 'lib/images/static/menu_coffee.png', 'COF3']
];
var tea = [
    ['Orange Pekoe Tea', 'lib/images/static/menu_tea.png', 'TEA1'],
    ['Green Tea', 'lib/images/static/menu_tea.png', 'TEA2'],
    ['Chai Tea', 'lib/images/static/menu_tea.png', 'TEA3'],
    ['Honey Lemon Tea', 'lib/images/static/menu_tea.png', 'TEA4'],
    ['Peppermint Tea', 'lib/images/static/menu_tea.png', 'TEA5'],
    ['Chamomille Tea', 'lib/images/static/menu_tea.png', 'TEA6'],
    ['Earl Grey Tea', 'lib/images/static/menu_tea.png', 'TEA7'],
    ['English Breakfast Tea', 'lib/images/static/menu_tea.png', 'TEA8']
];
var tea_latte = [
    ['Vanilla Tea Latte','lib/images/static/menu_tea.png', 'TLA1'],
    ['Caramel Tea Latte', 'lib/images/static/menu_tea.png', 'TLA2'],
    ['Mocha Tea Latte', 'lib/images/static/menu_tea.png', 'TLA3']
];

//COLD
var frappe = [
    ['Vanilla Frappe', 'lib/images/static/menu_coffee.png', 'FRP1'],
    ['Caramel Frappe','lib/images/static/menu_coffee.png', 'FRP2'],
    ['Mocha Frappe','lib/images/static/menu_coffee.png', 'FRP3']
];
var iced_coffee = [
    ['Regular Iced Coffee', 'lib/images/static/menu_coffee.png', 'ICF1'],
    ['Vanilla Iced Coffee', 'lib/images/static/menu_coffee.png', 'ICF2'],
    ['Caramel Iced Coffee', 'lib/images/static/menu_coffee.png', 'ICF3'],
    ['Mocha Iced Coffee', 'lib/images/static/menu_coffee.png', 'ICF4']
];
var slushie = [
    ['Blue Raspberry Slushie', 'lib/images/static/menu_coffee.png', 'SLH1'],
    ['Cherry Tart Slushie', 'lib/images/static/menu_coffee.png', 'SLH2'],
];
var refrigirated = [
    ['Coke','lib/images/static/menu_coffee.png', 'RFG1'],
    ['Sprite', 'lib/images/static/menu_coffee.png', 'RFG2'],
    ['Ginger Ale', 'lib/images/static/menu_coffee.png', 'RFG3'],
    ['Peach Juice', 'lib/images/static/menu_coffee.png', 'RFG4'],
    ['Smart Water', 'lib/images/static/menu_coffee.png', 'RFG5']
];

// ESPRESSO
var latte = [
    ['Regular Latte', 'lib/images/static/menu_coffee.png', 'LAT1'],
    ['Vanilla Latte', 'lib/images/static/menu_coffee.png', 'LAT2'],
    ['Caramel Latte', 'lib/images/static/menu_coffee.png', 'LAT3'],
    ['Mocha Latte', 'lib/images/static/menu_coffee.png', 'LAT4']
];
var espresso = [
    ['Espresso', 'lib/images/static/menu_coffee.png', 'ESP']
];
var cappucino = [
    ['Regular Cappucino', 'lib/images/static/menu_coffee.png', 'CPN1'],
    ['Vanilla Cappucino', 'lib/images/static/menu_coffee.png', 'CPN2'],
    ['Caramel Cappucino', 'lib/images/static/menu_coffee.png', 'CPN3'],
    ['Mocha Cappucino', 'lib/images/static/menu_coffee.png', 'CPN4']
];
var americano = [
    ['Regular Americano', 'lib/images/static/menu_coffee.png', 'AMN1'],
    ['Iced Americano', 'lib/images/static/menu_coffee.png', 'AMN2'],
    ['Vanilla Americano', 'lib/images/static/menu_coffee.png', 'AMN3'],
    ['Caramel Americano', 'lib/images/static/menu_coffee.png', 'AMN4'],
    ['Mocha Americano', 'lib/images/static/menu_coffee.png', 'AMN5']
];
var iced_latte = [
    ['Regular Iced Latte', 'lib/images/static/menu_coffee.png', 'ILT1'],
    ['Vanilla Iced Latte', 'lib/images/static/menu_coffee.png', 'ILT2'],
    ['Caramel Iced Latte', 'lib/images/static/menu_coffee.png', 'ILT3'],
    ['Mocha Iced Latte', 'lib/images/static/menu_coffee.png', 'ILT4']
];

//TREATS
var donut = [
    ['Boston Cream', 'lib/images/static/menu_muffin.png', 'DNT1'],
    ['Chocolate Dip', 'lib/images/static/menu_muffin.png', 'DNT2'],
    ['Vanilla Monster', 'lib/images/static/menu_muffin.png', 'DNT3'],
    ['Strawberry Dip', 'lib/images/static/menu_muffin.png', 'DNT4'],
    ['Oinky Momo', 'lib/images/static/menu_muffin.png', 'DNT5']
];
var muffin = [
    ['Peacan Banana Muffin', 'lib/images/static/menu_muffin.png', 'MFN1'],
    ['Carrot Cake Muffin', 'lib/images/static/menu_muffin.png', 'MFN2'],
    ['Blueberry Muffin', 'lib/images/static/menu_muffin.png', 'MFN3'],
    ['Chocolate Chip Muffin', 'lib/images/static/menu_muffin.png', 'MFN4'],
    ['Strawberry Cream Muffin', 'lib/images/static/menu_muffin.png', 'MFN5']
];



var curTabCss = {
    'font-weight' : 'bold',
    'border-bottom' : '3px solid var(--c5)'
}
var idleTabCss = {
    'font-weight' : 'initial',
    'border-bottom' : 'none'
}
function curTabSetCss(tab){
    if(tab == "favorites"){
        $('#favorites').css(curTabCss);
        $('#category_name').css(idleTabCss);
        $('#previous').css(idleTabCss);
    }else if(tab == "category"){
        $('#favorites').css(idleTabCss);
        $('#category_name').css(curTabCss);
        $('#previous').css(idleTabCss);
    }else if(tab == "previous"){
        $('#favorites').css(idleTabCss);
        $('#category_name').css(idleTabCss);
        $('#previous').css(curTabCss);
    }
}

function showpages(){
    if(location.href == (domain + 'pages/category/menu_hot/')){
        $('#category_name').text('Hot Drinks');
        $('#category_name').attr('name','pages/category/menu_hot/');
        $('#category_name').css(curTabCss);
        for(var i = 0; i < coffee.length; i++) {
            var coffeee = coffee[i];
            $('#coffee_con').append('<div id="'+coffeee[2]+'" class="item_widget"><img src="'+coffeee[1]+'" draggable="false" /><span>'+coffeee[0]+'</span></div>');
        }
        for(var i = 0; i < tea.length; i++) {
            var xx = tea[i];
            $('#tea_con').append('<div id="'+xx[2]+'" class="item_widget"><img src="'+xx[1]+'" draggable="false" /><span>'+xx[0]+'</span></div>');
        }
        for(var i = 0; i < tea_latte.length; i++) {
            var xx = tea_latte[i];
            $('#tea_latte_con').append('<div id="'+xx[2]+'" class="item_widget"><img src="'+xx[1]+'" draggable="false" /><span>'+xx[0]+'</span></div>');
        }
    }
    if(location.href == (domain + 'pages/category/menu_cold/')){
        $('#category_name').text('Cold Drinks');
        $('#category_name').attr('name','pages/category/menu_cold/');
        $('#category_name').css(curTabCss);
        for(var i = 0; i < frappe.length; i++) {
            var xx = frappe[i];
            $('#frappe_con').append('<div id="'+xx[2]+'" class="item_widget"><img src="'+xx[1]+'" draggable="false" /><span>'+xx[0]+'</span></div>');
        }
        for(var i = 0; i < iced_coffee.length; i++) {
            var xx = iced_coffee[i];
            $('#iced_coffee_con').append('<div id="'+xx[2]+'" class="item_widget"><img src="'+xx[1]+'" draggable="false" /><span>'+xx[0]+'</span></div>');
        }
        for(var i = 0; i < slushie.length; i++) {
            var xx = slushie[i];
            $('#slushie_con').append('<div id="'+xx[2]+'" class="item_widget"><img src="'+xx[1]+'" draggable="false" /><span>'+xx[0]+'</span></div>');
        }
        for(var i = 0; i < refrigirated.length; i++) {
            var xx = refrigirated[i];
            $('#refrigirated_con').append('<div id="'+xx[2]+'" class="item_widget"><img src="'+xx[1]+'" draggable="false" /><span>'+xx[0]+'</span></div>');
        }
    }
    if(location.href == (domain + 'pages/category/menu_espresso/')){
        $('#category_name').text('Espresso');
        $('#category_name').attr('name','pages/category/menu_espresso/');
        $('#category_name').css(curTabCss);
        for(var i = 0; i < latte.length; i++) {
            var xx = latte[i];
            $('#latte_con').append('<div id="'+xx[2]+'" class="item_widget"><img src="'+xx[1]+'" draggable="false" /><span>'+xx[0]+'</span></div>');
        }
        for(var i = 0; i < cappucino.length; i++) {
            var xx = cappucino[i];
            $('#cappucino_con').append('<div id="'+xx[2]+'" class="item_widget"><img src="'+xx[1]+'" draggable="false" /><span>'+xx[0]+'</span></div>');
        }
        for(var i = 0; i < americano.length; i++) {
            var xx = americano[i];
            $('#americano_con').append('<div id="'+xx[2]+'" class="item_widget"><img src="'+xx[1]+'" draggable="false" /><span>'+xx[0]+'</span></div>');
        }
        for(var i = 0; i < iced_latte.length; i++) {
            var xx = iced_latte[i];
            $('#iced_latte_con').append('<div id="'+xx[2]+'" class="item_widget"><img src="'+xx[1]+'" draggable="false" /><span>'+xx[0]+'</span></div>');
        }
        for(var i = 0; i < espresso.length; i++) {
            var xx = espresso[i];
            $('#espresso_con').append('<div id="'+xx[2]+'" class="item_widget"><img src="'+xx[1]+'" draggable="false" /><span>'+xx[0]+'</span></div>');
        }
    }
    if(location.href == (domain + 'pages/category/menu_treats/')){
        $('#category_name').text('Treats');
        $('#category_name').attr('name','pages/category/menu_treats/');
        $('#category_name').css(curTabCss);
        for(var i = 0; i < muffin.length; i++) {
            var xx = muffin[i];
            $('#muffin_con').append('<div id="'+xx[2]+'" class="item_widget"><img src="'+xx[1]+'" draggable="false" /><span>'+xx[0]+'</span></div>');
        }
        for(var i = 0; i < donut.length; i++) {
            var xx = donut[i];
            $('#donut_con').append('<div id="'+xx[2]+'" class="item_widget"><img src="'+xx[1]+'" draggable="false" /><span>'+xx[0]+'</span></div>');
        }
    }
}

$(document).ready(function(){
    showpages();
});




