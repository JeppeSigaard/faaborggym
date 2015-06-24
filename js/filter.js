$('.load img').css('opacity',.2);
    $(window).load(function(){
    
        $('.filter img').each(function(){
            var image = $(this);
            var href= image.attr('src');

            $.ajax({
                type: "POST",
                url: wpURL + '/async/image-filter.php',
                dataType: 'json',
                data: {'img':href},
                success: function(response){

                    var preload = $('<img src="'+response.img+'"/>');

                    preload.load(function(){
                        image.attr('src',response.img).animate({'opacity':1},100);
                    });

                }
            });

        });
        
    
        
        $('#page-center img').each(function(){
            var image = $(this);
            var href= image.attr('src');

            $.ajax({
                type: "POST",
                url: wpURL + '/async/image-filter.php',
                dataType: 'json',
                data: {'img':href},
                success: function(response){

                    var preload = $('<img src="'+response.img+'"/>');

                    preload.load(function(){
                        image.attr('src',response.img).animate({'opacity':1},100);
                    });

                }
            });

        });
        
        $('.ubermenu-image').each(function(){
            var image = $(this);
            var href= image.attr('src');

            $.ajax({
                type: "POST",
                url: wpURL + '/async/image-filter.php',
                dataType: 'json',
                data: {'img':href},
                success: function(response){

                    var preload = $('<img src="'+response.img+'"/>');

                    preload.load(function(){
                        image.attr('src',response.img).animate({'opacity':1},100);
                    });

                }
            });

        });
        
        
        $('.smamo_img_widget img').each(function(){
            var image = $(this);
            var href= image.attr('src');

            $.ajax({
                type: "POST",
                url: wpURL + '/async/image-filter.php',
                dataType: 'json',
                data: {'img':href},
                success: function(response){

                    var preload = $('<img src="'+response.img+'"/>');

                    preload.load(function(){
                        image.attr('src',response.img).animate({'opacity':1},100);
                    });

                }
            });

        });
    
});