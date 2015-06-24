<?php if (get_post_meta(get_the_ID(),'video_include',true) == 1) : ?>

<a class="archive-entry" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" href="<?php the_permalink(); ?>">
    
    <div class="archive-img">
        
        <?php $embed_code = wp_oembed_get( get_post_meta(get_the_ID(),'video_url',true));   ?>
        <?php if($embed_code){ echo $embed_code;} ?>
        
    </div>
    
    <div class="archive-preread">
        <h4><?php the_title();?></h4>
        <span><?php echo wp_trim_words(get_the_excerpt(), $num_words = 10) ?></span>
    </div>

</a>

<?php elseif(has_post_thumbnail(get_the_ID())) :?>

<a class="archive-entry" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" href="<?php the_permalink(); ?>">
    
    
    
    <?php if (smamo_image_filter(get_the_ID())): ?>
    
        <?php if (smamo_has_filtered_thumbnail(get_the_ID(),'news-preview-small')):?>

        <div class="archive-img">
            <?php smamo_filtered_thumbnail(get_the_ID(),'news-preview-small'); ?>
        </div>

        <?php else: ?>
    
        <div class="archive-img filter">
            <?php the_post_thumbnail('news-preview-small'); ?>
        </div>
    
    <?php endif; else: ?>
    
    <div class="archive-img">
        <?php the_post_thumbnail('news-preview-small'); ?>
    </div>
    
    <?php endif; ?>
    
    
    
    <div class="archive-preread">
        <h4><?php the_title();?></h4>
        <span><?php echo wp_trim_words(get_the_excerpt(), $num_words = 10) ?></span>
    </div>

</a> 

<?php else : ?>


<a class="archive-entry archive-entry-no-img" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" href="<?php the_permalink(); ?>">
    
    <div class="archive-preread">
        <h4><?php the_title();?></h4>
        <span><?php echo wp_trim_words(get_the_excerpt(), $num_words = 20) ?></span>
    </div>

</a> 

<?php endif; ?>


