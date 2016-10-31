function smamo_fb_feed(callback){
    $.ajax({
        url : ajaxURL,
        type : 'POST',
        data : {action : 'fb_feed'},
        dataType : 'json',
        success : function(response){
            if (typeof callback === 'function'){
                callback(response);
            }
        },
    });
}


$(function(){

    if($('body.home .fb-news').length){
        var section = $('body.home .fb-news');

        smamo_fb_feed(function(r){
            if(typeof r.transient.data !== 'undefined'){
                var d = r.transient.data,
                    c = 0;
                for (i = 0; i < d.length; i++) {


                    var entry = section.find('.news-entry:nth-child('+(c+1)+')'),
                        status = d[i];

                    /* filtrer events fra */
                    if(status.type === 'event' || c > 4){

                        continue;
                    }
                    /* filtrer events fra */

                    c++; // entry nummer


                    // Tilføj typelklasse
                    entry.addClass('news-entry-'+status.type);
                    entry.addClass('news-entry-status-'+status.status_type);



                    // Indstil link

                    if('undefined' !== typeof status.permalink_url){
                        entry.attr('href', status.permalink_url);
                    }
                    else{
                        entry.attr('href', status.link);
                    }


                    // Indstil baggrundsbillede
                    entry.find('.news-img').removeClass('loading').css('background-image','url('+status.full_picture+')');

                    // Indstil dato og ikoner
                    var date = new Date(status.created_time),
                        str = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();


                    if('photo' === status.type){
                        str += '<svg viewbox="0 0 16 16"><use xlink:href="#icon-camera"></use></svg>';
                    }

                    if('video' === status.type){
                        str += '<svg viewbox="0 0 16 16"><use xlink:href="#icon-play"></use></svg>';
                    }

                    if('link' === status.type){
                        str += '<svg viewbox="0 0 16 16"><use xlink:href="#icon-link"></use></svg>';
                    }

                    if('status' === status.type){
                        str += '<svg viewbox="0 0 16 16"><use xlink:href="#icon-file"></use></svg>';
                    }


                    entry.find('.news-date').html(str);


                    // Indstil tekst
                    var strlen = 300,
                        text = '';

                    if(c > 1){
                        strlen = 100;
                    }

                    if(typeof status.description !== 'undefined'){
                        text = status.description;
                    }

                    else if(typeof status.message !== 'undefined'){
                        text = status.message;
                    }

                    else if(typeof status.caption !== 'undefined'){
                        text = status.caption;
                    }

                    if(text.length > strlen){
                        text = text.substr(0,strlen) + ' ...';
                    }

                    entry.find('.news-title').html(text);
                }
            }
        });
    }
});
