<?php

////////////////////////////////////////////////////////
/* --                                              -- */
/* --                 SKRIVEMETRO                  -- */
/* --      UDVIDELSE TIL FAABORG GYMNASIUM         -- */
/* --               2015 SMARTMONKEY               -- */
/* -- Alle rettigheder tilfalder Faaborg Gymnasium -- */
/* --                                              -- */
////////////////////////////////////////////////////////


////////////////////
/* SMAMO SETTINGS */
////////////////////
global $smamo_settings;
$smamo_settings = get_option("smamo_settings");


/////////////////////////////////////////////////////////
/* Tilføj post ID til body (fordi det er rart at have) */
/////////////////////////////////////////////////////////
$smamo_body_id = '';
if(!is_home()){
    $smamo_body_id = 'id="post-'.get_the_ID().'"';
}

// Start html
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no" />
        <title><?php wp_title( ' · ', true, 'right' ); ?></title>
        <link rel="icon" href="<?php echo str_replace('en/','', get_bloginfo('template_directory')); ?>/favicon.ico" type="image/x-icon"> 
        <link rel="shortcut icon" href="<?php echo str_replace('en/','', get_bloginfo('template_directory')); ?>/favicon.ico" type="image/x-icon"> 
        <?php wp_head(); ?>
        <link rel="stylesheet" id="metro-css" href="<?php echo get_template_directory_uri() ?>/skrivemetro/metro.css" media="all"/>
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-57200304-1', 'auto');
            ga('require', 'displayfeatures');
            ga('send', 'pageview');
        </script>
    </head>
<body <?php body_class(); echo $smamo_body_id ?>>
    <section id="top-map-nav">
       <a href="<?php echo get_bloginfo('url') ?>/skrivemetro/" title="tilbage til oversigten">
           <?php include get_template_directory().'/skrivemetro/statics/ikon-tekst.svg'; ?>
       </a> 
    </section>
    <section id="head">
        <a id="logo" class="logo-container" href="<?php echo get_bloginfo('url'); ?>">
            <img src="<?php header_image(); ?>" alt="<?php echo get_bloginfo(); ?>" />
        </a>
        <?php wp_nav_menu( array( 'theme_location' => 'metro-menu', 'container_id' => 'header-menu', 'container_class' => 'metro-menu-container' ) ); ?>
    </section>