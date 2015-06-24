<?php get_header(); ?>
<?php 

$current_id = 0;
$theme_id = get_the_ID();

$bg_image = get_post_meta(get_the_ID(),'slide_img',true); 
if ($bg_image !== '') : 
    
    $bg_image = wp_get_attachment_image_src($bg_image,'slide-size'); 
    ?>
    
    <section id="slideshow" class="no-bottom">
        <div id="slides" >
                <a class="slide">
                    <div class="text">
                        <h2><?php echo get_post_meta(get_the_ID(),'slide_heading', true) ?></h2><br>
                        <span><?php echo get_post_meta(get_the_ID(),'slide_subheading', true) ?></span>
                    </div>
                    
                    <?php if(smamo_image_filter(get_the_ID())): ?>
                    
                    <?php if (smamo_has_filtered_slide_img(get_the_ID(),'slide-size')):?>
                    
                    <?php smamo_filtered_slide_img(get_the_ID(),'slide-size')?>
                    
                    <?php else:?>
                    
                    <div class="filter">
                        <img src="<?php echo $bg_image[0]; ?>"/>
                    </div>
                    
                    <?php endif;  else:?>
                    
                    <img src="<?php echo $bg_image[0]; ?>"/>
                    
                    <?php endif;?>
                </a>
        </div>
    </section>

<?php else : ?>

    <div class="top-space"></div>

<?php endif; ?>

<div id="content-top">
    <h1 id="page-title"><?php the_title(); ?></h1>
</div>

<hr class="red"/>

<div id="content-main">
    
    <div class="content" id="page-center">
        <div class="post-list">
        <?php

        wp_reset_postdata();
        $sidemenu = '';
        $current_post = get_the_ID();
        $post_order = 0; 
        $args = array( 
            'posts_per_page'    => -1, 
            'offset'            => 0, 
            'post_type'         => 'tema-post',
            'meta_key'          => 'theme',
            'meta_value'        => $theme_id,
            'orderby'          => 'post_date',
            'order'            => 'ASC',
        );

        $myposts = get_posts( $args );
            
        foreach ( $myposts as $post ) : setup_postdata( $post );
        
            include 'partials/postlist-tema.php'; 
        
        endforeach;
        
        ?>
        
            <?php include 'partials/add-content.php'; ?>
            
        </div>
    </div>
    
    <div class="content" id="page-right">
        
        <?php include 'partials/side-menu-tema.php'; ?>
        
        <?php dynamic_sidebar( 'tema-widgets-right' ); ?> 
    
    </div>

    <div class="content" id="page-left">
        
        <?php if(get_post_meta($theme_id,'status_include',true) == '1') : ?>
        
            <?php include 'moduler/status-tema.php'; ?>
        
        <?php endif; ?>
        
        <?php dynamic_sidebar( 'tema-widgets-left' ); ?> 

    </div>
    
</div>

<?php get_footer(); ?>