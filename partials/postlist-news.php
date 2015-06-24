<?php $post_order ++; ?>
<?php $sidemenu .= '<li><a href="'.get_the_permalink().'">'.get_the_title().'</a></li>'; ?>


<?php if (get_post_meta(get_the_ID(),'video_include',true) == 1) : ?>

<div class="archive-entry<?echo $post_reading ?>" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" data-post-order="<?php echo $post_order ?>" data-href="<?php the_permalink(); ?>">
    
    <div class="archive-img archive-video">
        
        <?php $embed_code = wp_oembed_get( get_post_meta(get_the_ID(),'video_url',true));   ?>
        <?php if($embed_code){ echo $embed_code;} ?>
        
    </div>
    
    <div class="archive-preread">
        <h4><?php the_title();?></h4>
        <span><?php the_date('d.m.Y'); ?></span>
    </div>
    
    <div class="archive-content">
        <?php the_content(); ?>
    </div>

</div> 

<hr class="red"/>



<?php elseif(has_post_thumbnail(get_the_ID())) :?>

<div class="archive-entry<?echo $post_reading ?>" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" data-post-order="<?php echo $post_order ?>" data-href="<?php the_permalink(); ?>">
    
    
    
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
        <span><?php the_date('d.m.Y'); ?></span>
    </div>
    
    <div class="archive-content">
        <?php the_content(); ?>
    </div>

</div> 

<hr class="red"/>


<?php else : ?>


<div class="archive-entry archive-entry-no-img<?echo $post_reading ?>" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" data-post-order="<?php echo $post_order ?>" data-href="<?php the_permalink(); ?>">
    
    <div class="archive-preread">
        <h4><?php the_title();?></h4>
        <span><?php the_date('d.m.Y'); ?></span>
    </div>
    
    <div class="archive-content">
        <?php the_content(); ?>
    </div>

</div> 

<hr class="red"/>



<?php endif; ?>


