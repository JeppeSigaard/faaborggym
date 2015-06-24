$(function(){

    $('.mb-entry .dropdown').on('click',function(e){
        e.preventDefault();
        var div = $(this),
            target = $(e.target);
        
        if(target.is('h6 strong') || target.is('h6')){
    
            if(div.hasClass('active')){

                div.children('p').slideUp(100);
                div.removeClass('active');

            }

            else{
                div.children('p').slideDown(100);
                div.addClass('active');
            }
        }
    });
    
});