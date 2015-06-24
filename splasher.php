<?php
/*

Template name: Splasher

*/

?>
<!doctype html/>
<html>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no" />
    <title>Faaborg Gymnasium</title>
    <link rel="icon" href="<?php echo str_replace('en/','', get_bloginfo('template_directory')); ?>/favicon.ico" type="image/x-icon"> 
    <link rel="shortcut icon" href="<?php echo str_replace('en/','', get_bloginfo('template_directory')); ?>/favicon.ico" type="image/x-icon"> 
    <?php wp_head(); ?>
    <style>
        
        html, body{
            background:#11789d;
            width:100%;
            height:100%;
        }
        
        #splashcontain {
            text-align: center;
            display: block;
            width: 100%;
            height: 100%;
        }
        
        #splashcontain div{
            display:none;
        }
        
        
        #splashcontain img{
            width:auto;
            margin:auto;
        }
    
    </style>
</head>
    <body>
    <div id="splashcontain">
        <div>
            <img src="http://u136ruc.nixweb06.dandomain.dk/media/2014/11/fg-logo-hvid.png" alt="<?php echo get_bloginfo(); ?>" />
            <h4 style="color:#fff;">Hjemmesiden er under vedligeholdelse</h4>
        </div>
    </div>
    
    <?php wp_footer(); ?>
    <script>
        $(window).load(function(){
            var margin = ($(window).height() - $('#splashcontain div').height()) / 2.2;
            
            $('#splashcontain div').css('margin-top',margin).fadeIn(500);
            
            $(window).resize(function(){
                
                margin = ($(window).height() - $('#splashcontain div').height()) / 2.2;
                
                 $('#splashcontain div').css('margin-top',margin);
            
            });        
        });
            
    </script>   
    </body>
    
</html>