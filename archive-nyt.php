<?php 

////////////////////////////////////////
/* --      ARKIV - Vis nyheder     -- */
////////////////////////////////////////

// Hent header
get_header(); 

?>
<div class="top-space"></div>
<div id="content-top">
    <h1 id="page-title">FG NYT</h1>
</div>
<hr class="red"/>
<div id="content-main">
    <div class="content" id="page-center">
        <div class="post-list">
            <?php 

            $sidemenu = '';
            
            $post_reading = '';
            
            $post_order = 0;
            
            if (have_posts()) : while(have_posts()): the_post();
            
            ////////////////////////////////////////////
            /* --      Hent liste over nyheder     -- */
            ////////////////////////////////////////////
            include 'partials/postlist-news.php';

            endwhile; 
            
            endif; 
            
            ?>
        </div>
    </div>
    <div class="content" id="page-right">
        <div class="sidemenu-container">
            <h4>FG NEWS</h4>
            <ul id="menu-news-sidemenu" class="menu">
                <?php echo $sidemenu; ?>
            </ul>
        </div>
        <hr class="red"/>
        <?php dynamic_sidebar( 'news-widgets-right' ); ?> 
    </div>
    <div class="content" id="page-left">
        <?php dynamic_sidebar( 'news-widgets-left' ); ?> 
    </div>
</div>
<?php get_footer(); ?>