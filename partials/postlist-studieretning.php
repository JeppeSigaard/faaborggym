<?php $post_order ++; 

$sidemenu .= '<li><a href="'.get_the_permalink().'">'.get_the_title().'</a></li>'; 

if(has_post_thumbnail(get_the_ID())) :?>

<div class="archive-entry archive-entry-fag<?echo $post_reading ?>" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" data-post-order="<?php echo $post_order ?>" data-href="<?php the_permalink(); ?>">
    
    
    
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
        <span></span>
    </div>
    
    <div class="archive-fag">
        <?php smamo_fag_oversigt(get_the_ID()); ?>
    </div>
     <div class="archive-content">
        <?php smamo_studieretning(get_the_ID());?>
    </div>

</div> 

<hr class="red"/>


<?php else : ?>


<div class="archive-entry archive-entry-no-img<?echo $post_reading ?>" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" data-post-order="<?php echo $post_order ?>" data-href="<?php the_permalink(); ?>">
    
    <div class="archive-preread">
        <h4><?php the_title();?></h4>
        <span></span>
    </div>
    
    <div class="archive-fag">
        <?php smamo_fag_oversigt(get_the_ID()); ?>
    </div>
     <div class="archive-content">
        <?php smamo_studieretning(get_the_ID());?>
    </div>

</div> 

<hr class="red"/>



<?php endif; ?>


