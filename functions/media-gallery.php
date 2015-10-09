<?php 

add_filter( 'post_gallery', 'smamo_media_gallery', 10, 3 );
function smamo_media_gallery( $output = '', $atts, $instance ) {
    ob_start(); ?>
    
    <div class="gallery" id="smamo-gallery-<?php echo $instance ?>">
    
    <?php $i= 0; 
    
    $more = count(explode(',',$atts['ids'])) - 4;
    $more = '+'.$more;
    foreach ( explode(',',$atts['ids']) as $id) : 
    
        $i++; 
        $full = wp_get_attachment_image_src($id,'full');
        $large = wp_get_attachment_image_src($id,'gallery-size-large');
        $medium = wp_get_attachment_image_src($id,'gallery-size-small');
    
        if($i === 1) : ?>
        <a class="gallery-item item-for-<?php echo $instance ?>" href="<?php echo $full[0] ?>">
            <img src="<?php echo $large[0]; ?>">
        </a>
        <?php elseif ($i < 5) : ?>
        <a <?php if ($i === 4 && count(explode(',',$atts['ids'])) >= 5){ echo 'data-num="'.$more.'"';} ?> class="gallery-item item-for-<?php echo $instance ?>" href="<?php echo $full[0] ?>">
            <img src="<?php echo $medium[0]; ?>">
        </a>
        <?php else : ?>
        <a class="gallery-item item-plchld item-for-<?php echo $instance ?>" href="<?php echo $full[0] ?>" data-thumb="<?php echo $medium[0] ?>">
            <img src="<?php echo get_template_directory_uri(); ?>/statics/loading_blue.gif">
        </a>
        <?php endif; endforeach; if (count(explode(',',$atts['ids'])) >= 5) : ?>
        <a href="#" class="show-more-btn">Åbn album</a>
        <?php endif; ?>
    </div>
    <?php return ob_get_clean(); 
}

