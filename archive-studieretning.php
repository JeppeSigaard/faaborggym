<?php 

////////////////////////////////////////////////
/* --      ARKIV - Vis studieretninger     -- */
////////////////////////////////////////////////

// Hent header
get_header(); 

?>
<div class="top-space"></div>
<div id="content-top">
    <h1 id="page-title">Studieretninger</h1>
</div>
<hr class="red"/>
<div id="content-main">
    <div class="content" id="page-center">
        <div class="post-list">
            <?php 
            
            $sidemenu = '';
            $post_order = 0;

            if (have_posts()) : while(have_posts()): the_post();
           
            $post_reading = '';

            ////////////////////////////////////////////////////
            /* --      Hent liste over studieretninger     -- */
            ////////////////////////////////////////////////////
            include 'partials/postlist-studieretning.php'; 

            endwhile; 

            endif; 
            
            ?>
        </div>
    </div>
    
    <div class="content" id="page-right">
        
        <div class="sidemenu-container">
            <h4>Studieretninger på FG</h4>
            <ul id="menu-news-sidemenu" class="menu">
                <?php echo $sidemenu; ?>
            </ul>
        </div>
        <hr class="red"/>
        <?php 
        $parent_id = 345;
        include 'partials/sidemenu-page.php';
        ?>
        <?php dynamic_sidebar( 'sr-widgets-right' ); ?> 
    </div>
    <div class="content" id="page-left">
        <?php dynamic_sidebar( 'sr-widgets-left' ); ?>
    </div>
</div>
<?php get_footer(); ?>