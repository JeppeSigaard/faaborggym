function UrlExists(url) {
    if(url){
        var req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.send();
        return req.status==200;
    } else {
        return false;
    }
}

function renderFilteredImageSrc(image,callback){
    var href = image.attr('src');
    
    $.ajax({
        type: "POST",
        url: ajaxURL,
        dataType: 'json',
        data: {
            img : href,
            action : 'filter_image',
        },
        success: function(response){

            var preload = $('<img src="'+response.img+'"/>');

            preload.load(function(){
                image.attr('src',response.img);
            });

            if(typeof callback === 'function'){
                callback();
            }
        }
    });
}

function replaceImageWithFiltered(image,callback){
    var href = image.attr('src'),
        filename = href.substring(href.lastIndexOf('/')+1),
        altHref = baseURL + '/media/filtered/' + filename;

    if(href.indexOf(baseURL) === -1){
        // Do nothing, i guess...
        
    }

    else if(UrlExists(altHref) && filename !== ''){
        image.attr('src', altHref);
        image.removeClass('getting-filtered');
    }

    else if(filename !== ''){
        renderFilteredImageSrc(image,function(){
            image.removeClass('getting-filtered');
        });
    }
}

$('.filter img, #page-center img, .smamo_img_widget img').addClass('getting-filtered').each(function(){
    replaceImageWithFiltered($(this));
}).promise().done( function(){
    
    $('.ubermenu-image').each(function(){
        replaceImageWithFiltered($(this));
    });
});
