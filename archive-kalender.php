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

            $wp_events = get_posts(array(
                'posts_per_page' => get_option('posts_per_page'), 
                'offset'=> 0, 
                'post_type' => 'kalender',
                'orderby' => 'meta_value',
                'meta_type' => 'DATETIME',
                'meta_key' => 'cal_start',
                'order' => 'ASC',
            ));

            $events = smamo_merge_events(smamo_fetch_fb_events(), $wp_events);
            
            $post_order = 0;
            $post_reading = '';
            foreach($events as $event) :
            
            include get_template_directory() . '/partials/postlist-cal.php';

            endforeach; 
            
            ?>
        </div>
    </div>
    <div class="content" id="page-right">
        <?php dynamic_sidebar( 'cal-widgets-right' ); ?> 
    </div>
    <div class="content" id="page-left">
        <?php dynamic_sidebar( 'cal-widgets-left' ); ?> 
    </div>
</div>
<?php get_footer(); ?>
