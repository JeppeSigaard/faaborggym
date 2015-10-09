$(function(){

    $('.gallery a.show-more-btn').click(function(e){
        e.preventDefault();
        
        var g = $(this).parents('.gallery');
        
        if(g.hasClass('open')){
            $(this).html('Åbn album');
            g.removeClass('open');
            g.children('.item-plchld').slideUp(100);

            
        }
        
        else{
            $(this).html('Luk album');
            g.addClass('open');
            
            g.children('.item-plchld').each(function(){
                
                
                var anchor = $(this),
                    img = new Image();
                anchor.slideDown(100);
                
                if(!anchor.hasClass('loaded')){
                    img.src = anchor.attr('data-thumb');
                    img.onload = function(){
                        anchor.html(img).addClass('loaded');
                    }
                }
            });
            
        }
    });
});