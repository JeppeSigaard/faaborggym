<?php 

////////////////////////////////////
/* --   SINGLE - Vis nyheder   -- */
////////////////////////////////////

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
            $current_post = get_the_ID();
            $post_order = 0; 
            $args = array( 'posts_per_page' => get_option('posts_per_page'), 'offset'=> 0, 'post_type' => 'nyt' );
            $myposts = get_posts( $args );
            foreach ( $myposts as $post ) : setup_postdata( $post ); 
            $post_reading = '';
            if($current_post == $post->ID) {$post_reading = ' reading';}
            include 'partials/postlist-news.php';
            endforeach;
            
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