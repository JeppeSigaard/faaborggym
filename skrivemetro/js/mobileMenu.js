jQuery(function($){

    $('#header-menu').on('click',function(e){
        
        $(this).toggleClass('menu-active');
        $('body').toggleClass('menu-active');
    
    });

});