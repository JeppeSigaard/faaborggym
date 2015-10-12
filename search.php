<?php 

////////////////////////////////////////
/* --      ARKIV - Søgeresultater  -- */
////////////////////////////////////////

// Hent header
get_header(); 

?>
<div class="top-space"></div>
<div id="content-top">
    <h1 id="page-title">Søgning: <?php echo wp_strip_all_tags($_GET['s']); ?></h1>
</div>
<hr class="red"/>
<div id="content-main">
    <div class="content" id="page-center">
        <div class="post-list">
            <?php 
            
            if (have_posts()) : while(have_posts()): the_post();
            
            ////////////////////////////////////////////
            /* --   Hent liste over søgeresultater -- */
            ////////////////////////////////////////////
            include 'partials/postlist-search.php';

            endwhile; 
            
            else : ?>
                
                <div class="search-result search-no-results">
                    <h4>Ingen resultater</h4>
                    <p>Din søgning på <strong>"<?php echo wp_strip_all_tags($_GET['s']); ?>"</strong> gav ingen resultater.</p>
                </div>
            
            <?php endif; 
            
            ?>
        </div>
    </div>
    <div class="content" id="page-right">
        <?php dynamic_sidebar( 'front-widgets-right' ); ?> 
    </div>
    <div class="content" id="page-left">
        <?php dynamic_sidebar( 'front-widgets-left' ); ?> 
    </div>
</div>
<?php get_footer(); ?>