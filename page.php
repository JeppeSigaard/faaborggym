<?php 

/////////////////////////////////////////////////////////////////
/* --      SIDE - "Vis almindelige" sider og undersider     -- */
/////////////////////////////////////////////////////////////////

// Hent header
get_header(); 


/* THE LOOP - tidlig init på sider */
if (have_posts()) : while(have_posts()): the_post(); 

?>
<div class="top-space"></div>
<div id="content-top">
    <h1 id="page-title"><?php the_title(); ?></h1>
</div>
<hr class="red"/>
<div id="content-main">
    <div class="content" id="page-center">
        <?php if (get_the_content() !== ''): ?>
        <article>
            <?php the_content(); ?>
        </article>
        <hr class="red"/>
        <?php  endif; ?>
        <div style="position:relative;height:10px;"></div>
        <?php 
        

        //////////////////////////////////////////////////
        /* --     INDSÆT UNDERSIDER SOM PREVIEWS     -- */
        //////////////////////////////////////////////////
        if (!is_category() && !is_archive()):

            $post_order = 0;
            $sidemenu = '';
            $post_reading = '';
            $parent_id = get_the_ID();
            $get_children = get_posts(array(
                
                'post_parent'       => $parent_id,
                'post_type'         => 'page',
                'posts_per_page'    => -1,
                'post_status'       => 'publish',
                'suppress_filters'  => true,
                'order_by'          => 'menu_order',
                
            ));
            
            if(!empty($get_children)) : ?>
            <div class="postlist">  
            <?php foreach($get_children as $post){
                setup_postdata($post);
                include 'partials/postlist-children.php';
                wp_reset_postdata();
            };?>
            </div>
        <?php endif; endif; ?>
    </div>
    <div class="content" id="page-right">
        <?php include 'partials/sidemenu-page.php'; ?>
        
        <?php dynamic_sidebar( 'page-widgets-right' ); ?>
    </div>
    <div class="content" id="page-left">
        <?php dynamic_sidebar( 'page-widgets-left' ); ?> 
    </div>
</div>
<?php endwhile; endif; // SLut LOOP ?>
<?php get_footer();?>