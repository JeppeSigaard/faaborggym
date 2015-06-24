function owlslidePTPreviews(){
    
    var owl = $("#projekt-tema-preview");
 
    owl.owlCarousel({
        responsive : {
            
            0 : {
                items : 2,
            },
            
            480 : {
                items : 3,
            },
           
            768 : {
                items : 4,
            },
            
            960 : {
                items : 6,
            },
            
           
            1280 : {
                items : 8,
            },
        },
        
        pagination : false,
        dots: false,
        nav: false,
    });
    



}



function PTmakePreviews(obj){
    
    var container = $('#projekt-tema-preview');
    
    
    // Loop gennem obj
    for(key in obj){
    
        // Opret link
        var box = $('<a></a>');
        var div = $('<div></div>');
        box.addClass('pt-preview-box');
        box.addClass('pt-preview-theme-'+obj[key]['theme']);
        box.attr('data-post-id',obj[key]['id']);
        box.attr('href',obj[key]['url']);
        box.append(div);
        
        
        
        // Opret baggrundsbillede
        
        
        var img = obj[key]['img'];
        
        if(obj[key]['img_should_filter'] == true){
            
            box.addClass('image-filter');
            
        }
        
        if(img !== null){
            box.css('background-image','url('+img+')');
        }
        
        // Opret titel
        var title = $('<div class="title"></div>');
        var span  = $('<span></span>');
        span.html(obj[key]['title']);
        title.append(span);
        div.append(title);
        
        // tilføj til headeren
        container.prepend(box);
        
    }
    
    container.removeClass('top');
    owlslidePTPreviews();
    addFilteredImages();
}

function addFilteredImages(){

$('.pt-preview-box').each(function(){
    
    if($(this).hasClass('image-filter')){
    
        var img = $(this).css('background-image').replace('url(','').replace(')','');
        var elem = $(this);
        
        $.ajax({
            type: "POST",
            url: wpURL + '/async/image-filter.php',
            dataType: 'json',
            data: {'img':img},
            success: function(response){
                
                var preload = $('<img src="'+response.img+'"/>');
                
                preload.load(function(){
                    elem.css({'background-image':'url('+response.img+')'});
                    elem.children('div').css({'background-color':'transparent','background-image':'none'});
                });
                      
            }
        });
    
    }

});
    
}



$(function(){

    if($('#projekt-tema-preview').length){
    
      $.ajax({
            type: "POST",
            url: wpURL + '/async/projekt-tema-preview.php',
            dataType: 'json',
            data: '',
            success: function(response){

                if (!response.error){
                    
                    PTmakePreviews(response);

                }

                else{

                    console.log(response.error)

                }
            }
        });
        
        
    }
    
    
}); // End ready