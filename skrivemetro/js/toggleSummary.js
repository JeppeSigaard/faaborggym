
function ajaxLoadPage(href){

    $('.sidebar-route a.current').removeClass('current');
    
    $('.sidebar-route a[href="'+href+'"]').addClass('current');
    
    $('section.content').addClass('ajax-load').load(href+' section.content>*',function(){
       $('section.content').removeClass('ajax-load');
    });

    if($(window).width() < 768){
       $('html, body').animate({scrollTop: $('#header-menu').offset().top + 60});
    }
}

jQuery(function($){
    
    
    // Mega scopet click handler, woah!
    $('.content').on('click',function(e){
        var target = $(e.target);
        
        // Klik på h3 og h4 i #page-center
        if(target.is('#page-center h3') || target.is('#page-center h4') || target.is('h2')){
            
            target.parent('.block').toggleClass('active');
        
        }
        
        // Klik på fuld/opsummering
        else if(target.is('.toggle-full a')){
        
            e.preventDefault();
        
            if(target.hasClass('active')){/*Do nothing*/}

            else{
        
                $('.toggle-full a').removeClass('active');
                target.addClass('active');
                $('main article').toggleClass('summary');

                $('html, body').animate({scrollTop: $('article').offset().top - 18});
                
            }
        
        }
        
        
        // Klik på sidebar rute
        else if(target.is('.sidebar-route a')){
            e.preventDefault();
            
            $('.sidebar-route a.current').removeClass('current');
            target.addClass('current');
            
            var href = target.attr('href'),
                hrefTopIndex = $('.top-route a[href="'+href+'"]').parent('.owl-item').index();
            
            $('.top-route').trigger('to.owl.carousel',[hrefTopIndex,100,true]);
            
        }
        
    });
    
    $('.top-route a').on('click',function(e){
            e.preventDefault();
            
            if($(this).parent('.owl-item').hasClass('active')){}
        
            else{
                var href = $(this).attr('href'),
                hrefTopIndex = $('.top-route a[href="'+href+'"]').parent('.owl-item').index();

                $('.top-route').trigger('to.owl.carousel',[hrefTopIndex,100,true]);
            }
        });
    
    window.onpopstate = function(event) {
        
        console.log(event);
        
        if(!event.state){}
        
        // Hvis popstate type er 'nyt' eller 'medarbejder'
        else if(event.state.type === 'metro'){
            
            // Justér titel
            //document.title = event.state.name + ' · Faaborg Gymnasium';
            window.location.href = event.state.url;  
        }
    };
});