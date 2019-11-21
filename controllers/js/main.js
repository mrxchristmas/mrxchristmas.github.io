$(document).ready(function(){
    // alert('test');
    function showReport(message){
        $('#report_message').text(message);
        $('#reports').show();
        var i = 0;
        var x = setInterval(function(){
            // alert(i);
            if(i == 1){
                clearInterval(x);
                $('#reports').hide();
            }
            i++;
        }, 1000);
    }
    
    $('#reports').hide();
    $('#menu_hot').click(function(){
        // alert('test');
        localStorage.setItem('curcat','http://localhost:8080/oinkcup/pages/category/menu_hot/');
        location.href = 'http://localhost:8080/oinkcup/pages/category/menu_hot/';
    });
    $('#menu_cold').click(function(){
        // alert('test');
        localStorage.setItem('curcat','http://localhost:8080/oinkcup/pages/category/menu_cold/');
        location.href = 'http://localhost:8080/oinkcup/pages/category/menu_cold/';
    });
    $('#menu_espresso').click(function(){
        // alert('test');
        localStorage.setItem('curcat','http://localhost:8080/oinkcup/pages/category/menu_espresso/');
        location.href = 'http://localhost:8080/oinkcup/pages/category/menu_espresso/';
    });
    $('#menu_treats').click(function(){
        // alert('test');
        localStorage.setItem('curcat','http://localhost:8080/oinkcup/pages/category/menu_treats/');
        location.href = 'http://localhost:8080/oinkcup/pages/category/menu_treats/';
    });
    $('#home').click(function(){
        // alert('test');
        location.href = 'http://localhost:8080/oinkcup/';
    });
    $('#report_close').click(function(){
        // alert('test');
        $('#reports').hide();
    });
});