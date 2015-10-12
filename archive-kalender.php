<?php 

////////////////////////////////////////
/* --      ARKIV - Vis kalender     -- */
////////////////////////////////////////

// Hent header
get_header(); 

?>
<div class="top-space"></div>
<div id="content-top">
    <h1 id="page-title">KALENDER</h1>
</div>
<hr class="red"/>
<div id="content-main">
    <div class="content" id="page-center">
        <div class="post-list">
            <?php 

            $sidemenu = '';
            
            $post_reading = '';
            
            $post_order = 0;
            
           $args = array( 
                'posts_per_page' => get_option('posts_per_page'), 
                'offset'=> 0, 
                'post_type' => 'kalender',
                'orderby' => 'meta_value',
                'meta_type' => 'DATETIME',
                'meta_key' => 'cal_start',
                'order' => 'ASC',
            
            );
            $myposts = get_posts( $args );
            foreach ( $myposts as $post ) : setup_postdata( $post ); 
            $post_reading = '';
            
            ////////////////////////////////////////////
            /* --      Hent liste over nyheder     -- */
            ////////////////////////////////////////////
            include 'partials/postlist-cal.php';

            endforeach; 
            
            ?>
        </div>
    </div>
    <div class="content" id="page-right">
        <div class="sidemenu-container">
            <h4>FG's kalender</h4>
            <ul id="menu-news-sidemenu" class="menu">
                <?php echo $sidemenu; ?>
            </ul>
        </div>
        <hr class="red"/>
        <?php dynamic_sidebar( 'cal-widgets-right' ); ?> 
    </div>
    <div class="content" id="page-left">
        <?php dynamic_sidebar( 'cal-widgets-left' ); ?> 
    </div>
</div>
<?php get_footer(); ?>