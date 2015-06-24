function navigateOnNavChange(){

    var current = $('.top-route .owl-item.active a'),
        href = current.attr('href');
    
    ajaxLoadPage(href);
    addPush(current,'metro');
    
}

$(function(){

    if($('.route-nav').length){

        var route = $('.top-route'),
            current = $('.top-route a.current').index();
        
        route.owlCarousel({
            
            items:1,
            dots:false,
            nav:false,
            startPosition: current,
            onTranslated : navigateOnNavChange,
        
        });

        $(".next").click(function(e){
            e.preventDefault();
            route.trigger('next.owl.carousel');
        })

        $(".prev").click(function(e){
            e.preventDefault();
            route.trigger('prev.owl.carousel');
        })
        
    }
    
    
    $('#top-map-nav a, .map .station').click(function(e){
        $('body').toggleClass('single');
    });
    
});