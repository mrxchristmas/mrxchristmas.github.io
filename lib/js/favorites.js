var domain = 'http://localhost:8080/oinkcup/';

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
        $('#product_name').css(idleTabCss);
    }else if(tab == "category"){
        $('#favorites').css(idleTabCss);
        $('#category_name').css(curTabCss);
        $('#previous').css(idleTabCss);
        $('#product_name').css(idleTabCss);
    }else if(tab == "previous"){
        $('#favorites').css(idleTabCss);
        $('#category_name').css(idleTabCss);
        $('#previous').css(curTabCss);
        $('#product_name').css(idleTabCss);
    }else if(tab == "product"){
        $('#favorites').css(idleTabCss);
        $('#category_name').css(idleTabCss);
        $('#previous').css(idleTabCss);
        $('#product_name').css(curTabCss);
    }
}
function getCategoryName(){
    // alert(localStorage.getItem('curcat'));
    var ret = "";
    if(localStorage.getItem('curcat') == domain + 'pages/category/menu_hot/'){
        $('#category_name').text('Hot Drinks');
        ret = "Hot Drinks";
        $('#category_name').attr('name','pages/category/menu_hot/');
        // curTabSetCss('category');
    }
    if(localStorage.getItem('curcat') == domain + 'pages/category/menu_cold/'){
        $('#category_name').text('Cold Drinks');
        $('#category_name').attr('name','pages/category/menu_cold/');
        // curTabSetCss('category');
        ret = "Cold Drinks";
    }
    if(localStorage.getItem('curcat') == domain + 'pages/category/menu_espresso/'){
        $('#category_name').text('Espresso');
        $('#category_name').attr('name','pages/category/menu_espresso/');
        // curTabSetCss('category');
        ret = "Espresso";
    }
    if(localStorage.getItem('curcat') == domain + 'pages/category/menu_treats/'){
        $('#category_name').text('Treats');
        $('#category_name').attr('name','pages/category/menu_treats/');
        // curTabSetCss('category');
        ret = "Treats";
    }
}

$(document).ready(function(){
    curTabSetCss('favorites');
    getCategoryName();
    $('#product_name').text(localStorage.getItem('curName'));
    if(localStorage.getItem('curid') == ''){
        // alert('test');
        $('#product_name').hide();
    }
});

$('#previous').click(function(){
    curTabSetCss('previous');
    location.href = domain + 'pages/previous_orders/';
});
$('#category_name').click(function(){
    curTabSetCss('category');
    $('#product_name').hide();
    location.href = localStorage.getItem('curcat');
});
$('#product_name').click(function(){
    curTabSetCss('product');
    location.href = domain + 'pages/products/';
});