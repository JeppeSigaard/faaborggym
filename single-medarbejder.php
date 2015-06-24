<?php 

////////////////////////////////////////
/* --   SINGLE - Vis medarbejder   -- */
////////////////////////////////////////

// Hent header
get_header(); 

?>
<div class="top-space"></div>
<div id="content-top">
    <h1 id="page-title">Medarbejdere</h1>
</div>
<hr class="red"/>
<div id="content-main">
    <div class="content" id="page-center">
        <div class="post-list">
            <?php 

                $current_post = get_the_ID();
                $post_order = 0; 
                $args = array( 'posts_per_page' => -1, 'offset'=> 0, 'post_type' => 'medarbejder','orderby'=>'title','order'=>'ASC');
                $myposts = get_posts( $args );
                foreach ( $myposts as $post ) : setup_postdata( $post ); 
                $post_order ++; 
                $post_reading = '';
                if($current_post == $post->ID) {$post_reading = ' reading';}
                include('partials/postlist-medarbejder.php');
                endforeach; 
            ?>
        </div>
        <hr class="red"/>
    </div>
    <div class="content" id="page-right">
        <?php 
        $parent_id = 302;
        include 'partials/sidemenu-page.php';
        ?>
        <?php dynamic_sidebar( 'mb-widgets-right' ); ?> 
    </div>
    <div class="content" id="page-left">
        
         <div class="sidemenu-container">
            <h4>Lærerne</h4>
            <ul id="menu-undervisere-sidemenu-1" class="menu">
                <?php wp_list_categories(array('taxonomy' => 'fag', 'title_li' => '')); ?>
            </ul>
        </div>
        
        <?php dynamic_sidebar( 'mb-widgets-left' ); ?> 
    </div>
</div>
<?php get_footer(); ?>