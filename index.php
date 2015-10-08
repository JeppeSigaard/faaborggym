<?php 

////////////////////////////////////////////
/* --   INDEX - Hjemmesidens forside   -- */
////////////////////////////////////////////

// Hent header
get_header(); 


////////////////////////////////////
/* --   Hent forsidens slider  -- */
////////////////////////////////////
get_template_part('partials/content','slider'); 

?>
<hr class="red"/>
<div id="content-main">
    <div class="content" id="page-top">
        <?php get_template_part('partials/content','nyheder') ?>
    </div>
     <div class="content" id="page-right">
        <div class="sidemenu-container">
            <h4>Forsiden</h4>
            <?php wp_nav_menu( array( 'theme_location' => 'front-menu', 'container' => '') ); ?>
        </div>
        <hr class="red"/>
        <?php dynamic_sidebar( 'front-widgets-right' ); ?> 
    </div>
    <div class="content" id="page-center">
        <?php get_template_part('moduler/status/status','main') ?>
    </div>
    <div class="content" id="page-left">
         <?php dynamic_sidebar( 'front-widgets-left' ); ?> 
    </div>
</div>
<?php get_footer(); ?>