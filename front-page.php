<?php

////////////////////////////////////////////
/* --   INDEX - Hjemmesidens forside   -- */
////////////////////////////////////////////

// Hent header
get_header();


if(get_theme_mod('hero_banner_show') === 'slideshow'){
    get_template_part('partials/content','slider');
}

else{
    get_template_part('partials/content','video-banner');
}

?>
<hr class="red"/>
<div id="content-main">
    <div class="content" id="page-top">
        <?php get_template_part('partials/content','fb-feed') ?>
    </div>
    <div class="content" id="page-right">
        <?php dynamic_sidebar( 'front-widgets-right' ); ?>
    </div>
    <div class="content" id="page-center">
        <?php get_template_part('partials/home/article'); ?>
    </div>
    <div class="content" id="page-left">
         <?php dynamic_sidebar( 'front-widgets-left' ); ?>
    </div>
</div>
<?php get_footer(); ?>
