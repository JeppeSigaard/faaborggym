<?php

////////////////////////////////////////////////////////
/* --                                              -- */
/* --                 FAABORG GYM                  -- */
/* --          TEMA TIL FAABORG GYMNASIUM          -- */
/* --               2014 SMARTMONKEY               -- */
/* -- Alle rettigheder tilfalder Faaborg Gymnasium -- */
/* --                                              -- */
////////////////////////////////////////////////////////


////////////////////
/* SMAMO SETTINGS */
////////////////////
global $smamo_settings;
$smamo_settings = get_option("smamo_settings");

///////////////////////////////////////////////////////////////////////
/* Theme Class - Bruges til at indstille temaer og projekters farver */
///////////////////////////////////////////////////////////////////////
$smamo_body_theme_class = '';

$obj = get_queried_object();

if (isset($obj->post_type)){
    
    $smamo_post_type = $obj->post_type;
     
    if($smamo_post_type == "tema"){

         $smamo_body_theme_class = 'smamo-theme-'.get_post_meta(get_the_ID(),'theme',true);

     } elseif($smamo_post_type == "tema-post") {

        $theme = get_post_meta(get_the_ID(),'theme',true);
        
        $smamo_body_theme_class = 'smamo-theme-'.get_post_meta($theme,'theme',true);
     }
}

/////////////////////
/* - OPRET NONCE - */
/////////////////////
$smamo_nonce = 'tempNoncevarskilletsandwichbeforeoverlaunchnestbestmanrandomdigits1294857663';//substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 20);
define('SMAMO_NONCE',$smamo_nonce);
$_SESSION['smamo_nonce'] = SMAMO_NONCE;


/////////////////////////////////////////////////////////
/* Tilføj post ID til body (fordi det er rart at have) */
/////////////////////////////////////////////////////////
$smamo_body_id = '';
if(!is_home() && !is_front_page()){
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
<body <?php body_class($smamo_body_theme_class); echo $smamo_body_id ?>>
    <?php get_template_part('partials/header-vectors'); ?>
    <input type="hidden" id="smamo_nonce" name="smamo_nonce" value="<?php echo SMAMO_NONCE ?>"/>
    <?php if (is_home() || is_front_page() ){

        if(get_theme_mod('topbar_show') === 'pt-preview'){
            get_template_part('partials/content','pt-preview');
        }

        else{
            get_template_part('partials/content','topbar');
        }
    }?>
    <section id="head">
        <a id="logo" class="logo-container" href="<?php echo get_bloginfo('url'); ?>">
            <img src="<?php header_image(); ?>" alt="<?php echo get_bloginfo(); ?>" />
        </a>
        <?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'container_id' => 'header-menu', 'container_class' => 'menu-container' ) ); ?>
    </section>
