<?php 

////////////////////////////////////
/* --   SINGLE - Vis nyheder   -- */
////////////////////////////////////

// Hent header
get_header(); 


$current_id = get_the_ID();
$theme_id = get_post_meta($current_id,'theme',true);

wp_reset_postdata();

$bg_image = get_post_meta($theme_id,'slide_img',true); 
if ($bg_image !== '') : 
    
    $bg_image = wp_get_attachment_image_src($bg_image,'slide-size');
    
?>   
<section id="slideshow" class="no-bottom">
    <div id="slides" >
        <a class="slide">
            <div class="text">
                <h2><?php echo get_post_meta($theme_id,'slide_heading', true) ?></h2><br>
                <span><?php echo get_post_meta($theme_id,'slide_subheading', true) ?></span>
            </div>
            <?php
            
            /////////////////////////////////////////////////
            /* --   Filtrering af billede i sidens top  -- */
            /////////////////////////////////////////////////
            if(smamo_image_filter($theme_id)):
            
                if (smamo_has_filtered_slide_img($theme_id,'slide-size')):
                    
                    smamo_filtered_slide_img($theme_id,'slide-size');
                    
                else:
                    
                    ?>
                    <div class="filter">
                        <img src="<?php echo $bg_image[0]; ?>"/>
                    </div>
                    <?php 
                endif;  
            else:
            
            ?>
            <img src="<?php echo $bg_image[0]; ?>"/>
            <?php endif;?>
                    
        </a>
    </div>
</section>
<?php else : // Hvis intet billede, indlæs topspace ?>
<div class="top-space"></div>
<?php endif; ?>
<div id="content-top">
    <h1 id="page-title"><?php echo get_the_title($theme_id); ?></h1>
</div>
<hr class="red"/>
<div id="content-main">
    <div class="content" id="page-center">
        <div class="post-list">
        <?php
        wp_reset_postdata();
        $sidemenu = '';
        $current_post = $current_id;
        $post_order = 0; 
        $args = array( 
            'posts_per_page'    => -1, 
            'offset'            => 0, 
            'post_type'         => 'tema-post',
            'meta_key'          => 'theme',
            'meta_value'        => $theme_id,
            'orderby'           => 'post_date',
            'order'             => 'ASC'
        );
        
        $myposts = get_posts( $args );  
        foreach ( $myposts as $post ) : setup_postdata( $post ); 
        
        ///////////////////////////////////////////
        /* --   Indlæs liste over tema-posts  -- */
        ///////////////////////////////////////////
        include 'partials/postlist-tema.php'; 
        endforeach;

        /////////////////////////////////////
        /* --   Indlæs editor for admin -- */
        /////////////////////////////////////
        include 'partials/add-content.php'; 
            
        ?>
        </div>        
    </div>
    <div class="content" id="page-right">
        <?php dynamic_sidebar( 'tema-widgets-right' ); ?> 
    </div>
    <div class="content" id="page-left">
        <?php dynamic_sidebar( 'tema-widgets-left' ); ?>
    </div>
</div>
<?php get_footer(); ?>
