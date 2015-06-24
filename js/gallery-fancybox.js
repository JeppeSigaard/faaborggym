$(function(){
   
    if($(".gallery").length){

        $('.gallery a').addClass('fancybox');
        
        
        $(".fancybox").fancybox({
            closeClick	: true,
            helpers : {
                overlay : {
                    css : {
                        'background' : 'rgba(33, 33, 33, 0.65)'
                    },
                },
                loading :{
                    css : {
                        
                    }
                }

            }
        });
        
    }
});