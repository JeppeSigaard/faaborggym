<?php $post_order ++; ?>
<?php $sidemenu .= '<li><a href="'.get_the_permalink().'">'.get_the_title().'</a></li>'; ?>


<?php if(has_post_thumbnail(get_the_ID())) :?>

<div class="archive-entry type-cal<?echo $post_reading ?>" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" data-post-order="<?php echo $post_order ?>" data-href="<?php the_permalink(); ?>">
    
    <div class="archive-cal-date">
        <span><?php echo date('d',strtotime(wp_strip_all_tags(get_post_meta(get_the_ID(),'cal_start',true)))); ?></span>
        <span><?php echo date('M Y',strtotime(wp_strip_all_tags(get_post_meta(get_the_ID(),'cal_start',true)))); ?></span>
    </div>
    
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
    </div>
    
    <div class="archive-content">
        <?php the_content(); ?>
    </div>

</div> 

<hr class="red"/>


<?php else : ?>


<div class="archive-entry type-cal archive-entry-no-img<?echo $post_reading ?>" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" data-post-order="<?php echo $post_order ?>" data-href="<?php the_permalink(); ?>">
    <div class="archive-cal-date">
        <span><?php echo date('d',strtotime(wp_strip_all_tags(get_post_meta(get_the_ID(),'cal_start',true)))); ?></span>
        <span><?php echo date('M Y',strtotime(wp_strip_all_tags(get_post_meta(get_the_ID(),'cal_start',true)))); ?></span>
    </div>
    
    <div class="archive-preread">
        <h4><?php the_title();?></h4>
    </div>
    
    <div class="archive-content">
        <?php the_content(); ?>
    </div>

</div> 

<hr class="red"/>



<?php endif; ?>


