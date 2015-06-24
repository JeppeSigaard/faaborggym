<a class="archive-entry yellow" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" href="<?php the_permalink(); ?>">
    
    <?php $tema_img = wp_get_attachment_image_src(get_post_meta(get_the_ID(),'slide_img',true),'news-preview-small'); ?>
    
    <?php if (smamo_image_filter(get_the_ID())): ?>
    
        <?php if (smamo_has_filtered_slide_img(get_the_ID(),'news-preview-small')):?>

        <div class="archive-img">
            <?php smamo_filtered_slide_img(get_the_ID(),'news-preview-small'); ?>
        </div>

        <?php else: ?>
    
        <div class="archive-img filter">
            <img src="<?php echo $tema_img[0] ?>"/>
        </div>
    
    <?php endif; else: ?>
    
    <div class="archive-img">
        <img src="<?php echo $tema_img[0] ?>"/>
    </div>
    
    <?php endif; ?>
    
    
    
    <div class="archive-preread">
        <div class="preread-inner">
            <h4><?php the_title();?></h4>

            <?php $slide_subheading = get_post_meta(get_the_ID(),'slide_heading',true) .' '. get_post_meta(get_the_ID(),'slide_subheading',true); if ($slide_subheading !== ''): ?>
            <h6><?php echo $slide_subheading; ?></h6>
            <?php endif; ?>

        </div>
    </div>
</a> 

<hr class="red"/>