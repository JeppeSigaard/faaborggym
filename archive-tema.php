<?php 

///////////////////////////////////////
/* --      ARKIV - Vis temaer     -- */
///////////////////////////////////////

// Hent header
get_header(); 

?>
<div class="top-space"></div>
<div id="content-top">
    <h1 id="page-title">Projekter og Temaer</h1>
</div>
<hr class="red"/>
<div id="content-main">
    <div class="content" id="page-center">
        <div class="post-list">
            <?php 
    
            if (have_posts()) : while(have_posts()): the_post();
            
            ///////////////////////////////////////////
            /* --      Hent liste over temaer     -- */
            ///////////////////////////////////////////
            include 'partials/postlist-tema-arkiv.php'; 

            endwhile; 

            endif; 
            
            ?>
        </div>
    </div>
    
    <div class="content" id="page-right">
        <?php $theme_id = '';?>
        <?php include 'partials/side-menu-tema.php'; ?>
        <?php dynamic_sidebar( 'tema-widgets-right' ); ?> 
    </div>
    <div class="content" id="page-left">
        <?php dynamic_sidebar( 'tema-widgets-left' ); ?>
    </div>
</div>
<?php get_footer(); ?>