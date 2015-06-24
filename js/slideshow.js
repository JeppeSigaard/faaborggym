

$(function(){
    if($('#slides .slide').length > 1){
        $('#slides').owlCarousel({

            items : 1,
            autoplay : true,
            autoplayTimeout : $('#slideshow').attr('data-duration'),
            smartSpeed : $('#slideshow').attr('data-transition'),
            autoplayHoverPause : false,
            dots: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            baseClass : "slide",
            theme : "owl-theme",
            lazyLoad : true,
            lazyFollow : true,
            lazyEffect : "fade",
            autoHeight : false,
            loop: true,

        });


        /* Klik på slider */
        $('#slides a.slide').click(function(event){
            event.preventDefault();
            var link = $(this).attr('href');
            var target = $(this).attr('target');

            if(link == ''){
                return false;
            }
            else{

                if(target === '_blank'){
                    window.open(link,'_blank');
                }

                else {
                    window.location = link;
                }

            }

        });
    }

});