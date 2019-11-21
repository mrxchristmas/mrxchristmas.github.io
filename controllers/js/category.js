var productUrl = 'http://localhost:8080/oinkcup/pages/products';
var domain = 'http://localhost:8080/oinkcup/';
var menu_hot_url = "pages/category/menu_hot/";
var menu_cold_url = "pages/category/menu_cold/";
var menu_espresso_url = "pages/category/menu_espresso/";
var menu_treats_url = "pages/category/menu_treats/";


$(document).ready(function(){
    $('#product_name').hide();
    localStorage.setItem('curid','');
    $(document).on('click', '.item_widget', function(){
        $(this).children('span').text()
        localStorage.setItem("curid",  $(this).attr('id'));
        localStorage.setItem("curName",  $(this).children('span').text());
        localStorage.setItem("curImg",  $(this).children('img').attr('src'));
        localStorage.setItem('cursize', '');
        var curcat = location.href;
        localStorage.setItem("curcat",  curcat);
        location.href = productUrl ;
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
});