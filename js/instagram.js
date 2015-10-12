// Initiate object
var smamo_instagram = {};

smamo_instagram.fetchImages = function(elem, num, callback){
    

    var ajaxUrl = elem.attr('data-fetch-url'),
        hashtag = elem.attr('data-hashtag');

    $.ajax({
        url : ajaxUrl,
        type : 'POST',
        data : {
            action : 'fetch-instagram', 
            hash : hashtag,
            num : num
        },
        dataType : 'json',
        success : function(response){
            
            if(typeof callback === 'function'){
                callback(response);
            }
            
        },
    });
    
}

// Construct images
smamo_instagram.makeImg = function(object,callback){
    
    var a = object.images;
    
    var cb = ''; 
    for (var i = 0; i < a.length; ++i) {
       cb += '<li class="inst-img"><a target="_blank" href="'+a[i].link+'" style="background-image:url('+a[i].images.low_resolution.url+');"></a></li>';
    }
    
    if(typeof callback === 'function'){
        callback(cb);
    }
};

// Initter
smamo_instagram.init = function(){

    $('.instagram-box').each(function(){
        var elem = $(this);
        
        smamo_instagram.fetchImages(elem, 2, function(response){
            
            smamo_instagram.makeImg(response,function(cb){
                elem.children('ul').html(cb);
            });
        });
    });
};



$(function(){
    smamo_instagram.init();
    
    $('.instagram-box').off().on({click: function(e){
        
        var box = $(this),
            ul = box.children('ul');
            t = $(e.target);
        
        if(t.is('.news-more-btn')){
            e.preventDefault();
            if(!ul.hasClass('expand')){t.html('Vis færre billeder')}
            else{t.html('Vis flere billeder')}
            ul.toggleClass('expand');
            $('html,body').animate({scrollTop : box.offset().top},500);
        }
    }});
});