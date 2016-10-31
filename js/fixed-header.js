$(function(){
    var header = $('#head'),
        offset = header.offset().top;

    $(window).on('scroll',function(){

        if($(window).scrollTop() > offset){

            header.addClass('fixed');
        }
        else{
            header.removeClass('fixed');

        }


    });
});
